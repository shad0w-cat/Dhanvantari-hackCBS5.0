var db = require('../configs/db_config')

db.users = require("./users")(db.sequelize, db.Sequelize.DataTypes);
db.appointments = require("./appointments")(db.sequelize, db.Sequelize.DataTypes);
db.prescription = require("./prescription")(db.sequelize, db.Sequelize.DataTypes);

module.exports = db;
