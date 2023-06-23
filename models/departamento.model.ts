import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Departamento extends Model { }

Departamento.init({
    // Id generado automaticamente
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "departamento",
});

export default Departamento;