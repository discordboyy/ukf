// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/header/UKF_logo_red.svg";
import "../style/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const contactSection = document.getElementById("contact-section-id");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    /*
      Wrapper sits OUTSIDE the scaled <header> so the burger button and
      slide-in panel are never clipped by  overflow: hidden  and are never
      distorted by the  transform: scale()  rules.
    */
    <div className="header-wrapper">

      {/* ── Original header — NOT modified in any way ── */}
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
            <a href="#contact-section-id" className="nav-item" onClick={scrollToContact}>
              kontakter
            </a>
          </div>
        </div>
      </header>

      {/* ── Burger button — sibling of header, outside scale/clip ── */}
      <button
        className={`burger-btn${menuOpen ? " burger-btn--open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
        aria-expanded={menuOpen}
      >
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </button>

      {/* ── Slide-in panel — sibling of header, outside scale/clip ── */}
      <div
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav">
          <Link to="/om-oss"       className="mobile-nav-item" onClick={closeMenu}>om oss</Link>
          <Link to="/hva-skjer"    className="mobile-nav-item" onClick={closeMenu}>hva skjer</Link>
          <Link to="/bestill-kurs" className="mobile-nav-item" onClick={closeMenu}>bestill kurs</Link>
          <Link to="/prosjekter"   className="mobile-nav-item" onClick={closeMenu}>prosjekter CV</Link>
          <a href="#contact-section-id" className="mobile-nav-item" onClick={scrollToContact}>
            kontakter
          </a>
        </nav>
      </div>

    </div>
  );
}