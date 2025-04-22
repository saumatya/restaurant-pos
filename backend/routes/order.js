// const express = require("express");
// const router = express.Router();
// const { Order, Menu } = require("../models");

// // POST /order – Place new order
// router.post("/", async (req, res) => {
//   /*
//     Expected body:
//     {
//       "items": [
//         { "menuid": 1, "qty": 2, "rate": 10.00 },
//         { "menuid": 2, "qty": 1, "rate": 5.00 }
//       ]
//     }
//   */

//   const { items } = req.body;
//   if (!items || !Array.isArray(items)) {
//     return res.status(400).json({ error: "Invalid items format" });
//   }

//   try {
//     const newOrder = await Order.create();
//     await newOrder.addMenus(
//       items.map((i) => i.menuid),
//       {
//         through: items.reduce((acc, item) => {
//           acc[item.menuid] = { qty: item.qty, rate: item.rate };
//           return acc;
//         }, {}),
//       }
//     );

//     res
//       .status(201)
//       .json({ message: "Order placed", orderid: newOrder.orderid });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error placing order" });
//   }
// });

// // GET /order – View orders (filterable)
// router.get("/", async (req, res) => {
//   try {
//     const orders = await Order.findAll({
//       include: {
//         model: Menu,
//         through: {
//           attributes: ["qty", "rate"],
//         },
//       },
//     });

//     res.json(orders);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error fetching orders" });
//   }
// });

// // Update an order by orderid
// router.put("/:id", async (req, res) => {
//   try {
//     const order = await Order.findByPk(req.params.id);
//     if (!order) return res.status(404).json({ error: "Order not found" });

//     // Update logic (e.g., update the menu items or quantities)
//     // You may need to adjust the associated order_items or order menus

//     res.status(200).json({ message: "Order updated successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error updating order" });
//   }
// });

// // Delete an order by orderid
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Order.destroy({
//       where: { orderid: req.params.id },
//     });

//     if (deleted === 0) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.json({ message: "Order deleted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error deleting order" });
//   }
// });

// // Get a specific order by orderid
// router.get("/:id", async (req, res) => {
//   try {
//     const order = await Order.findByPk(req.params.id, {
//       include: {
//         model: Menu,
//         through: {
//           attributes: ["qty", "rate"],
//         },
//       },
//     });

//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error fetching order details" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// POST /order – Place new order
router.post("/", orderController.createOrder);

// GET /order – View orders (filterable)
router.get("/", orderController.viewOrders);

// PUT /order/:id – Update an order
router.put("/:id", orderController.updateOrder);

// DELETE /order/:id – Delete an order
router.delete("/:id", orderController.deleteOrder);

// GET /order/:id – Get specific order
router.get("/:id", orderController.getOrder);

module.exports = router;
