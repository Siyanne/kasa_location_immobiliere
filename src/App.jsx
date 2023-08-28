import Router from "./Router.jsx";
import "./Styles/App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import DevNavBar from "./Components/Navbar/DevNavbar.jsx";
import Footer from "./Components/Navbar/Footer/Footer.jsx";
//import { About } from "./Components/Pages/index.js";
//import Footer from "./Components/Footer/Footer.jsx";
export default function App() {
  return (
    <div className="App">
      <DevNavBar />
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}
