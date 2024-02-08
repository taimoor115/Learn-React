import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
