
import { Request, Response } from 'express';
import Materiales from '../models/materiales.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/materiales', (_req: Request, res: Response) => {
    Materiales.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});



//Operaciones
app.post('/materiales',(_req: Request, res: Response) => {
    const body=_req.body
    Materiales.create({
        material_desripcion:body.descripcion,
        material_precioini:body.precio,
        material_precioactual:body.precioactual
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/materiales/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Materiales.update({material_desripcion:body.descripcion, material_precioini:body.precioini,
                          material_precioactual:body.precioact  }, {
         where: {
           id: id
         }           
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/materiales/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Materiales.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones