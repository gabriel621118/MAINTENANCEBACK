import { Request, Response } from 'express';
import  { Plandetalle } from '../models/plandetalle.model';



import { router as app } from './router';
const { Op } = require("sequelize");




import Materiales from '../models/materiales.model';
import Grupotrabajo from '../models/grupotrabajo.model';






app.get('/plandetalle/id/:id', (_req: Request, res: Response) => {
    const body=_req.body
  const id=_req.params.id
    Plandetalle.findAll({  
        where: {            
            PlaneId:id  
       },           
        include:[
            {
                model:Materiales
            },
            {
                model:Grupotrabajo
            }
        ]
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});



 
app.put('/updated-actividadplan/:id/:planeId',(_req: Request, res: Response) => {
    const body=_req.body
    const id=_req.params.id
    const idplan=_req.params.planeId

    console.log('body de actividad del plandetalle',body)
     Plandetalle.update({
                     plandeta_hhombre:body.hhombre,
                     plandeta_matcantidad:body.cantidad,        
                     materialeId:body.selectmaterial,
                     plan_numpersonas:body.numpersonas,
                    
                    
                    
                     }, {
        where: {
         

          [Op.and]: [
            { id:body.id},
            { planeId:body.idplan }
          ]

        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 



app.post('/plan-detalle/agregar', async (_req: Request, res: Response) => {
    
    const body=_req.body
    Plandetalle.create({
        plandeta_actividad:    body.plan_actividad,
        plandeta_hhombre:      body.plan_hhombre,
        plandeta_matcantidad: body.material_cantidad,
        plan_numpersonas:      body.numpersonas,
        planeId:            body.planId,
        materialeId:       body.materialId,
        grupotrabajoId:    body.departamentoId,
    }) 
    .then ((data)=>res.json({ ok:true,data}))
    .catch((error)=>res.json({ok:false,error}))
  });

export default app; // el export debe ir despues de las funciones