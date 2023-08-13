import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./Components/Accueil/Accueil.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </div>
      <nav>
        <a href="index.html">Accueil</a>
        <a href="https://react.dev" target="_blank">
          A propos
        </a>
      </nav>
      <h1>Chez vous, partout et ailleurs</h1>
      <template>
        <div className="card">
          <a href="#">
            <img src="" alt="" />
            <p>Edit</p>
          </a>
        </div>
      </template>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
