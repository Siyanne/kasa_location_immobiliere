import React from "react";
import logements from "../../data.json";
import DevDump from "../Components/DevDump.jsx";
import section from "../assets/section.png";
import "./Home.scss";
import Banner from "../Components/Banner.jsx";

export default function Home() {
  const housingSlice = Array.from(logements).slice(0, 6);
  return (
    <>
      <Banner url={section} />
      <div className="Logements__container">
        {/* <div>
          Home
           <DevDump val={logements} />
        </div>*/}

        <div className="Logements">
          {housingSlice.map((item) => (
            <figure className="Logements__figure" key={item.id}>
              <img
                className="Logements__cover"
                src={item.cover}
                alt="image de logements "
              />
              <figcaption className="Logements__title">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
