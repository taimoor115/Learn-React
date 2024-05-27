import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const countState = useContext(CounterContext);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          countState.setCount(countState.count + 1);
        }}
        className="bg-gray-200 p-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => {
          countState.setCount(countState.count - 1);
        }}
        className="bg-gray-200 p-2 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
