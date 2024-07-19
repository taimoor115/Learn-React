import React from "react";

const Parent = ({ sayHello }) => {
  const handleClick = () => {
    sayHello();
  };
  return (
    <div>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default Parent;
