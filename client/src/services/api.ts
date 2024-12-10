import axios from "axios";
import { Product, Category, Tag } from "../types";

const API_BASE_URL = "http://localhost:3001/api";

export const api = {
  // Get endpoints
  getCategories: () => axios.get<Category[]>(`${API_BASE_URL}/categories`),

  getProducts: () => axios.get<Product[]>(`${API_BASE_URL}/products`),

  getProduct: (id: number) =>
    axios.get<Product>(`${API_BASE_URL}/products/${id}`),

  getTags: () => axios.get<Tag[]>(`${API_BASE_URL}/tags`),

  // Create endpoints
  createCategory: (category: Omit<Category, "id">) =>
    axios.post<Category>(`${API_BASE_URL}/categories`, category),

  createProduct: (product: Omit<Product, "id">) =>
    axios.post<Product>(`${API_BASE_URL}/products`, product),

  createTag: (tag: Omit<Tag, "id">) =>
    axios.post<Tag>(`${API_BASE_URL}/tags`, tag),

  // Delete endpoints
  deleteCategory: (id: number) =>
    axios.delete(`${API_BASE_URL}/categories/${id}`),

  deleteProduct: (id: number) => axios.delete(`${API_BASE_URL}/products/${id}`),

  deleteTag: (id: number) => axios.delete(`${API_BASE_URL}/tags/${id}`),

  // Update endpoints
  updateCategory: (id: number, category: Partial<Category>) =>
    axios.put<Category>(`${API_BASE_URL}/categories/${id}`, category),

  updateProduct: (id: number, product: Partial<Product>) =>
    axios.put<Product>(`${API_BASE_URL}/products/${id}`, product),

  updateTag: (id: number, tag: Partial<Tag>) =>
    axios.put<Tag>(`${API_BASE_URL}/tags/${id}`, tag),
};
