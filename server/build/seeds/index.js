"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_seeds_1 = __importDefault(require("./category-seeds"));
const product_seeds_1 = __importDefault(require("./product-seeds"));
const tag_seeds_1 = __importDefault(require("./tag-seeds"));
const product_tag_seeds_1 = __importDefault(require("./product-tag-seeds"));
const connection_1 = __importDefault(require("../config/connection"));
const seedAll = async () => {
    try {
        await connection_1.default.sync({ force: true });
        console.log("\n----- DATABASE SYNCED -----\n");
        await (0, category_seeds_1.default)();
        console.log("\n----- CATEGORIES SEEDED -----\n");
        await (0, product_seeds_1.default)();
        console.log("\n----- PRODUCTS SEEDED -----\n");
        await (0, tag_seeds_1.default)();
        console.log("\n----- TAGS SEEDED -----\n");
        await (0, product_tag_seeds_1.default)();
        console.log("\n----- PRODUCT TAGS SEEDED -----\n");
        console.log("\n----- ALL SEEDING COMPLETED -----\n");
    }
    catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
    process.exit(0);
};
seedAll();
