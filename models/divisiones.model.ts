import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Divisiones extends Model { }

Divisiones.init({
    // Id generado automaticamente
   
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
   
   
   
    //usertype id
}, {
    sequelize, modelName: "divisiones",
});

export default Divisiones;