import { Router, Request, Response } from "express";
import { Tag, Product } from "../../models";

const router = Router();

// find all tags
router.get("/", async (req: Request, res: Response) => {
  try {
    const tags = await Tag.findAll({
      include: { model: Product },
    });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", async (req: Request, res: Response) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a tag by its `id` value
router.delete("/:id", async (req, res) => {
  const results = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(results);
});

export default router;
