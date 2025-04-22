const express = require("express");
const router = express.Router();
const { Order, Menu } = require("../models");

// POST /order – Place new order
router.post("/", async (req, res) => {
  /*
    Expected body:
    {
      "items": [
        { "menuid": 1, "qty": 2, "rate": 10.00 },
        { "menuid": 2, "qty": 1, "rate": 5.00 }
      ]
    }
  */

  const { items } = req.body;
  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: "Invalid items format" });
  }

  try {
    const newOrder = await Order.create();
    await newOrder.addMenus(
      items.map((i) => i.menuid),
      {
        through: items.reduce((acc, item) => {
          acc[item.menuid] = { qty: item.qty, rate: item.rate };
          return acc;
        }, {}),
      }
    );

    res
      .status(201)
      .json({ message: "Order placed", orderid: newOrder.orderid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error placing order" });
  }
});

// GET /order – View orders (filterable)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: {
        model: Menu,
        through: {
          attributes: ["qty", "rate"],
        },
      },
    });

    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching orders" });
  }
});

module.exports = router;
