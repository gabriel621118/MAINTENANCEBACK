
import { Request, Response } from 'express';
import Categorias from '../models/categorias.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/categorias', (_req: Request, res: Response) => {
    Categorias.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

//Operaciones
app.post('/categorias',(_req: Request, res: Response) => {
    const body=_req.body
    Categorias.create({
          descripcion:body.descripcion
          
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/categorias/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Categorias.update({  descripcion:body.descripcion }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/categorias/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Categorias.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones