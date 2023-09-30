import Router from "./Router.jsx";
import "./App.scss";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="App__general_margin">
        <Navbar />
        <Router />
      </div>
      <Footer />
    </div>
  );
}
