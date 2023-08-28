import React from "react";
import "../../Styles/DevDump.css";

export default function DevDump({ val }) {
  return <pre className="DevDump">{JSON.stringify(val, null, 2)}</pre>;
}
