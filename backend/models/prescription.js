const appointments = require("./appointments");
const users = require("./users");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "prescriptions",
    {
      presNum: {
        autoIncrement: true,
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      appNum: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: appointments,
          key: "appNum",
        },
      },
      patientName: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      disease: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      medicines: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "prescription",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "presNum" }],
        },
        {
          name: "appointmentNumber",
          unique: true,
          using: "BTREE",
          fields: [{ name: "appNum" }],
        },
      ],
    }
  );
};
