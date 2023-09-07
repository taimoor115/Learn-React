import React, { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Counter - {count}</p>
      <p>Value is {count % 2 === 0 ? "Even" : "Odd"}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default CounterComponent;
