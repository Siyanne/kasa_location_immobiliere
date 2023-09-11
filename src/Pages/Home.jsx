import React from "react";
import logements from "../../data.json";
import DevDump from "../Components/DevDump.jsx";
import section from "../assets/section.png";
import "./Home.scss";
export default function Home() {
  const housingSlice = Array.from(logements).slice(0, 6);
  return (
    <>
      <div className="img_home_div">
        <img className="Home__img" alt="mer rocheuse" src={section} />
      </div>
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
