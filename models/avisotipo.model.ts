import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Avisotipo extends Model { }

Avisotipo.init({
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
    sequelize, modelName: "avisotipo",
});

export default Avisotipo;