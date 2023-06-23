import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Recursohumano extends Model { }

Recursohumano.init({
    // Id generado automaticamente
  
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   domicilio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechingreso: {
        type: DataTypes.DATE,
        allowNull: false,
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "recursohumano",
});

export default Recursohumano;