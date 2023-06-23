
import { Request, Response } from 'express';
import Cliente from '../models/cliente.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/clientes', (_req: Request, res: Response) => {
    Cliente.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/clientesbusca/:id', (_req: Request, res: Response) => {
    const id=_req.params.id
    const body=_req.body
    
    Cliente.findAll({
       
        where: {            
               id: id         
           
          }          
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});






//Operaciones
app.post('/clientes',(_req: Request, res: Response) => {
    const body=_req.body
    Cliente.create({
        cliente_nombre:body.nombre,
        cliente_rfc      :body.rfc,
        phone            :body.telnegocio,
        cliente_domicilio:body.domicilio,
        cliente_colonia  :body.colonia, 
        cliente_zip      :body.zp,
        cliente_ciudad   :body.ciudad,
        cliente_estado   :body.estado,
        cliente_pais     :body.pais,
        cliente_telefono :body.movil, 
        cliente_email    :body.email, 
        tipoclienteId :body.selecttipocliente


       /*
        cliente_nombre:string ;
        cliente_rfc:string ;
        phone:string; 
        cliente_domicilio:string; 
        cliente_colonia:string; 
        cliente_zip:number; 
        cliente_ciudad:string; 
        cliente_estado:string; 
        cliente_pais:string; 
        cliente_telefono:string; 
        cliente_email:string; 
        createdAt: Date ;
        updatedAt:Date; 
        tipoclienteId :number;
         */ 
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/clientes/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Cliente.update({  descripcion:body.descripcion2 }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/clientes/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Cliente.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });

export default app; // el export debe ir despues de las funciones