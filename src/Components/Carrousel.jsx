import { useState } from "react";
import "./Carrousel.scss";
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
      <button onClick={goToPrevSlide}>Précédent</button>
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
      <button onClick={goToNextSlide}>Suivant</button>
    </div>
  );
}
