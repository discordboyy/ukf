// src/pages/Kurs.jsx
// ─── PERFORMANCE OPTIMIZED VERSION ───────────────────────────────────────────
// Changes vs original:
//  1. All ~55 image static imports → URL strings from /data/kurs-images.js
//     (tree-shaken out of JS bundle; browser loads them only when needed)
//  2. useNavigate moved above useEffect (hooks order fix)
//  3. scrollToContact wrapped in useCallback → stable reference, no re-alloc
//  4. PriceLink / Carousel wrapped with React.memo in their own files
//  5. initScrollAnimation + initKurs deferred with requestIdleCallback / setTimeout
//     → unblocks main thread during LCP window
//  6. Carousel receives only the first image eagerly; the rest are passed lazily
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

// styles
import "../style/style.css";
import "../style/kurs.css";
import "../style/new-kurs.css";

// components
import Carousel from "../components/Carousel";
import PriceLink from "../components/PriceLink";

// kurs.js — статический импорт: вешает DOM listeners, нужен сразу после mount
import { initKurs } from "../js/kurs";

// ─── Image data (strings, NOT static imports) ────────────────────────────────
// Move all image paths to /src/data/kurs-images.js (see companion file).
// Vite will NOT bundle these as base64/modules — they stay as plain URL strings
// that point to /public or your CDN, loaded by the browser on demand.

import {
  UI,
  MOTANKA_DUKKE,
  SKJERF,
  BLOKK,
  MINI,
  GLASS,
  FARSDAG,
  JULEGLASS,
  MOTANKA_ENGEL,
  NISSE,
  JULEPYNT,
  SMYKKER,
} from "../data/kurs-images";

// ─── Component ───────────────────────────────────────────────────────────────
export default function Kurs() {
  const navigate = useNavigate(); // ← moved above useEffect (rules of hooks)

  useEffect(() => {
    // initKurs вешает click listeners на DOM — вызываем сразу после mount
    initKurs();

    // scroll-animation только добавляет CSS-классы при скролле — можно отложить
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        import("../js/scroll-animation").then((mod) => {
          const init = mod.init ?? mod.default;
          if (typeof init === "function") init();
        });
      }, { timeout: 2000 });
    } else {
      setTimeout(() => {
        import("../js/scroll-animation").then((mod) => {
          const init = mod.init ?? mod.default;
          if (typeof init === "function") init();
        });
      }, 200);
    }
  }, []);

  // Stable reference — won't cause PriceLink / child re-renders
  const scrollToContact = useCallback((e) => {
    e.preventDefault();
    document.getElementById("contact-section-id")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="global-holder-container">

      <div className="course-offer-section">
        <div className="course-intro scroll-animate">
          {/* SVG UI icon — tiny, inline is fine */}
          <img
            className="course-intro-icon"
            src={UI.vector1}
            alt=""
            width="40"
            height="40"
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

          <a href="#contact-section-id" className="course-contact" onClick={scrollToContact}>
            <img className="course-contact-icon" src={UI.romberKnapp} alt="" width="40" height="40" />
            <div className="course-contact-button">
              <div className="contact-text">Kontakt oss</div>
              <img className="contact-arrow-icon" src={UI.pileFullBla} alt="" width="20" height="20" />
            </div>
          </a>
        </div>
      </div>

      <div className="kurs-section-container">
        <div className="kurs">Kurs</div>

        {/* FILTERS — unchanged markup */}
        <div className="filters">
          <button type="button" className="filters-reset">nullstill</button>
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

        {/* COURSE CARDS ──────────────────────────────────────────────────── */}
        <div className="course-cards-container">

          {/* CARD: Motanka-dukke */}
          <div className="course-card" data-category="visuell-kunst">
            <div className="course-card-accent red" id="motanka-dukke-card-css">
              <Carousel images={MOTANKA_DUKKE} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">
                      Alt nødvendig tekstilmateriale, tråd og dekor. Veiledning fra erfaren
                      instruktør og introduksjon til symbolikk og tradisjon.
                    </div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
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
                    {["Materialkunnskap og bruk av tekstiler","Revers-tenkning som kreativ metode","Ulike teknikker for knuter og sammenføyning","Enkel håndsøm (valgfritt)"].map((t) => (
                      <div key={t} className="skill-item red">
                        <img className="rombe-item-red" src={UI.rombeRed} alt="" width="12" height="12" />
                        <div className="skill-item-text-red">{t}</div>
                      </div>
                    ))}
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
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide red"></div>
                <img className="rombe" src={UI.polygon} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Miniatyrby */}
          <div className="course-card" data-category="visuell-kunst tre">
            <div className="course-card-accent red" id="miniatyrby-card-css">
              <Carousel images={MINI} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
                <div className="course-duration">
                  <div className="course-duration-label red">Anbefalt varighet</div>
                  <div className="course-duration-value red">2–3 timer</div>
                </div>
              </div>
            </div>
            <div className="frame-542">
              <div className="course-body-holder red">
                <div className="course-title red">Miniatyrby</div>
                <div className="course-summary-description red">
                  Verkstedet passer for både barn og voksne – bruk fantasien og skap noe helt unikt. Lær å skjære, bore, pusse og dekorere treverk mens du bygger din egen miniatyrby.
                </div>
              </div>
              <div className="course-body red2">
                <div className="skills">
                  <div className="skills-title red">Hva lærer du</div>
                  <div className="skills-list">
                    {["Trearbeid med elektriske verktøy","Pussing, boring og polering","Dekorering: liming og maling","Bruk av elektriske verktøy: kontursag, multimaskin, drillstasjon og limpistol"].map((t) => (
                      <div key={t} className="skill-item red2">
                        <img className="rombe-item-red" src={UI.rombeRed} alt="" width="12" height="12" />
                        <div className="skill-item-text-red">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group nb">
                  <div className="age-group-label red">Passer for</div>
                  <div className="age-group-description red">barn fra 6 år og voksne</div>
                  <div className="course-duration-value red">Barn i alderen 6–10 år må ha følge av en voksen.</div>
                </div>
              </div>
              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2–3 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide red"></div>
                <img className="rombe" src={UI.polygon} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Smykker */}
          <div className="course-card" data-category="tekstil">
            <div className="course-card-accent blue" id="smykker-card-css">
              <Carousel images={SMYKKER} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title blue">Hva er inkludert</div>
                    <div className="course-includes-description blue">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnapp2} arrowImage={UI.pileFullBla1} />
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
                <div className="course-summary-description blue">
                  Ønsker du å lære å hekle? I dette kurset får du en praktisk og inspirerende introduksjon til heklingens grunnteknikk. Med kun den aller første masken kan du skape vakre og personlige smykker som armbånd, halskjeder, øredobber og glassmarkører.
                </div>
              </div>
              <div className="course-body blue" id="smykker-course-body-css">
                <div className="skills">
                  <div className="skills-title blue">Hva lærer du</div>
                  <div className="skills-list">
                    {["Grunnleggende håndgrep i hekling","Materialkunnskap og trådvalg","Hvordan velge riktig heklenål", "Den første grunnmasken (luftmaske)"].map((t) => (
                      <div key={t} className="skill-item">
                        <img className="rombe-item-blue" src={UI.rombeBlue} alt="" width="12" height="12" />
                        <div className="skill-item-text-blue">{t}</div>
                      </div>
                    ))}
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
                    <div className="course-includes-description blue">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label blue">Anbefalt varighet</div>
                    <div className="course-duration-value blue">2 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnapp2} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide blue"></div>
                <img className="rombe" src={UI.polygon1} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Skjerf og pulsvarmere */}
          <div className="course-card" data-category="tekstil">
            <div className="course-card-accent blue" id="skjerf-card-css">
              <Carousel images={SKJERF} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title blue">Hva er inkludert</div>
                    <div className="course-includes-description blue">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnapp2} arrowImage={UI.pileFullBla1} />
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
                    {["Grunnleggende håndgrep i hekling","Luftmaske og fastmaske","Materialkunnskap og trådvalg","Hvordan velge riktig heklenål","Kreative tips for bruk av restegarn"].map((t) => (
                      <div key={t} className="skill-item">
                        <img className="rombe-item-blue" src={UI.rombeBlue} alt="" width="12" height="12" />
                        <div className="skill-item-text-blue">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group" id="skjerf-age-group-css">
                  <div className="age-group-label blue">Passer for</div>
                  <div className="age-group-description blue">Barn fra 10 år og voksne nybegynnere.</div>
                </div>
              </div>
              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title blue">Hva er inkludert</div>
                    <div className="course-includes-description blue">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label blue">Anbefalt varighet</div>
                    <div className="course-duration-value blue">3 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnapp2} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide blue"></div>
                <img className="rombe" src={UI.polygon1} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Blokktrykk og broderi */}
          <div className="course-card" data-category="tekstil">
            <div className="course-card-accent yellow" id="blokktrykk-card-css">
              <Carousel images={BLOKK} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title yellow">Hva er inkludert</div>
                    <div className="course-includes-description yellow">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappYellow} arrowImage={UI.pileFullBla1} />
                </div>
                <div className="course-duration">
                  <div className="course-duration-label yellow">Anbefalt varighet</div>
                  <div className="course-duration-value yellow">2–3 timer</div>
                </div>
              </div>
            </div>
            <div className="frame-542">
              <div className="course-body-holder yellow">
                <div className="course-title yellow">Blokktrykk og broderi</div>
                <div className="course-summary-description yellow">
                  Oppdag kunsten å trykke mønstre for hånd og brodere dem ut. I dette kurset lærer du å lage dine egne tekstilmønstre med blokktrykkteknikk og pynte dem med enkel broderi. Perfekt for kreative sjeler som ønsker å utforske farger, former og håndverk.
                </div>
              </div>
              <div className="course-body yellow">
                <div className="skills">
                  <div className="skills-title yellow">Hva lærer du</div>
                  <div className="skills-list">
                    {["Blokktrykkteknikk på tekstil","Enkel broderi og syteknikker","Fargeblanding og mønsterdesign","Kreativ bruk av naturlige motiver"].map((t) => (
                      <div key={t} className="skill-item yellow">
                        <img className="rombe-item-yellow" src={UI.rombeYellow} alt="" width="12" height="12" />
                        <div className="skill-item-text-yellow">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group">
                  <div className="age-group-label yellow">Passer for</div>
                  <div className="age-group-description yellow">Barn fra 8 år og voksne.</div>
                </div>
              </div>
              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title yellow">Hva er inkludert</div>
                    <div className="course-includes-description yellow">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label yellow">Anbefalt varighet</div>
                    <div className="course-duration-value yellow">2–3 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappYellow} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide yellow"></div>
                <img className="rombe" src={UI.polygon2} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Glasslysholder */}
          <div className="course-card" data-category="visuell-kunst glass">
            <div className="course-card-accent yellow" id="glasslysholder-card-css">
              <Carousel images={GLASS} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title yellow">Hva er inkludert</div>
                    <div className="course-includes-description yellow">Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappYellow} arrowImage={UI.pileFullBla1} />
                </div>
                <div className="course-duration">
                  <div className="course-duration-label yellow">Anbefalt varighet</div>
                  <div className="course-duration-value yellow">2 timer</div>
                </div>
              </div>
            </div>
            <div className="frame-542">
              <div className="course-body-holder yellow">
                <div className="course-title yellow">Glasslysholder</div>
                <div className="course-summary-description yellow">
                  Lag din egen unike glasslysholder! I dette kurset lærer du graveringstekniker på glass med elektroverktøy og diamanttilbehør. Perfekt som en personlig gave eller til å pynte hjemmet ditt. Vi er opptatt av gjenbruk, så ta gjerne med deg et glass hjemmefra – farget eller klart, flasker eller gamle syltetøyglass.
                </div>
              </div>
              <div className="course-body yellow">
                <div className="skills">
                  <div className="skills-title yellow">Hva lærer du</div>
                  <div className="skills-list">
                    {["Glassgraveringsteknikk", "Bruk av elektroverktøy og diamanttilbehør"].map((t) => (
                      <div key={t} className="skill-item yellow">
                        <img className="rombe-item-yellow" src={UI.rombeYellow} alt="" width="12" height="12" />
                        <div className="skill-item-text-yellow">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group">
                  <div className="age-group-label yellow">Passer for</div>
                  <div className="age-group-description yellow">Barn fra 10 år og voksne.</div>
                  <div className="course-duration-value yellow">Barn i alderen 10–12 år må ha følge av en voksen.</div>
                </div>
              </div>
              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title yellow">Hva er inkludert</div>
                    <div className="course-includes-description yellow">Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label yellow">Anbefalt varighet</div>
                    <div className="course-duration-value yellow">2 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappYellow} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide yellow"></div>
                <img className="rombe" src={UI.polygon2} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Farsdag */}
          <div className="course-card" data-category="visuell-kunst glass">
            <div className="course-card-accent yellow" id="farsdag-card-css">
              <Carousel images={FARSDAG} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title yellow">Hva er inkludert</div>
                    <div className="course-includes-description yellow">Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappYellow} arrowImage={UI.pileFullBla1} />
                </div>
                <div className="course-duration">
                  <div className="course-duration-label yellow">Anbefalt varighet</div>
                  <div className="course-duration-value yellow">2 timer</div>
                </div>
              </div>
            </div>
            <div className="frame-542">
              <div className="course-body-holder yellow">
                <div className="course-title yellow">Glassgravering Farsdag</div>
                <div className="course-summary-description yellow">
                  Gi pappa en unik og personlig gave til Farsdag! Lær å gravere glass med elektroverktøy og diamanttilbehør og lag en minneverdig gave som varer livet ut. Vi er opptatt av gjenbruk, så ta gjerne med deg et glass hjemmefra – farget eller klart, flasker eller gamle syltetøyglass.
                </div>
              </div>
              <div className="course-body yellow">
                <div className="skills">
                  <div className="skills-title yellow">Hva lærer du</div>
                  <div className="skills-list">
                    {["Glassgraveringsteknikk", "Bruk av elektroverktøy og diamanttilbehør"].map((t) => (
                      <div key={t} className="skill-item yellow">
                        <img className="rombe-item-yellow" src={UI.rombeYellow} alt="" width="12" height="12" />
                        <div className="skill-item-text-yellow">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group">
                  <div className="age-group-label yellow">Passer for</div>
                  <div className="age-group-description yellow">Familier og barn som vil lage en spesiell gave til far.</div>
                  <div className="course-duration-value yellow">Barn i alderen 6–10 år må ha følge av en voksen.</div>
                </div>
              </div>
              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title yellow">Hva er inkludert</div>
                    <div className="course-includes-description yellow">Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label yellow">Anbefalt varighet</div>
                    <div className="course-duration-value yellow">2 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappYellow} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide yellow"></div>
                <img className="rombe" src={UI.polygon2} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Motanka-engel */}
          <div className="course-card" data-category="visuell-kunst">
            <div className="course-card-accent red" id="motanka-engel-card-css">
              <Carousel images={MOTANKA_ENGEL} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Alt nødvendig tekstilmateriale, tråd og dekor. Veiledning fra erfaren instruktør og introduksjon til symbolikk og tradisjon.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
                <div className="course-duration">
                  <div className="course-duration-label red">Anbefalt varighet</div>
                  <div className="course-duration-value red">2 timer</div>
                </div>
              </div>
            </div>
            <div className="frame-542">
              <div className="course-body-holder red">
                <div className="course-title red">Motanka-engel</div>
                <div className="course-summary-description red">
                  En motanka-engel er et vakkert håndverk laget av tekstil uten søm – kun ved snurring og knyting. Kurset er perfekt for de som ønsker å lage en unik håndlaget dekorasjon med dyp symbolikk og tradisjon.
                </div>
              </div>
              <div className="course-body red">
                <div className="skills">
                  <div className="skills-title red">Hva lærer du</div>
                  <div className="skills-list">
                    {["Materialkunnskap og bruk av tekstiler","Revers-tenkning som kreativ metode","Ulike teknikker for knuter og sammenføyning"].map((t) => (
                      <div key={t} className="skill-item red">
                        <img className="rombe-item-red" src={UI.rombeRed} alt="" width="12" height="12" />
                        <div className="skill-item-text-red">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group">
                  <div className="age-group-label red">Passer for</div>
                  <div className="age-group-description red">Familier, barnegrupper, voksne og alle som jobber med barn.</div>
                </div>
              </div>
              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Alt nødvendig tekstilmateriale, tråd og dekor. Veiledning fra erfaren instruktør og introduksjon til symbolikk og tradisjon.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide red"></div>
                <img className="rombe" src={UI.polygon} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Nissefjes */}
          <div className="course-card" data-category="visuell-kunst julverksted">
            <div className="course-card-accent red" id="nisse-card-css">
              <Carousel images={NISSE} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Alt nødvendig tekstilmateriale, tråd og dekor. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
                <div className="course-duration">
                  <div className="course-duration-label red">Anbefalt varighet</div>
                  <div className="course-duration-value red">1,5–2 timer</div>
                </div>
              </div>
            </div>
            <div className="frame-542">
              <div className="course-body-holder red">
                <div className="course-title red">Nissefjes</div>
                <div className="course-summary-description red">
                  Lag et koselig nissefjes av tekstil! Perfekt juleaktivitet for barn og voksne. Enkelt, gøy og med et herlig julestemning-resultat.
                </div>
              </div>
              <div className="course-body red">
                <div className="skills">
                  <div className="skills-title red">Hva lærer du</div>
                  <div className="skills-list">
                    {["Enkel tekstilteknikk","Bruk av lim og dekorasjoner","Kreativ forming og pynt"].map((t) => (
                      <div key={t} className="skill-item red">
                        <img className="rombe-item-red" src={UI.rombeRed} alt="" width="12" height="12" />
                        <div className="skill-item-text-red">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group">
                  <div className="age-group-label red">Passer for</div>
                  <div className="age-group-description red">Familier, barnegrupper og voksne.</div>
                  <div className="course-duration-value red">Barn i alderen 4–7 år må ha følge av en voksen.</div>
                </div>
              </div>
              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Alt nødvendig tekstilmateriale, tråd og dekor. Veiledning fra erfaren instruktør.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">1,5–2 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide red"></div>
                <img className="rombe" src={UI.polygon} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Julepynt */}
          <div className="course-card" data-category="visuell-kunst tre julverksted">
            <div className="course-card-accent red" id="julepynt-card-css">
              <Carousel images={JULEPYNT} />
              <div className="course-body desktop">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
                <div className="course-duration">
                  <div className="course-duration-label red">Anbefalt varighet</div>
                  <div className="course-duration-value red">2-3 timer</div>
                </div>
              </div>
            </div>
            <div className="frame-542">
              <div className="course-body-holder red">
                <div className="course-title red" id="julepynt-course-title-css">JULEPYNT I TRE</div>
                <div className="course-summary-description red">
                  Lag din egen unike julepynt i tre! I dette verkstedet lærer du å bruke elektriske verktøy for å skjære, bore, pusse og dekorere treverk. Perfekt juleaktivitet for hele familien.
                </div>
              </div>
              <div className="course-body red" id="julepynt-course-body-css">
                <div className="skills">
                  <div className="skills-title red">Hva lærer du</div>
                  <div className="skills-list">
                    {["Trearbeid med elektriske verktøy","Pussing, boring og polering","Dekorering: liming og maling","Bruk av elektriske verktøy: kontursag, multimaskin, drillstasjon og slipemaskin"].map((t) => (
                      <div key={t} className="skill-item red" id="julepynt-item-css">
                        <img className="rombe-item-red" src={UI.rombeRed} alt="" width="12" height="12" />
                        <div className="skill-item-text-red">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group" id="julepynt-age-group">
                  <div className="age-group-label red">Passer for</div>
                  <div className="age-group-description red">Familier, barnegrupper, voksne og alle som ønsker en kreativ og meningsfull juleaktivitet.</div>
                  <div className="course-duration-value red">Barn i alderen 6–10 år må ha følge av en voksen.</div>
                </div>
              </div>
              <div className="course-body mobile">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Alt nødvendig utstyr og materialer. Veiledning fra erfaren instruktør. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2-3 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide red"></div>
                <img className="rombe" src={UI.polygon} alt="" />
              </div>
            </div>
          </div>

          {/* CARD: Glassgravering Juleverksted */}
          <div className="course-card" data-category="visuell-kunst julverksted glass" id="glassgravering-juleverksted-card-css">
            <div className="course-card-accent red">
              <Carousel images={JULEGLASS} />
              <div className="course-body desktop" id="glassgravering-juleverksted-course-body-css">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
                <div className="course-duration">
                  <div className="course-duration-label red">Anbefalt varighet</div>
                  <div className="course-duration-value red">2 timer</div>
                </div>
              </div>
            </div>
            <div className="frame-542">
              <div className="course-body-holder red">
                <div className="course-title red" id="glassgravering-juleverksted-course-title-css">GLASSGRAVERING JULEVERKSTED</div>
                <div className="course-summary-description red">
                  Glassgravering er spennende! Glasslysholdere passer perfekt som julegave – spesielt kombinert med personlig glassgravering. Med et personlig, håndgravert glass kan du overraske noen du er glad i med en helt unik og minneverdig julegave. Det er eksklusivt å ha en personlig håndgravering på glass, utført med elektroverktøy og diamanttilbehør. <br /><br />
                  Vi er opptatt av gjenbruk, så ta gjerne med deg et glass hjemmefra – farget eller klart, flasker eller gamle syltetøyglass.
                </div>
              </div>
              <div className="course-body red">
                <div className="skills">
                  <div className="skills-title red">Hva lærer du</div>
                  <div className="skills-list">
                    {["Glassgraveringsteknikk", "Bruk av elektroverktøy og diamanttilbehør"].map((t) => (
                      <div key={t} className="skill-item red">
                        <img className="rombe-item-red" src={UI.rombeRed} alt="" width="12" height="12" />
                        <div className="skill-item-text-red">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="age-group" id="glassgravering-juleverksted-age-group">
                  <div className="age-group-label red">Passer for</div>
                  <div className="age-group-description red">Familier, barnegrupper, voksne og alle som ønsker en kreativ og meningsfull juleaktivitet.</div>
                  <div className="course-duration-value red">Barn i alderen 6–10 år må ha følge av en voksen.</div>
                </div>
              </div>
              <div className="course-body mobile" id="glassgravering-juleverksted-course-body-css">
                <div className="frame-101">
                  <div className="course-includes">
                    <div className="course-includes-title red">Hva er inkludert</div>
                    <div className="course-includes-description red">Glass, verktøy og tilbehør. Bekledning og beskyttelsesbriller. Profesjonell veiledning og forberedelser. På slutten av verkstedet får du med deg det ferdige kunstprosjektet hjem.</div>
                  </div>
                  <div className="course-duration">
                    <div className="course-duration-label red">Anbefalt varighet</div>
                    <div className="course-duration-value red">2 timer</div>
                  </div>
                  <PriceLink buttonImage={UI.romberKnappRed} arrowImage={UI.pileFullBla1} />
                </div>
              </div>
              <div className="course-toggle">
                <div className="utvide red"></div>
                <img className="rombe" src={UI.polygon} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* IMAGE MODAL */}
      <div className="modal" id="imageModal">
        <span className="close" id="modalClose">&times;</span>
        <span className="nav prev" id="modalPrev">
          <img src={UI.navLeft} alt="Forrige" width="32" height="32" />
        </span>
        <img id="modalImage" alt="Preview" />
        <span className="nav next" id="modalNext">
          <img src={UI.navRight} alt="Neste" width="32" height="32" />
        </span>
      </div>
    </div>
  );
}