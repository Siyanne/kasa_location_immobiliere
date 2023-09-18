import "../../data.json";
import Star from "../../public/star_img.png";
import "./Rating.scss";
import grey_star from "../../public/greyStar.png";
export default function Rating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.floor(rating);

  return (
    <div>
      {[...Array(filledStars)].map((_, index) => (
        <img
          key={index}
          src={Star}
          alt="étoile jaune"
          className="Star__color"
        />
      ))}
      {[...Array(totalStars - filledStars)].map((_, index) => (
        <img
          key={index}
          src={grey_star}
          alt="étoile gris"
          className="Star__grey"
        />
      ))}
    </div>
  );
}
