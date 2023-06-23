
import { Request, Response } from 'express';
import Bomdetalle from '../models/bomdetalle.model';
import{Materiales} from '../models/materiales.model'
import{Equipos} from '../models/equipos.model'

import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/bomdetalle', (_req: Request, res: Response) => {
    Bomdetalle.findAll({
        
        include:[
            {
                model:Materiales
            },
            {
                model:Equipos
            }
        ],
       
    })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});




app.delete('/borrabom_posicion/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
     console.log('este es id para borrar',id)
      Bomdetalle.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  






export default app; // el export debe ir despues de las funciones