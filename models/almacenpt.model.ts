import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Almacenpt extends Model { }

Almacenpt.init({
    // Id generado automaticamente
   
    almacen_pasillo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    almacen_anaquel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    almacen_casillero: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    almacen_invini: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    almacen_invteorico: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    almacen_invfisico: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
    //usertype id
}, {
    sequelize, modelName: "almacenpt",
});

export default Almacenpt;