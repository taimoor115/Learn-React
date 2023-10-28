import { createContext, useContext } from "react";
import React, { useState } from "react";
export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
export const CartContext = createContext(null);
export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
