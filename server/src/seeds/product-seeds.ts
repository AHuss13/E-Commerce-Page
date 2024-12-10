import Product from "../models/Product";

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
  {
    product_name: "iPhone 15 Pro",
    price: 999.99,
    stock: 15,
    category_id: 6,
  },
  {
    product_name: "Air Fryer",
    price: 89.99,
    stock: 20,
    category_id: 7,
  },
  {
    product_name: "Harry Potter Collection",
    price: 49.99,
    stock: 30,
    category_id: 8,
  },
  {
    product_name: "Yoga Mat",
    price: 24.99,
    stock: 40,
    category_id: 9,
  },
  {
    product_name: "Smart Watch",
    price: 199.99,
    stock: 18,
    category_id: 6,
  },
  {
    product_name: "Gaming Console",
    price: 499.99,
    stock: 10,
    category_id: 11,
  },
  {
    product_name: "Camping Tent",
    price: 199.99,
    stock: 15,
    category_id: 12,
  },
  {
    product_name: "Luxury Skincare Set",
    price: 89.99,
    stock: 25,
    category_id: 13,
  },
  {
    product_name: "Pet Bed",
    price: 45.99,
    stock: 30,
    category_id: 14,
  },
  {
    product_name: "LEGO Set",
    price: 59.99,
    stock: 20,
    category_id: 15,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

export default seedProducts;
