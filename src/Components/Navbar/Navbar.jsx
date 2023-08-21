import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="accueil">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/About">A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
