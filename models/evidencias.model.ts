import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Evidencias extends Model { }

Evidencias.init({
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
    sequelize, modelName: "evidencias",
});

export default Evidencias;