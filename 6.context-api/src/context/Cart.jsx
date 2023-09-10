import { createContext } from "react";
import React, { useState } from 'react';


export const CartContext = createContext(null);
export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
  <CartContext.Provider value={{items, setItems}}>
    {props.children}
    </CartContext.Provider>
  );
};
