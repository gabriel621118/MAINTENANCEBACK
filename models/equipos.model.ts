import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Equipos extends Model { }

Equipos.init({
    // Id generado automaticamente
  
    eq_descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eq_tag: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eq_criticidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "equipos",
});

export default Equipos;