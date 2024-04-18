import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Plandetalle extends Model { }

Plandetalle.init({
    // Id generado automaticamente
   
    
    plandeta_actividad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
    plandeta_hhombre: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
   
    plandeta_matcantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    plan_numpersonas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

   
    
   
    //usertype id
}, {
    sequelize, modelName: "plandetalle",
});


export default Plandetalle;