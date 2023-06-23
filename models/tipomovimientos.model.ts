import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Tipomovimientos extends Model { }

Tipomovimientos.init({
    // Id generado automaticamente
    tipomov_clave: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipomov_descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "tipomovimientos",
});

export default Tipomovimientos;