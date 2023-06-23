import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Manuales extends Model { }

Manuales.init({
    // Id generado automaticamente
   
    ruta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    
   
    //usertype id
}, {
    sequelize, modelName: "manuales",
});

export default Manuales;