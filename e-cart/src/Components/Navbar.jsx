import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Cart";

const Navbar = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="flex justify-between p-3">
      <div>
        <span>Props Drilling</span>
      </div>
      <div className="">
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div>
        <span>Cart Items: {cartContext.items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
