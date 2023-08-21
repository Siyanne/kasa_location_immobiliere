import { Routes, Route } from "react-router-dom";
import Error404 from "./Components/Pages/Error404.jsx";

import { Home, About } from "./Components/Pages/index";
import Logement from "./Components/Pages/Logement.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Logement/:id" element={<Logement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
