
import { Request, Response } from 'express';
import Grupotrabajo from '../models/grupotrabajo.model';
import { router as app } from './router';



const { Op } = require("sequelize");

// Consultas
app.get('/grupostrabajo', (_req: Request, res: Response) => {
    Grupotrabajo.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));

        
});
//Operaciones
app.post('/grupostrabajo',(_req: Request, res: Response) => {
   const body=_req.body
   Grupotrabajo.create({
         descripcion:body.descripcion,
         numpersonas:body.numpersonas,
         preciohhombre:body.preciohhombre
   })
      .then ((data)=>res.json({ ok:true,data}))
      .catch((error)=>res.json({ok:false,error}))
});


app.put('/grupostrabajo/:id',(_req: Request, res: Response) => {
    const body=_req.body
    const id=_req.params.id
     Grupotrabajo.update({  descripcion:body.descripcion,numpersonas:body.numpersonas,preciohhombre:body.preciohhombre }, {
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
app.delete('/grupostrabajo/:id',(_req: Request, res: Response) => {
   // const body=_req.body
    const id=_req.params.id
     Grupotrabajo.destroy( {
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 

export default app; // el export debe ir despues de las funciones