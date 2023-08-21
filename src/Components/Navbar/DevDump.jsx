import React from "react";
import "./DevDump.css";

export default function DevDump({ val }) {
  return <pre className="DevDump">{JSON.stringify(val, null, 2)}</pre>;
}
