import React, { useContext, useState } from "react";
import { CounterContext } from "../context/Counter";
const Counter = () => {
  const contextState = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => contextState.setCount(contextState.count + 1)}>
        {" "}
        Increment
      </button>
      <button onClick={() => contextState.setCount(contextState.count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
