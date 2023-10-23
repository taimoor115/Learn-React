import { AiFillHeart } from "react-icons/ai";
import styles from "./Heart.module.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
  color: "red" | "grey";
}

const Heart = ({ onClick, color = "grey" }: Props) => {
  return (
    <>
      <AiFillHeart color={color} size={40} onClick={onClick} />
    </>
  );
};

export default Heart;
