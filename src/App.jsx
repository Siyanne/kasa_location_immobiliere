import Router from "./Router.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import DevNavBar from "./Components/Navbar/DevNavbar.jsx";
export default function App() {
  return (
    <div className="App">
      <DevNavBar />
      <Navbar />
      <Router />
    </div>
  );
}
