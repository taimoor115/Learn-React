import { useState } from "react";

const UseStatePractice = () => {
  // const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [bol, setIsBol] = useState(true);

  const handleClick = () => {
    setIncrement(increment + 1);
    setIsBol(true);
  };

  const handleClick1 = () => {
    setIncrement(increment - 1);
    setIsBol(false);
  };

  return (
    <>
      <button onClick={handleClick}>Increment + 1</button>
      <button onClick={handleClick1}>Decrement - 1</button>
      <p>Score is {increment}</p>
      {increment !== 0 && <p>{bol ? "Incrementing" : "Decrementing"}</p>}
    </>
  );
};

export default UseStatePractice;
