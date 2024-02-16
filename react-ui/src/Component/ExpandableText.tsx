import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 250 }: Props) => {
  const [isExpandable, setIsExpandable] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpandable ? children : children.substring(0, maxChars);
  return (
    <>
      {text}...
      <button
        onClick={() => setIsExpandable(!isExpandable)}
        className="btn btn-warning text-black btn-sm"
      >
        {isExpandable ? "Read less" : "Read more"}
      </button>
    </>
  );
};

export default ExpandableText;
