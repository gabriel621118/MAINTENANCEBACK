
import { Request, Response } from 'express';
import Divsiones, { Divisiones } from '../models/divisiones.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/obtener_divisiones', (_req: Request, res: Response) => {
    Divsiones.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

//Operaciones
app.post('/agregar_division',(_req: Request, res: Response) => {
    const body=_req.body
    Divisiones.create({
        descripcion:body.descripcion
       
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
          
 app.put('/update_divisiones/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
     console.log('el id para modificar divisiones es ',id)
      Divisiones.update({descripcion:body.descripcion  }, {
         where: {
           id: id
         }           
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/borrar_divisiones/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Divisiones.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el ex