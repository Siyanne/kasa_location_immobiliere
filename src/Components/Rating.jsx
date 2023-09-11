import "../../data.json";
import Star from "../../public/star_img.png";
import "./Rating.scss";
export default function Rating({ rating }) {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src={Star} className="Star" />);
  }

  return <div className="rating">{stars}</div>;
}
