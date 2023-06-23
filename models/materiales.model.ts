import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Materiales extends Model { }

Materiales.init({
    // Id generado automaticamente
    material_desripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    material_precioini: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    material_precioactual: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
   
    //usertype id
}, {
    sequelize, modelName: "materiales",
});

export default Materiales;