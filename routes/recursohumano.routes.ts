
import { Request, Response } from 'express';
import Recursohumano from '../models/recursohumano.model';

import { router as app } from './router';
const { Op } = require("sequelize");

// Consultas
app.get('/obtener-personal', (_req: Request, res: Response) => {
    Recursohumano.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));

        
});
//Operaciones
app.post('/alta-personal',(_req: Request, res: Response) => {
   const body=_req.body
   Recursohumano.create({
         descripcion:body.descripcion,
         categoriaId:body.selectcategoria
   })
      .then ((data)=>res.json({ ok:true,data}))
      .catch((error)=>res.json({ok:false,error}))
});


app.put('/modifica-personal/:id',(_req: Request, res: Response) => {
    const body=_req.body
    const id=_req.params.id
     Recursohumano.update({  descripcion:body.descripcion,categoriaId:body.selectcategoria }, {
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
app.delete('/borra-personal/:id',(_req: Request, res: Response) => {
   // const body=_req.body
    const id=_req.params.id
     Recursohumano.destroy( {
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 

export default app; // el export debe ir despues de las funciones