import React from "react";
import "./Banner.scss";
export default function Banner({ url, context }) {
  return (
    <div className={`Banner Banner--context-${context}`}>
      <img className="Banner__img" alt="Background" src={url} />
      {context === "Home" && (
        <p className={`Banner--txt`}>Chez vous, partout et ailleurs</p>
      )}
    </div>
  );
}
