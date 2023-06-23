import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Roles extends Model { }

Roles.init({
    // Id generado automaticamente
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nivel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "roles",
});

export default Roles;