import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Programas extends Model { }

Programas.init({
    // Id generado automaticamente
  
    prog_frec: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    prog_fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    prog_horizonte: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "programas",
});

export default Programas;