// src/pages/Prosjekter.jsx
import "../style/style.css";
import "../style/prosjekter.css";

import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/swiper.css";

import { Pagination, Navigation } from "swiper/modules";

export default function Prosjekter() {
  return (
    <div className="global-holder-container">
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
          <Swiper
            slidesPerView="auto"
            spaceBetween={48}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[Pagination]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className="slide-double">
                <img src="src/assets/prosjekter/Sentralen/Glassgravering.PNG" alt="" />
                <img src="src/assets/prosjekter/Sentralen/IMG_1729.jpg" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img className="slide" src="src/assets/prosjekter/Sentralen/IMG_1730.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="slide" src="src/assets/prosjekter/Sentralen/IMG_1740.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="slide" src="src/assets/prosjekter/Sentralen/IMG_1747.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="slide" src="src/assets/prosjekter/Sentralen/IMG_1763.jpg" alt="" />
            </SwiperSlide>

          </Swiper>
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
              <img className="project-image-placeholder" src="src/assets/prosjekter/Frognerparken-2025/img-1.jpg" alt="" />

              <p className="project-descriptio">
                <span>
                  <span className="text-highlight blue">
                    I august 2025 har vi hatt utstilliling i Hentriette Wegners paviljøng i Frognerparken. 
                    Utstilling var supplert med daglige kreative verksteder utendørs, fordelt i temaperioder 
                    akvarellmaling, tekstil, treveksted og glassgravering. Verkstedene var gratis og åpne for alle. <br />
                    Det er dokumentert{" "}
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
          <Swiper
            slidesPerView="auto"
            spaceBetween={48}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[Pagination]}
          >

            <SwiperSlide>
              <img src="src/assets/prosjekter/Frognerparken-2025/img-6.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="src/assets/prosjekter/Frognerparken-2025/img-3.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="src/assets/prosjekter/Frognerparken-2025/img-4.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="src/assets/prosjekter/Frognerparken-2025/img-5.jpg" />
            </SwiperSlide>

          </Swiper>
        </div>

      </div>

      <div id="contact-root"></div>
      <div id="about-root"></div>
    </div>
  );
}