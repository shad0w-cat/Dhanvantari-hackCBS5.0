var db = require('../configs/db_config')

db.users = require("./users")(db.sequelize, db.Sequelize.DataTypes);

module.exports = db;
