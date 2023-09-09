import React, { useEffect, useState } from "react";
const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return function () {
      clearInterval(time);
    };
  }, [timer]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Current Time is {timer}</p>
    </div>
  );
};

export default Timer;
