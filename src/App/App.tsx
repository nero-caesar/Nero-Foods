import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import '@fontsource/poppins/400.css';
import Home from "../Pages/Home/home.tsx";
import Menu from "../Pages/Menu/menu.tsx";
import Cart from "../Pages/Carty/cart.tsx";
import type { CartItem, Product } from "../Component/Cart/carttypes.ts";
import "./App.css";
import Navbar from "../Component/Navbar/Navbar.tsx";

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState("");

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const found = prev.find(item => item.id === product.id);
      return found
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
    showNotification(`${product.name} has successfully been added to cart`);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <main>
      <Navbar cart={cart} />
      {notification && (
        <div className="cart-notification">
          {notification}
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Menu
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              onClearCart={handleClearCart}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default App;
