
import { Request, Response } from 'express';
import Ventas from '../models/ventas.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/ventas', (_req: Request, res: Response) => {
    Ventas.findAll({
     
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

//Operaciones
app.post('/ventas',(_req: Request, res: Response) => {
    const body=_req.body
    Ventas.create({
          descripcion:body.descripcion
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/ventas/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Ventas.update({  descripcion:body.descripcion }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/ventas/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Ventas.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones