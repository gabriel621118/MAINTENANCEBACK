import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Ordendetalle extends Model { }

Ordendetalle.init({
    // Id generado automaticamente
  
    plandeta_actividad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    plandeta_hhombre: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   plandeta_matcantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    plandeta_numpersonas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    ordendeta_terminada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },


    
   
   
    //usertype id
}, {
    sequelize, modelName: "ordendetalle",
});

export default Ordendetalle;