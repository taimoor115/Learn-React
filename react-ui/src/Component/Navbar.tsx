import { useState } from "react";
import logo from "/home/taimoor_hussain/Desktop/React-Apps/react-ui/public/heaven.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center flex-wrap p-2">
      <div className="flex items-center flex-shrink-0 text-white">
        <img src={logo} className="w-100 h-10 " alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow  ml-96 items-center">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
          >
            Contact
          </Link>
          <Link
            to="about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
          >
            About
          </Link>
        </div>
        <div>
          <Link to="sign_up">
            <button className="inline-flex items-center rounded-md btn-md btn-warning border-0 mt-2 p-0 text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
