import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems([...items, product]);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar cartItems={items.length} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart items={items} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
