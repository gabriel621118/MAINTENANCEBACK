
import { Request, Response } from 'express';
import Categorias from '../models/categorias.model';
import Equipos from '../models/equipos.model';
import Lineas from '../models/lineas.model';
import Divisiones from '../models/divisiones.model';

import { router as app } from './router';
import Ubicaciones from '../models/Ubicaciones.model';
const { Op } = require("sequelize");


app.get('/equipos', (_req: Request, res: Response) => {
    Equipos.findAll({include:[{model:Lineas},{model:Categorias},{model:Divisiones},{model:Ubicaciones}] })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/obtener_todoslosequipos', (_req: Request, res: Response) => {
 
  Equipos.findAll({
    include: [ 
      {
      model:Ubicaciones},{model:Categorias},{model:Lineas},{model:Divisiones}
   ],
   order:['createdAt'],
   
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});



app.get('/equiposxubicacion/:idubi', (_req: Request, res: Response) => {
  const idubi=_req.params.idubi
  Equipos.findAll({
      include:[
          {model:Ubicaciones},   
          {model:Categorias}, 
          {model:Lineas},
          {model:Divisiones},
      

        ],

         where:{ubicacioneId:idubi}
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/equiposxcategoria/:idcatego', (_req: Request, res: Response) => {
  const idcatego=_req.params.idcatego
  Equipos.findAll({
      include:[
          {model:Ubicaciones},   
          {model:Categorias}, 
          {model:Lineas},
          {model:Divisiones},
      

        ],

         where:{categoriaId:idcatego}
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/equiposxlinea/:idlinea', (_req: Request, res: Response) => {
  const idlinea=_req.params.idlinea
  Equipos.findAll({
      include:[
          {model:Ubicaciones},   
          {model:Categorias}, 
          {model:Lineas},
          {model:Divisiones},
      

        ],

         where:{lineaId:idlinea}
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});

app.get('/equiposxdivision/:iddivi', (_req: Request, res: Response) => {
  const iddivi=_req.params.iddivi
  Equipos.findAll({
      include:[
          {model:Ubicaciones},   
          {model:Categorias}, 
          {model:Lineas},
          {model:Divisiones},
      

        ],

         where:{divisioneId:iddivi}
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});




app.get('/equipos_detalle', (_req: Request, res: Response) => {
  Equipos.findAll({ include: [{
    model: Lineas,
    as: 'Lineas'
  }] })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});













//Operaciones
app.post('/equipos',(_req: Request, res: Response) => {
    const body=_req.body
    console.log('estsos son los datos del body que llegan para el equipo',body)
    Equipos.create({
         
          eq_descripcion:body.descripcion,
          eq_tag:body.tag,
          eq_criticidad:body.criticidad,        
          categoriaId:body.selectcatego,
          divisioneId:body.selectdivision,
          departamentoId:body.selectdepa,
          ubicacioneId:body.selectubi,
          lineaId:body.selectlinea
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/equipos/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Equipos.update({eq_descripcion:body.descripcion,
                      eq_tag:body.tag,
                      eq_criticidad:body.criticidad,        
                      categoriaId:body.selectcatego,
                      divisioneId:body.selectdivision,
                      departamentoId:body.selectdepa,
                      ubicacioneId:body.selectubi,
                      lineaId:body.selectlinea
                     
                      }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/equipos/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Equipos.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones