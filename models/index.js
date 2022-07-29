const { transaction } = require("../config/connection");
const Location = require("./Location");
const Traveller = require("./Traveller");
const Trips = require("./Trips");

Traveller.hasMany(Trips, {
  foreignKey: "traveller_id",
  onDelete: "CASCADE",
});

Trips.belongsTo(Traveller, {
  foreignKey: "traveller_id",
});

Location.hasOne(Trips, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

Trips.belongsTo(Location, {
  foreignKey: "location_id",
});

module.exports = { Location, Traveller, Trips };
