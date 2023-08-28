import React from "react";
import Collapse from "../Collapse.jsx";
import logements from "../../../data.json";
import "./About.scss";

Collapse;
export default function About() {
  return (
    <>
      <Collapse title="Equipements">
        <ul>
          <li>Climatisation</li>
          <li>Wi-Fi</li>
          <li>Cuisine</li>
          <li>Espace de travail</li>
          <li>Fer à repasser</li>
          <li>Sèche-cheveux</li>
          <li>Cintres</li>
        </ul>
      </Collapse>
      <Collapse title="bob">Alice2</Collapse>
      <Collapse title="bob">Alice</Collapse>
      <Collapse title="bob">Alice</Collapse>
    </>
  );
}
/**
 * j'écris la liste de "équiipements"
 * => SI Climatisations === Climatisation en faisant parcourir la liste => collapse ou nous emmène sur une page de logements à voir je ne sais pas l'action que ça fait
 */
