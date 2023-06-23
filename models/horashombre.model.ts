import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Horashombre extends Model { }

Horashombre.init({
    // Id generado automaticamente
    
    hhombre_descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hhombre_precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "horashombre",
});

export default Horashombre;