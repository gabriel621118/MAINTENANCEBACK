
import { Request, Response } from 'express';
import Ordendetalle, { Departamento } from '../models/departamento.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/departamento', (_req: Request, res: Response) => {
    Departamento.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

//Operaciones
app.post('/departamento',(_req: Request, res: Response) => {
    const body=_req.body

   
    Departamento.create({
          descripcion:body.descripcion,
          ubicacioneId:body.selectubi
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/departamento/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Departamento.update({  descripcion:body.descripcion,ubicacioneId:body.selectubi }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/departamento/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Departamento.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });

export default app; // el export debe ir despues de las funciones