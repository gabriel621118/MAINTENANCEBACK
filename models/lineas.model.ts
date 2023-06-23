import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Lineas extends Model { }

Lineas.init({
    // Id generado automaticamente
   
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
   
   
   
    //usertype id
}, {
    sequelize, modelName: "lineas",
});

export default Lineas;