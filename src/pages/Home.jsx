// src/pages/Home.jsx
//
// Strict 1-to-1 migration of the original index.html <body> content.
// • All class names are preserved exactly.
// • All IDs are preserved exactly.
// • HTML structure and nesting are identical.
// • <script> inline logic is moved into useEffect hooks.
// • <link> stylesheet imports are handled via import statements.
// • jQuery / slick-carousel are replicated with vanilla JS + useEffect.
// • scroll-animation, main, testimonials, and events-menu JS modules must be
//   ported to /src/js/ as ES modules and imported below (stubs provided).

import { useEffect } from 'react';

// ── Stylesheet imports (replace <link> tags) ──────────────────────────────
import '../style/style.css';
import '../style/tilbakemeldinger.css';

// ── JS module imports (port your original scripts to ES modules) ──────────
// Each of these files should export an `init` function (or use a default
// export) that contains the logic from the original .js file.
import { init as initScrollAnimation } from '../js/scroll-animation';
import { init as initMain }            from '../js/main';
import { init as initTestimonials }    from '../js/testimonials';
import { init as initEventsMenu }      from '../js/events-menu';

// ── Component ─────────────────────────────────────────────────────────────
export default function Home() {

  // ── Replaces DOMContentLoaded + inline <script> for the carousel ────────
  useEffect(() => {
    const carousel = document.querySelector('.samarbeidspartner-carousel');
    if (!carousel) return;

    const items = carousel.innerHTML;
    // Duplicate content for infinite-scroll effect (mirrors original logic)
    carousel.innerHTML = items + items;

    const totalWidth = carousel.scrollWidth / 2;
    document.documentElement.style.setProperty(
      '--carousel-width',
      `-${totalWidth}px`
    );
  }, []);

  // ── Initialise all ported JS modules after mount ─────────────────────────
  useEffect(() => {
    initScrollAnimation();
    initMain();
    initTestimonials();
    initEventsMenu();
  }, []);

  // ── JSX – identical structure / nesting to original HTML body ────────────
  return (
    <>
      {/* ── Events + Membership ─────────────────────────────────────────── */}
      <div className="page-membership">

        {/* Events section */}
        <div className="events-section">
          <div className="events-title">
            PLANLAGTE AKTIVITETER<br />/ ANNONSER:
          </div>
          <div className="events-list-wrapper">
            <section className="events" id="events-menu">
              {/* Populated by initEventsMenu() */}
            </section>
          </div>
          <div className="events-footer">
            <a href="hva-skjer.html" className="show-more">
              <div className="show-more-text">vis flere</div>
              <img className="show-more-icon" src="/src/assets/Polygon 3.svg" alt="" />
            </a>
          </div>
        </div>

        {/* Membership section */}
        <div className="membership-section">
          <div className="membership-fee scroll-animate">
            <img
              className="membership-fee-icon"
              src="/src/assets/polygon-side.svg"
              alt="membership-fee-icon"
            />
            <p className="membership-fee-text">
              Medlemskontingenten fastsettes av årsmøtet og er per{' '}
              <span className="highlight">2026</span>
              <br />
              på{' '}
              <span className="highlight amount">350 kr</span>{' '}
              per år
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
            <img className="hero-accent" src="/src/assets/Polygon 3.svg" alt="" />
          </div>
        </div>

      </div>{/* /page-membership */}

      {/* ── Testimonials ────────────────────────────────────────────────── */}
      {/*
        The original page injected tilbakemeldinger.css via a <link> inside
        the body (unusual but valid). We import it at the top of this file
        instead – same effect.
      */}
      <div className="frame-20">
        <div className="testimonials-title">TILBAKEMELDINGER</div>

        <div className="testimonials-list">
          <img
            className="frame-149"
            src="/src/assets/tilbakemeldinger/background (2).png"
            alt=""
          />

          <div className="scroll-testimonials-list">
            <img
              className="polygon-arrow-left"
              src="/src/assets/Polygon arrow left.svg"
              alt="forrige"
            />
            <img
              className="polygon-arrow-right"
              src="/src/assets/Polygon arrow right.svg"
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

      {/* ── Partners carousel ────────────────────────────────────────────── */}
      <div className="samarbeidspartner-section">
        <div className="samarbeidspartner-title">SAMARBEIDSPARTNERE</div>
        <div className="samarbeidspartner-carousel-container">
          <div className="samarbeidspartner-carousel">
            <a href="#" className="carousel-item">
              <img src="/src/assets/samarbeidspartner/logo-1.svg" alt="Lorenskog Kommune" />
            </a>
            <a href="https://www.relove.info/" className="carousel-item">
              <img src="/src/assets/samarbeidspartner/logo-2.svg" alt="Relove" />
            </a>
            <a href="#" className="carousel-item">
              <img src="/src/assets/samarbeidspartner/logo-3.svg" alt="Ambassade" />
            </a>
            <a href="https://www.favorittartworkshop.com/" className="carousel-item">
              <img src="/src/assets/samarbeidspartner/logo-4.svg" alt="Favoritt" />
            </a>
            <a href="#" className="carousel-item">
              <img id="Oslo-Kommune" src="/src/assets/samarbeidspartner/logo-5.svg" alt="Oslo Kommune" />
            </a>
            <a href="#" className="carousel-item">
              <img id="Akershus" src="/src/assets/samarbeidspartner/logo-6.svg" alt="Akershus" />
            </a>
            <a href="#" className="carousel-item">
              <img src="/src/assets/samarbeidspartner/logo-7.svg" alt="Lorenskog Bibliotek" />
            </a>
            <a href="#" className="carousel-item">
              <img id="Verdensfolk" src="/src/assets/samarbeidspartner/logo-8.svg" alt="Verdensfolk" />
            </a>
            <a href="#" className="carousel-item">
              <img id="Sentralen" src="/src/assets/samarbeidspartner/logo-9.svg" alt="Sentralen" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}