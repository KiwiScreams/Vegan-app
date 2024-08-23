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
import Cart from "./components/cart/Cart";
import CheckOut from "./components/checkout/CheckOut";
import Loader from "./components/loader/Loader";
function App() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

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
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  const getDiscountedPrice = (item) => {
    return item.discount
      ? item.price - (item.price * item.discount) / 100
      : item.price;
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + getDiscountedPrice(item) * item.quantity;
  }, 0);
  const handleQuantityChange = (idx, newQuantity) => {
    setCartItems(
      cartItems.map((item, index) => {
        if (index === idx) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };
  const handleClearCart = () => {
    cartItems.forEach((item) => {
      handleRemoveItem(item);
    });
  };
  return (
    <>
      <Header />
      <Cart
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveItem}
        totalPrice={totalPrice}
        handleClearCart={handleClearCart}
      />
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/products"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/checkout"
          element={<CheckOut handleClearCart={handleClearCart} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
