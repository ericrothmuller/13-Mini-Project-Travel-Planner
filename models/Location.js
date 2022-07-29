const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.VARCHAR(30),
        allowNull: false,
      },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'location'
  }
);

module.exports = Location;
