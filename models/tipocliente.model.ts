import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class TipoCliente extends Model { }


TipoCliente.init({
    // Id generado automaticamente
  
    tipoclie_descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoclie_porcentaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   
   
    //usertype id
}, {
    sequelize, modelName: "tipocliente",
});

export default TipoCliente;