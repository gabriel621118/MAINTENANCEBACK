
import { Request, Response } from 'express';
import Evidencias from '../models/evidencias.model';




import { router as app } from './router';
import sequelize from '../database/database';

import { UploadedFile } from 'express-fileupload';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const { Op } = require("sequelize");


app.get('/obtener_evidencia', (_req: Request, res: Response) => {
    Evidencias.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


 
app.get('/muestra_evidencia/:id',(_req: Request, res: Response) => {
    const body=_req.body
    const id=_req.params.id

    console.log('este el es id que manda para abrir el modal',id)
     Evidencias.findOne({  
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });

app.get('/evidencias/tomaimagen/:id', (_req: Request, res: Response) => {
    const id=_req.params.id
    const noImg = path.join(__dirname,`../routes/imagenes/no-image.png`);
    const pathImg = path.join(__dirname,`../routes/imagenes/${id}`);
    console.log('este el es id que manda para abrir el modal',id)
    //imagen por defecto
    if (fs.existsSync(pathImg)){
      res.sendFile(pathImg)
    }else{
      res.sendFile(noImg)
    }
    
  });


  app.get('/evidencias/tomaRCA/:id', (_req: Request, res: Response) => {
    const id=_req.params.id
    const noImg = path.join(__dirname,`../routes/RCAS/NORCA.pdf`);
    const pathImg = path.join(__dirname,`../routes/RCAS/${id}`);
    console.log('este el es id que manda para abrir el modal',id)
    //imagen por defecto
    if (fs.existsSync(pathImg)){
      res.sendFile(pathImg)
    }else{
      res.sendFile(noImg)
    }
    
  });



//Operaciones
app.post('/crear_evidencia',(_req: Request, res: Response) => {
    const body=_req.body
    Evidencias.create({
          item_orden:body.item_orden,
          nombre:body.nombre,
          ruta:body.ruta,
         
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/update_evidencia/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id

     console.log('este es el body para el update de evidencia',body)
      Evidencias.update({  nombre:body.nombre ,ruta:body.ruta,}, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/borra_evidencia/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Evidencias.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones