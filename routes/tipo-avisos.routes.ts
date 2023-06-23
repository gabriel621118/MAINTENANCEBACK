
import { Request, Response } from 'express';
import avisostipo from '../models/avisotipo.model';
import avisos from '../models/avisos.model';


import { router as app } from './router';
const { Op } = require("sequelize");

app.get('/obtener-tipoavisos', (_req: Request, res: Response) => {
    avisostipo.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/obtener-avisos', (_req: Request, res: Response) => {
    avisos.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


//Operaciones
app.post('/grabar-tipoavisos',(_req: Request, res: Response) => {
    const body=_req.body
    avisostipo.create({
          descripcion:body.descripcion,
          clave  : body.clave
          
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });

 app.post('/grabar-avisos',(_req: Request, res: Response) => {
    const body=_req.body
    avisos.create({
          descripcion:body.descripcion,
          clave  : body.clave
          
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 
 
 app.put('/update-tipoavisos/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      avisostipo.update({  descripcion:body.descripcion,clave:body.clave }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });

  
 app.put('/update-avisos/:id',(_req: Request, res: Response) => {
    const body=_req.body
    const id=_req.params.id
     avisos.update({  descripcion:body.descripcion,clave:body.clave }, {
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
  
  
  
 app.delete('/borra-avisostipo/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      avisostipo.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });

    
 app.delete('/borra-avisos/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      avisos.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones