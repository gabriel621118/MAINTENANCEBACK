
import { Request, Response } from 'express';
import TipoCliente from '../models/tipocliente.model';

import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/tipocliente', (_req: Request, res: Response) => {
    TipoCliente.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


//Operaciones
app.post('/tipocliente',(_req: Request, res: Response) => {
    const body=_req.body
    console.log(body.descuento)
    TipoCliente.create({
      tipoclie_descripcion:body.descripcion,        
        tipoclie_porcentaje:body.descuento,
    
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/tipocliente/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      TipoCliente.update({  descripcion:body.descripcion2 }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/tipocliente/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      TipoCliente.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });

export default app; // el export debe ir despues de las funciones