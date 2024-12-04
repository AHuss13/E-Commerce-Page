import Product from "./Product";
import Category from "./Category";
import Tag from "./Tag";
import ProductTag from "./ProductTag";

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  through: ProductTag,
});

// Tags belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "tag_id",
  through: ProductTag,
});

export { Product, Category, Tag, ProductTag };
