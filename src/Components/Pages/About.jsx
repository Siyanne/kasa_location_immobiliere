import React from "react";
import { useState } from "react";
//import {Collapse} from "react-collapse";
const About = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  {
    isCollapsed ? (
      <div>
        Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les
        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux
        de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
        fait que survivre cinq siècles
      </div>
    ) : null;
  }
};

export default About;
