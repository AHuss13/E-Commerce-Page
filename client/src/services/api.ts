import axios from "axios";
import { Product, Category, Tag } from "../types";

const API_BASE_URL = "http://localhost:3001/api";

export const api = {
  // Products
  getProducts: () => axios.get<Product[]>(`${API_BASE_URL}/products`),

  getProduct: (id: number) =>
    axios.get<Product>(`${API_BASE_URL}/products/${id}`),

  createProduct: (product: Omit<Product, "id">) =>
    axios.post<Product>(`${API_BASE_URL}/products`, product),

  updateProduct: (id: number, product: Partial<Product>) =>
    axios.put<Product>(`${API_BASE_URL}/products/${id}`, product),

  deleteProduct: (id: number) => axios.delete(`${API_BASE_URL}/products/${id}`),

  // Categories
  getCategories: () => axios.get<Category[]>(`${API_BASE_URL}/categories`),

  // Tags
  getTags: () => axios.get<Tag[]>(`${API_BASE_URL}/tags`),
};
