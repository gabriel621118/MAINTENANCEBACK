import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Articulos extends Model { }

Articulos.init({
    // Id generado automaticamente
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    
   
    //usertype id
}, {
    sequelize, modelName: "articulos",
});

export default Articulos;