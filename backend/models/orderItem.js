module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define("OrderItem", {
    qty: {
      type: DataTypes.INTEGER, // Column for quantity
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // other fields you may have
  });

  // Associations to link OrderItem with Order and Menu
  OrderItem.associate = function (models) {
    OrderItem.belongsTo(models.Order); // Connects OrderItem to Order
    OrderItem.belongsTo(models.Menu); // Connects OrderItem to Menu
  };

  return OrderItem;
};
