import { Request, Response } from 'express';
import  { Programas } from '../models/programas.model';
import{Planes} from '../models/planes.model'
import{Lineas} from '../models/lineas.model'
import{Grupotrabajo} from '../models/grupotrabajo.model'

import sequelize from '../database/database';
import { addMonths, getMonth, getYear }from 'date-fns'


import { isThisMonth } from 'date-fns';
import { router as app } from './router';
import Equipos from '../models/equipos.model';
import monthsToQuarters from 'date-fns/monthsToQuarters';
const { Op } = require("sequelize");


app.get('/programas', (_req: Request, res: Response) => {
  
    Programas.findAll({
        include:[
            {model:Planes},   
            {model:Lineas}, 
            {model:Grupotrabajo}, 

          ],
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/programasxlinea/:idlinea', async (_req: Request, res: Response) => {
  const idlinea=_req.params.idlinea
  const data: { programa:Programas, color:string }[] = [];
  const myDate = new Date(1996, 5, 27)
  const mesreferen=getMonth(new Date())
  const anioref=getYear(new Date() )
  const fecharef=addMonths(new Date(anioref,mesreferen,1),1)
  console.log('el mes referente es',mesreferen)
  console.log('el mes parametro es',idlinea)
  console.log(fecharef) // Date(1996, 05, 27)

  const detalle = await Programas.findAll({
      include:[
          {model:Planes},   
          {model:Lineas}, 
          {model:Grupotrabajo}, 

        ],

        where:{lineaId:idlinea}
   })

   detalle.forEach( d => {
    const today = new Date()
    const fecha =  d.getDataValue("prog_fecha");
    const frecuencia =  d.getDataValue("prog_frec");
    const horizonte =  d.getDataValue("prog_horizonte");
    const fechaAmarillo = addMonths(fecha,(frecuencia-horizonte));
    const fechaRojo = addMonths(fecha,(frecuencia));
    const periodos = addMonths(today,(1));
    console.log('la fecha de periodos es',periodos)
    console.log('la fecha de amarillos es',fechaAmarillo)
   
    if (today > fechaRojo ){
      data.push({programa:d,color:"rojo"})

    }
    if(today < fechaAmarillo){
      data.push({programa:d,color:"verde"})
    }
    if(today >= fechaAmarillo  && today < periodos  ){
     data.push({programa:d,color:"amarillo"})
    }
   } )
    res.json({ ok: true, data })
     
});






app.get('/programasxgrupotrabaajo/:idgrupo', async (_req: Request, res: Response) => {
  const idgrupo=_req.params.idgrupo
  const data: { programa:Programas, color:string }[] = [];
  const myDate = new Date(1996, 5, 27)
  const mesreferen=getMonth(new Date())
  const anioref=getYear(new Date() )
  const fecharef=addMonths(new Date(anioref,mesreferen,1),1)
  console.log('el mes referente es',mesreferen)
  console.log('el grupo parametro es',idgrupo)
  console.log(fecharef) // Date(1996, 05, 27)

  const detalle = await Programas.findAll({
      include:[
          {model:Planes},   
          {model:Lineas}, 
          {model:Grupotrabajo}, 

        ],

        where:{grupotrabajoId:idgrupo}
   })

   detalle.forEach( d => {
    const today = new Date()
    const fecha =  d.getDataValue("prog_fecha");
    const frecuencia =  d.getDataValue("prog_frec");
    const horizonte =  d.getDataValue("prog_horizonte");
    const fechaAmarillo = addMonths(fecha,(frecuencia-horizonte));
    const fechaRojo = addMonths(fecha,(frecuencia));
    const periodos = addMonths(today,(1));
    console.log('la fecha de periodos es',periodos)
    console.log('la fecha de amarillos es',fechaAmarillo)
   
    if (today > fechaRojo ){
      data.push({programa:d,color:"rojo"})

    }
    if(today < fechaAmarillo){
      data.push({programa:d,color:"verde"})
    }
    if(today >= fechaAmarillo  && today < periodos  ){
     data.push({programa:d,color:"amarillo"})
    }
   } )
    res.json({ ok: true, data })
     
});




app.get('/programasxmesesadicionales/:idmes', async (_req: Request, res: Response) => {
  const idmes=_req.params.idmes
  const data: { programa:Programas, color:string }[] = [];
  const myDate = new Date(1996, 5, 27)
  const mesreferen=getMonth(new Date())
  const anioref=getYear(new Date() )
 //const fecharef=addMonths(new Date(anioref,mesreferen,1),1)
  const fecharef=addMonths(new Date(anioref,mesreferen,1),-12)
  console.log('el mes referente es',mesreferen)
  console.log('el mes parametro es',idmes)
  console.log(fecharef) // Date(1996, 05, 27)
  

  const mydate =new Date()
   //mydate.setMonth(mydate.getMonth()+(frecu-horizonte));
  
   const detalle = await Programas.findAll({
  
      include:[
          {model:Planes},   
          {model:Lineas}, 
          {model:Grupotrabajo}, 

        ],
         
       // where:{prog_fecha:{ [Op.between]:[new Date(new Date(2022,11,30) as any ),new Date(new Date() as any)]}}
      // where:{prog_fecha:{ [Op.between]:[new Date(2022,11,1) as any),new Date(new Date(2022,11,30) as any )]}}
     // where:{prog_fecha:{[Op.between]:[new Date(), new Date(fecharef)]}}
     // [Op.gte]: 6, 
   
                                                 // >= 6
     //addMonths(1, myDate)
   })
   detalle.forEach( d => {
    const today = new Date()
    const fechaArranque=addMonths(new Date(),idmes)
    const fecha =  d.getDataValue("prog_fecha");
   
    const frecuencia =  d.getDataValue("prog_frec");
    const fechamasperiodos =  addMonths(fecha,idmes+frecuencia);
    const horizonte =  d.getDataValue("prog_horizonte");
    const fechaAmarillo = addMonths(fecha,(frecuencia-horizonte));
    
    const fechaRojo = addMonths(fecha,(frecuencia));
    const periodos = addMonths(today,(1));
    console.log('la fecha de periodos es',periodos)
    console.log('la fecha de amarillos es',fechaAmarillo)
    /*
    if (today > fechaRojo ){
      data.push({programa:d,color:"rojo"})

    }*/

    //if (today <= fechamasperiodos && today>fechaAmarillo){
      if ( fechaArranque>=fechaRojo ) {
         if(today < fechaAmarillo){
          data.push({programa:d,color:"verde"})
         }
         if(today >= fechaAmarillo  && today < periodos  ){
          data.push({programa:d,color:"amarillo"})
         }
    }
   } )
   res.json({ ok: true, data })
});



app.get('/programasxdescripcion/:descrip', (_req: Request, res: Response) => {
  const descrip=_req.params.descrip
  Programas.findAll({
      include:[
        {model:Planes,where:{ descripcion:{[Op.like]:'%' + descrip +'%' } } } , 
          {model:Lineas}, 
          {model:Grupotrabajo},
          
         
         
        ],

       
   })
   
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));

      
});


app.get('/programasxdescripcion', (_req: Request, res: Response) => {
 let mivariable='BBA'
  Programas.findAll({
      include:[      
      //{model:Planes,where:{ descripcion:{[Op.like]:'%BOMBA%'} } } ,
      {model:Planes,where:{ descripcion:{[Op.like]:'%' + mivariable +'%' } } } ,
          {model:Lineas}, 
          {model:Grupotrabajo},
        
        
         
        ],


       

       
   })
   
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));

      console.log('el registro',mivariable)
});





app.get('/programasxubi/:idubi',async (_req: Request, res: Response) => {
  const idubi=_req.params.idubi
  const data: { programa:Programas, color:string }[] = [];
  console.log('la ubicacion idubi es:',idubi)
  const detalle = await Programas.findAll({
      include:[
          {model:Planes,include:[{model:Equipos,where:{ubicacioneId:idubi}}],where:{plan_lanzado:true}}, 
         // {model:Planes,include:[{model:Equipos}]},    
          {model:Lineas}, 
          {model:Grupotrabajo}, 

        ],        
   })
   detalle.forEach( d => {
    const today = new Date()
    const fecha =  d.getDataValue("prog_fecha");
    const frecuencia =  d.getDataValue("prog_frec");
    const horizonte =  d.getDataValue("prog_horizonte");
    const fechaAmarillo = addMonths(fecha,(frecuencia-horizonte));
    const fechaRojo = addMonths(fecha,(frecuencia));
    const periodos = addMonths(today,(1));
    console.log('la fecha de periodos es',periodos)
    console.log('la fecha de amarillos es',fechaAmarillo)
   
    if (today > fechaRojo ){
      data.push({programa:d,color:"rojo"})

    }
    if(today < fechaAmarillo){
      data.push({programa:d,color:"verde"})
    }
    if(today >= fechaAmarillo  && today < periodos  ){
     data.push({programa:d,color:"amarillo"})
    }
   } )
       res.json({ ok: true, data })
      
});


app.put('/cumplimiento-programa/:id',(_req: Request, res: Response) => {
  const body=_req.body
  const id=_req.params.id
  console.log('este es mi body',body)
   Programas.update({prog_frec:body.frecuencia,prog_fecha:body.fechainicio }, {
      where: {
        id: body.id
      }           
  })
     .then ((data)=>res.json({ ok:true,data}))
     .catch((error)=>res.json({ok:false,error}))
});




app.post('/lanzar-programa',async (_req: Request, res: Response) => {
    const bodys=_req.body
    const today = new Date()
    const t = await sequelize.transaction();
    try {
      const programas = await Programas.create({    
       
       prog_frec:bodys.frecuencia, 
       prog_fecha:bodys.fecha, 
       prog_horizonte:bodys.horizonte, 

       planeId:bodys.selectplan, 
       lineaId:bodys.selectlin,
       grupotrabajoId:bodys.selectgpotrabajo

      },{transaction:t});
  
 
     
      await t.commit();
      return res.json({ok: true, data: programas?.getDataValue('planeId')});
    } catch (error) {
      await t.rollback();
      return res.status(400).json({ok: false, err: error});
    }
  });
  
  
  

export default app; // el export debe ir despues de las funciones