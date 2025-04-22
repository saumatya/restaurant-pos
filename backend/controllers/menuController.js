const { Menu } = require("../models");

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.findAll();
    res.json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res
      .status(500)
      .json({ message: "Error fetching menu items", error: error.message });
  }
};

// Create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const newItem = await Menu.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating menu item:", error);
    res
      .status(500)
      .json({ message: "Error creating menu item", error: error.message });
  }
};

// Update a menu item
exports.updateMenuItem = async (req, res) => {
  try {
    const [updated] = await Menu.update(req.body, {
      where: { menuid: req.params.menuid },
    });

    if (updated === 0) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    const updatedItem = await Menu.findByPk(req.params.menuid);
    res.json({ message: "Menu item updated successfully", updatedItem });
  } catch (error) {
    console.error("Error updating menu item:", error);
    res
      .status(500)
      .json({ message: "Error updating menu item", error: error.message });
  }
};

// Delete a menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    const deleted = await Menu.destroy({
      where: { menuid: req.params.menuid },
    });

    if (deleted === 0) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    console.error("Error deleting menu item:", error);
    res
      .status(500)
      .json({ message: "Error deleting menu item", error: error.message });
  }
};
