import React from "react";
import "../../Styles/DevNavBar.css";
import { NavLink } from "react-router-dom";
export default function DevNavbar() {
  return (
    <div className="DevNavBar">
      <NavLink to="/">/</NavLink>

      <NavLink to="/About">/About</NavLink>
      <NavLink to="/Logement/aaa">/Logement/aaa</NavLink>
      <NavLink to="/Logement/2139a317">/Logement/2139a317</NavLink>
      <NavLink to="/Logement">/Logement</NavLink>
      <NavLink to="/zzzz">/zzzz</NavLink>
    </div>
  );
}
