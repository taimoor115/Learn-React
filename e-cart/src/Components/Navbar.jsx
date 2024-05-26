import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
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
        <span>Cart Items: {cartItems}</span>
      </div>
    </div>
  );
};

export default Navbar;
