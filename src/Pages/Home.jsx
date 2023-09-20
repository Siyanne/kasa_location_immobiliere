import React from "react";
import logements from "../../data.json";
import DevDump from "../Components/DevDump.jsx";
import home_banner from "../assets/home_banner.png";
import "./Home.scss";
import Banner from "../Components/Banner.jsx";
import "./Logement.scss";
export default function Home() {
  const housingSlice = Array.from(logements).slice(0, 6);
  return (
    <>
      <Banner url={home_banner} />
      <p className="Banner__title">Chez vous, partout et ailleurs</p>
      <div className="Logements__Home_container">
        {/* <div>
          Home
           <DevDump val={logements} />
        </div>*/}

        <div className="Logements">
          {housingSlice.map((item) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
