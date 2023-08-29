import React, { useState } from "react";
import Stars from "./Stars.jsx";

export default function Rating() {
  const [rating, setRating] = useState(0);

  const handleClick = (selectedStar) => {
    setRating(selectedStar + 1);
  };

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <Stars
          key={index}
          selected={index < rating}
          onClick={() => handleClick(index)}
        />
      ))}
    </>
  );
}
