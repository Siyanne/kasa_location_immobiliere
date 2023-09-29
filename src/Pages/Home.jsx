import React from "react";
import logements from "../../data.json";
import home_banner from "../assets/home_banner.png";
import "./Home.scss";
import Banner from "../Components/Banner.jsx";
import "./Logement.scss";
import { Logements } from "../Components/Logements";
export default function Home() {
  const housingSlice = Array.from(logements).slice(0, 6);
  return (
    <>
      <Banner url={home_banner} context="Home" />

      <Logements housingSlice={housingSlice} />
    </>
  );
}
