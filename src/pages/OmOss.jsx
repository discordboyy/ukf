// src/pages/OmOss.jsx
import { useEffect } from "react";

// styles
import "../style/style.css";
import "../style/om-oss.css";

// JS modules
import { init as initScrollAnimation } from "../js/scroll-animation";
import { initKurs } from "../js/kurs"; // hvis du også trenger kurs-init

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
                  src="src/assets/omoss/Vector-2.svg"
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
                  src="src/assets/rombe-red.svg"
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
                  src="src/assets/rombe-red.svg"
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

      <div className="board-section">
        <div className="board-title">STYRET</div>
        <div className="board-members">
          <div className="board-member-card">
            <img
              className="board-member-image"
              src="src/assets/omoss/Julia-Favoritova.png"
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
              src="src/assets/omoss/Katya-Bukhantsova.png"
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
              src="src/assets/omoss/Anna-Lubchenko.jpg"
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
                Kunstner og grafisk designer fra Ukraina, bosatt i Norge siden 2022.
                Hun er utdannet ved Kunstakademiet i Kyiv og arbeider med
                akvarellmaling, tekstilkunst og redesign. Anna er medlem av National
                Union of Artists of Ukraine (NUAU). For tiden tar hun praktisk
                pedagogisk utdanning i kunst og håndverk ved Høgskolen i Østfold.
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
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`logo-${i + 1}`} id="logo-PARTNERE">
                  <img
                    className={`logo-${i + 1}-img`}
                    src={`src/assets/omoss/logos/logo-${i + 1}.svg`}
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