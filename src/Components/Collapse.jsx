import { useEffect, useRef, useState } from "react";
import "./Collapse.scss";
import arrow_upward from "../assets/arrow_upward_collapse.png";

function useGetHeight() {
  const contentRef = useRef();
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.clientHeight + "px");
  });
  return [contentRef, height];
}

export default function Collapse({ title, children }) {
  const [contentRef, height] = useGetHeight();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div>
        <div
          className={`Collapse ${open ? "Collapse--open" : "Collapse--closed"}`}
          style={{ "--height": height }}
        >
          <div className="Collapse__title">
            {title}
            <img
              className={`Collapse__arrow `}
              src={arrow_upward}
              alt="flèche haut"
              onClick={toggleOpen}
            />
          </div>
          <div className="Collapse__wrapper">
            <div className="Collapse__content" ref={contentRef}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
