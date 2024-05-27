import Counter from "./Components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";
const App = () => {
  const countState = useContext(CounterContext);
  console.log(countState);
  return (
    <div>
      <div>Counter is {countState.count}</div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};
export default App;
