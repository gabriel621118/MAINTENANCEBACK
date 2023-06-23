
import { Request, Response } from 'express';
import Avisos from '../models/avisos.model';
import Ordendetalle from '../models/ordendetalle.model';
import Progsemanal from '../models/progsemanal.model';


import { router as app } from './router';

const { Op } = require("sequelize");


app.get('/obtener_progsemanal', (_req: Request, res: Response) => {
    Progsemanal.findAll({
      
       
    })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});




app.get('/obtener_progsemanales', (_req: Request, res: Response) => {
  Progsemanal.findAll({ include: [

    {model: Ordendetalle,
    },

   

  ] })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/progsemanalxdia/:iddia', (_req: Request, res: Response) => {
    const iddia=_req.params.iddia

    Progsemanal.findAll({ include: [
    
        {model: Ordendetalle,
        },
    
    
      ],
       
           where:{dia:iddia}
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
  });


  app.get('/progsemanalxsemana/:idsemana', (_req: Request, res: Response) => {
    const idsemana=_req.params.idsemana

    Progsemanal.findAll({ include: [


     
    
        {model: Ordendetalle, 
        },
    
    
      ],
       
           where:{grupotrabajoId:idsemana}
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
  });





//Operaciones
app.post('/grabar_progsemanal',(_req: Request, res: Response) => {
    const body=_req.body
    console.log('estsos son los datos del body que llegan para el equipo',body)
    Progsemanal.create({
       
        fecha:Date(),
        
       

          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/update-progsemanal/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Progsemanal.update({//encabezado:body.encabezado,
        fecha:Date(),
                     
                      }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });


  
  
 app.delete('/borra-progsemanal/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Progsemanal.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones