import { useState } from "react";
import { Category, Tag } from "../../types";
import {
  Collapse,
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";

interface AddProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (productData: {
    product_name: string;
    price: number;
    stock: number;
    category_id: number;
    tagIds: number[];
  }) => Promise<void>;
  categories: Category[];
  tags: Tag[];
}

const AddProductForm = ({
  isOpen,
  onClose,
  onSubmit,
  categories,
  tags,
}: AddProductFormProps) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit({
        product_name: productName,
        price: Number(price),
        stock: Number(stock),
        category_id: Number(categoryId),
        tagIds: selectedTags.map(Number),
      });
      // Reset form
      setProductName("");
      setPrice("");
      setStock("");
      setCategoryId("");
      setSelectedTags([]);
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleTagChange = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Collapse in={isOpen}>
      <Card
        sx={{
          mt: 2,
          mb: 2,
          "&:hover": { transform: "none !important" },
          boxShadow: "none !important",
        }}
      >
        <CardContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              required
              label="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <TextField
              required
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              inputProps={{ step: "0.01", min: "0" }}
            />
            <TextField
              required
              label="Stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              inputProps={{ min: "0" }}
            />
            <FormControl required>
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryId}
                label="Category"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.category_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Tags</InputLabel>
              <Select
                multiple
                value={selectedTags}
                onChange={handleTagChange}
                input={<OutlinedInput label="Tags" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={
                          tags.find((tag) => tag.id.toString() === value)
                            ?.tag_name
                        }
                      />
                    ))}
                  </Box>
                )}
              >
                {tags.map((tag) => (
                  <MenuItem key={tag.id} value={tag.id.toString()}>
                    {tag.tag_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Add Product
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Collapse>
  );
};

export default AddProductForm;
