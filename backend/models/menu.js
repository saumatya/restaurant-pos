module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      menuid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      item_name: DataTypes.STRING,
      rate: DataTypes.DECIMAL,
      category: DataTypes.STRING,
      unit: DataTypes.STRING,
    },
    {
      tableName: "menu",
      timestamps: false,
    }
  );

  // Define the many-to-many relationship with Order through OrderItem
  Menu.associate = function (models) {
    Menu.belongsToMany(models.Order, { through: models.OrderItem });
  };

  return Menu;
};
