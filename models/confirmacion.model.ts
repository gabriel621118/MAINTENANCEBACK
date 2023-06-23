import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Confirmacion extends Model { }

Confirmacion.init({
    // Id generado automaticamente
   
   fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   semana: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

   
   
    //usertype id
}, {
    sequelize, modelName: "confirmacion",
});

export default Confirmacion;