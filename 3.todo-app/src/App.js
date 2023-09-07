import React, { useEffect, useState } from "react";
// import './style.css'
// import Header from "./components/Header";
// import Button from "./components/Button";
// import TodoItem from "./components/TodoItem";
// import CounterComponent from "./components/CounterComponent";
// import MyComponent from "./components/MyComponent";
import Timer from "./components/Timer";
function App() {

  // const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Timer />
      {/* {toggle ? <MyComponent /> : <></>} */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </div>
  );
}

export default App;
