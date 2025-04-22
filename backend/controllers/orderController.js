// POST /order – Place new order
const { Order, Menu, OrderItem } = require("../models");

exports.createOrder = async (req, res) => {
  const { order_date, items } = req.body; // get order details from the request body

  try {
    // Create the order first
    const order = await Order.create({ order_date });

    // Now create the OrderItem associations
    const orderItems = await Promise.all(
      items.map(async (item) => {
        // Find the Menu by menuid
        const menuItem = await Menu.findByPk(item.menuid);

        // If the menu item does not exist, throw an error
        if (!menuItem) {
          throw new Error(`Menu item with menuid ${item.menuid} not found`);
        }

        // Create OrderItem and associate it with the created order
        return await OrderItem.create({
          qty: item.qty,
          rate: item.rate,
          OrderOrderid: order.orderid, // associate with order
          MenuMenuid: menuItem.menuid, // associate with menu
        });
      })
    );

    // Send the response
    res.status(201).json({ order, orderItems });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET /order – View orders (filterable)
exports.viewOrders = async (req, res) => {
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
};

// PUT /order/:id – Update an order
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid items format" });
    }

    await order.setMenus([]);

    const orderItems = items.map((item) => ({
      menuId: item.menuid,
      qty: item.qty,
      rate: item.rate,
    }));

    await order.setMenus(
      items.map((i) => i.menuid),
      { through: orderItems }
    );

    res.status(200).json({ message: "Order updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating order" });
  }
};

// DELETE /order/:id – Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.setMenus([]);
    await order.destroy();

    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting order" });
  }
};

// GET /order/:id – Get a specific order
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: {
        model: Menu,
        through: {
          attributes: ["qty", "rate"],
        },
      },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching order details" });
  }
};
