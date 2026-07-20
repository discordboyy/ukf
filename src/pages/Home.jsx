// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// ── Stylesheet imports
import '../style/style.css';
import '../style/tilbakemeldinger.css';

// ── JS module imports
import { init as initScrollAnimation } from '../js/scroll-animation';
import { init as initTestimonials }    from '../js/testimonials'

const COLORS = ["red", "blue", "yellow"];
const POLYGONS = [polygon1, polygon2, polygon3];

// ── Image imports ──

// polygons
import polygon1 from "../assets/Polygon-1-5.svg";
import polygon2 from "../assets/Polygon-1-1.svg";
import polygon3 from "../assets/Polygon-1-2.svg";

import polygonMain from "../assets/Polygon-3.svg";
import polygonSide from "../assets/polygon-side.svg";

import polygonArrowLeft from "../assets/Polygon-arrow-left.svg";
import polygonArrowRight from "../assets/Polygon-arrow-right.svg";

// testimonials background
import testimonialsBg from "../assets/tilbakemeldinger/background-2.png";

// partner logos
import logo1 from "../assets/samarbeidspartner/logo-1.svg";
import logo2 from "../assets/samarbeidspartner/logo-2.svg";
import logo3 from "../assets/samarbeidspartner/logo-3.svg";
import logo4 from "../assets/samarbeidspartner/logo-4.svg";
import logo5 from "../assets/samarbeidspartner/logo-5.svg";
import logo6 from "../assets/samarbeidspartner/logo-6.svg";
import logo7 from "../assets/samarbeidspartner/logo-7.svg";
import logo8 from "../assets/samarbeidspartner/logo-8.svg";
import logo9 from "../assets/samarbeidspartner/logo-9.svg";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  // ── Fetch upcoming events (max 3) ──
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/events.json`)
      .then(res => res.json())
      .then(data => {
        const now = new Date();
        const upcoming = data
          .filter(event => new Date(event.startDate) >= now)
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
          .slice(0, 3); // максимум 3
        setEvents(upcoming);
      })
      .catch(console.error);
  }, []);

  // ── Carousel duplication
  useEffect(() => {
    const carousel = document.querySelector(".samarbeidspartner-carousel");
    if (!carousel) return;
    const items = carousel.innerHTML;
    carousel.innerHTML = items + items;
    const totalWidth = carousel.scrollWidth / 2;
    document.documentElement.style.setProperty("--carousel-width", `-${totalWidth}px`);
  }, []);

  // ── Init other JS modules
  useEffect(() => {
    initScrollAnimation();
    initTestimonials();
  }, []);

  return (
    <div className="home-holder-container">
      {/* ── Events + Membership ── */}
      <div className="page-membership">
        {/* ── Events section ── */}
      <div className="events-section">
        <div className="events-title">
          PLANLAGTE AKTIVITETER<br />/ ANNONSER:
        </div>
        <div className="events-list-wrapper">
          <section className="events" id="events-menu">
            {events.map((event, index) => {
              const color = COLORS[index % COLORS.length];
              const polygon = POLYGONS[index % POLYGONS.length];
              const dateObj = new Date(event.startDate);
              const dateFormatted = dateObj.toLocaleDateString("no-NO").replace(/\./g, "/");
              const city = event.place.split(",")[0].toUpperCase();
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`event-card ${color} ${isOpen ? "is-open" : ""}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="event-row">
                    <div className={`event-date ${color}`}>
                      <div className="date">{dateFormatted}</div>
                      <div className="city">{city}</div>
                    </div>
                    <img className="event-polygon" src={polygon} alt="polygon" />
                    <div className="event-content">
                      <div className={`event-title ${color}`}>{event.title}</div>
                      <div className="event-body">
                        <div className="event-description">{event.description}</div>
                        <Link
                          to="/hva-skjer"
                          className={`event-link ${color}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Gå til arrangement
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
        <div className="events-footer">
          <Link to="/hva-skjer" className="show-more">
            <div className="show-more-text">vis flere</div>
            <img
              className="show-more-icon"
              src={polygonMain}
              alt=""
            />
          </Link>
        </div>
      </div>

        {/* Membership section */}
        <div className="membership-section">
          <div className="membership-fee scroll-animate">
            <img
              className="membership-fee-icon"
              src={polygonSide}
              alt="membership-fee-icon"
            />
            <p className="membership-fee-text">
              Medlemskontingenten fastsettes av årsmøtet og er per{' '}
              <span className="highlight">2026</span>
              <br />
              på <span className="highlight amount">350 kr</span> per år
            </p>
          </div>

          <div className="membership-howto">
            <div className="membership-title">HVORDAN <br />BLI MEDLEM?</div>
            <div className="membership-description">
              <div className="membership-text">
                Foreningen verdsetter engasjerte<br /> medlemmer som aktivt bidrar til å
                realisere foreningens formål. Ønsker du å bli medlem, send en søknad
                med din motivasjon og/eller beskrivelse av kunstnerisk praksis til
              </div>
              <a
                href="mailto:ua.kunstforening@gmail.com"
                className="membership-email no-select"
              >
                <span className="line">ua.kunstforening</span>
                <span className="dog">@</span>
                <span className="line">gmail.com</span>
              </a>
              <div className="membership-note">
                Styret vurderer søknader fortløpende.
              </div>
            </div>
          </div>
        </div>

        {/* Hero section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-description">
              Den ukrainske kunstforening samler
              <br />
              og fremmer ukrainske kunstnere i Norge
            </div>
            <img className="hero-accent" src={polygonMain} alt="" />
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="frame-20">
        <div className="testimonials-title">TILBAKEMELDINGER</div>
        <div className="testimonials-list">
          <img
            className="frame-149"
            src={testimonialsBg}
            alt=""
          />
          <div className="scroll-testimonials-list">
            <img
              className="polygon-arrow-left"
              src={polygonArrowLeft}
              alt="forrige"
            />
            <img
              className="polygon-arrow-right"
              src={polygonArrowRight}
              alt="neste"
            />
          </div>
          <div className="reviews">
            <div className="review">
              <div className="review-content">
                <p className="review-text">
                  Veldig inspirerende. Anna er veldig flink til å lære bort.
                  Jeg malte litt aquarell fra før men jeg har lært mye nytt.
                </p>
                <p className="review-author">Pascale</p>
              </div>
            </div>
            <div className="review">
              <div className="review-content">
                <p className="review-text">
                  Величезна подяка майстриням за надану можливість навчитись новому!
                  <br />
                  <span className="review-signature">
                    З повагою до дієвих україночок,
                  </span>
                </p>
                <div className="review-footer">
                  <p className="review-author">пані Людмила з Ірпеня.</p>
                  <p className="review-slogan">Слава Україні!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Partners carousel ── */}
      <div className="samarbeidspartner-section">
        <div className="samarbeidspartner-title-home">SAMARBEIDSPARTNERE</div>
        <div className="samarbeidspartner-carousel-container">
          <div className="samarbeidspartner-carousel">
            <a href="#" className="carousel-item">
              <img src={logo1} alt="Lorenskog Kommune" />
            </a>
            <a href="https://www.relove.info/" className="carousel-item">
              <img src={logo2} alt="Relove" />
            </a>
            <a href="#" className="carousel-item">
              <img src={logo3} alt="Ambassade" />
            </a>
            <a href="https://www.favorittartworkshop.com/" className="carousel-item">
              <img src={logo4} alt="Favoritt" />
            </a>
            <a href="#" className="carousel-item">
              <img id="Oslo-Kommune" src={logo5} alt="Oslo Kommune" />
            </a>
            <a href="#" className="carousel-item">
              <img id="Akershus" src={logo6} alt="Akershus" />
            </a>
            <a href="#" className="carousel-item">
              <img src={logo7} alt="Lorenskog Bibliotek" />
            </a>
            <a href="#" className="carousel-item">
              <img id="Verdensfolk" src={logo8} alt="Verdensfolk" />
            </a>
            <a href="#" className="carousel-item">
              <img id="Sentralen" src={logo9} alt="Sentralen" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}