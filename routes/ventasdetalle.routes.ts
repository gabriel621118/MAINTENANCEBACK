
import { Request, Response } from 'express';
import Ventasdetalle from '../models/ventasdetalle.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/ventasdetalle', (_req: Request, res: Response) => {
    Ventasdetalle.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


//Operaciones
app.post('/ventasdetalle',(_req: Request, res: Response) => {
    const body=_req.body
    Ventasdetalle.create({
          descripcion:body.descripcion
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/ventasdetalle/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Ventasdetalle.update({  descripcion:body.descripcion }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/ventasdetalle/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Ventasdetalle.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones