import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
