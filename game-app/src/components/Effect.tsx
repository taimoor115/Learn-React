import { useEffect, useRef } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const Effect = () => {
  useEffect(() => {
    connect();

    return disconnect(); // clean up function
    // it reverse the effect of useEffect
    // Like if useEffect subscribe the user the clean up function unsubscribe the user
  });

  // const ref = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (ref.current) ref.current.focus();
  // });

  // useEffect(() => {
  //   document.title = "App";
  // });

  return <>{/* <input ref={ref} type="text" className="form-control" /> */}</>;
};

export default Effect;
