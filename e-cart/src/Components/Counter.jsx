import React, { useEffect } from "react";

const Counter = ({ setCounter, counter }) => {
  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
        className="bg-gray-200 p-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter((counter) => counter - 1);
        }}
        className="bg-gray-200 p-2 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
