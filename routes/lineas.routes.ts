
import { Request, Response } from 'express';
import Lineas from '../models/lineas.model';

import { router as app } from './router';
const { Op } = require("sequelize");

// Consultas
app.get('/lineas', (_req: Request, res: Response) => {
    Lineas.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));

        
});
//Operaciones
app.post('/lineas',(_req: Request, res: Response) => {
   const body=_req.body
   Lineas.create({
         descripcion:body.descripcion,
         categoriaId:body.selectcategoria
   })
      .then ((data)=>res.json({ ok:true,data}))
      .catch((error)=>res.json({ok:false,error}))
});


app.put('/lineas/:id',(_req: Request, res: Response) => {
    const body=_req.body
    const id=_req.params.id
     Lineas.update({  descripcion:body.descripcion,categoriaId:body.selectcategoria }, {
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
app.delete('/lineas/:id',(_req: Request, res: Response) => {
   // const body=_req.body
    const id=_req.params.id
     Lineas.destroy( {
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 

export default app; // el export debe ir despues de las funciones