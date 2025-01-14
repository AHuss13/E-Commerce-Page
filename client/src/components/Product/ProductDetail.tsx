import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { api } from "../../services/api";
import { Product } from "../../types";
import LoadingSpinner from "../LoadingSpinner";
import DeleteButton from "../common/DeleteButton";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.getProduct(Number(id));
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.deleteProduct(product!.id);
      navigate("/");
    } catch (err) {
      setError("Failed to delete product");
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <Card>
      <CardMedia
        component="img"
        height="400"
        image={`https://placehold.co/600x400?text=${encodeURIComponent(
          product.product_name
        )}`}
        alt={product.product_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {product.product_name}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.price}
        </Typography>
        <Typography variant="body1">Stock: {product.stock}</Typography>
        <Box mt={2}>
          <Typography variant="body1">
            Category: {product.category?.category_name}
          </Typography>
          <Typography variant="body1">
            Tags: {product.tags?.map((tag) => tag.tag_name).join(", ")}
          </Typography>
        </Box>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <DeleteButton
            onDelete={handleDelete}
            itemName={product.product_name}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
