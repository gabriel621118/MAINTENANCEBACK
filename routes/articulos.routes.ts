
import { Request, Response } from 'express';
import Articulos from '../models/articulos.model';
import fs from 'fs';
import { router as app } from './router';
import path from 'path';
const { Op } = require("sequelize");


app.get('/articulos', (_req: Request, res: Response) => {
    Articulos.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/mostrarportada', (_req: Request, res: Response) => {
  const id=_req.params.id
  const noImg = path.join(__dirname,`../routes/imagenes/portadaintegridad2.jpg`);
  const pathImg = path.join(__dirname,`../routes/imagenes/portadaintegridad2.jpg}`);
  //console.log('este el es id que manda para abrir el modal',id)
  //imagen por defecto
  if (fs.existsSync(pathImg)){
    res.sendFile(pathImg)
  }else{
    res.sendFile(noImg)
  }
  
});

//Operaciones
app.post('/articulos',(_req: Request, res: Response) => {
    const body=_req.body
    Articulos.create({
          clave:body.clave,
          descripcion:body.descripcion,
          categoriaId:body.selectcatego,
          lineaId:body.selectlin
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/articulos/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Articulos.update({  descripcion:body.descripcion2 }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/articulos/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Articulos.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones