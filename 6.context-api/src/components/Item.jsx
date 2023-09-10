import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="item-cards">
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
