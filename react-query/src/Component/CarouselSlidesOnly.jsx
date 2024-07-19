import { useState } from "react";
import Slider from "react-slick";

const CarouselSlidesOnly = ({ aos }) => {
  const [direction, setDirection] = useState(false);
  // const [nextSlide, setNextSlide] = useState(-1);

  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    rtl: direction === true,
    useTransform: true,
    // slickGoto(next) {
    //   this.slickGoto(next);
    // },

    beforeChange: () => {
        slickGoTo()
    }, 
    afterChange: () => {
      setDirection((prev) => !prev);
      // setNextSlide(next);
      // slickNext();

      console.log("After", direction);
    },
  };

  return (
    <Slider data-aos={aos} {...settings} className="w-[50%]">
      <div className="custom-slide">
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/NBA-2K25-launch-keyart-01-en-26jun24?$1200px$"
          alt="Slide 1"
          className="slide-item"
        />
      </div>
      <div className="custom-slide">
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/concord-keyart-01-en-25jan24?$1200px$"
          alt="Slide 2"
          className="slide-item"
        />
      </div>
      <div className="custom-slide">
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/shadow-of-the-erdtree-listing-thumb-01-28may25$en?$1200px$"
          alt="Slide 3"
          className="slide-item"
        />
      </div>
      <div className="custom-slide">
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/18-great-games-you-mightve-missed-in-24-keyart-01-17jun24$en?$1200px$"
          alt="Slide 4"
          className="slide-item"
        />
      </div>
      <div className="custom-slide">
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/18-great-games-you-mightve-missed-in-24-keyart-01-17jun24$en?$1200px$"
          alt="Slide 5"
          className="slide-item"
        />
      </div>
      <div className="custom-slide">
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/apple-tv-keyart-01-en-21jun24?$1200px$"
          alt="Slide 6"
          className="slide-item"
        />
      </div>
    </Slider>
  );
};

export default CarouselSlidesOnly;
