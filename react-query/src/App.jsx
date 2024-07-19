import CarouselSlidesOnly from "./Component/CarouselSlidesOnly";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  //       {/* <div className="h-[100vw]"></div> */}
  {
    /* <div data-aos="fade-right" className="w-full text-start ">
      //   A
      // </div> */
  }
  // <div className="flex justify-between">
  //   {/* <CarouselSlidesOnly direction="false" /> */}
  //   <div data-aos="fade-right">A</div>
  //   <div data-aos="fade-left" className="justify-end">
  //     B
  //   </div>
  //   {/* <CarouselSlidesOnly direction="true" /> */}
  // </div>
  return (
    <>
      <div className="h-[100vw]"></div>

      <div className="flex p-10">
        <CarouselSlidesOnly direction="false" />

        {/* <CarouselSlidesOnly direction="true" /> */}
      </div>
    </>
  );
};

export default App;
