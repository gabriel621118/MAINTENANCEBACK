
import { Request, Response } from 'express';
import Manuales from '../models/manuales.model';

import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/obtener_manual', (_req: Request, res: Response) => {
    Manuales.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

//Operaciones
app.post('/crear_manual',(_req: Request, res: Response) => {
    const body=_req.body
    Manuales.create({
          item_equipo:body.item_equipo,
          nombre:body.nombre,
          ruta:body.ruta,
         
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/update_manual/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Manuales.update({  nombre:body.nombre,ruta:body.ruta }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/borra_manual/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Manuales.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones