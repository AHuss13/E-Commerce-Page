"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../../models");
const router = (0, express_1.Router)();
// Get all categories
router.get("/", async (req, res) => {
    try {
        const categories = await models_1.Category.findAll({
            include: { model: models_1.Product },
        });
        res.json(categories);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to get categories", error: err });
    }
});
// Get one category by its `id` value
router.get("/:id", (async (req, res) => {
    try {
        const category = await models_1.Category.findByPk(req.params.id, {
            include: { model: models_1.Product },
        });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to get category", error: err });
    }
}));
// Create category
router.post("/", async (req, res) => {
    try {
        const newCategory = await models_1.Category.create({
            category_name: req.body.category_name,
        });
        res.status(201).json(newCategory);
    }
    catch (err) {
        res.status(400).json({ message: "Failed to create category", error: err });
    }
});
// Update a category by its `id` value
router.put("/:id", (async (req, res) => {
    try {
        if (!req.body.category_name) {
            return res.status(400).json({ message: "Category name is required" });
        }
        const category = await models_1.Category.update({ category_name: req.body.category_name }, { where: { id: req.params.id } });
        if (category[0] === 0) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json({ message: "Category updated successfully" });
    }
    catch (err) {
        res.status(400).json({ message: "Failed to update category", error: err });
    }
}));
// Delete a category by its `id` value
router.delete("/:id", (async (req, res) => {
    try {
        // First remove category associations from products
        await models_1.Product.update({ category_id: null }, { where: { category_id: req.params.id } });
        const result = await models_1.Category.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(204).end();
    }
    catch (err) {
        res.status(500).json({ message: "Failed to delete category", error: err });
    }
}));
exports.default = router;
