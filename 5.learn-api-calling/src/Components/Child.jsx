import React from "react";
import Parent from "./Parent";

const Child = () => {
  function sayHello() {
    console.log("Hello");
  }
  return (
    <div>
      Child
      <Parent sayHello={sayHello} />
    </div>
  );
};

export default Child;
