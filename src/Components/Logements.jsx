import React from "react";
import "./Logements.scss";
import { Link } from "react-router-dom";
export function Logements({ housingSlice }) {
  return (
    <div className="Logements__Home_container">
      <div className="Logements">
        {housingSlice.map((item) => (
          <Link
            to={`/Logement/${item.id}`}
            key={item.id}
            className="Logements--link"
          >
            {" "}
            <figure className="Logements__Home_figure" key={item.id}>
              <img
                className="Logements__Home_cover"
                src={item.cover}
                alt="image de logements "
              />
              <figcaption className="Logements__Home_title">
                {item.title}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
}
