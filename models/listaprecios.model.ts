import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class ListaPrecios extends Model { }

ListaPrecios.init({
    // Id generado automaticamente
   
   precio_ini: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    precio_actual: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
   
    //usertype id
}, {
    sequelize, modelName: "listaprecios",
});

export default ListaPrecios;