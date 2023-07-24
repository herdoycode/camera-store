import "./Slider.scss";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

const Slider = () => {
  const [slide, setSlide] = useState("slider-wrapper");

  const handleNextSlide = () => {
    if (slide === "slider-wrapper") return setSlide("slide-100");
    if (slide === "slide-100") return setSlide("slide-200");
    if (slide === "slide-200") return setSlide("slider-wrapper");
  };
  const handlePrevSlide = () => {
    if (slide === "slider-wrapper") return setSlide("slide-200");
    if (slide === "slide-100") return setSlide("slider-wrapper");
    if (slide === "slide-200") return setSlide("slide-100");
  };

  const slides = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3691227/pexels-photo-3691227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="slider">
      <div onClick={handlePrevSlide} className="slide-prev">
        <BiSolidLeftArrow />
      </div>

      <div className={slide}>
        {slides.map((item) => (
          <div key={item.id} className="slide">
            <div className="slide-img">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div onClick={handleNextSlide} className="slide-next">
        <BiSolidRightArrow />
      </div>
    </div>
  );
};

export default Slider;
