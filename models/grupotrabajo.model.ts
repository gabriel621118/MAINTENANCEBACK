import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Grupotrabajo extends Model { }

Grupotrabajo.init({
    // Id generado automaticamente
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numpersonas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preciohhombre: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "grupotrabajo",
});

export default Grupotrabajo;