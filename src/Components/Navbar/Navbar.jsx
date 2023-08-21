import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

import About from "../Pages/About.jsx";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="menu">
      <img src={logo} alt="logo Kasa" className="logo" />
      <ul className="list-menu">
        <li>
          <NavLink to="/" className="accueil">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={About} className="aPropos">
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
