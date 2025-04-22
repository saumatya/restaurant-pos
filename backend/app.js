const express = require("express");
const app = express();
const db = require("./models");

// Import routes
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/order");

// Middleware setup
app.use(express.json());

// Use routes
app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);

const PORT = process.env.PORT || 3000;

// Sync database and then start the server
db.sequelize
  .sync({ force: false }) // Change force to false unless you need tables recreated every time
  .then(() => {
    console.log("Database tables have been synced.");

    // Start the server after syncing the database
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing the database:", err);
  });
