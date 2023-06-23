
import { Request, Response } from 'express';
import Bom from '../models/bom.model';
import {Bomdetalle} from '../models/bomdetalle.model'
import{Materiales} from'../models/materiales.model'
import{Equipos} from'../models/equipos.model'
import sequelize from '../database/database';
import { router as app } from './router';
const { Op } = require("sequelize");




app.get('/bom', (_req: Request, res: Response) => {
    Bom.findAll({
      include:[Materiales,Equipos,Bomdetalle],
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});



app.get('/bomxequipo/:equipoId', (_req: Request, res: Response) => {
  const body=_req.body
  const equipoid=_req.params.equipoId
  console.log('este es el id del equipo para la bom',equipoid)
    Bom.findAll({
      include:[
        {
            model:Equipos
        },
        {
            model:Bomdetalle,include:[Materiales]
        },
    ],



      where:{equipoId:equipoid}
     })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});




//generar la bom del equipo
app.post('/bom/generar-bom',async (_req: Request, res: Response) => {
    const bodys=_req.body
    const today = new Date()
    
    
    console.log('datos de la bom para crear',bodys)
    const t = await sequelize.transaction();


    try {
        var myId:Number=0

      
           
           const bomexiste = await Bom.findOne({  
               where:{ equipoId:bodys[0].bomequipo} 
           
  })

//----------------------------checa si la bom ya existe----------------------------------------------------------
if(bomexiste==null){

      const bom = await Bom.create({
        bom_decripcion: bodys[0].equipo_descripcion,       
        equipoId:bodys[0].bomequipo, 
       
      } ,{transaction:t})
      
    ;


      for (const body of bodys) {
        await Bomdetalle.create({
            material_cantidad:body.material_cantidad,          
            materialeId:body.materialId,
            bomId:bom.getDataValue('id'),
            myId:bom.getDataValue('id')
        },{transaction:t})} ;
      

       
      
    }

    else{

       
        
        
      for (const body of bodys) {
       //-------------------------checa que el material no se repita en el bom----------------------------
       const bomexistemat = await Bomdetalle.findOne({
        where:{ bomId:bomexiste.getDataValue('id'),
                 materialeId:body.materialId }    })  
       //-------------------------checa que el material no se repita en el bom----------------------------
          if(bomexistemat==null){

             await Bomdetalle.create({
            material_cantidad:body.material_cantidad,          
            materialeId:body.materialId,
            bomId:bomexiste.getDataValue('id'),
            //myId:bomexiste.getDataValue('id')
        },{transaction:t})} ;
      }
    }



      await t.commit();
      return res.json({ok: true, data: myId});
    } catch (error) {
      await t.rollback();
      console.log(error)
      return res.status(400).json({ok: false, err: error});
    }
  });


export default app; // el export debe ir despues de las funciones