import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Cliente extends Model { }

Cliente.init({
    // Id generado automaticamente
    
    cliente_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_rfc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cliente_domicilio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_colonia: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 

    cliente_zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
        },
        
    },
    
    cliente_ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_pais: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    //usertype id
}, {
    sequelize, modelName: "cliente",
});

export default Cliente;