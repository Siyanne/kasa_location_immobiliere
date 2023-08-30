import React from "react";
import logements from "../../data.json";
import DevDump from "../Components/DevDump.jsx";
import "./Home.scss";
export default function Home() {
  const housingSlice = Array.from(logements).slice(0, 8);
  return (
    <div>
      <div>
        Home
        {/* <DevDump val={logements} />*/}
      </div>
      <div className="Logements">
        {housingSlice.map((item) => (
          <figure className="Logements__figure" key={item.id}>
            <img
              className="Logements__cover"
              src={item.cover}
              alt="image de logements "
            />
            <figcaption className="nom du logements">{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
