import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import ProductList from "./components/Product/ProductList";
import ProductDetail from "./components/Product/ProductDetail";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
