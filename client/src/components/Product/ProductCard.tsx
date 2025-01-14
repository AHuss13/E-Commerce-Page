import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { Product } from "../../types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onDelete?: () => void;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/products/${product.id}`)}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={`https://placehold.co/600x400?text=${encodeURIComponent(
          product.product_name
        )}`}
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
          <Stack direction="row" spacing={1}>
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
              />
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
