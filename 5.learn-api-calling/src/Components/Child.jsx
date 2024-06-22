import React, { forwardRef, useImperativeHandle } from "react";

const Child = (props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      sayHello,
    };
  });
  const sayHello = () => {
    console.log("Hello Brother");
  };
  return <div>Child</div>;
};

export default forwardRef(Child);
