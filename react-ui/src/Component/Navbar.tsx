import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            Games
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/detail/sign_up" className="btn">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
