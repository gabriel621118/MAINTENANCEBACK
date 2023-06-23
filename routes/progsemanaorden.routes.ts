
import { Request, Response } from 'express';

import { include } from 'underscore';
import Grupotrabajo from '../models/grupotrabajo.model';
import Ordentipo from '../models/ordentipo.model';
import Ordentrabajo from '../models/ordentrabajo.model';
import {differenceInWeeks, getDay, getYear} from 'date-fns'

import Progsemanaordenes, { Progsemanaorden } from '../models/progsemanorden.model';
import { router as app } from './router';
import sequelize from '../database/database';
const { Op } = require("sequelize");



app.get('/obtener_progsemanaordenes', (_req: Request, res: Response) => {
    Progsemanaorden.findAll({include:[{model:Ordentrabajo,include:[{model:Ordentipo}]},{model:Grupotrabajo}]
      
       
    })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});




app.get('/obtener_progsemanaordenesx', (_req: Request, res: Response) => {
    Progsemanaorden.findAll()
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/progsemanaordenesxdia/:iddia', (_req: Request, res: Response) => {
    const iddia=_req.params.iddia

    Progsemanaorden.findAll({ 
       
           where:{dia:iddia}
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
  });

 
  app.get('/progsemanaordenesxsemana/:idsemana/:idgrupo', (_req: Request, res: Response) => {
    const idsemana=_req.params.idsemana
    const idgrupo=_req.params.idgrupo
    
    Progsemanaorden.findAll({include:[{model:Ordentrabajo,include:[{model:Ordentipo}]},{model:Grupotrabajo}] ,
           where:{semana:idsemana,grupotrabajoId:idgrupo}
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
  });

  app.get('/progsemanaordenesolosemana/:idsemana', (_req: Request, res: Response) => {
    const idsemana=_req.params.idsemana
    const idgrupo=_req.params.idgrupo
    
    Progsemanaorden.findAll({include:[{model:Ordentrabajo,include:[{model:Ordentipo}]},{model:Grupotrabajo}] ,
           where:{semana:idsemana}
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
  });





//Operaciones
app.post('/grabar_progsemanaordenes',async(_req: Request, res: Response) => {
    const body=_req.body
    const t = await sequelize.transaction();
    console.log('estsos son los datos del body que llegan para el equipo',body)
    try {
    await  Progsemanaorden.create({

        hhlunes:body.hhlunes,   
        hhmartes :body.hhmartes,
        hhmiercoles :body.hhmiercoles,
        hhjueves:body.hhjueves,
        hhviernes:body.hhviernes,
        fecha:body.fecha,
        semana:body.semana,
        year:body.year,
        
        ordentrabajoId:body.ordentrabajoId,
       
        grupotrabajoId:body.grupotrabajoId,
      },{transaction:t})
            
  
    await  Ordentrabajo.update({ordenstatusId:3},
    {where:{id:body.ordentrabajoId},transaction:t})

    await t.commit()
    return res.json({ok: true, data:'ok'}); 

    } catch (error) {
      await t.rollback()
      return res.json({ok:false,data:'not ok'})
    }
  
      

      
 });
 
 
 app.put('/update-progsemanaordenes/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
     console.log('ESTE ES EL BODY PARA ACUTUALIZAR PROGRAMA SEMANAL',body)
     const year=getYear(new Date(body.calendario))
     const misemana= differenceInWeeks(new Date(body.calendario), new Date(year, 0, 1))
     Progsemanaorden.update({//encabezado:body.encabezado,
      hhlunes:body.lunes,   
      hhmartes :body.martes,
      hhmiercoles :body.miercoles,
      hhjueves:body.jueves,
      hhviernes:body.viernes,
      fecha:body.calendario,
      semana:misemana
                     
                      }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });


  
  
 app.delete('/borra-progsemanaordenes/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
     Progsemanaorden.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones