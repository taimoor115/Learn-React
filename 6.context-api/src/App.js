import React, { useContext } from "react";
import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";
// import Counter from './components/Counter';
// import { CounterContext } from './context/Counter'
function App() {
  // const contextState = useContext(CounterContext);

  return (
    <div className="App">
      {/* <h1>Count is {contextState.count}</h1> */}
      {/* <Counter />
      <Counter />
      <Counter />
      <Counter /> */}

      <Item name="MacBook Pro" price={100000} />
      <Item name="Mobile" price={54000} />
      <Item name="Pen Drive" price={4000} />
      <Cart />
    </div>
  );
}

export default App;
