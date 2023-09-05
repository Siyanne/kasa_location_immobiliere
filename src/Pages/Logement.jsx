import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../data.json";
import DevDump from "../Components/DevDump.jsx";
import Collapse from "../Components/Collapse.jsx";
import Carrousel from "../Components/Carrousel.jsx";
import "./Logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  return (
    <>
      {/*<div>
        Logement <DevDump val={logement} />{" "}
  </div>*/}
      <div className="Logements">
        <Carrousel images={logement.pictures} />

        <div>
          <div className="Logements__tags_container">
            <h1 className="Logements__title_housing">{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="Logements__tags">
              {logement.tags.map((tag, index) => (
                <button className="Logements__tag " key={index}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="Logements__host_info">
            <div className="Logements__rating">
              {Array.from({ length: logement.rating }).map((_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}
              {Array.from({ length: 5 - logement.rating }).map((_, index) => (
                <i key={index} className="far fa-star"></i>
              ))}
            </div>
            <div className="Logements__profil">
              <p>{logement.host.name}</p>
              <img
                className="Logements__host"
                src={logement.host.picture}
                alt="photo de l'host"
              />
            </div>
          </div>
          <Collapse title="Description">{logement.description}</Collapse>
          <Collapse title="Equipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </>
  );
}
