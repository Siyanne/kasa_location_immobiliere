import React from "react";
import logements from "../../../data.json";
import DevDump from "../Navbar/DevDump.jsx";
function Home() {
  return (
    <div>
      Home
      <DevDump val={logements} />
    </div>
  );
}

export default Home;
