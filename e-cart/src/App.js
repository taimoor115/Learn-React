import React, { useMemo, useState } from "react";
const UseMemoCallback = () => {
  const [add, setAdd] = useState(0);
  const [miuns, setMinus] = useState(100);

  const multiply = useMemo(() => {
    console.log("I'm in");
    return add * 10;
  }, [add]);
  return (
    <>
      <div>{multiply}</div>
      <button onClick={() => setAdd(add + 1)}>Add {add}</button>
      <button onClick={() => setMinus(miuns - 1)}>Minus {miuns}</button>
    </>
  );
};

export function App(props) {
  return (
    <div className="App">
      <UseMemoCallback />
    </div>
  );
}

export default App;
