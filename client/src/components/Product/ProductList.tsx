import { useState, useEffect } from "react";
import {
  Grid,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Alert,
  Button,
} from "@mui/material";
import { api } from "../../services/api";
import { Product, Category, Tag } from "../../types";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../LoadingSpinner";
import AddProductForm from "./AddProductForm";


const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes, tagsRes] = await Promise.all([
        api.getProducts(),
        api.getCategories(),
        api.getTags(),
      ]);
      setProducts(productsRes.data);
      setCategories(categoriesRes.data);
      setTags(tagsRes.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = async (productData: {
    product_name: string;
    price: number;
    stock: number;
    category_id: number;
    tagIds: number[];
  }) => {
    try {
      await api.createProduct(productData);
      fetchData(); // Refresh the product list
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Failed to create product");
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.product_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category_id === Number(selectedCategory);

    const price = Number(product.price);
    let matchesPrice = true;
    if (priceRange === "under25") matchesPrice = price < 25;
    if (priceRange === "25to50") matchesPrice = price >= 25 && price <= 50;
    if (priceRange === "over50") matchesPrice = price > 50;
    if (priceRange === "over300") matchesPrice = price > 300;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleProductDelete = () => {
    // Refresh the products list after deletion
    fetchData();
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container>
      <Box sx={{ mb: 4, mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsAddFormOpen(!isAddFormOpen)}
          sx={{ mb: 2 }}
        >
          {isAddFormOpen ? "Cancel" : "Add Product"}
        </Button>

        <AddProductForm
          isOpen={isAddFormOpen}
          onClose={() => setIsAddFormOpen(false)}
          onSubmit={handleAddProduct}
          categories={categories}
          tags={tags}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <MenuItem value="all">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.category_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Price Range</InputLabel>
              <Select
                value={priceRange}
                label="Price Range"
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <MenuItem value="all">All Prices</MenuItem>
                <MenuItem value="under25">Under $25</MenuItem>
                <MenuItem value="25to50">$25 to $50</MenuItem>
                <MenuItem value="over50">Over $50</MenuItem>
                <MenuItem value="over300">Over $300</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onDelete={handleProductDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
