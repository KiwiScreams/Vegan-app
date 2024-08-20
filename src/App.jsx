import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./pages/home/Home";
import Stores from "./pages/stores/Stores";
import Shop from "./pages/shop/Shop";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "./components/product detail/ProductDetail";
import ProductList from "./components/product list/ProductList";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Vegan | Home";
        break;
      case "/stores":
        document.title = "Vegan | Stores";
        break;
      case "/shop":
        document.title = "Vegan | Shop";
        break;
      case "/products":
        document.title = "Vegan | Products";
        break;
      default:
        document.title = "Vegan World";
    }
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
