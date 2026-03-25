// src/pages/HvaSkjer.jsx
import { useEffect } from "react";

// styles
import "../style/style.css";
import "../style/hva-skjer.css";

// JS modules
import { init as initScrollAnimation } from "../js/scroll-animation";
import { init as initMain } from "../js/main";
import { initHvaSkjer } from "../js/hva-skjer";

export default function HvaSkjer() {

  useEffect(() => {
    initHvaSkjer();
    initScrollAnimation();
    initMain();
  }, []);

  return (
    <>

      <div className="frame-168">
        <div className="frame-157 scroll-animate">
          <img
            className="polygon-7"
            src="/src/assets/hva-skjer/Polygon 6.svg"
            alt=""
          />
          <img
            className="polygon-6"
            src="/src/assets/hva-skjer/Polygon 6.svg"
            alt=""
          />
          <div className="hva-skjer">HVA SKJER</div>
        </div>
      </div>

      <section className="upcoming-events-section" id="upcoming-events">
        <div id="events-container"></div>
      </section>
    </>
  );
}