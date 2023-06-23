import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Bom extends Model { }

Bom.init({
    // Id generado automaticamente
   
   
    bom_decripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
   
   
    //usertype id
}, {
    sequelize, modelName: "bom",
});



  
  

export default Bom;