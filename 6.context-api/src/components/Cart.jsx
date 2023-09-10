import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  return (
    <div className="item-cart">
      <h1>Cart</h1>
      <h5>Total Bill: $</h5>
    </div>
  );
};

export default Cart;
