import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Ordentrabajo extends Model { }

Ordentrabajo.init({
    // Id generado automaticamente
   
  
    plan_decripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  
   
    orden_fechaini: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    orden_fechafin: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    orden_costoinicial: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    orden_costofinal: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "ordentrabajo",
});

export default Ordentrabajo;