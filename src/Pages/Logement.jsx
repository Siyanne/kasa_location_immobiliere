import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../data.json";
import DevDump from "../Components/DevDump.jsx";
import Collapse from "../Components/Collapse.jsx";
import Carrousel from "../Components/Carrousel.jsx";
import Rating from "../Components/Rating.jsx";
import "./Logement.scss";
import Columns from "../Components/Columns.jsx";
import Error404 from "./Error404.jsx";
export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) return <Error404 />;
  console.log(logement);

  return (
    <>
      {/*<div>
        Logement <DevDump val={logement} />{" "}
  </div>*/}
      <div className="Logement">
        <Carrousel images={logement.pictures} />

        <div>
          <div className="Logement__tags_info_container">
            <div className="Logement__tags_container">
              <h1 className="Logement__title_housing">{logement.title}</h1>
              <p className="Logement__location">{logement.location}</p>
              <div className="Logement__tags">
                {logement.tags.map((tag, index) => (
                  <span className="Logement__tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="Logement__host_info">
              <div className="Logement__rating">
                <Rating rating={logement.rating} />
              </div>
              <div className="Logement__profil">
                <p className="Logement__host_name">{logement.host.name}</p>
                <img
                  className="Logement__host"
                  src={logement.host.picture}
                  alt="photo de l'host"
                />
              </div>
            </div>
          </div>
          <div className="Collapse__container">
            <Columns>
              <Collapse title="Description">{logement.description}</Collapse>

              <Collapse title="Equipements">
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Collapse>
            </Columns>
          </div>
        </div>
      </div>
    </>
  );
}
