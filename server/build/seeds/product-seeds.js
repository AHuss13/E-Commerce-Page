"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../models/Product"));
const productData = [
    {
        product_name: "Plain T-Shirt",
        price: 14.99,
        stock: 14,
        category_id: 1,
    },
    {
        product_name: "Running Sneakers",
        price: 90.0,
        stock: 25,
        category_id: 5,
    },
    {
        product_name: "Branded Baseball Hat",
        price: 22.99,
        stock: 12,
        category_id: 4,
    },
    {
        product_name: "Top 40 Music Compilation Vinyl Record",
        price: 12.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: "Cargo Shorts",
        price: 29.99,
        stock: 22,
        category_id: 2,
    },
];
const seedProducts = () => Product_1.default.bulkCreate(productData);
exports.default = seedProducts;
