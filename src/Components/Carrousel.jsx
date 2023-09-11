import { useState } from "react";
import "./Carrousel.scss";
import arrow_backward from "../../public/arrow_backward.png";
import arrow_forward from "../../public/arrow_forward.png";
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
      <button
        className={`Carrousel__arrow_backward ${
          currentIndex === 0 ? "is--Hidden" : ""
        }`}
        onClick={goToPrevSlide}
      >
        <img src={arrow_backward} alt="flèche précédente" />{" "}
      </button>
      <button
        className={`Carrousel__arrow_forward ${
          currentIndex === images.length - 1 ? "is--Hidden" : ""
        }`}
        onClick={goToNextSlide}
      >
        <img src={arrow_forward} alt="flèche suivante" />{" "}
      </button>
      <div className="Carrousel__slides">
        {images.map((image, index) => (
          <img
            className={`Carrousel__slide ${
              index == currentIndex ? "is--Active" : ""
            }`}
            src={image}
            alt="image de logement"
          />
        ))}
      </div>
    </div>
  );
}
