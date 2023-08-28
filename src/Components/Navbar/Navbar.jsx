import React from "react";
import "../../Styles/Navbar.scss";
import { NavLink } from "react-router-dom";

import About from "../Pages/About.jsx";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="logo Kasa" className="logo" />
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
};

export default Navbar;
