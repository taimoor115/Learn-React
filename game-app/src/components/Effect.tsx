import { useEffect, useRef } from "react";

const Effect = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "App";
  });

  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
};

export default Effect;
