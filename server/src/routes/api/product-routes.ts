import { Router, Request, Response } from "express";
import { Product, Category, Tag, ProductTag } from "../../models";

// The `/api/products` endpoint
const router = Router();

// get all products
router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product by its ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new product
router.post("/", async (req: Request, res: Response) => {
  try {
    const product = (await Product.create(req.body)) as unknown as {
      id: number;
    };
    if (req.body.tagIds?.length) {
      const productTagIds = req.body.tagIds.map((tag_id: number) => ({
        product_id: product.id,
        tag_id,
      }));
      await ProductTag.bulkCreate(productTagIds);
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update product
router.put("/:id", (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        ProductTag.findAll({
          where: { product_id: req.params.id },
        }).then((productTags) => {
          const productTagIds = productTags.map((tag) => tag.get("tag_id"));
          const newProductTags = req.body.tagIds
            .filter((tag_id: number) => !productTagIds.includes(tag_id))
            .map((tag_id: number) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter((tag) => !req.body.tagIds.includes(tag.get("tag_id")))
            .map((tag) => tag.get("id"));
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// delete one product by its `id` value
router.delete("/:id", async (req, res) => {
  const results = await Product.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(results);
});

export default router;
