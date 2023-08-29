import { Routes, Route } from "react-router-dom";
import Error404 from "./Pages/Error404.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Logement from "./Pages/Logement.jsx";

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
