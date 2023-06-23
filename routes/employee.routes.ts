
import { Request, Response } from 'express';
import Employee from '../models/employee.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/obtener_empleados', (_req: Request, res: Response) => {
    Employee.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

//Operaciones
app.post('/graba_empleados',(_req: Request, res: Response) => {
    const body=_req.body
    Employee.create({
       Nombre:body.nombre,
        Domicilio:body.domicilio,
       Telefono:body.telefono,
       grupotrabajoId:body.selectgrupo   
    })
       .then ((data)=>res.json({ ok:true,data}))
       .catch((error)=>res.json({ok:false,error}))
 });
 
 
 app.put('/update_empleados/:id',(_req: Request, res: Response) => {
     const body=_req.body
     const id=_req.params.id
     console.log('body del empleado',body)
      Employee.update({Nombre:body.nombre, Domicilio:body.domicilio,
                          Telefono:body.telefono, grupotrabajoId:body.selectgrupo  }, {
         where: {                                 
           id: id
         }           
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  
  
 app.delete('/borra_empleado/:id',(_req: Request, res: Response) => {
    // const body=_req.body
     const id=_req.params.id
      Employee.destroy( {
         where: {
           id: id
         }
     })
        .then ((data)=>res.json({ ok:true,data}))
        .catch((error)=>res.json({ok:false,error}))
  });
  

export default app; // el export debe ir despues de las funciones