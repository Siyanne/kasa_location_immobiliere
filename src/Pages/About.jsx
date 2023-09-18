import React from "react";
import Collapse from "../Components/Collapse.jsx";
import logements from "../../data.json";
import "./About.scss";
import imgKalen from "../assets/kalen-emsley.png";
import Banner from "../Components/Banner.jsx";
import "../Components/Collapse.scss";
export default function About() {
  return (
    <>
      <div className="promesse">
        <Banner url={imgKalen} />
        <div className="Collapse__About_Collapses">
          <Collapse title="Fiabilité">
            <p className="Collapse__bienvaillance">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements et toutes les informations
              sont régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
          <Collapse title="Respect">
            <p className="Collapse__bienvaillance">
              La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entrainera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse title="Service">
            <p className="Collapse__bienvaillance">
              La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entrainera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse title="Sécurité">
            <p className="Collapse__bienvaillance">
              La sécurité est la priorité de Kasa. Aussi bien pour notre hôtes
              que pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </div>
      </div>
    </>
  );
}
