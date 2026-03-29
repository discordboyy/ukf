// src/pages/Prosjekter.jsx
import "../style/style.css";
import "../style/prosjekter.css";

import { useEffect } from "react";

export default function Prosjekter() {
  return (
    <>
      <div id="header"></div>

      <div className="project-section">
        <div className="project-container">
          <img className="project-icon red" src="src/assets/prosjekter/rombs-red.svg" alt="Project icon" />
          <div className="project-content">

            <div className="project-header">
              <div className="project-meta red">
                September 2025/Sentralen, Oslo
              </div>
              <h2 className="project-title red">GLASSGRAVERING VERKSTED</h2>
            </div>

            <div className="project-description-block">
              <img className="project-image-placeholder" src="src/assets/prosjekter/Sentralen/IMG_1751.jpg" alt="" />
              
              <p className="project-descriptio">
                <span>
                  <span className="text-highlight red">Rundt </span>
                  <span className="text-accent blue">70 deltakere </span>
                  <span className="text-highlight red">
                    besøkte vårt glassgraveringsverksted med under Håndverksdagen på
                    Sentralen Oslo. Glassgravering er en spennende teknikk der
                    <br />
                    vi brukte elektroverktøy og diamanttilbehør for
                    <br />
                    å lage egne mønstre. Alle graverte sitt helt unike design på et
                    syltetøyglass – perfekt som lysholder.
                  </span>
                </span>
              </p>
            </div>

          </div>
        </div>

        <div className="project-slider">
          <div className="slider-viewport">
            <div className="slides">

              <div className="slide active">
                <div className="slide-double">
                  <img src="src/assets/prosjekter/Sentralen/Glassgravering.PNG" alt="" />
                  <img src="src/assets/prosjekter/Sentralen/IMG_1729.jpg" alt="" />
                </div>
              </div>

              <div className="slide">
                <img src="src/assets/prosjekter/Sentralen/IMG_1730.jpg" alt="" />
              </div>

              <div className="slide">
                <img src="src/assets/prosjekter/Sentralen/IMG_1740.jpg" alt="" />
              </div>

              <div className="slide">
                <img src="src/assets/prosjekter/Sentralen/IMG_1747.jpg" alt="" />
              </div>

              <div className="slide">
                <img src="src/assets/prosjekter/Sentralen/IMG_1763.jpg" alt="" />
              </div>

            </div>
          </div>

          <div className="scroll-testimonials-list">
            <img className="polygon-arrow-left" src="src/assets/prosjekter/Polygon arrow left.svg" alt="" />
            <img className="polygon-arrow-right" src="src/assets/prosjekter/Polygon arrow right.svg" alt="" />
          </div>
        </div>
      </div>

      {/* SECOND PROJECT */}

      <div className="project-section last">
        <div className="project-container">
          <img className="project-icon blue" src="src/assets/prosjekter/rombs-blue.svg" alt="Project icon" />

          <div className="project-content">
            <div className="project-header">

              <div className="project-meta blue">
                August 2025
              </div>

              <div className="project-meta blue">
                Hentriette Wegners paviljøng i Frognerparken, Oslo
              </div>

              <h2 className="project-title blue" style={{ textTransform: "uppercase" }}>
                Tidens smerte, tidens glede: kunstutstilling og kreative verksteder
              </h2>

            </div>

            <div className="project-description-block">
              <img className="project-image-placeholder" src="src/assets/prosjekter/Frognerparken-2025/img (1).jpg" alt="" />

              <p className="project-descriptio">
                <span>
                  <span className="text-highlight blue">
                    I august 2025 har vi hatt utstilliling i Hentriette Wegners paviljøng i Frognerparken. 
                    Utstilling var supplert med daglige kreative verksteder utendørs, fordelt i temaperioder 
                    akvarellmaling, tekstil, treveksted og glassgravering. Verkstedene var gratis og åpne for alle. <br />
                    Det er dokumentert
                  </span>

                  <span className="text-accent red">
                    340 deltakere
                  </span>

                  <span className="text-highlight blue">
                    i verkstedene. <br /><br />
                    Prosjektet var støttet av Kulturetaten i Oslo kommune.
                  </span>
                </span>
              </p>
            </div>

          </div>
        </div>

        <div className="project-slider">
          <div className="slider-viewport">
            <div className="slides">

              <div className="slide active">
                <img src="src/assets/prosjekter/Frognerparken-2025/img (1).jpg" alt="" />
              </div>

              <div className="slide">
                <img src="src/assets/prosjekter/Frognerparken-2025/img (3).jpg" alt="" />
              </div>

              <div className="slide">
                <img src="src/assets/prosjekter/Frognerparken-2025/img (4).jpg" alt="" />
              </div>

              {/* можно продолжить аналогично остальные слайды */}

            </div>
          </div>

          <div className="scroll-testimonials-list">
            <img className="polygon-arrow-left" src="src/assets/prosjekter/Polygon arrow left.svg" alt="" />
            <img className="polygon-arrow-right" src="src/assets/prosjekter/Polygon arrow right.svg" alt="" />
          </div>
        </div>

      </div>

      <div id="contact-root"></div>
      <div id="about-root"></div>
    </>
  );
}