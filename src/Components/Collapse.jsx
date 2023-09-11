import { useState } from "react";
import "./Collapse.scss";
import arrow_upward from "../assets/arrow_upward_collapse.png";

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const toggleOpen = () => {
    setOpen((open) => !open);
    setRotate((rotate) => !rotate);
  };

  return (
    <>
      <div
        className={`Collapse ${open ? "Collapse--open" : "Collapse--closed"}`}
      >
        <div onClick={toggleOpen} className="Collapse__title">
          {title}
          <img
            className={`arrow ${rotate ? "arrow--rotate" : ""}`}
            src={arrow_upward}
            alt="flèche haut"
          />
        </div>
        <div className="Collapse__content">{children}</div>
      </div>
    </>
  );
}
