import React, { useReducer } from "react";
import { reducer } from "./reducer/counterReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>Count {state}</h2>
      <button onClick={() => dispatch("Increment")}>Add</button>
      <button disabled={state <= 0} onClick={() => dispatch("Decrement")}>
        Minus
      </button>
    </div>
  );
};

export default App;
