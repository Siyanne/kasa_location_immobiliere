import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../data.json";
import DevDump from "../Components/DevDump.jsx";
import Collapse from "../Components/Collapse.jsx";
import Tags from "../Components/Tags.jsx";
import Stars from "../Components/Stars.jsx";
import Carrousel from "../Components/Carrousel.jsx";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  return (
    <>
      <div>
        Logement <DevDump val={logement} />{" "}
      </div>
      <div className="logements">
        <Carrousel images={logement.pictures} />

        <div>
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div>
              <Tags />
            </div>
          </div>
          <div>
            <img src={logement.host.picture} alt="photo de l'host" />
            <p>{logement.host.name}</p>

            <div>
              <Stars />
            </div>
          </div>
          <Collapse title="Description"></Collapse>
          <Collapse title="Equipements"></Collapse>
        </div>
      </div>
    </>
  );
}
