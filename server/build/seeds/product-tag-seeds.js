"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductTag_1 = __importDefault(require("../models/ProductTag"));
const productTagData = [
    {
        product_id: 1,
        tag_id: 6,
    },
    {
        product_id: 1,
        tag_id: 7,
    },
    {
        product_id: 1,
        tag_id: 8,
    },
    {
        product_id: 2,
        tag_id: 6,
    },
    {
        product_id: 3,
        tag_id: 1,
    },
    {
        product_id: 3,
        tag_id: 3,
    },
    {
        product_id: 3,
        tag_id: 4,
    },
    {
        product_id: 3,
        tag_id: 5,
    },
    {
        product_id: 4,
        tag_id: 1,
    },
    {
        product_id: 4,
        tag_id: 2,
    },
    {
        product_id: 4,
        tag_id: 8,
    },
    {
        product_id: 5,
        tag_id: 3,
    },
];
const seedProductTags = () => ProductTag_1.default.bulkCreate(productTagData);
exports.default = seedProductTags;
