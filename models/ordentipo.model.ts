import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Ordentipo extends Model { }

Ordentipo.init({
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
    sequelize, modelName: "ordentipo",
});

export default Ordentipo;