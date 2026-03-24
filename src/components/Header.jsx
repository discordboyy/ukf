// scr/components/Header.jsx
import { Link } from "react-router-dom";
import logo from "../assets/header/UKF_logo_red.svg";
import "../style/header.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img className="UKF-logo" src={logo} alt="logo" />
      </Link>

      <div className="nav-bar">
        <div className="nav-items">
          <Link to="/om-oss" className="nav-item">om oss</Link>
          <Link to="/hva-skjer" className="nav-item">hva skjer</Link>
          <Link to="/bestill-kurs" className="nav-item">bestill kurs</Link>
          <Link to="/prosjekter" className="nav-item">prosjekter CV</Link>
          <a href="#contact-section-id" className="nav-item">kontakter</a>
        </div>
      </div>
    </header>
  );
}