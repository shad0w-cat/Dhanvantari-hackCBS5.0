module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    userId: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mobileNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "mobileNumber"
    },
    aadhaarNumber: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    emailAddress: {
      type: DataTypes.STRING(320),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    bloodGroup: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    userType: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "aadhaarNumber",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aadhaarNumber" },
        ]
      },
      {
        name: "mobileNumber",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mobileNumber" },
        ]
      },
    ]
  });
};