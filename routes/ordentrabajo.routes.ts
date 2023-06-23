
import { Request, Response } from 'express';
import Ordentrabajo from '../models/ordentrabajo.model';
import Ordentipo from '../models/ordentipo.model';
import Ordenstatus from '../models/ordenstatus.model';
import Ordendetalle from '../models/ordendetalle.model';
import{Planes} from '../models/planes.model'
import{Plandetalle} from '../models/plandetalle.model'

import { router as app } from './router';
const { Op } = require("sequelize");

import sequelize from '../database/database';
//import { UploadedFile } from 'express-fileupload';

import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import Grupotrabajo from '../models/grupotrabajo.model';
import Materiales from '../models/materiales.model';
import { getYear } from 'date-fns';
import Evidencias from '../models/evidencias.model';
import { UploadedFile } from 'express-fileupload';

//--------------------------------CONSULTAS----------------------------------------------------------------------

app.get('/obtener-ordentrabajo', (_req: Request, res: Response) => {
    Ordentrabajo.findAll({
      include: [ 
        {
        model:Ordentipo
       },
       {
        model:Ordenstatus
       }
     ],
     order:['ordentipoId'],
    
  where: {
        
    id:{ [Op.ne]:[2]}
     }     

     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/obtener-ordentrabajofallasPm02', (_req: Request, res: Response) => {
  const myear=getYear(new(Date))
  Ordentrabajo.findAll({
    include: [ 
      {
      model:Ordentipo
     },
     {
      model:Ordenstatus
     }
   ],
   order:['createdAt'],
   where:{ordentipoId:2,createdAt:{[Op.gt]: new Date(new Date(myear/0/1))}}  
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/obtener-ordentrabajoxcerrar', (_req: Request, res: Response) => {
  Ordentrabajo.findAll({
    include: [ 
      {
      model:Ordentipo
     },
     {
      model:Ordenstatus
     }    
   ],
   where:{ordenstatusId:[2,3]}

   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/obtener-ordentrabajossincerrar', (_req: Request, res: Response) => {
  Ordentrabajo.findAll({
    include: [ 
      {
      model:Ordentipo
     },
     {
      model:Ordenstatus
     }    
   ],
   where:{ordenstatusId:{[Op.ne]:4},id:{[Op.ne]:2}}

   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});



app.get('/obtener-ordentipo', (_req: Request, res: Response) => {
    Ordentipo.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});




app.get('/obtener-statusordenes', (_req: Request, res: Response) => {
    Ordenstatus.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});



app.get('/obtener_evidenciasordenes/:limites/:page', (_req: Request, res: Response) => {
  let page =_req.params.page
  let limite=_req.params.limites
  page = (page - 1) * limite
  console.log('el limite  :',limite)
  Evidencias.findAll({
    include: [ 
      {
      model:Ordentrabajo
     },],
     //where:{ordentrabajoId:3}

     
  limit: +limite,
  offset:+page
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});



app.get('/obtener_evidenciasordenes_RCAS/:limites/:page', (_req: Request, res: Response) => {
 let page =_req.params.page
  let limite=_req.params.limites
  page = (page - 1) * limite
  console.log('el pagina de los RECAS es :',page)
  console.log('el limite de los RCAS es :',limite)

  Evidencias.findAndCountAll({
    include: [ 
      {
      model:Ordentrabajo
     },
     ],
     //where:{ordentrabajoId:3}
          
  limit: +limite,
  offset:+page
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/obtener_evidenciasordenesxorden/:id', (_req: Request, res: Response) => {
  const id=_req.params.id
  Evidencias.findAll({
    include: [ 
      {
      model:Ordentrabajo
     }, ],where:{ordentrabajoId:id}
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});



app.get('/obtener_evidenciasordenesxordendescr/:descrip', (_req: Request, res: Response) => {
  const descrip=_req.params.descrip
  Evidencias.findAll({
    include: [ 
      {
      model:Ordentrabajo,
      where: {
        plan_decripcion: {
          [Op.like]: descrip 
        }
      }
     },
    
    
    ]
    
    

   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});









//ordenesxstatus

app.get('/ordenesxstatus/:idstatus', (_req: Request, res: Response) => {
  const idstatus=_req.params.idstatus
  Ordentrabajo.findAll({
      include:[
          {model:Ordentipo},   
          {model:Ordenstatus}, 
      

        ],
           where:{ordenstatusId:idstatus,id:{[Op.ne]:2}}
        // where:{ordenstatusId:{[Op.ne]:idstatus},id:{[Op.ne]:2}}
   }) 
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});



app.get('/ordenesxstatusprogsemanal/:idstatus', (_req: Request, res: Response) => {
  const idstatus=_req.params.idstatus
  Ordentrabajo.findAll({
      include:[
          {model:Ordentipo},   
          {model:Ordenstatus}, 
      

        ],
          // where:{ordenstatusId:idstatus,id:{[Op.ne]:2}}
         where:{ordenstatusId:{[Op.ne]:idstatus},id:{[Op.ne]:2}}
   }) 
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});




app.get('/ordenesxtipos/:idtipo', (_req: Request, res: Response) => {
  const idtipo=_req.params.idtipo
  Ordentrabajo.findAll({
      include:[
          {model:Ordentipo},   
          {model:Ordenstatus}, 
      

        ],

         where:{ordentipoId:idtipo,id:{[Op.ne]:2}}
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


//--------------------------------OPERACIONES CON REGISTROS----------------------------------------------------------------------


app.get('/cambiar-statusordencerr/:id',async(_req: Request, res: Response) => {
  const body=_req.body
  const id=_req.params.id
  let status=0
  let plan=0
  const t = await sequelize.transaction();
   try {
   
  await Ordentrabajo.update({  ordenstatusId:4,orden_fechafin:new(Date) }, {
      where: {
        id: id,
      },transaction:t});    
 
      const ordenregistro= await Ordentrabajo.findOne({ where:{id:id} })
 plan=ordenregistro?.getDataValue('planeId')

 await Planes.update({  plan_lanzado:false }, {
    where: {
      id: plan
    },transaction:t
});
await t.commit();
return res.json({ok: true, data: 'ACTUALIZADO'});
  
} catch (error) 
{ await t.rollback();
  return res.status(400).json({ok: false, err: error});
    
}
 
    
});














app.post('/crear-ordentipo',(_req: Request, res: Response) => {
    const body=_req.body
    Ordentipo.create({
          descripcion:body.descripcion,
          clave  : body.clave
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/grabar-ordentipo/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Ordentipo.update({  descripcion:body.descripcion, clave:body.clave }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
  
 app.delete('/borrar-ordentipo/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Ordentipo.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });


  
app.post('/crear-ordenstatus',(_req: Request, res: Response) => {
    const body=_req.body
    Ordenstatus.create({
          descripcion:body.descripcion,
          clave:body.clave
          
          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/grabar-ordenstatus/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
      Ordenstatus.update({  descripcion:body.descripcion,clave:body.clave }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
  
 app.delete('/borrar-ordenstatus/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Ordenstatus.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });




//--------------------------LANZA LA ORDEN DE TRABAJO-----------------------------------------------------------

app.post('/grabar-ordentrabajoxplan',async (_req: Request, res: Response) => {
    const body=_req.body
    const today = new Date()
    const t = await sequelize.transaction();
    console.log('estos son los datos del body',body)
    try {
        
        const pedido = await Planes.findOne({
            include:[
              {
                model:Plandetalle,include:[{model:Grupotrabajo},{model:Materiales}]
               
              },
             
            ],   
      
            where: {id : body.planeId}
          });
          let hhelec=0
          let costohhelec=0
          let hhmec=0
          let costohhmec=0
          let hhinst=0
          let costohhinst=0
          let costototalhhombre=0
          let costotalmaterial=0
          let otro=0

for (const iterator of pedido?.getDataValue('plandetalles')) {
           //iterator.getDataValue
          //console.log ('valores del iterator',iterator)

          switch (iterator.getDataValue('grupotrabajoId')  ){
                 case 1:
                                                                         
                  costohhmec+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plan_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
           break;
                  case 2:
                 
                  costohhelec+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plan_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
           break;
                  case 3:
                
                 costohhinst+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plan_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
     break;
    
    default:
        otro=0;
}
//calcula  el valor de los materiales y horas hombre

costotalmaterial+=iterator.getDataValue('plandeta_matcantidad')*iterator.getDataValue('materiale').getDataValue('material_precioactual');
costototalhhombre=costohhelec+ costohhinst+ costohhmec   
}



console.log('horas hombre ',costohhelec)

      //------------------------------------actualiza PLANES maestro para que ya no aparezca en la lista-----------------
  
      const planes=await Planes.update({plan_lanzado:true},
         {where: {id : body.planeId},
      },);

      console.log('plan', planes)
  //----------------------------------------------------------------------------------------------------------------------
     const plan= pedido;
       
      const orden = await Ordentrabajo.create({
      
        plan_decripcion:body.plan_decripcion,     
        orden_fechaini:body.orden_fechaini,
        orden_fechafin:body.orden_fechafin,
        orden_costoinicial:costototalhhombre+costotalmaterial,
        orden_costofinal:costototalhhombre+costotalmaterial, 
       
        planeId:body.planeId,
        ordentipoId:3,
        ordenstatusId:3,
        equipoId:body.equipoId




  
      },{transaction:t});
        console.log('xxxxxxxxxx',plan)
      for (const activadad of plan?.getDataValue('plandetalles')) {
  
        const orden_detalle = await Ordendetalle.create({
            plandeta_actividad: activadad.plandeta_actividad,
            plandeta_hhombre: activadad.plandeta_hhombre,
            plandeta_matcantidad: activadad.plandeta_matcantidad,
            plandeta_numpersonas: activadad.plan_numpersonas,
            ordendeta_terminada: false, 
          
          ordentrabajoId: orden.getDataValue('id'),
          grupotrabajoId: activadad.grupotrabajoId,
          materialeId: activadad.materialeId,


        },{transaction:t})
      }
      
      await t.commit();
      return res.json({ok: true, data: 'orden creada'});
    } catch (error) { console.log('error de grabar',error)
      await t.rollback();
      return res.status(400).json({ok: false, err: error});
    }
  });

  
//-------------------------- FIN  LANZA LA ORDEN DE TRABAJO-----------------------------------------------------------


//--------------------------LANZA LA ORDEN DE TRABAJO FUERA DE UN PLAN-----------------------------------------------------------

app.post('/grabar-ordentrabajosinplan',async (_req: Request, res: Response) => {
  const body=_req.body
  const today = new Date()
  const t = await sequelize.transaction();
  console.log('estos son los datos del body',body)
  try {
      
      const pedido = await Planes.findOne({
          include:[
            {
              model:Plandetalle,include:[{model:Grupotrabajo},{model:Materiales}]
             
            },
           
          ],   
    
          where: {id :1 }
        });
        let hhelec=0
        let costohhelec=0
        let hhmec=0
        let costohhmec=0
        let hhinst=0
        let costohhinst=0
        let costototalhhombre=0
        let costotalmaterial=0
        let otro=0

        for (const iterator of pedido?.getDataValue('plandetalles')) {
          //iterator.getDataValue
         //console.log ('valores del iterator',iterator)

         switch (iterator.getDataValue('grupotrabajoId')  ){
                case 1:
                                                                        
                 costohhmec+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plan_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
          break;
                 case 2:
                
                 costohhelec+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plan_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
          break;
                 case 3:
               
                costohhinst+=iterator.getDataValue('plandeta_hhombre')*iterator.getDataValue('plan_numpersonas')*iterator.getDataValue('grupotrabajo').getDataValue('preciohhombre');
    break;
   
   default:
       otro=0;
}
//calcula  el valor de los materiales y horas hombre

costotalmaterial+=iterator.getDataValue('plandeta_matcantidad')*iterator.getDataValue('materiale').getDataValue('material_precioactual');
costototalhhombre=costohhelec+ costohhinst+ costohhmec   
}





console.log('horas hombre ',costohhelec)

    //------------------------------------actualiza PLANES maestro para que ya no aparezca en la lista-----------------

    const planes=await Planes.update({plan_lanzado:true},
       {where: {id : body.planeId},
    },);

    console.log('plan', planes)
       //----------------------------------------------------------------------------------------------------------------------
   const plan= pedido;
     
    const orden = await Ordentrabajo.create({
    
      plan_decripcion:body.plan_decripcion,     
      orden_fechaini:body.orden_fechaini,
      orden_fechafin:body.orden_fechafin,
      orden_costoinicial:costototalhhombre+costotalmaterial,
      orden_costofinal:costototalhhombre+costotalmaterial, 
     
      planeId:body.planeId,
      ordentipoId:body.ordentipoId,
      ordenstatusId:2,
      equipoId:body.equipoId





    },{transaction:t});
      console.log('xxxxxxxxxx',plan)
    for (const activadad of plan?.getDataValue('plandetalles')) {

      const orden_detalle = await Ordendetalle.create({
          plandeta_actividad: activadad.plandeta_actividad,
          plandeta_hhombre: activadad.plandeta_hhombre,
          plandeta_matcantidad: activadad.plandeta_matcantidad,
          plandeta_numpersonas: activadad.plan_numpersonas,
          ordendeta_terminada: false, 
        
        ordentrabajoId: orden.getDataValue('id'),
        grupotrabajoId: activadad.grupotrabajoId,
        materialeId: activadad.materialeId,


      },{transaction:t})
    }
    
    await t.commit();
    return res.json({ok: true, data: 'orden creada'});
  } catch (error) { console.log('error de grabar',error)
    await t.rollback();
    return res.status(400).json({ok: false, err: error});
  }
});


//-------------------------- FIN  LANZA LA ORDEN DE TRABAJO-----------------------------------------------------------



/*-------------------------------------- C R E A      E V I D E N C I A S-----------------------------------------*/

app.post('/crea_evidnciaorden/:id',async (req: Request, res: Response) => {
  try {
    
 
  // console.log(req)
  const id = req.params.id;
  if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
          ok: false,
          err: 'No se envio ningun archivo',
      });
  }

  console.log('paso')

 const file: UploadedFile = req.files.file as any;
  // Validar extension
  const cutName = file.name.split('.'); 
  const extension = cutName[cutName.length - 1];
  const validFileTypes = ['jpg', 'jpeg', 'png','xls','docx','pdf'];

  if (!validFileTypes.includes(extension)) {
      return res.status(400).json({
          ok: false,
          err: 'La extension no esta permitida',
      });
  }

  //generar nombre de archivo
  const nombreArchivo = `${uuidv4()}.${extension}`;

  if (!fs.existsSync(__dirname + '/imagenes')) {
      fs.mkdirSync(__dirname + '/imagenes', { recursive: true });
  }

  const uploadPath = path.join(__dirname, 'imagenes/', `${nombreArchivo}`);

  console.log(file.name.split('.'));

  file.mv(uploadPath, async (err: any) => {

      console.log(uploadPath);

      if (err) {
          return res.status(400).json({ok: false, err: 'Error de subida interno'})
      }

  //crea la imagen
  const registro= await Evidencias.create ({  
     ruta:nombreArchivo,nombre:file.name,ordentrabajoId:id }, {
         
    }).catch( e => { throw new Error("Error");
     } )
    res.json({ok:true,data:registro})
  });

 
} catch (error) {
  res.json({ ok:false,error })
    
}

});

/*-------------------------------------- F I N     C R E A      E V I D E N C I A S-----------------------------------------*/

/*-------------------------------------- M O DI F I C A      E V I D E N C I A S-----------------------------------------*/



//subir imagen
app.put('/evidencia/upload/:id', (req: Request, res: Response) => {

  const id = req.params.id;
  // console.log(req)

  if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
          ok: false,
          err: 'No se envio ningun archivo',
      });
  }

  console.log('paso')

  const file: UploadedFile = req.files.file as any;
  // Validar extension
  const cutName = file.name.split('.'); 
  const extension = cutName[cutName.length - 1];
  const validFileTypes = ['jpg', 'jpeg', 'png','pdf'];

  if (!validFileTypes.includes(extension)) {
      return res.status(400).json({
          ok: false,
          err: 'La extension no esta permitida',
      });
  }

  //generar nombre de archivo
  const nombreArchivo = `${uuidv4()}.${extension}`;

  if (!fs.existsSync(__dirname + '/imagenes')) {
      fs.mkdirSync(__dirname + '/imagenes', { recursive: true });
  }

  const uploadPath = path.join(__dirname, 'imagenes/', `${nombreArchivo}`);

  console.log(file.name.split('.'));

  file.mv(uploadPath, (err: any) => {

      console.log(uploadPath);

      if (err) {
          return res.status(400).json({ok: false, err: 'Error de subida interno'})
      }

  //actualizar imagen
  Evidencias.update({  
      ruta:nombreArchivo,nombre:file.name }, {
          where: {
          id: id
        }
    }).then ((data)=>res.json({ ok: true, data: uploadPath }))
    .catch((error)=>res.json({ ok:false,error }))
  
  });

});
  //-----------------------------------------------------------------------------------------------------------------


export default app; // el export debe ir despues de las funciones