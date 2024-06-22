import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef();
  return (
    <div>
      Parent
      <Child ref={ref} />
      <button onClick={() => ref.current.sayHello()}>Button</button>
    </div>
  );
};

export default Parent;
