// src/pages/Kurs.jsx
import { useEffect } from "react";
import { Link } from 'react-router-dom';

// styles
import "../style/style.css";
import "../style/kurs.css";

// JS modules
import { init as initScrollAnimation } from "../js/scroll-animation";
import { initKurs } from "../js/kurs";

// imports
import vector1 from "../assets/kurs/Vector-1.svg";
import romberKnapp from "../assets/kurs/romber_knapp.svg";
import pileFullBla from "../assets/kurs/pile_full_bla.svg";
import romberKnappRed from "../assets/kurs/romber_knapp-red.svg";
import pileFullBla1 from "../assets/kurs/pile_full_bla.svg";
import rombeRed from "../assets/rombe-red.svg";
import polygon from "../assets/Polygon-1-5.svg";
import romberKnapp2 from "../assets/kurs/romber_knapp2-2.svg";
import rombeBlue from "../assets/rombe-blue.svg";
import romberKnappYellow from "../assets/kurs/romber_knapp-yellow.svg";
import polygon1 from "../assets/Polygon-1-1.svg";
import polygon2 from "../assets/Polygon-1-2.svg";
import rombeYellow from "../assets/rombe-yellow.svg";
import navLeft from "../assets/nav-left.svg";
import navRight from "../assets/nav-right.svg";

// imgs
import img1 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-1.JPG";
import img6 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-6.JPG";
import img7 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-7.JPG";
import img9 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-9.JPG";
import img10 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-10.JPG";
import img11 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-11.JPG";
import img12 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-12.JPG";

import img2 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-2.jpg";
import img4 from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-4.jpg";
import img3 from "../assets/kurs-bilder/Motanka-dukke/motanka-dukke-3.jpg";
import img5 from "../assets/kurs-bilder/Motanka-dukke/motanka-dukke-5.jpg";

import imgBlokk1 from "../assets/kurs-bilder/Blokktrykk-og-broderi/Blokktrykk-og-broderi-1.jpg";
import imgBlokk2 from "../assets/kurs-bilder/Blokktrykk-og-broderi/Blokktrykk-og-broderi-2.jpg";

import imgSkjerf1 from "../assets/kurs-bilder/Skjerf-og-pulsvarmere/img-1.JPG";
import imgSkjerf2 from "../assets/kurs-bilder/Skjerf-og-pulsvarmere/img-2.JPG";
import imgSkjerf3 from "../assets/kurs-bilder/Skjerf-og-pulsvarmere/img-3.JPG";

const images = [
  img1,
  img6,
  img7,
  img9,
  img10,
  img11,
  img12,
  img5,
  img3,
  img4
];

const skjerfImages = [
  imgSkjerf3,
  imgSkjerf1,
  imgSkjerf2
];

const blokkImages = [
  imgBlokk1,
  imgBlokk2
];

export default function Kurs() {

  const $ = window.$;

  $('.carousel-preview').slick({
    dots: true,
    arrows: true,
  });

  useEffect(() => {
    initKurs();
    initScrollAnimation();
  }, []);

  return (
    <div className="global-holder-container">

      <div className="course-offer-section">
        <div className="course-intro scroll-animate">
          <img
            className="course-intro-icon"
            src={vector1}
            alt=""
          />
          <div className="course-intro-text">
            Vi tilbyr kurs innen ulike kunstneriske fag og materialer, blant annet
            tekstil, akvarell, <br /> tre og glass
          </div>
        </div>

        <div className="course-details">
          <div className="course-description">
            <div className="course-duration-and-level">
              Kursets varighet og nivå kan tilpasses etter behov, og vi kan også
              arrangere flere verkstedsstasjoner samtidig for å ta imot større
              grupper.
            </div>

            <div className="course-social-experience">
              Dette er en inspirerende og sosial måte å styrke samholdet på —
              perfekt for teambuilding, vennegjenger eller kolleger som ønsker en
              kreativ opplevelse sammen. Vi kommer gjerne til deres kontor eller
              lokale og forvandler det til et levende, kreativt rom fult av farger,
              idéer og skaperglede. <br />
              Vi snakker norsk, ukrainsk og engelsk.
            </div>

            <div className="course-contact-invitation">
              Ta gjerne kontakt med oss for å bestille <br />
              et skreddersydd opplegg!
            </div>
          </div>

          <a href="#contact-section-id" className="course-contact">
            <img
              className="course-contact-icon"
              src={romberKnapp}
              alt=""
            />
            <div className="course-contact-button">
              <div className="contact-text">Kontakt oss</div>
              <img
                className="contact-arrow-icon"
                src={pileFullBla}
                alt=""
              />
            </div>
          </a>
        </div>
      </div>

      <div className="kurs-section-container">
        <div className="kurs">Kurs</div>

        {/* FILTERS */}
        <div className="filters">
          <button type="button" className="filters-reset">
            nullstill
          </button>

          <div className="filters-container">
            <div className="filters-main">
              <label className="filter-item all">
                <input type="checkbox" className="filter-checkbox" value="all" />
                <span className="filter-label blue">Vis alt</span>
              </label>

              <div className="filters-sub-main">
                <label className="filter-item tekstil">
                  <input type="checkbox" className="filter-checkbox" value="tekstil" />
                  <span className="filter-label red">Tekstil</span>
                </label>

                <label className="filter-item glass">
                  <input type="checkbox" className="filter-checkbox" value="glass" />
                  <span className="filter-label red">Glass</span>
                </label>
              </div>
            </div>

            <div className="filters-sub">
              <div className="filters-sub-column">
                <label className="filter-item visual-art">
                  <input type="checkbox" className="filter-checkbox" value="visuell-kunst" />
                  <span className="filter-label red">Visuell Kunst</span>
                </label>

                <label className="filter-item christmas">
                  <input type="checkbox" className="filter-checkbox" value="julverksted" />
                  <span className="filter-label red">Julverksted</span>
                </label>
              </div>

              <label className="filter-item wood">
                <input type="checkbox" className="filter-checkbox" value="tre" />
                <span className="filter-label red">Trearbeid</span>
              </label>
            </div>
          </div>

          {/* MOBILE */}
          <div className="filters-container-mobile">
            <label className="filter-item all">
              <input type="checkbox" className="filter-checkbox" value="all" />
              <span className="filter-label blue">Vis alt</span>
            </label>

            <label className="filter-item tekstil">
              <input type="checkbox" className="filter-checkbox" value="tekstil" />
              <span className="filter-label red">Tekstil</span>
            </label>

            <label className="filter-item glass">
              <input type="checkbox" className="filter-checkbox" value="glass" />
              <span className="filter-label red">Glass</span>
            </label>

            <label className="filter-item visual-art">
              <input type="checkbox" className="filter-checkbox" value="visuell-kunst" />
              <span className="filter-label red">Visuell Kunst</span>
            </label>

            <label className="filter-item christmas">
              <input type="checkbox" className="filter-checkbox" value="julverksted" />
              <span className="filter-label red">Julverksted</span>
            </label>

            <label className="filter-item wood">
              <input type="checkbox" className="filter-checkbox" value="tre" />
              <span className="filter-label red">Trearbeid</span>
            </label>
          </div>
        </div>

        {/* COURSE CARDS */}
        <div className="course-cards-container">

          {/* CARD 1 */}
          <div className="course-card" data-category="visuell-kunst">

            <div className="course-card-accent red" id="motanka-dukke-card-css">

              <div
                className="rectangle-2 carousel-preview"
                data-images={JSON.stringify(images)}
              />

              <div className="course-body desktop">
                <div className="frame-101">

                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">
                      Alt nødvendig tekstilmateriale, tråd og dekor. Veiledning fra erfaren
                      instruktør og introduksjon til symbolikk og tradisjon.
                    </div>
                  </div>

                  <Link to="/priser" className="price-href">
                    <img
                      className="romber-knapp-2-2-1"
                      src={romberKnappRed}
                      alt=""
                    />
                    <div className="frame-47">
                      <div className="pris">PRIS</div>
                      <img
                        className="pile-full-bla-1"
                        src={pileFullBla1}
                        alt="Pil"
                      />
                    </div>
                  </Link>

                </div>

                <div className="course-duration">
                  <div className="course-duration-label red">Anbefalt varighet</div>
                  <div className="course-duration-value red">2 timer</div>
                </div>
              </div>
            </div>

            <div className="frame-542" id="motanka-dukke-css">

              <div className="course-body-holder red">
                <div className="course-title red">Motanka-dukke</div>
                <div className="course-summary-description red">
                  Motanka er en tradisjonell tekstildukke laget uten søm – kun ved snurring og knyting. Denne eldgamle håndverkstradisjonen finnes i mange kulturer, og resultatet kan brukes både som leke og som dekorativ figur. Kurset gir en kreativ og sanselig opplevelse med fokus på håndverk, tradisjon og symbolikk.
                </div>
              </div>

              <div className="course-body red" id="motanka-course-body-css">

                <div className="skills">
                  <div className="skills-title red">Hva lærer du</div>

                  <div className="skills-list">

                    <div className="skill-item red">
                      <img className="rombe-item-red" src={rombeRed} alt="" />
                      <div className="skill-item-text-red">
                        Materialkunnskap og bruk av tekstiler
                      </div>
                    </div>

                    <div className="skill-item red">
                      <img className="rombe-item-red" src={rombeRed} alt="" />
                      <div className="skill-item-text-red">
                        Revers-tenkning som kreativ metode
                      </div>
                    </div>

                    <div className="skill-item red">
                      <img className="rombe-item-red" src={rombeRed} alt="" />
                      <div className="skill-item-text-red">
                        Ulike teknikker for knuter og sammenføyning
                      </div>
                    </div>

                    <div className="skill-item red">
                      <img className="rombe-item-red" src={rombeRed} alt="" />
                      <div className="skill-item-text-red">
                        Enkel håndsøm (valgfritt)
                      </div>
                    </div>

                  </div>
                </div>

                <div className="age-group" id="motanka-group-css">
                  <div className="age-group-label red">Passer for</div>
                  <div className="age-group-description red">
                    Familier, barnegrupper, voksne og alle som jobber med barn – som for eksempel kunst- og håndverkslærere.
                  </div>
                </div>

              </div>

              <div className="course-body mobile">
                <div className="frame-101">

                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">
                      Alt nødvendig tekstilmateriale, tråd og dekor. Veiledning fra erfaren
                      instruktør og introduksjon til symbolikk og tradisjon.
                    </div>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2 timer</div>
                  </div>

                  <Link to="/priser" className="price-href">
                    <img
                      className="romber-knapp-2-2-1"
                      src={romberKnappRed}
                      alt=""
                    />
                    <div className="frame-47">
                      <div className="pris">PRIS</div>
                      <img
                        className="pile-full-bla-1"
                        src={pileFullBla1}
                        alt="Pil"
                      />
                    </div>
                  </Link>

                </div>
              </div>

              <div className="course-toggle">
                <div className="utvide red"></div>
                <img className="rombe" src={polygon} alt="" />
              </div>

            </div>
          </div>

          <div className="course-card" data-category="visuell-kunst tre">
                <div className="course-card-accent red">
                    <div className="rectangle-2 carousel-preview"
                        data-images='[
                            "src/assets/kurs-bilder/Miniatyrby/bilde 1.jpg",
                            "src/assets/kurs-bilder/Miniatyrby/bilde 2.jpg",
                            "src/assets/kurs-bilder/Miniatyrby/bilde 3.jpg",
                            "src/assets/kurs-bilder/Miniatyrby/bilde 4.jpg",
                            "src/assets/kurs-bilder/Miniatyrby/bilde 5.jpg",
                            "src/assets/kurs-bilder/Miniatyrby/bilde 6.jpg",
                            "src/assets/kurs-bilder/Miniatyrby/bilde 7.jpg"
                        ]'>
                    </div>
                    <div className="course-body desktop">
                        <div className="frame-101">
                            <div className="course-includes">
                                <div className="course-includes-title red">Hva er inkludert</div>
                                <div className="course-includes-description red">
                                    Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                                </div>
                            </div>
                            <Link to="/priser" className="price-href">
                                <img
                                    className="romber-knapp-2-2-1"
                                    src="src/assets/kurs/romber_knapp red.svg"
                                />
                                <div className="frame-47">
                                    <div className="pris">PRIS</div>
                                    <img
                                        className="pile-full-bla-1"
                                        src={pileFullBla1}
                                        alt="Pil"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="course-duration">
                            <div className="course-duration-label red">Anbefalt varighet</div>
                            <div className="course-duration-value red">2–3 timer</div>
                        </div>
                    </div>
                </div>

                <div className="frame-542">
                    <div className="course-body-holder red">
                        <div className="course-title red">Miniatyrby </div>
                        <div className="course-summary-description red">
                            Verkstedet passer for både barn og voksne – bruk fantasien og skap noe helt unikt. Lær å skjære, bore, pusse og dekorere treverk mens du bygger din egen miniatyrby.
                        </div>
                    </div>

                    <div className="course-body red2">
                        <div className="skills">
                            <div className="skills-title red">Hva lærer du</div>
                            <div className="skills-list">
                                <div className="skill-item red2">
                                    <img className="rombe-item-red" src={rombeRed} />
                                    <div className="skill-item-text-red">
                                        Trearbeid med elektriske verktøy
                                    </div>
                                </div>
                                <div className="skill-item red2">
                                    <img className="rombe-item-red" src={rombeRed} />
                                    <div className="skill-item-text-red">
                                        Pussing, boring og polering
                                    </div>
                                </div>
                                <div className="skill-item red2">
                                    <img className="rombe-item-red" src={rombeRed} />
                                    <div className="skill-item-text-red">
                                        Dekorering: liming og maling
                                    </div>
                                </div>
                                <div className="skill-item red2">
                                    <img className="rombe-item-red" src={rombeRed} />
                                    <div className="skill-item-text-red">
                                        Bruk av elektriske verktøy: kontursag, multimaskin, drillstasjon og limpistol
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="age-group nb">
                            <div className="age-group-label red">Passer for</div>
                            <div className="age-group-description red">
                                barn fra 6 år og voksne
                            </div>
                            <div className="course-duration-value red">Barn i alderen 6–10 år må ha følge av en voksen.</div>
                        </div>
                    </div>

                    <div className="course-body mobile">
                        <div className="frame-101">
                            <div className="course-includes">
                                <div className="course-includes-title red">Hva er inkludert</div>
                                <div className="course-includes-description red">
                                    Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                                </div>
                            </div>
                            <div className="course-duration">
                                <div className="course-duration-label red">Anbefalt varighet</div>
                                <div className="course-duration-value red">2–3 timer</div>
                            </div>
                            <Link to="/priser" className="price-href">
                                <img
                                    className="romber-knapp-2-2-1"
                                    src="src/assets/kurs/romber_knapp red.svg"
                                />
                                <div className="frame-47">
                                    <div className="pris">PRIS</div>
                                    <img
                                        className="pile-full-bla-1"
                                        src={pileFullBla1}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="course-toggle">
                        <div className="utvide red"></div>
                        <img className="rombe" src={polygon} />
                    </div>
                </div>
            </div>

            <div className="course-card" data-category="tekstil">
                <div className="course-card-accent blue">
                    <div className="rectangle-2 carousel-preview"
                        data-images='[
                            "src/assets/kurs-bilder/Smykker/img (1).JPG",
                            "src/assets/kurs-bilder/Smykker/img (2).JPG",
                            "src/assets/kurs-bilder/Smykker/img (3).JPG",
                            "src/assets/kurs-bilder/Smykker/img (4).JPG",
                            "src/assets/kurs-bilder/Smykker/img (5).JPG"
                        ]'>
                    </div>
                    <div className="course-body desktop">
                        <div className="frame-101">
                            <div className="course-includes">
                                <div className="course-includes-title blue">Hva er inkludert</div>
                                <div className="course-includes-description blue">
                                    Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                                </div>
                            </div>
                            <Link to="/priser" className="price-href">
                                <img className="romber-knapp-2-2-1" src={romberKnapp2} />
                                <div className="frame-47">
                                    <div className="pris">PRIS</div>
                                    <img className="pile-full-bla-1" src={pileFullBla1} />
                                </div>
                            </Link>
                        </div>
                        <div className="course-duration">
                            <div className="course-duration-label blue">Anbefalt varighet</div>
                            <div className="course-duration-value blue">2 timer</div>
                        </div>
                    </div>
                </div>
                <div className="frame-542">
                    <div className="course-body-holder blue">
                        <div className="course-title blue">Smykker</div>
                        <div
                            className="course-summary-description blue">
                            Ønsker du å lære å hekle? I dette kurset får du en praktisk og inspirerende introduksjon til heklingens grunnteknikk. Med kun den aller første masken kan du skape vakre og personlige smykker som armbånd, halskjeder, øredobber og glassmarkører.
                        </div>
                    </div>
                    <div className="course-body blue" id="smykker-course-body-css">
                        <div className="skills">
                            <div className="skills-title blue">Hva lærer du</div>
                            <div className="skills-list">
                                <div className="skill-item">
                                    <img className="rombe-item-blue" src={rombeBlue} />
                                    <div className="skill-item-text-blue">Grunnleggende håndgrep i hekling
                                    </div>
                                </div>
                                <div className="skill-item" id="smykker-skill-item-css">
                                    <img className="rombe-item-blue" src={rombeBlue} />
                                    <div className="skill-item-text-blue">Den første grunnmasken (luftmaske)</div>
                                </div>
                                <div className="skill-item">
                                    <img className="rombe-item-blue" src={rombeBlue} />
                                    <div className="skill-item-text-blue">Materialkunnskap og trådvalg</div>
                                </div>
                                <div className="skill-item">
                                    <img className="rombe-item-blue" src={rombeBlue} />
                                    <div className="skill-item-text-blue">Hvordan velge riktig heklenål</div>
                                </div>
                            </div>
                        </div>
                        <div className="age-group" id="age-group-smykker-css">
                            <div className="age-group-label blue">Passer for</div>
                            <div className="age-group-description blue">Barn fra 10 år og voksne nybegynnere.</div>
                        </div>
                    </div>

                    <div className="course-body mobile">
                        <div className="frame-101">
                            <div className="course-includes">
                                <div className="course-includes-title blue">Hva er inkludert</div>
                                <div className="course-includes-description blue">
                                    Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                                </div>
                            </div>
                            <div className="course-duration">
                                <div className="course-duration-label blue">Anbefalt varighet</div>
                                <div className="course-duration-value blue">2 timer</div>
                            </div>
                            <Link to="/priser" className="price-href">
                                <img className="romber-knapp-2-2-1" src={romberKnapp2} />
                                <div className="frame-47">
                                    <div className="pris">PRIS</div>
                                    <img className="pile-full-bla-1" src={pileFullBla1} />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="course-toggle">
                        <div className="utvide blue"></div>
                        <img className="rombe" src={polygon1} />
                    </div>
                </div>
            </div>

            {/* CARD 4 */}
            <div className="course-card" data-category="tekstil">

              <div className="course-card-accent blue" id="skjerf-card-css">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={JSON.stringify(skjerfImages)}
                />

                <div className="course-body desktop">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title blue">Hva er inkludert</div>
                      <div className="course-includes-description blue">
                        Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnapp2} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label blue">Anbefalt varighet</div>
                    <div className="course-duration-value blue">3 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542" id="skjerf-css">

                <div className="course-body-holder blue">
                  <div className="course-title blue">Skjerf og pulsvarmere</div>
                  <div className="course-summary-description blue">
                    Ønsker du å lære å hekle? I dette kurset får du en grundig introduksjon til heklingens to første grunnmasker: luftmaske og fastmaske. Du velger selv hva du vil lage – et mykt skjerf eller et par pulsvarmere – og får individuell veiledning underveis.
                  </div>
                </div>

                <div className="course-body blue" id="skjerf-course-body-css">
                  <div className="skills">
                    <div className="skills-title blue">Hva lærer du</div>
                    <div className="skills-list">

                      <div className="skill-item">
                        <img className="rombe-item-blue" src={rombeBlue} alt="" />
                        <div className="skill-item-text-blue">Grunnleggende håndgrep i hekling</div>
                      </div>

                      <div className="skill-item">
                        <img className="rombe-item-blue" src={rombeBlue} alt="" />
                        <div className="skill-item-text-blue">Luftmaske og fastmaske</div>
                      </div>

                      <div className="skill-item">
                        <img className="rombe-item-blue" src={rombeBlue} alt="" />
                        <div className="skill-item-text-blue">Materialkunnskap og trådvalg</div>
                      </div>

                      <div className="skill-item">
                        <img className="rombe-item-blue" src={rombeBlue} alt="" />
                        <div className="skill-item-text-blue">Hvordan velge riktig heklenål</div>
                      </div>

                      <div className="skill-item">
                        <img className="rombe-item-blue" src={rombeBlue} alt="" />
                        <div className="skill-item-text-blue">Kreative tips for bruk av restegarn</div>
                      </div>

                    </div>
                  </div>

                  <div className="age-group" id="age-group-skjerf-css">
                    <div className="age-group-label blue">Passer for</div>
                    <div className="age-group-description blue">
                      Barn fra 12 år og voksne nybegynnere.
                    </div>
                  </div>
                </div>

                <div className="course-body mobile">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title blue">Hva er inkludert</div>
                      <div className="course-includes-description blue">
                        Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label blue">Anbefalt varighet</div>
                      <div className="course-duration-value blue">3 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnapp2} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide blue"></div>
                  <img className="rombe" src={polygon1} alt="" />
                </div>

              </div>

            </div>

            {/* CARD 5 */}
            <div className="course-card" data-category="tekstil">

              <div className="course-card-accent blue" id="blokktrykk-card-css">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={JSON.stringify(blokkImages)}
                />

                <div className="course-body desktop">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title blue">Hva er inkludert</div>
                      <div className="course-includes-description blue">
                        Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnapp2} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label blue">Anbefalt varighet</div>
                    <div className="course-duration-value blue">3 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542" id="blokktrykk-css">

                <div className="course-body-holder blue">
                  <div className="course-title blue">Blokktrykk og broderi</div>
                  <div className="course-summary-description blue">
                    Vil du lære grunnleggende broderiteknikker på en enkel og kreativ måte? I dette verkstedet kombinerer vi blokktrykk på tekstil med broderi. Du trykker et mønster på stoff med akrylmaling i en valgfri form fra vårt designbibliotek, og forvandler deretter motivet videre med broderi. Til slutt syr du stoffstykket om til en liten pose – perfekt som organizer eller gavepose.
                  </div>
                </div>

                <div className="course-body blue" id="blokktrykk-course-body-css">
                  <div className="skills">
                    <div className="skills-title blue">Hva lærer du</div>
                    <div className="skills-list">

                      <div className="skill-item">
                        <img className="rombe-item-blue" src={rombeBlue} alt="" />
                        <div className="skill-item-text-blue">Grunnleggende blokktrykk på tekstil</div>
                      </div>

                      <div className="skill-item">
                        <img className="rombe-item-blue" src={rombeBlue} alt="" />
                        <div className="skill-item-text-blue">Enkle broderisting</div>
                      </div>

                      <div className="skill-item">
                        <img className="rombe-item-blue" src={rombeBlue} alt="" />
                        <div className="skill-item-text-blue">Enkel søm og montering</div>
                      </div>

                    </div>
                  </div>

                  <div className="age-group" id="age-group-blokktrykk-css">
                    <div className="age-group-label blue">Passer for</div>
                    <div className="age-group-description blue">
                      Barn fra 10 år og voksne
                    </div>
                  </div>
                </div>

                <div className="course-body mobile">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title blue">Hva er inkludert</div>
                      <div className="course-includes-description blue">
                        Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label blue">Anbefalt varighet</div>
                      <div className="course-duration-value blue">3 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnapp2} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide blue"></div>
                  <img className="rombe" src={polygon1} alt="" />
                </div>

              </div>

            </div>

            {/* CARD 6 */}
            <div className="course-card" data-category="glass">

              <div className="course-card-accent yellow" id="akvarell-card-css">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={`[]`}
                />

                <div className="course-body desktop">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title yellow">Hva er inkludert</div>
                      <div className="course-includes-description yellow">
                        Alt nødvendig akvarellutstyr, papir og pensler. Veiledning fra erfaren instruktør med tips om teknikk og kreativ utfoldelse.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnappYellow} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label yellow">Anbefalt varighet</div>
                    <div className="course-duration-value yellow">2–2,5 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542" id="akvarell-course-css">

                <div className="course-body-holder yellow">
                  <div className="course-title yellow">Akvarellverksted</div>
                  <div className="course-summary-description yellow">
                    Et avslappende akvarellverksted som vil få deg til å utfolde din kreativitet og skaperglede. Vi introduserer den livlige, flytende akvarellteknikken og dens magiske egenskaper, og du maler ditt eget abstrakte akvarellmotiv.
                  </div>
                </div>

                <div className="course-body yellow" id="akvarell-course-body-css">
                  <div className="skills">
                    <div className="skills-title yellow">Hva lærer du</div>
                    <div className="skills-list">

                      <div className="skill-item yellow">
                        <img className="rombe-item-yellow" src={rombeYellow} alt="" />
                        <div className="skill-item-text-yellow">Grunnleggende akvarellteknikk og fargeblanding</div>
                      </div>

                      <div className="skill-item yellow">
                        <img className="rombe-item-yellow" src={rombeYellow} alt="" />
                        <div className="skill-item-text-yellow">Kreativ bruk av vann og tekstur</div>
                      </div>

                      <div className="skill-item yellow" style={{ marginTop: "-40px" }}>
                        <img className="rombe-item-yellow" src={rombeYellow} alt="" />
                        <div className="skill-item-text-yellow">Lage abstrakte og personlige motiver</div>
                      </div>

                    </div>
                  </div>

                  <div className="age-group" id="age-group-akvarell-css">
                    <div className="age-group-label yellow">Passer for</div>
                    <div className="age-group-description yellow">Barn fra 10 år og voksne</div>
                  </div>
                </div>

                <div className="course-body mobile">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title yellow">Hva er inkludert</div>
                      <div className="course-includes-description yellow">
                        Alt nødvendig akvarellutstyr, papir og pensler. Veiledning fra erfaren instruktør med tips om teknikk og kreativ utfoldelse.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label yellow">Anbefalt varighet</div>
                      <div className="course-duration-value yellow">2–2,5 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnappYellow} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide yellow"></div>
                  <img className="rombe" src={polygon2} alt="" />
                </div>

              </div>

            </div>

            {/* CARD 7 */}
            <div className="course-card" data-category="glass">

              <div className="course-card-accent yellow">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={`[
                    "src/assets/kurs-bilder/Glasslysholder/img (1).jpg",
                    "src/assets/kurs-bilder/Glasslysholder/img (2).jpg",
                    "src/assets/kurs-bilder/Glasslysholder/img (3).jpg",
                    "src/assets/kurs-bilder/Glasslysholder/img (4).jpg",
                    "src/assets/kurs-bilder/Glasslysholder/img (5).jpg",
                    "src/assets/kurs-bilder/Glasslysholder/img (6).jpg"
                  ]`}
                />

                <div className="course-body desktop">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title yellow">Hva er inkludert</div>
                      <div className="course-includes-description yellow">
                        Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnappYellow} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label yellow">Anbefalt varighet</div>
                    <div className="course-duration-value yellow">2 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542">

                <div className="course-body-holder yellow">
                  <div className="course-title yellow">GLASSLYSHOLDER</div>
                  <div className="course-summary-description yellow">
                    Vi heier på gjenbruk! På vårt glassgravering-verksted lærer du hvordan du kan dekorere et gammelt syltetøyglass til en flott lysholder. <br /><br />
                    Vi stiller med glass, men du kan gjerne ta med egne syltetøyglass, flasker eller glasskrukker hjemmefra. Glassgravering er både spennende og kreativt.
                  </div>
                </div>

                <div className="course-body yellow" id="glasslysholder-course-body-css">
                  <div className="skills">
                    <div className="skills-title yellow">Hva lærer du</div>
                    <div className="skills-list">
                      <div className="skill-item yellow">
                        <img className="rombe-item-yellow" src={rombeYellow} alt="" />
                        <div className="skill-item-text-yellow">Bruk av elektroverktøy og diamanttilbehør</div>
                      </div>
                      <div className="skill-item yellow">
                        <img className="rombe-item-yellow" src={rombeYellow} alt="" />
                        <div className="skill-item-text-yellow">Glassgraveringsteknikk</div>
                      </div>
                    </div>
                  </div>

                  <div className="age-group" id="glasslysholder-age-group-css">
                    <div className="age-group-label yellow">Passer for</div>
                    <div className="age-group-description yellow">barn fra 6 år og voksne</div>
                    <div className="course-duration-value yellow">
                      Barn i alderen 6–10 år må ha følge av en voksen.
                    </div>
                  </div>
                </div>

                <div className="course-body mobile">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title yellow">Hva er inkludert</div>
                      <div className="course-includes-description yellow">
                        Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label yellow">Anbefalt varighet</div>
                      <div className="course-duration-value yellow">2 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnappYellow} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide yellow"></div>
                  <img className="rombe" src={polygon2} alt="" />
                </div>

              </div>

            </div>

            {/* CARD 8 */}
            <div className="course-card" data-category="glass">

              <div className="course-card-accent yellow" id="glasslysholder-card-css">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={`[
                    "src/assets/kurs-bilder/Farsdag/img (1).JPG",
                    "src/assets/kurs-bilder/Farsdag/img (2).JPG",
                    "src/assets/kurs-bilder/Farsdag/img (3).JPG",
                    "src/assets/kurs-bilder/Farsdag/img (4).JPG"
                  ]`}
                />

                <div className="course-body desktop">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title yellow">Hva er inkludert</div>
                      <div className="course-includes-description yellow">
                        Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnappYellow} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label yellow">Anbefalt varighet</div>
                    <div className="course-duration-value yellow">2 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542">

                <div className="course-body-holder yellow">
                  <div className="course-title yellow">GAVE TIL FARSDAG</div>
                  <div className="course-summary-description yellow">
                    Smelt pappahjertet og skap minner for livet med en håndlaget farsdagsgave! Glassgravering er spennende, og hos oss lærer du hvordan du graver på glass og bruker elektroverktøy og diamanttilbehør for å lage en helt egen hilsen til verdens beste pappa. <br /><br />
                    Vi er opptatt av gjenbruk, så ta gjerne med deg et glass hjemmefra – farget eller klart, flasker eller gamle syltetøyglass.
                  </div>
                </div>

                <div className="course-body yellow" id="farsdag-course-body-css">
                  <div className="skills">
                    <div className="skills-title yellow">Hva lærer du</div>
                    <div className="skills-list">
                      <div className="skill-item yellow">
                        <img className="rombe-item-yellow" src={rombeYellow} alt="" />
                        <div className="skill-item-text-yellow">Bruk av elektroverktøy og diamanttilbehør</div>
                      </div>
                      <div className="skill-item yellow">
                        <img className="rombe-item-yellow" src={rombeYellow} alt="" />
                        <div className="skill-item-text-yellow">Glassgraveringsteknikk</div>
                      </div>
                    </div>
                  </div>

                  <div className="age-group" id="glasslysholder-age-group-css">
                    <div className="age-group-label yellow">Passer for</div>
                    <div className="age-group-description yellow">barn fra 6 år og voksne</div>
                    <div className="course-duration-value yellow">
                      Barn i alderen 6–10 år må ha følge av en voksen.
                    </div>
                  </div>
                </div>

                <div className="course-body mobile">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title yellow">Hva er inkludert</div>
                      <div className="course-includes-description yellow">
                        Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label yellow">Anbefalt varighet</div>
                      <div className="course-duration-value yellow">2 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src={romberKnappYellow} alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>            <div className="course-card" data-category="visuell-kunst julverksted glass" id="glassgravering-juleverksted-card-css">

              <div className="course-card-accent red">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={`[
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (1).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (2).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (3).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (4).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (5).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (6).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (7).jpg"
                  ]`}
                />

                <div className="course-body desktop" id="glassgravering-juleverksted-course-body-css">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title red">Hva er inkludert</div>
                      <div className="course-includes-description red">
                        Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542">

                <div className="course-body-holder red">
                  <div className="course-title red" id="glassgravering-juleverksted-course-title-css">
                    GLASSGRAVERING JULEVERKSTED
                  </div>
                  <div className="course-summary-description red">
                    Glassgravering er spennende! Glasslysholdere passer perfekt som julegave – spesielt kombinert med personlig glassgravering. Med et personlig, håndgravert glass kan du overraske noen du er glad i med en helt unik og minneverdig julegave. Det er eksklusivt å ha en personlig håndgravering på glass, utført med elektroverktøy og diamanttilbehør. <br /><br />
                    Vi er opptatt av gjenbruk, så ta gjerne med deg et glass hjemmefra – farget eller klart, flasker eller gamle syltetøyglass.
                  </div>
                </div>

                <div className="course-body red">
                  <div className="skills">
                    <div className="skills-title red">Hva lærer du</div>
                    <div className="skills-list">
                      <div className="skill-item red">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Bruk av elektroverktøy og diamanttilbehør</div>
                      </div>
                      <div className="skill-item red">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Glassgraveringsteknikk</div>
                      </div>
                    </div>
                  </div>

                  <div className="age-group">
                    <div className="age-group-label red">Passer for</div>
                    <div className="age-group-description red">
                      Familier, barnegrupper, voksne og alle som ønsker en kreativ og meningsfull juleaktivitet.
                    </div>
                    <div className="course-duration-value red">
                      Barn i alderen 6–10 år må ha følge av en voksen.
                    </div>
                  </div>
                </div>

                <div className="course-body mobile" id="glassgravering-juleverksted-course-body-css">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title red">Hva er inkludert</div>
                      <div className="course-includes-description red">
                        Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label red">Anbefalt varighet</div>
                      <div className="course-duration-value red">2 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide red"></div>
                  <img className="rombe" src={polygon} alt="" />
                </div>

              </div>

            </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide yellow"></div>
                  <img className="rombe" src={polygon2} alt="" />
                </div>

              </div>

            </div>

            {/* CARD: Motanka-engel */}
            <div className="course-card" data-category="visuell-kunst julverksted">

              <div className="course-card-accent red" id="motanka-engel-card-css">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={`[
                    "src/assets/kurs-bilder/Motanka engel/img (1).JPG",
                    "src/assets/kurs-bilder/Motanka engel/img (2).JPG",
                    "src/assets/kurs-bilder/Motanka engel/img (3).JPG",
                    "src/assets/kurs-bilder/Motanka engel/img (4).JPG",
                    "src/assets/kurs-bilder/Motanka engel/img (5).JPG",
                    "src/assets/kurs-bilder/Motanka engel/img (6).JPG",
                    "src/assets/kurs-bilder/Motanka engel/img (7).JPG",
                    "src/assets/kurs-bilder/Motanka engel/img (8).JPG",
                    "src/assets/kurs-bilder/Motanka engel/img (9).JPG"
                  ]`}
                />

                <div className="course-body desktop">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title red">Hva er inkludert</div>
                      <div className="course-includes-description red">
                        Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542" id="motanka-dukke-css">

                <div className="course-body-holder red">
                  <div className="course-title red">Motanka-engel</div>
                  <div className="course-summary-description red">
                    I dette spesialverkstedet for juletiden lager vi Motanka-engler – tradisjonelle tekstilfigurer laget uten søm, kun ved snurring og knyting. Motanka har røtter i folkelig håndverkstradisjon og symboliserer beskyttelse, varme og gode ønsker. Du skaper din egen engel av tekstil og naturmaterialer – et meningsfullt håndarbeid og en vakker juledekorasjon eller gave.
                  </div>
                </div>

                <div className="course-body red">
                  <div className="skills">
                    <div className="skills-title red">Hva lærer du</div>
                    <div className="skills-list">
                      <div className="skill-item red">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Materialkunnskap og bruk av tekstiler</div>
                      </div>
                      <div className="skill-item red">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Tradisjonelle teknikker for snurring og knyting</div>
                      </div>
                      <div className="skill-item red">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Estetiske prinsipper i Motanka-tradisjonen</div>
                      </div>
                      <div className="skill-item red">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Kreative variasjoner og symbolikk knyttet til englefiguren</div>
                      </div>
                    </div>
                  </div>

                  <div className="age-group" id="motanka-group-css">
                    <div className="age-group-label red">Passer for</div>
                    <div className="age-group-description red">
                      Familier, barnegrupper, voksne og alle som ønsker en kreativ og meningsfull juleaktivitet.
                    </div>
                  </div>
                </div>

                <div className="course-body mobile">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title red">Hva er inkludert</div>
                      <div className="course-includes-description red">
                        Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label red">Anbefalt varighet</div>
                      <div className="course-duration-value red">2 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide red"></div>
                  <img className="rombe" src={polygon} alt="" />
                </div>

              </div>

            </div>

            {/* CARD: Nissefjes */}
            <div className="course-card" data-category="tre julverksted">

              <div className="course-card-accent red" id="nissefjes-card-css">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={`[
                    "src/assets/kurs-bilder/Nissefjes/img (1).JPG",
                    "src/assets/kurs-bilder/Nissefjes/img (2).JPG",
                    "src/assets/kurs-bilder/Nissefjes/img (3).JPG"
                  ]`}
                />

                <div className="course-body desktop">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title red">Hva er inkludert</div>
                      <div className="course-includes-description red">
                        Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2-3 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542">

                <div className="course-body-holder red">
                  <div className="course-title red">Nissefjes</div>
                  <div className="course-summary-description red">
                    Lag fine nissefjes som kan brukes som nøkkelringer, julepynt eller gaver. Et hyggelig verksted for hele familien hvor dere maler, pusser og setter sammen deres egen unike julepynt.
                  </div>
                </div>

                <div className="course-body red" id="nissefjes-course-body-css">
                  <div className="skills">
                    <div className="skills-title red">Hva lærer du</div>
                    <div className="skills-list">
                      <div className="skill-item red" id="nissefjes-item-css">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Trearbeid med elektriske verktøy</div>
                      </div>
                      <div className="skill-item red" id="nissefjes-item-css">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Pussing, boring og polering</div>
                      </div>
                      <div className="skill-item red" id="nissefjes-item-css">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Dekorering: liming og maling</div>
                      </div>
                      <div className="skill-item red" id="nissefjes-item-css">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">
                          Bruk av elektriske verktøy: kontursag, multimaskin, drillstasjon og slipemaskin
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="age-group" id="nissefjes-age-group">
                    <div className="age-group-label red">Passer for</div>
                    <div className="age-group-description red">
                      Familier, barnegrupper, voksne og alle som ønsker en kreativ og meningsfull juleaktivitet.
                    </div>
                    <div className="course-duration-value red">
                      Barn i alderen 6–10 år må ha følge av en voksen.
                    </div>
                  </div>
                </div>

                <div className="course-body mobile">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title red">Hva er inkludert</div>
                      <div className="course-includes-description red">
                        Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label red">Anbefalt varighet</div>
                      <div className="course-duration-value red">2-3 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide red"></div>
                  <img className="rombe" src={polygon} alt="" />
                </div>

              </div>

            </div>

            {/* CARD: Julepynt */}
          <div className="course-card" data-category="tre julverksted">

            <div className="course-card-accent red" id="julepynt-card-css">

              <div
                className="rectangle-2 carousel-preview"
                data-images={`[
                  "src/assets/kurs-bilder/Julepynt/img (1).JPG",
                  "src/assets/kurs-bilder/Julepynt/img (2).JPG",
                  "src/assets/kurs-bilder/Julepynt/img (3).JPG",
                  "src/assets/kurs-bilder/Julepynt/img (4).JPG",
                  "src/assets/kurs-bilder/Julepynt/img (5).JPG",
                  "src/assets/kurs-bilder/Julepynt/img (6).JPG",
                  "src/assets/kurs-bilder/Julepynt/img (7).JPG"
                ]`}
              />

              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">
                      Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                    </div>
                  </div>

                  <Link to="/priser" className="price-href">
                    <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                    <div className="frame-47">
                      <div className="pris">PRIS</div>
                      <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                    </div>
                  </Link>
                </div>

                <div className="course-duration">
                  <div className="course-duration-label red">Anbefalt varighet</div>
                  <div className="course-duration-value red">2-3 timer</div>
                </div>
              </div>

            </div>

            <div className="frame-542">

              <div className="course-body-holder red">
                <div className="course-title red">Julepynt</div>
                <div className="course-summary-description red">
                  Lag vakker julepynt eller fine gaver i tre – engler, fugler eller stjerner. Pynt juletreet hjemme, eller gi dem til noen du er glad i for en personlig og varm julegave.
                </div>
              </div>

              <div className="course-body red" id="nissefjes-course-body-css">
                <div className="skills">
                  <div className="skills-title red">Hva lærer du</div>
                  <div className="skills-list">
                    <div className="skill-item red" id="julepynt-item-css">
                      <img className="rombe-item-red" src={rombeRed} alt="" />
                      <div className="skill-item-text-red">Trearbeid med elektriske verktøy</div>
                    </div>
                    <div className="skill-item red" id="julepynt-item-css">
                      <img className="rombe-item-red" src={rombeRed} alt="" />
                      <div className="skill-item-text-red">Pussing, boring og polering</div>
                    </div>
                    <div className="skill-item red" id="julepynt-item-css">
                      <img className="rombe-item-red" src={rombeRed} alt="" />
                      <div className="skill-item-text-red">Dekorering: liming og maling</div>
                    </div>
                    <div className="skill-item red" id="julepynt-item-css">
                      <img className="rombe-item-red" src={rombeRed} alt="" />
                      <div className="skill-item-text-red">
                        Bruk av elektriske verktøy: kontursag, multimaskin, drillstasjon og slipemaskin
                      </div>
                    </div>
                  </div>
                </div>

                <div className="age-group" id="julepynt-age-group">
                  <div className="age-group-label red">Passer for</div>
                  <div className="age-group-description red">
                    Familier, barnegrupper, voksne og alle som ønsker en kreativ og meningsfull juleaktivitet.
                  </div>
                  <div className="course-duration-value red">
                    Barn i alderen 6–10 år må ha følge av en voksen.
                  </div>
                </div>
              </div>

              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">
                      Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                    </div>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2-3 timer</div>
                  </div>

                  <Link to="/priser" className="price-href">
                    <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                    <div className="frame-47">
                      <div className="pris">PRIS</div>
                      <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="course-toggle">
                <div className="utvide red"></div>
                <img className="rombe" src={polygon} alt="" />
              </div>

            </div>

          </div>

          {/* CARD: Glassgravering Juleverksted */}
            <div className="course-card" data-category="visuell-kunst julverksted glass" id="glassgravering-juleverksted-card-css">

              <div className="course-card-accent red">

                <div
                  className="rectangle-2 carousel-preview"
                  data-images={`[
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (1).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (2).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (3).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (4).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (5).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (6).jpg",
                    "src/assets/kurs-bilder/Glasslysholder Juleverksted/img (7).jpg"
                  ]`}
                />

                <div className="course-body desktop" id="glassgravering-juleverksted-course-body-css">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title red">Hva er inkludert</div>
                      <div className="course-includes-description red">
                        Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2 timer</div>
                  </div>
                </div>

              </div>

              <div className="frame-542">

                <div className="course-body-holder red">
                  <div className="course-title red" id="glassgravering-juleverksted-course-title-css">
                    GLASSGRAVERING JULEVERKSTED
                  </div>
                  <div className="course-summary-description red">
                    Glassgravering er spennende! Glasslysholdere passer perfekt som julegave – spesielt kombinert med personlig glassgravering. Med et personlig, håndgravert glass kan du overraske noen du er glad i med en helt unik og minneverdig julegave. Det er eksklusivt å ha en personlig håndgravering på glass, utført med elektroverktøy og diamanttilbehør. <br /><br />
                    Vi er opptatt av gjenbruk, så ta gjerne med deg et glass hjemmefra – farget eller klart, flasker eller gamle syltetøyglass.
                  </div>
                </div>

                <div className="course-body red">
                  <div className="skills">
                    <div className="skills-title red">Hva lærer du</div>
                    <div className="skills-list">
                      <div className="skill-item red">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Bruk av elektroverktøy og diamanttilbehør</div>
                      </div>
                      <div className="skill-item red">
                        <img className="rombe-item-red" src={rombeRed} alt="" />
                        <div className="skill-item-text-red">Glassgraveringsteknikk</div>
                      </div>
                    </div>
                  </div>

                  <div className="age-group" id="glassgravering-juleverksted-age-group">
                    <div className="age-group-label red">Passer for</div>
                    <div className="age-group-description red">
                      Familier, barnegrupper, voksne og alle som ønsker en kreativ og meningsfull juleaktivitet.
                    </div>
                    <div className="course-duration-value red">
                      Barn i alderen 6–10 år må ha følge av en voksen.
                    </div>
                  </div>
                </div>

                <div className="course-body mobile" id="glassgravering-juleverksted-course-body-css">
                  <div className="frame-101">
                    <div className="course-includes">
                      <div className="course-includes-title red">Hva er inkludert</div>
                      <div className="course-includes-description red">
                        Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.
                      </div>
                    </div>

                    <div className="course-duration">
                      <div className="course-duration-label red">Anbefalt varighet</div>
                      <div className="course-duration-value red">2 timer</div>
                    </div>

                    <Link to="/priser" className="price-href">
                      <img className="romber-knapp-2-2-1" src="src/assets/kurs/romber_knapp red.svg" alt="" />
                      <div className="frame-47">
                        <div className="pris">PRIS</div>
                        <img className="pile-full-bla-1" src={pileFullBla1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course-toggle">
                  <div className="utvide red"></div>
                  <img className="rombe" src={polygon} alt="" />
                </div>

              </div>

            </div>

        </div>
      </div>

      {/* IMAGE MODAL */}
      <div className="modal" id="imageModal">
        <span className="close" id="modalClose">&times;</span>

        <span className="nav prev" id="modalPrev">
            <img src={navLeft} alt="Forrige" />
        </span>

        <img id="modalImage" alt="Preview" />

        <span className="nav next" id="modalNext">
            <img src={navRight} alt="Neste" />
        </span>
      </div>
    </div>
  );
}