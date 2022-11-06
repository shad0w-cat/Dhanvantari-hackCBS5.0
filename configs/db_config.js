const Sequelize = require("sequelize");
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, SQL_SERVER } = require("./config");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: SQL_SERVER,
});

const db = {
    sequelize: sequelize,
    Sequelize: Sequelize
}

module.exports = db;