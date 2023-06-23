import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Employee extends Model { }

Employee.init({
    // Id generado automaticamente
   
   Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Domicilio: {
        type: DataTypes.STRING,
        allowNull: false
    },
   Telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
  

   
   
    //usertype id
}, {
    sequelize, modelName: "employee",
});

export default Employee;