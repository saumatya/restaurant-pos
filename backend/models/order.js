module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      orderid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "orders",
      timestamps: false,
    }
  );

  // Define the many-to-many relationship with Menu through OrderItem
  Order.associate = function (models) {
    Order.belongsToMany(models.Menu, { through: models.OrderItem });
  };

  return Order;
};
