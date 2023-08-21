import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../../data.json";
import DevDump from "../Navbar/DevDump.jsx";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  return (
    <div>
      Logement <DevDump val={logement} />{" "}
    </div>
  );
}
