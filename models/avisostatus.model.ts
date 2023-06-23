import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class AvisoStatus extends Model { }

AvisoStatus.init({
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
    sequelize, modelName: "avisostatus",
});

export default AvisoStatus;