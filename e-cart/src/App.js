import Counter from "./Components/Counter";
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter is {counter}</div>
      <Counter counter={counter} setCounter={setCounter} />
      <Counter counter={counter} setCounter={setCounter} />
      <Counter counter={counter} setCounter={setCounter} />
      <Counter counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default App;
