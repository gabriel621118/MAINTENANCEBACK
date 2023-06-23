import { Request, Response } from 'express';
import  { Planes } from '../models/planes.model';
import  { Equipos } from '../models/equipos.model';
import  { Plandetalle } from '../models/plandetalle.model';
import { router as app } from './router';
const { Op } = require("sequelize");



import { id } from 'date-fns/locale';

import sequelize from '../database/database';


import { include } from 'underscore';




app.get('/planes', (_req: Request, res: Response) => {
    Planes.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/plan', (_req: Request, res: Response) => {
  Planes.findAll({
    include: [ 
                {
                model:Equipos
               },
               {
                model:Plandetalle
               }
             ],
             where:{plan_lanzado:false}
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});

app.get('/plan/id/:id', (_req: Request, res: Response) => {
const id=_req.params.id
Planes.findOne({
  include: [ 
              {
              model:Equipos
             }
           ],where:{id}
 })
    .then((data) => res.json({ ok: true, data }))
    .catch((err) => res.status(400).json({ ok: false, err }));
});

app.post('/planes/generar', async (_req: Request, res: Response) => {
const body=_req.body
Planes.create({
 descripcion:body.descripcion,                  
 equipoId:body.equipoId,
 plan_lanzado:false

 
}) 
.then ((data)=>res.json({ ok:true,data}))
.catch((error)=>res.json({ok:false,error}))
});





export default app; // el export debe ir despues de las funciones