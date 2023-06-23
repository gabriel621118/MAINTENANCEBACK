import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Bomdetalle extends Model { }

Bomdetalle.init({
    // Id generado automaticamente
   
  
    material_cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    
   
   
    //usertype id
}, {
    sequelize, modelName: "bomdetalle",
});

export default Bomdetalle;