import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="200"
        image={`https://source.unsplash.com/random/400x400?${product.product_name}`}
        alt={product.product_name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.product_name}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
        <Box sx={{ mt: 1, mb: 2 }}>
          <Chip
            label={`Stock: ${product.stock}`}
            color={product.stock > 0 ? "success" : "error"}
            size="small"
          />
          {product.category && (
            <Chip
              label={product.category.category_name}
              color="secondary"
              size="small"
              sx={{ ml: 1 }}
            />
          )}
        </Box>
        <Button
          component={Link}
          to={`/products/${product.id}`}
          variant="contained"
          color="primary"
          fullWidth
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
