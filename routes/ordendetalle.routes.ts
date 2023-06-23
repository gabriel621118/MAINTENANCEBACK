
import { Request, Response } from 'express';
import Ordendetalle from '../models/ordendetalle.model';
import { router as app } from './router';
const { Op } = require("sequelize");

import Materiales from '../models/materiales.model';
import Grupotrabajo from '../models/grupotrabajo.model';
import Ordentrabajo from '../models/ordentrabajo.model';
import sequelize from '../database/database';
import {differenceInDays, getDay} from 'date-fns'

app.get('/ordentrabajo-todas', (_req: Request, res: Response) => {
    Ordendetalle.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});




app.get('/obtener-ordenesbacklog', (_req: Request, res: Response) => {
  const result = differenceInDays(new Date(), new Date(2022, 0, 1))
  Ordendetalle.findAll({
    include: [ 
      {
      model:Grupotrabajo
     },
     {
      model:Ordentrabajo
     }
   ],
   order: [
    ['grupotrabajoId', 'ASC']
],
   where:{ordendeta_terminada:0}
   
         
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});








app.get('/ordendetalle/id/:id', (_req: Request, res: Response) => {
    const body=_req.body
  const id=_req.params.id
    Ordendetalle.findAll({  
        where: {            
            ordentrabajoId:id  
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

 
app.put('/updated-actividaorden/:id/:ordentrabajoId',(_req: Request, res: Response) => {
    const body=_req.body
    const id=_req.params.id
    const idplan=_req.params.planeId

    console.log('body de actividad del ordendetalle',body)
     Ordendetalle.update({
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
 



app.post('/orden-detalle/agregar', async (_req: Request, res: Response) => {
    
    const body=_req.body
    const t = await sequelize.transaction();
    console.log('body para agregar actividades a la orden',body)
    try {
      await Ordendetalle.create({
            plandeta_actividad:    body.plan_actividad,
            plandeta_hhombre:      body.plan_hhombre,
            plandeta_matcantidad:  body.material_cantidad,
            plandeta_numpersonas:  body.numpersonas,
            ordendeta_terminada:   false,       
            materialeId:           body.materialId,
            grupotrabajoId:        body.departamentoId,
            ordentrabajoId:        body.ordentrabajoId
        },{transaction:t})      

    
     
         
         await t.commit();
         return res.json({ok: true, data: 'orden creada'});
      

    } catch (error) {
        await t.rollback();
         return res.status(400).json({ok: false, err: error}); 
    }
   


      
  });











 
   
 app.delete('/borraordendetalle/:id', async(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
   
     const t = await sequelize.transaction();
     console.log('>>>>>>>>>>>>>>>>>>>>>>>>',id)
     try {
        
   
        await Ordendetalle.destroy( {
            where: {
              id: id
            },transaction:t})
     
       await t.commit();
     return res.json({ok: true, data: 'actividad borrada '});
    }

    
     catch (error) {
        console.log('error de grabar',error)
        
        return res.status(400).json({ok: false, err: error});
        
    }
     
       
  });










  
app.get('/updated_ordenmodif/:id',async(_req: Request, res: Response) => {
 //const body=_req.body
  const id=_req.params.id
  const t = await sequelize.transaction();
  const idplan=_req.params.planeId
  console.log('body de actividad del ordendeatalle',id)

/*-----------------------------------------------------------------------------------------------------*/

            //--------------------------------costea horas hombre------------------------------------------------------------------
            let hhelec=0
            let costohhelec=0
            let hhmec=0
            let costohhmec=0
            let hhinst=0
            let costohhinst=0
            let costototalhhombre=0
            let costotalmaterial=0
            let otro=0
            let migrupotrabajo=0
  
            const  detalle= await  Ordendetalle.findAll({
              include:[{model:Grupotrabajo},{model:Materiales}],   
              where: {ordentrabajoId : id}            
            });
  
            for ( const iterator of detalle) {
              switch (iterator.getDataValue('grupotrabajoId')  ){
                case 1:
                  migrupotrabajo=iterator.getDataValue('grupotrabajoId')                                                                      
                 costohhmec+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plandeta_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
          break;
                 case 2:
                  migrupotrabajo=iterator.getDataValue('grupotrabajoId')
                 costohhelec+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plandeta_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
          break;
                 case 3:
                  migrupotrabajo=iterator.getDataValue('grupotrabajoId')
                costohhinst+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plandeta_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
      break;
      
      default:
       otro=0;
      }
  
      
  costotalmaterial+=iterator.getDataValue('plandeta_matcantidad')*iterator.getDataValue('materiale').getDataValue('material_precioactual');
  costototalhhombre=costohhelec+costohhinst+costohhmec   
  
            }
  console.log('si paso el for',costototalhhombre)
 //--------------------------------costea horas hombre------------------------------------------------------------------



   Ordentrabajo.update({
    orden_costoinicial:costototalhhombre+costotalmaterial,
    orden_costofinal  :costototalhhombre+costotalmaterial,    
    ordenstatusId     :2,
    
                  
                  
                  
                   }, 
     
        { where: {id :id}}

        

      
  )
     .then ((data)=>res.json({ ok:true,data}))
     .catch((error)=>res.json({ok:false,error}))
});



export default app; // el export debe ir despues de las funciones