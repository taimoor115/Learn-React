import React, { useCallback, useState } from "react";
import Child from "./Components/Child";

const App = () => {
  const [add, setAdd] = useState(0);

  const childPropFn = useCallback(() => {
    console.log("ChildPropFn");
  }, []);
  return (
    <div>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <Child childPropFn={childPropFn} />
    </div>
  );
};

export default App;
