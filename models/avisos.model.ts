import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Avisos extends Model { }

Avisos.init({
    // Id generado automaticamente
   
   encabezado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    falla: {
        type: DataTypes.STRING,
        allowNull: false
    },
   historial: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "avisos",
});

export default Avisos;