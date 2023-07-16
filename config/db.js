require('dotenv').config()
const { Sequelize } = require('sequelize');
const databaseName = process.env.DB_NAME    
const databaseUser = process.env.DB_USER
const databasePassword = process.env.DB_PASSWORD
const databaseHost = process.env.DB_HOST
const databaseDialect = process.env.DB_DIALECT
const databasePort = process.env.DB_PORT



const sequelize = new Sequelize('social_media', 'root', '', {
  host: 'localhost',
  dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = sequelize;
