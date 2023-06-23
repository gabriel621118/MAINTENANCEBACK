import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Almacenmovimientos extends Model { }

Almacenmovimientos.init({
    // Id generado automaticamente
  
    movimiento_cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    movimiento_fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
   
    //usertype id
}, {
    sequelize, modelName: "almacenmovimientos",
});

export default Almacenmovimientos;