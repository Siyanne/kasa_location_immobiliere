import React from "react";
import Collapse from "../Collapse.jsx";
import logements from "../../../data.json";
import "../../Styles/About.scss";
import arrow_back_collapse from "../../assets/arrow_back__collapse.png";

Collapse;
export default function About() {
  return (
    <>
      <Collapse title="Fiabilité">
        <img
          src={arrow_back_collapse}
          alt="ouvrir et fermer le collapse"
          className="Collapse__arrow"
        />
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Collapse>
      <Collapse title="Respect">
        La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoireou de pertubation du voisinage entrainera
        une exclusion de notre plateforme.
      </Collapse>
      <Collapse title="Service">
        La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoireou de pertubation du voisinage entrainera
        une exclusion de notre plateforme.
      </Collapse>
      <Collapse title="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour notre hôtes que
        pour les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </Collapse>
    </>
  );
}
/**
 * j'écris la liste de "équiipements"
 * => SI Climatisations === Climatisation en faisant parcourir la liste => collapse ou nous emmène sur une page de logements à voir je ne sais pas l'action que ça fait
 */
