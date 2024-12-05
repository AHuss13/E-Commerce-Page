import Category from "../models/Category";

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
  {
    category_name: "Electronics",
  },
  {
    category_name: "Home & Kitchen",
  },
  {
    category_name: "Books",
  },
  {
    category_name: "Sports & Fitness",
  },
  {
    category_name: "Accessories",
  },
  {
    category_name: "Gaming",
  },
  {
    category_name: "Outdoor",
  },
  {
    category_name: "Beauty",
  },
  {
    category_name: "Pet Supplies",
  },
  {
    category_name: "Toys",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

export default seedCategories;
