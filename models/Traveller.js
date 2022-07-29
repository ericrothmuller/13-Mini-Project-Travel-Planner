const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Traveller extends Model {}

Traveller.init(
  {
    traveler_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.VARCHAR(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.VARCHAR(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "traveller",
  }
);

module.exports = Traveller;
