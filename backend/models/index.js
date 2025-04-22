// models/index.js
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
db.OrderItem = require("./orderItem")(sequelize, Sequelize);

// Associations
db.Order.belongsToMany(db.Menu, { through: db.OrderItem });
db.Menu.belongsToMany(db.Order, { through: db.OrderItem });

db.Order.hasMany(db.OrderItem);
db.Menu.hasMany(db.OrderItem);
db.OrderItem.belongsTo(db.Order);
db.OrderItem.belongsTo(db.Menu);

module.exports = db;
