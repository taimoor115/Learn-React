import React, { useContext } from "react";
import { CartContext } from "../Context/Cart";

const Cart = () => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      {cartContext.items.map((item) => (
        <div>
          <img src={item.image} alt="" className="w-24" />
          <p className="font bold text-2xl">{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
