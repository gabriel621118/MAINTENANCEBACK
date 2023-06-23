import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Preciosxcliente extends Model { }

Preciosxcliente.init({
    // Id generado automaticamente    
    
   
   
    //usertype id
}, {
    sequelize, modelName: "preciosxcliente",
});

export default Preciosxcliente;