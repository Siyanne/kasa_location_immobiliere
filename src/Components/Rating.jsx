import "./Rating.scss";
import { Icon } from "@iconify/react";
export default function Rating({ rating, total = 5 }) {
  return (
    <div>
      {[...Array(total)].map((_, index) => (
        <Icon
          icon="mingcute:star-fill"
          key={index}
          className={`Star Star--${index < rating ? "color" : "grey"}`}
        />
      ))}
    </div>
  );
}
