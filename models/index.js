const { transaction } = require("../config/connection");
const Location = require("./Location");
const Traveller = require("./Traveller");
const Trips = require("./Trips");

Traveller.belongsToMany(Location, {
  through: { model: Trips },
});

Location.belongsToMany(Traveller, {
  through: { model: Trips },
});

module.exports = { Location, Traveller, Trips };
