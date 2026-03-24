import "../styles/header.css";
import logo from "../assets/header/UKF_logo_red.svg";

export default function Header() {
  return (
    <header>
      <a href="/">
        <img className="UKF-logo" src={logo} alt="UKF logo" />
      </a>

      <div className="nav-bar">
        <div className="nav-items">
          <a href="/om-oss" className="nav-item about-us">om oss</a>
          <a href="/hva-skjer" className="nav-item planned-activities">hva skjer</a>
          <a href="/bestill-kurs" className="nav-item workshops">bestill kurs</a>
          <a href="/prosjekter" className="nav-item projects">prosjekter CV</a>
          <a href="#contact-section-id" className="nav-item contacts">kontakter</a>
        </div>
      </div>
    </header>
  );
}