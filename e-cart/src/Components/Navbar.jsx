import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);

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
        <span>Cart Items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
