const users = require("./users");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "appointments",
    {
      appNum: {
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      tokenNum: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: "userId",
        },
      },
      patientName: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      appType: {
        type: DataTypes.STRING(256),
        allowNull: true,
      },
      doctorName: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      appDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "appointments",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "appNum" }],
        },
        {
          name: "tokenNumber",
          unique: true,
          using: "BTREE",
          fields: [{ name: "tokenNum" }],
        },
      ],
    }
  );
};
