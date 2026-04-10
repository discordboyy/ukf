// src/pages/Priser.jsx
import { useEffect } from 'react';

// ── Stylesheet imports ──────────────────────────────────────────────
import '../style/style.css';
import '../style/priser.css';

// ── Component ──────────────────────────────────────────────────────
export default function Priser() {

  // ── Scroll animation hook (migrert fra inline <script>) ───────────
  useEffect(() => {
    const scrollBlocks = document.querySelectorAll('.scroll-animate');

    function checkScrollBlocks() {
      scrollBlocks.forEach(block => {
        const rect = block.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          block.classList.add('show');
        }
      });
    }

    window.addEventListener('scroll', checkScrollBlocks);
    checkScrollBlocks(); // initial check on mount

    return () => window.removeEventListener('scroll', checkScrollBlocks);
  }, []);

  // ── JSX – identisk struktur til original HTML body ───────────────
  return (
    <div className="global-holder-container">

      <div className="pricing-section">
        <div className="pricing-section-wrapper">
          <div className="pricing-header">
            <img className="pricing-header-image" src="src/assets/Frame 64.svg" alt="" />
            <div className="pricing-header-text">
              <div className="pricing-title">PRISER</div>
              <div className="pricing-subtitle-wrapper">
                <div className="pricing-subtitle-main">
                  <span className="desktop-text-3">KREATIVE WORKSHOPS FOR</span>
                  <span className="mobile-text-3">WORKSHOPS FOR</span>
                </div>
                <div className="pricing-subtitle-detail">
                  <span className="desktop-text-3">SMÅ OG STORE GRUPPER</span>
                  <span className="mobile-text-3">ALLE GRUPPER</span>
                </div>
              </div>
            </div>
          </div>

          <div className="workshop-intro-section">
            <div className="workshop-intro-wrapper">
              <div className="workshop-intro-top">
                <div className="workshop-intro-main scroll-animate">
                  <img className="workshop-intro-decor-icon" src="src/assets/side_element_trekant.svg" alt="" />
                  <div className="workshop-intro-title">
                    Opplev mestring, skaperglede og fellesskap!
                  </div>
                </div>
                <div className="workshop-intro-description">
                  <div className="workshop-intro-paragraph-1">
                    Våre workshops gir deltakerne en unik mulighet til å utforske
                    materialer, lære nye teknikker og skape noe helt eget.
                  </div>
                  <div className="workshop-intro-paragraph-2">
                    Enten du planlegger et bedriftsarrangement, en teambuilding, en
                    vennegjengsamling eller et kreativt opplegg for elever, tilpasser
                    vi workshopene etter deres behov - alltid med fokus på kvalitet,
                    læring og gode opplevelser.
                  </div>
                  <div className="workshop-intro-paragraph-3">
                    Barn under 10 år deltar gratis sammen med en voksen, og regnes som
                    en plass.
                  </div>
                </div>
              </div>

              <div className="workshop-included-section">
                <div className="workshop-content-wrapper">
                  <div className="workshop-features">
                    <h2 className="workshop-section-title">
                      Dette får dere i alle workshops:
                    </h2>

                    <div className="workshop-feature-list">
                      {['Profesjonell instruktør (og assistent ved større grupper)',
                        'Alt materiell og utstyr',
                        'Forberedelser til kurset',
                        'Transport/frakt',
                        'Administrasjon og organisering',
                        'Trygg, støttende og inspirerende kursledelse'].map((feature, idx) => (
                          <div className="workshop-feature" key={idx}>
                            <img className="workshop-feature-icon" src="src/assets/rombe-blue.svg" alt="" />
                            <p className="workshop-feature-title">{feature}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <p className="workshop-prices-note">Alle priser er inkl. mva.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Pricing tables ───────────────────────────────────────────── */}
        <div className="pricing-group-small">
          <div className="pricing-group-wrapper">
            <div className="pricing-table">
              <div className="pricing-duration">
                <div className="pricing-duration-title">Varighet</div>
                <div className="pricing-duration-options">
                  <div className="duration-hours">2 timer</div>
                  <div className="duration-hours">3 timer</div>
                  <div className="duration-hours">4 timer</div>
                </div>
              </div>
              <div className="pricing-price">
                <div className="price-title">Pris (inkl. mva)</div>
                <div className="pricing-price-values">
                  <div className="price">6 600,-</div>
                  <div className="price">7 600,-</div>
                  <div className="price">8 600,-</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-group-description">
            <div className="group-size-title">
              <span className="desktop-text">GRUPPER OPPTIL 8 PERSONER</span>
              <span className="mobile-text">OPPTIL 8 PERS.</span>
            </div>
            <div className="group-additional-info">
              1 instruktør – perfekt for mindre grupper og teambuilding i intime
              rammer
            </div>
          </div>
        </div>

        <div className="pricing-group-medium">
          <div className="pricing-group-wrapper-second">
            <div className="pricing-table">
              <div className="pricing-duration">
                <div className="pricing-duration-title">Varighet</div>
                <div className="pricing-duration-options">
                  <div className="duration-hours">2 timer</div>
                  <div className="duration-hours">3 timer</div>
                  <div className="duration-hours">4 timer</div>
                </div>
              </div>
              <div className="pricing-price">
                <div className="price-title">Pris (inkl. mva)</div>
                <div className="pricing-price-values">
                  <div className="price">8 300,-</div>
                  <div className="price">9 700,-</div>
                  <div className="price">11 000,-</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-group-description-second">
            <div className="group-size-title-second">
              <span className="desktop-text">GRUPPER OPPTIL 15 PERSONER</span>
              <span className="mobile-text">OPPTIL 15 PERS.</span>
            </div>
            <div className="group-additional-info-second">
              1 instruktør + 1 assistent - anbefales for skoler, bedrifter og større
              samlinger
            </div>
          </div>
        </div>

        <div className="pricing-group-large">
          <div className="group-size-title-third">
            <span className="desktop-text-2">STØRRE GRUPPER (OVER 15 PERSONER)</span>
            <span className="mobile-text-2">GRUPPER OVER 15</span>
          </div>
          <div className="pricing-group-wrapper">
            <div className="pricing-group-large-content">
              <div className="pricing-group-large-description">
                <div className="large-group-paragraph-1">
                  Ved større grupper setter vi sammen flere workshops som gjennomføres
                  samtidig – for eksempel:
                </div>
                <div className="large-group-example-courses">
                  Tekstil + Akvarell + Glassgravering
                </div>
                <div className="large-group-paragraph-2">
                  Dette gir en variert, sosial og inspirerende opplevelse der
                  deltakerne kan velge sin kreative retning.
                </div>
                <div className="large-group-paragraph-3">
                  Pris og opplegg tilpasses etter antall deltakere, varighet og ønsket
                  kombinasjon av kurs.
                </div>
              </div>
              <div className="large-group-contact">
                <img className="large-group-contact-image" src="src/assets/Frame 88.svg" alt="" />
                <div className="large-group-contact-text">
                  <a href="#contact-section-id" className="contact-main-text">
                    Ta kontakt for et skreddersydd opplegg
                  </a>
                  <div className="contact-additional-text-wrapper">
                    <div className="contact-paragraph-1">
                      Vi hjelper gjerne med å finne den perfekte workshopløsningen for
                      deres gruppe.
                    </div>
                    <div className="contact-paragraph-2">
                      Ta kontakt for et uforpliktende tilbud – vi tilpasser både
                      innhold, varighet og nivå.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}