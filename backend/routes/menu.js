const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

// Get all menu items
router.get("/", menuController.getAllMenuItems);

// Create a new menu item
router.post("/", menuController.createMenuItem);

// Update a menu item
router.put("/:menuid", menuController.updateMenuItem);

// Delete a menu item
router.delete("/:menuid", menuController.deleteMenuItem);

module.exports = router;
