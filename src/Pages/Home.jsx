import React from "react";
import logements from "../../data.json";
//import DevDump from "../Components/DevDump.jsx";
import "./Home.scss";
export default function Home() {
  const shuffle = logements.sort(() => Math.random() - 0, 5);
  const housing = Array.from(logements.slice(0, 6));
  return (
    <div>
      <div>
        Home
        {/*<DevDump val={logements} />*/}
      </div>
      <div className="Logements">
        {housing.map((item) => (
          <figure className="Logements__figure" key={item.id}>
            <img
              className="Logements__cover"
              src={item.cover}
              alt="image de Logements {housing.title}"
            />
            <figcaption className="Logements__title">{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
