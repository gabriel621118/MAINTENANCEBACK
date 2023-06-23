
import { Request, Response } from 'express';
import Avisos from '../models/avisos.model';
import avisostatus from '../models/avisostatus.model';


import { router as app } from './router';
const { Op } = require("sequelize");
          
app.get('/obtener-statusavisos', (_req: Request, res: Response) => {
    avisostatus.findAll({
      
            where: {
               // id: [1,3,4] // Same as using `id: { [Op.in]: [1,2,3] }`
               // clave: { [Op.in]: ['ABIE','PLAN'] }
          }
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


         
app.get('/obtener-statusavisosactivosgk', (_req: Request, res: Response) => {
  avisostatus.findAll({
    
          where: {
             // id: [1,3,4] // Same as using `id: { [Op.in]: [1,2,3] }`
              id: { [Op.in]: ['11','12'] }
        }
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});



  
  

//Operaciones
app.post('/grabar-statusavisos',(_req: Request, res: Response) => {
    const body=_req.body
    avisostatus.create({
          descripcion:body.descripcion,
          clave  : body.clave
          
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/update-statusavisos/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
     avisostatus.update({  descripcion:body.descripcion,clave:body.clave }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
  
 app.delete('/borra-avisostatus/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
     avisostatus.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones