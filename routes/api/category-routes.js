const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// ALT
// router.get('/', (req, res) => {
//   // find all categories
//   Category.findAll()
//   .then((results) => {
//     res.json(results)
//   })
//   // be sure to include its associated Products
// });

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: { model: Product },
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Failed to get categories", error: err });
  }
});

// Get one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: { model: Product },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (err) {
    res.status(500).json({ message: "Failed to get category", error: err });
  }
});

// Create category
router.post("/", validateCategory, async (req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: "Failed to create category", error: err });
  }
});

// Update a category by its `id` value
router.put("/:id", validateCategory, async (req, res) => {
  try {
    const category = await Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id } }
    );

    if (category[0] === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category updated successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to update category", error: err });
  }
});

// Delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    // First remove category associations from products
    await Product.update(
      { category_id: null },
      { where: { category_id: req.params.id } }
    );

    const result = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!result) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: "Failed to delete category", error: err });
  }
});

module.exports = router;
