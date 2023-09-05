import React from "react";
import "./Error404.scss";
import img404 from "../../public/404.png";
export default function Error404() {
  return (
    <div className="Error">
      <img className="Error__img" src={img404} alt="image d'erreur 404" />
      <p>Oups! La page demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
}
