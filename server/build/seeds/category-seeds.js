"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../models/Category"));
const categoryData = [
    {
        category_name: "Shirts",
    },
    {
        category_name: "Shorts",
    },
    {
        category_name: "Music",
    },
    {
        category_name: "Hats",
    },
    {
        category_name: "Shoes",
    },
];
const seedCategories = () => Category_1.default.bulkCreate(categoryData);
exports.default = seedCategories;
