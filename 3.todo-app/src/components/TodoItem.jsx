import React from "react";

const TodoItem = (props) => {
  return (
    <li className="itemsList">
      <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <span className="text">{props.text}</span>
      </span>
      <span>...</span>
    </li>
  );
};

export default TodoItem;
