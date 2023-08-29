import "./Footer.scss";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} alt="logo kasa" />
      <p>ⓒ 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
