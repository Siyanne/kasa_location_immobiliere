import React from "react";
import logements from "../../../data.json";
import DevDump from "../Navbar/DevDump.jsx";
import "../../Styles/Home.css";
function Home() {
  return (
    <div>
      <div>
        Home
        <DevDump val={logements} />
      </div>
      <div className="logements">
        {logements.map((item) => (
          <figure className="logements_figure" key={item.id}>
            <img
              className="logements_cover"
              src={item.cover}
              alt="image de logements {item.title}"
            />
            <figcaption className="logements_title">{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Home;
