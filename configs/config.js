const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    // DB VARIABLES
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_SERVER: process.env.DB_SERVER,
    POOL_MAX: process.env.POOL_MAX,
    POOL_MIN: process.env.POOL_MIN,
    POOL_ACQUIRE: process.env.POOL_ACQUIRE,
    POOL_IDLE: process.env.POOL_IDLE,
    SQL_SERVER: process.env.SQL_SERVER,

    // SERVER VARIABLES
    SERVER_PORT: process.env.API_PORT,
};