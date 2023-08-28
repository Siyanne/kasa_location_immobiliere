import { useState } from "react";
import "../Styles/Collapse.scss";

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((open) => !open);
  return (
    <>
      <div
        className={`Collapse ${open ? "Collapse--open" : "Collapse--closed"}`}
      >
        <div onClick={toggleOpen} className="Collapse__title">
          {title}
        </div>
        <div className="Collapse__content">{children}</div>
      </div>
    </>
  );
}
