import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("Mounting");

    return function() {
      console.log("Unmounting");
    }
  }, []);

  useEffect(() => {
    console.log("app useEffect:" + count);
    return function() {
      console.log("Return Function" + count);
    }
  }, [count, count2]);

  return (
    <div>
      <h3>Count - {count}</h3>
      <h3>Count - {count2}</h3>
      <button onClick={() => setCount(count + 1)}>Count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2</button>
    </div>
  );
};

export default MyComponent;
