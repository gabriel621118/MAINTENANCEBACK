
import { Request, Response } from 'express';
import Lineas from '../models/lineas.model';
import bcrypt from 'bcrypt';
import { router as app } from './router';
import Users from '../models/user.model';
const { Op } = require("sequelize");

// Consultas
app.post('/login', async (_req: Request, res: Response) => {
    const body = _req.body;
    if (body.password === '' || body.email === '' || body.email == undefined || body.password == undefined) {
        return res.json({ ok: false, data: "Datos vacios" });
    }

    try {
        const users = await Users.findOne({
            where: { email: body.email },
        });

        if (!users) {
            return res.json({ ok: false, err: 'Este correo no pertenece a ningun empleado' });
        }
        if (!bcrypt.compareSync(body.password, users.getDataValue('password'))) {
            return res.json({ ok: false, err: "La contraseña es incorrecta" });
        }

        // const panelSign = process.env.TOKEN_SHA_ADMIN;

        // if (!panelSign) { throw 'No se ha definido la variable de entorno TOKEN_SHA_ADMIN'; }

        // const token = jwt.sign(
        //     { users }, panelSign, { expiresIn: '365d' }
        // );
   

        return res.json({ ok: true, data: 'correcto' });

    } catch (error) {
        console.log('login - error', error)
        return res.status(400).json({ ok: false, err: 'Ocurrio un error inesperado', message: error, });
    }

        
});
// //Operaciones
// app.post('/lineas',(_req: Request, res: Response) => {
//    const body=_req.body
//    Lineas.create({
//          descripcion:body.descripcion,
//          categoriaId:body.selectcategoria
//    })
//       .then ((data)=>res.json({ ok:true,data}))
//       .catch((error)=>res.json({ok:false,error}))
// });


// app.put('/lineas/:id',(_req: Request, res: Response) => {
//     const body=_req.body
//     const id=_req.params.id
//      Lineas.update({  descripcion:body.descripcion,categoriaId:body.selectcategoria }, {
//         where: {
//           id: id
//         }
//     })
//        .then ((data)=>res.json({ ok:true,data}))
//        .catch((error)=>res.json({ok:false,error}))
//  });
 
 
// app.delete('/lineas/:id',(_req: Request, res: Response) => {
//    // const body=_req.body
//     const id=_req.params.id
//      Lineas.destroy( {
//         where: {
//           id: id
//         }
//     })
//        .then ((data)=>res.json({ ok:true,data}))
//        .catch((error)=>res.json({ok:false,error}))
//  });
 

export default app; // el export debe ir despues de las funciones