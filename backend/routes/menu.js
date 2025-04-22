const express = require("express");
const router = express.Router();
const { Menu } = require("../models");

// GET /menu – List all menu items
router.get("/", async (req, res) => {
  const items = await Menu.findAll();
  res.json(items);
});

// POST /menu – Create new menu item
router.post("/", async (req, res) => {
  const newItem = await Menu.create(req.body);
  res.status(201).json(newItem);
});

// PUT /menu/:id – Update menu item
router.put("/:id", async (req, res) => {
  const item = await Menu.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });

  await item.update(req.body);
  res.json(item);
});

// DELETE /menu/:id – Delete menu item
router.delete("/:id", async (req, res) => {
  const rowsDeleted = await Menu.destroy({ where: { menuid: req.params.id } });
  if (rowsDeleted === 0)
    return res.status(404).json({ error: "Item not found" });
  res.status(204).send();
});

module.exports = router;
