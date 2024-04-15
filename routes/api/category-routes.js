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

router.get("/", async (req, res) => {
  // find all categories
  const results = await Category.findAll({
    include: { model: Product },
  });
  res.json(results);
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  const results = await Category.findByPk(req.params.id, {
    include: {model: Product}
  });

  res.json(results);
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  // create a new category
  const results = await Category.create({
    category_name: req.body.category_name,
  });

  res.json(results);
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  const results = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json(results);
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const results = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(results);
});

module.exports = router;
