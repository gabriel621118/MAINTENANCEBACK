import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Ventasdetalle extends Model { }

Ventasdetalle.init({
    // Id generado automaticamente
  
   
    venta_iva: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    venta_cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
    //usertype id
}, {
    sequelize, modelName: "ventasdella",
});

export default Ventasdetalle;