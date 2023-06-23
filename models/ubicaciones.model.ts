import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Ubicaciones extends Model { }

Ubicaciones.init({
    // Id generado automaticamente
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
   
   
    //usertype id
}, {
    sequelize, modelName: "ubicaciones",
});

export default Ubicaciones;