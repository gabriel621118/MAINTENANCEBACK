import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: 'simo',
    host: 'localhost',
    password: '',
    username: 'root',
    dialect: 'mysql',
    logging: false, 
});

export default sequelize;