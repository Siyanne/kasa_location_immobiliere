import React from "react";
import Carrousel from "./Carrousel.jsx";

export default function CarrouselImg() {
  const Img = "../assets/imgCarrousel";
  const images = [Img + "Background.jpg", "kalen-emsley.png"];

  return (
    <div>
      <Carrousel images={images} />
    </div>
  );
}
