import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Planes extends Model { }

Planes.init({
    // Id generado automaticamente
  
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    plan_lanzado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    
    
    
   
    //usertype id
}, {
    sequelize, modelName: "planes",
});

export default Planes;