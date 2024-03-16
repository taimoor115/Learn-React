import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  // useSelector is use for the subscribe of data it send you data whenever it change
  // The selector will be called with the entire Redux store state as its only argument. The selector may
  // return any value as a result, including directly returning a value that was nested inside state, or deriving new values. The return value of the selector will be used as the return value of the useSelector() hook.
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Items count: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
