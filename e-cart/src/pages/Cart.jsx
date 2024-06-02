import React, { useContext } from "react";
import { CartContext } from "../context/Cart";
import { useSelector } from "react-redux";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div>
      {items.map((item) => (
        <div>
          <img src={item.image} alt="" width="80px" />
          <p className="font bold text-2xl">{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
