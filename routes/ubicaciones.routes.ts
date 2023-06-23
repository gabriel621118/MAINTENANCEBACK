
import { Request, Response } from 'express';
import Ubicaciones from '../models/ubicaciones.model';


import { router as app } from './router';
const { Op } = require("sequelize");

app.get('/ubicaciones', (_req: Request, res: Response) => {
    Ubicaciones.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

//Operaciones
app.post('/ubicaciones',(_req: Request, res: Response) => {
    const body=_req.body
    Ubicaciones.create({
          descripcion:body.descripcion
          
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/ubicaciones/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Ubicaciones.update({  descripcion:body.descripcion }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
  
 app.delete('/ubicaciones/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Ubicaciones.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones