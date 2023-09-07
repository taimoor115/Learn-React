import React from "react";

const Header = (props) => {
  return (
    <div className="todo-header">
      <h1>{props.Header}</h1>
    </div>
  );
};

export default Header;
