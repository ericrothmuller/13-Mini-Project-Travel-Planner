const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trips extends Model {}

Trips.init(
  {
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Traveler",
        key: "traveler_id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        mode: "Location",
        key: "location_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "trips",
  }
);

module.exports = Trips;
