import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

import logo from "../../public/logo.png";
export default function Navbar() {
  return (
    <nav className="Navbar">
      <img src={logo} alt="logo Kasa" className="Navbar__logo" />
      <ul className="Navbar__menu">
        <li>
          <NavLink to="/" className="Navbar__link">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="Navbar__link">
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
