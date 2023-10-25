import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const Expandable = ({ children, maxChars = 100 }: Props) => {
  const [isExpandable, setIsExpandable] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpandable ? children : children.substring(0, maxChars);

  return (
    <>
      {text}...
      <button onClick={() => setIsExpandable(!isExpandable)}>
        {isExpandable ? "Less" : "More"}
      </button>
    </>
  );
};

export default Expandable;
