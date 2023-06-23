import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Categorias extends Model { }

Categorias.init({
    // Id generado automaticamente
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
   
   
    //usertype id
}, {
    sequelize, modelName: "categorias",
});

export default Categorias;