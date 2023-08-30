import Router from "./Router.jsx";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
//import DevNavBar from "./Components/DevNavbar.jsx";
import Footer from "./Components/Footer.jsx";
//import { About } from "./Components/Pages/index.js";

export default function App() {
  return (
    <div className="App">
      {/*<DevNavBar />*/}
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}
