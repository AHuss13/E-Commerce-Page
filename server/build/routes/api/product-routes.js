"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../../models");
// The `/api/products` endpoint
const router = (0, express_1.Router)();
// get all products
router.get("/", async (req, res) => {
    try {
        const products = await models_1.Product.findAll({
            include: [{ model: models_1.Category }, { model: models_1.Tag }],
        });
        res.json(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// get one product by its ID
router.get("/:id", async (req, res) => {
    try {
        const product = await models_1.Product.findByPk(req.params.id, {
            include: [{ model: models_1.Category }, { model: models_1.Tag }],
        });
        res.json(product);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// create a new product
router.post("/", async (req, res) => {
    try {
        const product = (await models_1.Product.create(req.body));
        if (req.body.tagIds?.length) {
            const productTagIds = req.body.tagIds.map((tag_id) => ({
                product_id: product.id,
                tag_id,
            }));
            await models_1.ProductTag.bulkCreate(productTagIds);
        }
        res.status(200).json(product);
    }
    catch (err) {
        res.status(400).json(err);
    }
});
// update product
router.put("/:id", (req, res) => {
    // update product data
    models_1.Product.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((product) => {
        if (req.body.tagIds && req.body.tagIds.length) {
            models_1.ProductTag.findAll({
                where: { product_id: req.params.id },
            }).then((productTags) => {
                const productTagIds = productTags.map((tag) => tag.get("tag_id"));
                const newProductTags = req.body.tagIds
                    .filter((tag_id) => !productTagIds.includes(tag_id))
                    .map((tag_id) => {
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
                    models_1.ProductTag.destroy({ where: { id: productTagsToRemove } }),
                    models_1.ProductTag.bulkCreate(newProductTags),
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
    const results = await models_1.Product.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.json(results);
});
exports.default = router;
