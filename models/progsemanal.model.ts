import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Progsemanal extends Model { }

Progsemanal.init({
    // Id generado automaticamente
    
    hhlunes: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    hhmartes: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    hhmiercoles: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    hhjueves: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    hhviernes: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
   fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   semana: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "progsemanal",
});

export default Progsemanal;