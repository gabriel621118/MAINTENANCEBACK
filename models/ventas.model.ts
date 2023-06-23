import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Ventas extends Model { }

Ventas.init({
    // Id generado automaticamente
   
    venta_fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    venta_status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

   
    //usertype id
}, {
    sequelize, modelName: "ventas",
});

export default Ventas;