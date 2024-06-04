import React, { memo } from "react";

const Child = ({ childPropFn }) => {
  console.log("Child is mount");
  return <div></div>;
};

export default memo(Child);
