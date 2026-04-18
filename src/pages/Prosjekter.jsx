// src/pages/Prosjekter.jsx
import "../style/style.css";
import "../style/prosjekter.css";
import "../style/new-prosjekter.css";

import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/swiper.css";

import { Pagination, Navigation } from "swiper/modules";

// Sentralen 2026 images
import sentralen2026_img1 from "../assets/prosjekter/Sentralen-2026/img-1.jpg";
import sentralen2026_img2 from "../assets/prosjekter/Sentralen-2026/img-2.jpg";
import sentralen2026_img4 from "../assets/prosjekter/Sentralen-2026/img-4.jpg";
import sentralen2026_img5 from "../assets/prosjekter/Sentralen-2026/img-5.jpg";
import sentralen2026_img6 from "../assets/prosjekter/Sentralen-2026/img-6.jpg";
import sentralen2026_img7 from "../assets/prosjekter/Sentralen-2026/img-7.jpg";
import sentralen2026_img8 from "../assets/prosjekter/Sentralen-2026/img-8.jpg";
import sentralen2026_img9 from "../assets/prosjekter/Sentralen-2026/img-9.jpg";
import sentralen2026_img10 from "../assets/prosjekter/Sentralen-2026/img-10.jpg";
import sentralen2026_img11 from "../assets/prosjekter/Sentralen-2026/img-11.jpg";
import sentralen2026_img12 from "../assets/prosjekter/Sentralen-2026/img-12.jpg";
import sentralen2026_img13 from "../assets/prosjekter/Sentralen-2026/img-13.jpg";
import sentralen2026_img14 from "../assets/prosjekter/Sentralen-2026/img-14.jpg";

// массив изображений
const sentralen2026Images = [
  sentralen2026_img1,
  sentralen2026_img2,
  sentralen2026_img4,
  sentralen2026_img5,
  sentralen2026_img6,
  sentralen2026_img7,
  sentralen2026_img8,
  sentralen2026_img9,
  sentralen2026_img10,
  sentralen2026_img11,
  sentralen2026_img12,
  sentralen2026_img13,
  sentralen2026_img14,
];

// разбивает массив на пары
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const barnasKunstklubbImages = Object.entries(
  import.meta.glob("../assets/prosjekter/Barnas-Kunstklubb/*.jpg", {
    eager: true,
    import: "default",
  })
)
  .sort((a, b) => {
    const getNumber = (path) =>
      parseInt(path.match(/img- ?\(?(\d+)\)?/)?.[1] || 0);

    return getNumber(a[0]) - getNumber(b[0]);
  })
  .map(([, value]) => value);

const sentralen2026Slides = chunkArray(sentralen2026Images, 2);

const barnasSlides = chunkArray(barnasKunstklubbImages, 2);

// Sentralen images
import rombRed from "../assets/prosjekter/rombs-red.svg";
import img1751 from "../assets/prosjekter/Sentralen/IMG_1751.jpg";
import glassgravering from "../assets/prosjekter/Sentralen/Glassgravering.PNG";
import img1729 from "../assets/prosjekter/Sentralen/IMG_1729.jpg";
import img1730 from "../assets/prosjekter/Sentralen/IMG_1730.jpg";
import img1740 from "../assets/prosjekter/Sentralen/IMG_1740.jpg";
import img1747 from "../assets/prosjekter/Sentralen/IMG_1747.jpg";
import img1763 from "../assets/prosjekter/Sentralen/IMG_1763.jpg";

// Frognerparken images
import rombBlue from "../assets/prosjekter/rombs-blue.svg";
import frogner1 from "../assets/prosjekter/Frognerparken-2025/img-1.jpg";
import frogner3 from "../assets/prosjekter/Frognerparken-2025/img-3.jpg";
import frogner4 from "../assets/prosjekter/Frognerparken-2025/img-4.jpg";
import frogner5 from "../assets/prosjekter/Frognerparken-2025/img-5.jpg";
import frogner6 from "../assets/prosjekter/Frognerparken-2025/img-6.jpg";

export default function Prosjekter() {
  return (
    <div className="global-holder-container">

      <div className="project-section last">
        <div className="project-container">
          <img className="project-icon blue" src={rombBlue} alt="Project icon" />

          <div className="project-content">
            <div className="project-header">

              <div className="project-meta blue">
                Desember 2025 – mars 2026
              </div>

              <div className="project-meta blue">
                Barnas Kunstklubb i Bærum og Lørenskog
              </div>

              <h2 className="project-title blue" style={{ textTransform: "uppercase" }}>
                Barnas Kunstklubb: kreative verksteder for barn og familier
              </h2>

            </div>

            <div className="project-description-block">
              <img className="project-image-placeholder" src={frogner1} alt="" />

              <p className="project-descriptio">
                <span>
                  <span className="text-highlight blue">
                    I løpet av 4 måneder har vi arrangert samlinger for barn og deres familier på Lørenskog Bibliotek og Bærum Frivilligsentral. 
                    Samlingene var organisert som workshops i ulike teknikker innen kunst og håndverk. 
                    Vi har hatt 13 samlinger hvert sted, og har dokumentert{" "}
                  </span>

                  <span className="text-accent red">
                    144 besøk{" "}
                  </span>

                  <span className="text-highlight blue">
                    av en mangfoldig gruppe deltakere. <br /><br />
                    Prosjektet var støttet av Akershus fylkeskommune.
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
            modules={[Pagination, Navigation]}
          >
            {barnasSlides.map((pair, index) => (
              <SwiperSlide key={index}>
                {pair.length === 2 ? (
                  <div className="slide-double">
                    <img src={pair[0]} alt="" />
                    <img src={pair[1]} alt="" />
                  </div>
                ) : (
                  <img className="slide" src={pair[0]} alt="" />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="project-section">
        <div className="project-container">
          <img className="project-icon red" src={rombRed} alt="Project icon" />
          <div className="project-content">

            <div className="project-header">
              <div className="project-meta red">
                Mars 2026/Sentralen, Oslo
              </div>
              <h2 className="project-title red">ULLTOVING VERKSTED</h2>
            </div>

            <div className="project-description-block">
              <img className="project-image-placeholder" src={img1751} alt="" />
              
              <p className="project-descriptio">
                <span>
                  <span className="text-highlight red">
                    Under Håndverksdagen 2026 holdt vi et kreativt toveverksted med kardet ull for barn og voksne. 
                    Av tovede fargerike ullkuler kunne deltakerne lage sin egen unike nøkkelring eller pynt til veske og sekk. 
                    Verkstedet samlet mange familier med barn, vi har telt{" "}
                  </span>
                  <span className="text-accent blue">over 50 deltakere </span>
                  <span className="text-highlight red">i ulike aldre.</span>
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
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {sentralen2026Slides.map((pair, index) => (
              <SwiperSlide key={index}>
                {pair.length === 2 ? (
                  <div className="slide-double">
                    <img src={pair[0]} alt="" />
                    <img src={pair[1]} alt="" />
                  </div>
                ) : (
                  <img className="slide" src={pair[0]} alt="" />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="project-section">
        <div className="project-container">
          <img className="project-icon red" src={rombRed} alt="Project icon" />
          <div className="project-content">

            <div className="project-header">
              <div className="project-meta red">
                September 2025/Sentralen, Oslo
              </div>
              <h2 className="project-title red">GLASSGRAVERING VERKSTED</h2>
            </div>

            <div className="project-description-block">
              <img className="project-image-placeholder" src={img1751} alt="" />
              
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
                <img src={glassgravering} alt="" />
                <img src={img1729} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img className="slide" src={img1730} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="slide" src={img1740} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="slide" src={img1747} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="slide" src={img1763} alt="" />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>

      {/* SECOND PROJECT */}
      <div className="project-section last">
        <div className="project-container">
          <img className="project-icon blue" src={rombBlue} alt="Project icon" />

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
              <img className="project-image-placeholder" src={frogner1} alt="" />

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
              <img src={frogner6} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={frogner3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={frogner4} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={frogner5} alt="" />
            </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </div>
  );
}