import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Cierres extends Model { }

Cierres.init({
    // Id generado automaticamente
    muñeco_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cierre_invini: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cierre_invteorico: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cierre_fisico: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cierre_fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
   
    //usertype id
}, {
    sequelize, modelName: "cierres",
});

export default Cierres;