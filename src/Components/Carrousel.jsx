import { useState } from "react";
import "./Carrousel.scss";
import { Icon } from "@iconify/react";
export default function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="Carrousel">
      <Icon
        icon="fe:arrow-up"
        rotate={3}
        className={`Carrousel__arrow_backward_icon Carrousel__arrow_backward ${
          currentIndex === 0 ? "is--Hidden" : ""
        }`}
        onClick={goToPrevSlide}
      />{" "}
      <Icon
        icon="fe:arrow-up"
        rotate={1}
        className={`Carrousel__arrow_forward_icon Carrousel__arrow_forward ${
          currentIndex === images.length - 1 ? "is--Hidden" : ""
        }`}
        onClick={goToNextSlide}
      />{" "}
      <div className="Carrousel__slides">
        {images.map((image, index) => (
          <img
            className={`Carrousel__slide ${
              index == currentIndex ? "is--Active" : ""
            }`}
            src={image}
            alt="image de logement"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
