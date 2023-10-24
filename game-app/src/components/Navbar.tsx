import React from "react";

interface Props {
  cartItemCount: number;
}
const Navbar = ({ cartItemCount }: Props) => {
  return <div>NavBar {cartItemCount}</div>;
};

export default Navbar;
