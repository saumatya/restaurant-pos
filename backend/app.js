const express = require("express");
const app = express();
const db = require("./models");

const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/order");

app.use(express.json());

app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
