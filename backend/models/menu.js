module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
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
};
