const { Sequelize } = require("sequelize");
const config = require("../config/config").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Menu = require("./menu")(sequelize, Sequelize);
db.Order = require("./order")(sequelize, Sequelize);

// Associations
db.Order.belongsToMany(db.Menu, { through: "order_items" });
db.Menu.belongsToMany(db.Order, { through: "order_items" });

module.exports = db;
