import "animate.css";
import { image } from "../utils/constants";
import { act, useEffect, useState } from "react";

const Animate = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < image.length - 1 ? prev + 1 : 0));
      console.log(activeIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <div>
        {image.map(
          (img, index) =>
            index == activeIndex && (
              <img
                className="animate__animated animate__backInLeft"
                src={img.content}
                alt=""
              />
            )
        )}
      </div>
    </>
  );
};

export default Animate;
