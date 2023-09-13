import React, { useContext } from "react";
import {CartContext} from '../Context/Cart'
const Cart = () => {

  const cart = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <h1>Cart</h1>
      <li>Laptop Bag</li>

      <p>Total $10</p>
    </div>
  );
};

export default Cart;
