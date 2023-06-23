import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class OrdenStatus extends Model { }

OrdenStatus.init({
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
    sequelize, modelName: "ordenstatus",
});

export default OrdenStatus;