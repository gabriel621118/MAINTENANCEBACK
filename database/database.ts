import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: 'simo',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
    dialect: 'mysql',
    logging: false, 
});

export default sequelize;