// src/pages/OmOss.jsx
import { useEffect } from "react";

// styles
import "../style/style.css";
import "../style/om-oss.css";

// JS modules
import { init as initScrollAnimation } from "../js/scroll-animation";
import { initKurs } from "../js/kurs"; // hvis du også trenger kurs-init

// icons
import aboutIcon from "../assets/omoss/Vector-2.svg";
import rombRed from "../assets/rombe-red.svg";

// board members
import juliaImg from "../assets/omoss/Julia-Favoritova.png";
import katyaImg from "../assets/omoss/Katya-Bukhantsova.png";
import annaImg from "../assets/omoss/Anna-Lubchenko.jpg";
import katyaImg2 from "../assets/omoss/Katya-Poziumska.jpg";

// partner logos
import logo1 from "../assets/omoss/logos/logo-1.svg";
import logo2 from "../assets/omoss/logos/logo-2.svg";
import logo3 from "../assets/omoss/logos/logo-3.svg";
import logo4 from "../assets/omoss/logos/logo-4.svg";
import logo5 from "../assets/omoss/logos/logo-5.svg";
import logo6 from "../assets/omoss/logos/logo-6.svg";
import logo7 from "../assets/omoss/logos/logo-7.svg";
import logo8 from "../assets/omoss/logos/logo-8.svg";
import logo9 from "../assets/omoss/logos/logo-9.svg";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];

export default function OmOss() {
  useEffect(() => {
    initKurs(); // bare hvis nødvendig, ellers fjern
    initScrollAnimation();
  }, []);

  return (
    <div className="global-holder-container"> {/* Parent wrapper for hele siden */}

      <div className="about-section-forening">
        <div className="about-content-forening">
          <div className="about-intro">
            <div className="about-intro-text-container">
              <div className="about-intro-text-forening">
                Den Ukrainske kunstforening (UKF) samler og fremmer ukrainske
                kunstnere i Norge
              </div>
            </div>
            <div className="about-description-forening">
              <div className="about-header scroll-animate">
                <img
                  className="about-header-icon"
                  src={aboutIcon}
                  alt="Om oss ikon"
                />
                <div className="om-oss">OM OSS</div>
              </div>
              <div className="about-description-text-forening">
                <div className="about-mission">
                  Vi fremmer kunstnerisk utvikling, kulturell
                  <br />
                  utveksling og gjør kunst tilgjengelig for alle.
                </div>
                <div className="about-activities">
                  <span>
                    <span className="about-activities-part">UKF arrangerer</span>
                    <span className="about-activities-part about-activities-part--highlight">
                      utstillinger, kurs og kreative prosjekter
                    </span>
                    <span className="about-activities-part">
                      innen maleri, fotografi, design, redesign og gjenbruk av
                      tekstil, tre, glass og andre materialer.
                    </span>
                  </span>
                </div>
                <div className="about-impact">
                  Gjennom kunst skaper vi møteplasser, fellesskap og inspirasjon på
                  tvers av kulturer.
                </div>
              </div>
            </div>
          </div>

          <div className="about-timeline">
            <div className="timeline-events">
              <div className="timeline-item-forening">
                <img
                  className="timeline-icon"
                  src={rombRed}
                  alt="Timeline ikon"
                />
                <div className="event-content-forening">
                  <div className="event-date-forening">09/05/2025</div>
                  <div className="event-title-forening">
                    Den Ukrainske Kunstforening ble stiftet
                  </div>
                </div>
              </div>
              <div className="timeline-item-forening">
                <img
                  className="timeline-icon"
                  src={rombRed}
                  alt="Timeline ikon"
                />
                <div className="event-content-forening">
                  <div className="event-date-forening">20/08/2025</div>
                  <div className="event-title-forening">
                    Første årsmøte i UKF og valg av styre
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="membership-section-forening">
          <div className="membership-intro">
            <div className="membership-title-forening">
              HVORDAN
              <br />
              BLI MEDLEM?
            </div>
            <div className="membership-fee-info-forening">
              <span>
                <span className="membership-fee-info-forening-text">
                  Medlemskontingenten fastsettes av årsmøtet og er i 2026
                </span>
                <span className="membership-fee-info-forening-text --highlight">
                  kr 350 per år
                </span>
              </span>
            </div>
          </div>
          <div className="membership-details-forening">
            <div className="membership-value-text-forening">
              Foreningen verdsetter engasjerte medlemmer som aktivt bidrar til å
              realisere foreningens formål.
            </div>
            <div className="membership-application">
              <span>
                <span className="membership-application-text">
                  Ønsker du å bli medlem, send en søknad med din motivasjon og/eller
                  beskrivelse av kunstnerisk praksis til
                </span>
                <span className="membership-application-email">
                  ua.kunstforening@gmail.com.
                </span>
              </span>
            </div>
            <div className="membership-application-note">
              Styret vurderer søknader fortløpende.
            </div>
          </div>
        </div>
      </div>

      <div className="board-section" id="styre-board-section">
        <div className="board-title">STYRET</div>
        <div className="board-members">
          <div className="board-member-card">
            <img
              className="board-member-image"
              src={juliaImg}
              alt="Julia Favoritova"
            />
            <div className="board-member-content">
              <div className="board-member-header">
                <div className="board-member-name board-member-name--red">
                  Julia Favoritova
                </div>
                <div className="board-member-role board-member-role--red">
                  Styreleder
                </div>
              </div>
              <div className="board-member-description board-member-description--red board-member-description--wide">
                Kunstner, entreprenør og kulturprosjektleder som kom til Norge fra
                Ukraina i 2022. Hun er prosjektleder for sitt eget initiativ, Favoritt
                Art Workshop, hvor hun leder kurs i trearbeid og glassgravering for
                deltakere fra 6 til 99 år. Prosjektet forener og inspirerer mennesker
                gjennom kreativ og teknisk utvikling.
              </div>
            </div>
          </div>
          <div className="board-member-card">
            <img
              className="board-member-image"
              src={katyaImg}
              alt="Katya Bukhantsova"
            />
            <div className="board-member-content">
              <div className="board-member-header">
                <div className="board-member-name board-member-name--blue">
                  Katya Bukhantsova
                </div>
                <div className="board-member-role board-member-role--blue">
                  Nestleder
                </div>
              </div>
              <div className="board-member-description board-member-description--blue board-member-description--narrow">
                Kunsthåndverker og designer fra
                <br />
                Ukraina med spesialisering i mixed media-teknikker innen tekstilkunst,
                inkludert kunsthekling, gjenbruk, redesign og broderi. Hun formidler
                ukrainske håndverkstradisjoner i Norge og underviser i kreative fag. I
                tillegg har hun solid erfaring i prosjektelese og er daglig leder og
                pådriver i organisasjoen RELOVE som arrangerer gratis aktiviteter for
                barn og unge i Oslo.
              </div>
            </div>
          </div>
          <div className="board-member-card">
            <img
              className="board-member-image"
              src={annaImg}
              alt="Anna Lubchenko"
            />
            <div className="board-member-content">
              <div className="board-member-header">
                <div className="board-member-name board-member-name--blue">
                  Anna Lubchenko
                </div>
                <div className="board-member-role board-member-role--blue">
                  Kunstnerisk ansvarlig
                </div>
              </div>
              <div className="board-member-description board-member-description--blue board-member-description--narrow">
                Anna er kunstner og grafisk designer fra Ukraina, bosatt i Norge siden 2022. Hun er utdannet ved Kunstakademiet i Kyiv og har fullført praktisk-pedagogisk utdanning i kunst og håndverk ved Høgskolen i Østfold. Hun arbeider med akvarell, tekstilkunst og redesign, og er medlem av National Union of Artists of Ukraine (NUAU).
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="board-section">
        <div className="board-title">MEDLEMMER</div>
        <div className="board-members">
          <div className="board-member-card">
            <img
              className="board-member-image"
              src={katyaImg2}
              alt="Katya Poziumska"
            />
            <div className="board-member-content">
              <div className="board-member-header">
                <div className="board-member-name board-member-name--red">
                  Katya Poziumska
                </div>
                <div className="board-member-role board-member-role--red">
                  Medlem
                </div>
              </div>
              <div className="board-member-description board-member-description--red board-member-description--wide">
                Katya Poziumska er en frilansillustratør. Hun har en mastergrad i bokgrafikk fra Kunstakademiet i Kyiv. Hun lager illustrasjoner for bøker, artikler, merkevarer og private bestillinger. Hun holder kreative kurs og verksteder for barn og voksne. Siden 2023 har hun jobbet med ulike illustrasjonsoppdrag for forlaget Cappelen Damm.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-15">
        <div className="samarbeidspartner-title">PARTNERE / SAMARBEID</div>
        <div className="frame-3">
          <div className="frame-2">
            <div className="frame-14">
              {logos.map((logo, i) => (
                <div key={i} className={`logo-${i + 1}`} id="logo-PARTNERE">
                  <img
                    className={`logo-${i + 1}-img`}
                    src={logo}
                    alt={`Logo ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}