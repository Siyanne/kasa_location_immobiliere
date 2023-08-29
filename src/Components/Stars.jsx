import React from "react";

export default function Stars({ selected = false, onClick }) {
  return <span onClick={onClick}>{selected ? "★" : "☆"}</span>;
}
