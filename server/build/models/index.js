"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTag = exports.Tag = exports.Category = exports.Product = void 0;
const Product_1 = __importDefault(require("./Product"));
exports.Product = Product_1.default;
const Category_1 = __importDefault(require("./Category"));
exports.Category = Category_1.default;
const Tag_1 = __importDefault(require("./Tag"));
exports.Tag = Tag_1.default;
const ProductTag_1 = __importDefault(require("./ProductTag"));
exports.ProductTag = ProductTag_1.default;
// Products belongsTo Category
Product_1.default.belongsTo(Category_1.default, {
    foreignKey: "category_id",
});
// Categories have many Products
Category_1.default.hasMany(Product_1.default, {
    foreignKey: "category_id",
});
// Products belongsToMany Tags (through ProductTag)
Product_1.default.belongsToMany(Tag_1.default, {
    foreignKey: "product_id",
    through: ProductTag_1.default,
});
// Tags belongsToMany Products (through ProductTag)
Tag_1.default.belongsToMany(Product_1.default, {
    foreignKey: "tag_id",
    through: ProductTag_1.default,
});
