
import { Request, Response } from 'express';
import Avisos from '../models/avisos.model';
import Equipos from '../models/equipos.model';
import Avisostatus from '../models/avisostatus.model';
import Avisostipo from '../models/avisotipo.model';
import Ordentrabajo from '../models/ordentrabajo.model';


import { router as app } from './router';
import Grupotrabajo from '../models/grupotrabajo.model';
import Ubicaciones from '../models/Ubicaciones.model';
const { Op } = require("sequelize");


app.get('/avisos', (_req: Request, res: Response) => {
    Avisos.findAll({
      
       
    })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});



app.get('/obtener_todosavisos', (_req: Request, res: Response) => {
  Avisos.findAll({ include: [{
    model: Equipos,include:[{model:Ubicaciones}]
   },

    {model: Avisostatus,
      
    },

    {model: Avisostipo,
     },
     
    {model: Grupotrabajo,
      }

  ], 
   })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/obtener_avisos', (_req: Request, res: Response) => {
  Avisos.findAll({ include: [{
    model: Equipos,include:[{model:Ubicaciones}]
   },

    {model: Avisostatus,
      
    },

    {model: Avisostipo,
     },
     
    {model: Grupotrabajo,
      }

  ], 
  where: {
        
     ordentrabajoId:{ [Op.ne]:[2]}
    //avisostatusId:2
   }  })
      .then((data) => res.json({ ok: true, data }))
      .catch((err) => res.status(400).json({ ok: false, err }));
});


app.get('/avisosxstatus/:idstatus', (_req: Request, res: Response) => {
    const idstatus=_req.params.idstatus

    Avisos.findAll({ include: [{
        model: Equipos,include:[{model:Ubicaciones}]
       },
    
        {model: Avisostatus,
        },
    
        {model: Avisostipo,
         },
         
        {model: Grupotrabajo,
          }
    
      ],
       
           where:{avisostatusId:idstatus}
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
  });


  app.get('/avisosxgpotrabajo/:idgrupo', (_req: Request, res: Response) => {
    const idgrupo=_req.params.idgrupo

    Avisos.findAll({ include: [{
        model: Equipos,include:[{model:Ubicaciones}]

       
       },


     
    
        {model: Avisostatus, 
        },
    
        {model: Avisostipo,
         },
         
        {model: Grupotrabajo,
          }
    
      ],
       
           where:{grupotrabajoId:idgrupo}
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
  });





//Operaciones
app.post('/grabar_avisos',(_req: Request, res: Response) => {
    const body=_req.body
    console.log('estsos son los datos del body que llegan para el equipo',body)
    Avisos.create({
       
        encabezado:body.encabezado,
        falla:body.falla,
        historial:'......',        
        avisotipoId:body.selecttipo,
        avisostatusId:11,
        equipoId:body.selectequipo,
        ordentrabajoId:2,
        grupotrabajoId:body.selectgpo
       

          
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/update-avisos/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id

     console.log('campos a cambiar para el aviso',body)
      Avisos.update({//encabezado:body.encabezado,
        falla:body.falla,
        historial:body.historial,        
       // avisostatusId:body.selectstatus,
                     
                     
                      }, {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });

   
 app.put('/update-avisos2/:id',(_req: Request, res: Response) => {
  const body=_req.body
  const id=_req.params.id
  const status=body.selectstatus
  console.log ('si paso por liberar avisos2',body)
 
   Avisos.update({//encabezado:body.encabezado,
     falla:body.falla,
     historial:body.historial,
     avisotipoId:body.selecttipoaviso,    
     grupotrabajoId:body.selectgpotrabajo,
     equipoId:body.selectequipo            
                  
                   }, {
      where: {
        id: id
      }
  })
     .then ((data)=>res.json({ ok:true,data}))
     .catch((error)=>res.json({ok:false,error}))
});


  
 app.put('/update-liberavisos/:id',(_req: Request, res: Response) => {
    const body=_req.body
    const id=_req.params.id
    const status=body.selectstatus
    console.log ('si paso por liberar avisos',body)
    if (status==12) {   } 
     Avisos.update({//encabezado:body.encabezado,
       falla:body.falla,
       historial:body.historial,
           
       avisostatusId:body.selectstatus,
                    
                    
                     }, {
        where: {
          id: id
        }
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
  
  
 app.delete('/borra-aviso/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Avisos.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones