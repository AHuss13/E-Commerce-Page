"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../../models");
const router = (0, express_1.Router)();
// find all tags
router.get("/", async (req, res) => {
    try {
        const tags = await models_1.Tag.findAll({
            include: { model: models_1.Product },
        });
        res.json(tags);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// find a single tag by its `id`
router.get("/:id", async (req, res) => {
    try {
        const tag = await models_1.Tag.findByPk(req.params.id, {
            include: [{ model: models_1.Product }],
        });
        res.json(tag);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// create a new tag
router.post("/", async (req, res) => {
    try {
        const newTag = await models_1.Tag.create({
            tag_name: req.body.tag_name,
        });
        res.json(newTag);
    }
    catch (err) {
        res.status(400).json(err);
    }
});
// delete a tag by its `id` value
router.delete("/:id", async (req, res) => {
    const results = await models_1.Tag.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.json(results);
});
exports.default = router;
