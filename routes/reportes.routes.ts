import { format, getDaysInYear, getMonth, getYear } from 'date-fns';
import { Request, Response } from 'express';
import { router as app } from './router';
import Ventas from '../models/ventas.model';
import {Ventasdetalle} from '../models/ventasdetalle.model';
import {Ordendetalle} from '../models/ordendetalle.model';
import {Grupotrabajo} from '../models/grupotrabajo.model';
import { Op } from 'sequelize';
import Ordentrabajo from '../models/ordentrabajo.model';
import {differenceInDays, getDay} from 'date-fns'
import Avisos from '../models/avisos.model';




app.get('/reportes/hhombre-departamento/graficas', async (_req: Request, res: Response) => {
    const ventasCuenta: { name: string, data:{date: string, value: number }[] } = {name:'Ventas',data:[]};

    try {

        const ventas = await Ordendetalle.findAll({
            order: [
                ['id', 'ASC']
            ],
           where:{ordendeta_terminada:false}
        });



       




    for (const e of ventas) 
    
    {

        
        //-------------------------------------busca el recurso de gentes por departamemto---------------------
        let peoples=0;
        const numpeople = await Grupotrabajo.findOne({
            order: [
                ['id', 'ASC']
            ],
            where:{id:e.getDataValue('grupotrabajoId')},
          
              
        });
        //-------------------------------------Finbusca el recurso de gentes por departamemto------------------


        // const eStringDate = format(e.getDataValue('createdAt'), 'MM/dd/yyyy')
        const mes =e.getDataValue('grupotrabajoId')
        let mesNombre = '';
        let numerogentes=0;
         
        switch (mes) {
            case 0:
                mesNombre = 'Departamento Desconocido'
                numerogentes=0
                break;
            case 1:
                mesNombre = 'Mecanico'
                numerogentes=numpeople?.getDataValue('numpersonas')
                break;
            case 2:
                mesNombre = 'Electrrico'
                numerogentes=numpeople?.getDataValue('numpersonas')
                break;
            case 3:
                mesNombre = 'Instrumentos'
                numerogentes=numpeople?.getDataValue('numpersonas')
                break;
          

            default:
                break;
        }
        
        const find = ventasCuenta.data.find((h) => mesNombre == h.date);
        if(find){
            find.value += e.getDataValue('plandeta_hhombre')/(40*numerogentes)
        }else{
            ventasCuenta.data.push({date:mesNombre,value:e.getDataValue('ordendeta_hhombre')/(40*numerogentes)})
        }           
    }
    return res.json({
        ok: true,
        data: ventasCuenta
    });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }


    
    
});



  

app.get('/reportes/ordenesxmes', async (_req: Request, res: Response) => {
    const ordenesCuenta: { name: string, data:{date: string, value: number }[] } = {name:'Ventas',data:[]};
    getDaysInYear(new Date())
    const result = differenceInDays(new Date(), new Date(2022, 0, 1))
    const x:number= getDaysInYear(new Date())
    const difdefecha=new Date(new Date() as any - result*24 * 60 * 60 * 1000)
    const fecha2=new Date(new Date() as any - 24 * 60 * 60 * 1000)
    console.log('los dias transcurridos son',fecha2)
    try {
  
        const ordenes = await Ordentrabajo.findAll({
            order: [
                ['createdAt', 'ASC']
            ],
            where:{createdAt:{ [Op.between]:[new Date(new Date() as any - result*24 * 60 * 60 * 1000),new Date(new Date() as any - 24 * 60 * 60 * 1000)]}}
          
        });
         console.log(ordenes)
    for (const e of ordenes) {
        // const eStringDate = format(e.getDataValue('createdAt'), 'MM/dd/yyyy')
        const mes = getMonth(e.getDataValue('createdAt'))
        let mesNombre = '';
        switch (mes) {
            case 0:
                mesNombre = 'Enero'
                break;
            case 1:
                mesNombre = 'Febrero'
                break;
            case 2:
                mesNombre = 'Marzo'
                break;
            case 3:
                mesNombre = 'Abril'
                break;
            case 4:
                mesNombre = 'Mayo'
                break;
            case 5:
                mesNombre = 'Junio'
                break;
            case 6:
                mesNombre = 'Julio'
                break;
            case 7:
                mesNombre = 'Agosto'
                break;
            case 8:
            mesNombre = 'Septiembre'
                break;
            case 9:
                mesNombre = 'Octubre'
                break;
            case 10:
                mesNombre = 'Noviembre'
                break;
            case 11:
                mesNombre = 'Diciembre'
                break;
        
            default:
                break;
        }
        
        const find =  ordenesCuenta.data.find((h) => mesNombre == h.date);
        if(find){
            //find.value += e.getDataValue('venta_monto')
            find.value +=1
        }else{
            ordenesCuenta.data.push({date:mesNombre,value:1})
        }           
    }
    return res.json({
        ok: true,
        data:  ordenesCuenta
    });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
  
  
    
  });
  


  app.get('/reportes/avisosxmes', async (_req: Request, res: Response) => {
    const avisosCuenta: { name: string, data:{date: string, value: number }[] } = {name:'Avisos',data:[]};
    getDaysInYear(new Date())
    const result = differenceInDays(new Date(), new Date(2022, 0, 1))
    const x:number= getDaysInYear(new Date())
    const difdefecha=new Date(new Date() as any - result*24 * 60 * 60 * 1000)
    const fecha2=new Date(new Date() as any - 24 * 60 * 60 * 1000)
    console.log('los dias transcurridos son',fecha2)
    try {
  
        const avisos = await Avisos.findAll({
            order: [
                ['createdAt', 'ASC']
            ],
            where:{createdAt:{ [Op.between]:[new Date(new Date() as any - result*24 * 60 * 60 * 1000),new Date(new Date() as any - 24 * 60 * 60 * 1000)]}}
          
        });
         console.log(avisos)
    for (const e of avisos) {
        // const eStringDate = format(e.getDataValue('createdAt'), 'MM/dd/yyyy')
        const mes = getMonth(e.getDataValue('createdAt'))
        let mesNombre = '';
        switch (mes) {
            case 0:
                mesNombre = 'Enero'
                break;
            case 1:
                mesNombre = 'Febrero'
                break;
            case 2:
                mesNombre = 'Marzo'
                break;
            case 3:
                mesNombre = 'Abril'
                break;
            case 4:
                mesNombre = 'Mayo'
                break;
            case 5:
                mesNombre = 'Junio'
                break;
            case 6:
                mesNombre = 'Julio'
                break;
            case 7:
                mesNombre = 'Agosto'
                break;
            case 8:
            mesNombre = 'Septiembre'
                break;
            case 9:
                mesNombre = 'Octubre'
                break;
            case 10:
                mesNombre = 'Noviembre'
                break;
            case 11:
                mesNombre = 'Diciembre'
                break;
        
            default:
                break;
        }
        
        const find =  avisosCuenta.data.find((h) => mesNombre == h.date);
        if(find){
            //find.value += e.getDataValue('venta_monto')
            find.value +=1
        }else{
            avisosCuenta.data.push({date:mesNombre,value:1})
        }           
    }
    return res.json({
        ok: true,
        data:  avisosCuenta
    });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
  
  
    
  });
  


  app.get('/reportes/costoordenes', async (_req: Request, res: Response) => {
    const costopormes: { name: string, data:{date: string, value: number }[] } = {name:'Costos',data:[]};
    getDaysInYear(new Date())
    const result = differenceInDays(new Date(), new Date(2022, 0, 1))
    const x:number= getDaysInYear(new Date())
    const difdefecha=new Date(new Date() as any - result*24 * 60 * 60 * 1000)
    const fecha2=new Date(new Date() as any - 24 * 60 * 60 * 1000)
    console.log('los dias transcurridos son',fecha2)
    try {
  
        const avisos = await Ordentrabajo.findAll({
            order: [
                ['createdAt', 'ASC']
            ],
            where:{createdAt:{ [Op.between]:[new Date(new Date() as any - result*24 * 60 * 60 * 1000),new Date(new Date() as any - 24 * 60 * 60 * 1000)]}}
          
        });
         //console.log(avisos)
    for (const e of avisos) {
        // const eStringDate = format(e.getDataValue('createdAt'), 'MM/dd/yyyy')
        const mes = getMonth(e.getDataValue('createdAt'))
        let mesNombre = '';
        switch (mes) {
            case 0:
                mesNombre = 'Enero'
                break;
            case 1:
                mesNombre = 'Febrero'
                break;
            case 2:
                mesNombre = 'Marzo'
                break;
            case 3:
                mesNombre = 'Abril'
                break;
            case 4:
                mesNombre = 'Mayo'
                break;
            case 5:
                mesNombre = 'Junio'
                break;
            case 6:
                mesNombre = 'Julio'
                break;
            case 7:
                mesNombre = 'Agosto'
                break;
            case 8:
            mesNombre = 'Septiembre'
                break;
            case 9:
                mesNombre = 'Octubre'
                break;
            case 10:
                mesNombre = 'Noviembre'
                break;
            case 11:
                mesNombre = 'Diciembre'
                break;
        
            default:
                break;
        }
        
        const find =  costopormes.data.find((h) => mesNombre == h.date);
        if(find){
            find.value += e.getDataValue('orden_costofinal')
           // find.value +=1
        }else{
            costopormes.data.push({date:mesNombre,value:e.getDataValue('orden_costofinal')})
        }        
        
        


       


    }


    return res.json({
        ok: true,
        data:  costopormes
    });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
  
  
    
  });
  

  app.get('/reportes/tipodeordenes', async (_req: Request, res: Response) => {
    const costopormes: { name: string, data:{date: string, value: number }[] } = {name:'Costos',data:[]};
    getDaysInYear(new Date())
    const result = differenceInDays(new Date(), new Date(2022, 0, 1))
    const x:number= getDaysInYear(new Date())
    const difdefecha=new Date(new Date() as any - result*24 * 60 * 60 * 1000)
    const fecha2=new Date(new Date() as any - 24 * 60 * 60 * 1000)
    console.log('los dias transcurridos son',fecha2)
    try {
  
        const tipos = await Ordentrabajo.findAll({
            order: [
                ['createdAt', 'ASC']
            ],
            where:{createdAt:{ [Op.between]:[new Date(new Date() as any - result*24 * 60 * 60 * 1000),new Date(new Date() as any - 24 * 60 * 60 * 1000)]}}
          
        });
         //console.log(avisos)
   


    return res.json({
        ok: true,
        data:  costopormes
    });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
  
  
    
  });





export default app;