// src/pages/HvaSkjer.jsx
import { useEffect, useState } from "react";

// styles
import "../style/style.css";
import "../style/hva-skjer.css";

// JS modules
import { init as initScrollAnimation } from "../js/scroll-animation";

// polygons
const polygon6 = "/hva-skjer/Polygon-6.svg";

export default function HvaSkjer() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/events.json`)
      .then(res => res.json())
      .then(data => {
        const now = new Date();
        // фильтруем только будущие события
        const upcomingEvents = data
          .filter(e => new Date(e.startDate) >= now)
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        setEvents(upcomingEvents);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <div className="global-holder-container">
      <div className="frame-168">
        <div className="frame-157 scroll-animate">
          <img className="polygon-7" src={polygon6} alt="" />
          <img className="polygon-6" src={polygon6} alt="" />
          <div className="hva-skjer">HVA SKJER</div>
        </div>
      </div>

      <section className="upcoming-events-section" id="upcoming-events">
        <div id="events-container">
          {events.map((event, idx) => (
            <div className="event-content-holder" key={idx}>
              <div className="event-content-section">
                <img className="event-icon" loading="lazy" src={event.icon} alt="Event icon" />
                <div className="event-content">
                  <div className="event-info-section">
                    <div className="event-info-title">{event.title}</div>
                    <div className="event-info-main">
                      <div className="event-info-time">{event.date}</div>
                      <div className="event-info-place">{event.place}</div>
                    </div>
                  </div>
                  <div className="event-info-links">
                    <a href={event.readMoreLink} className="link-find-out-more" target="_blank" rel="noopener noreferrer">
                      <div className="link-text-more">Finn ut mer</div>
                    </a>
                    <a href={event.registrationLink} className="link-registration" target="_blank" rel="noopener noreferrer">
                      <div className="link-registration-text">{event.registrationText || "Påmelding"}</div>
                    </a>
                    <div className="event-price">
                      <div className="event-price-text">{event.price}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-imgs-gallery">
                {event.images.map((img, i) => (
                  <img key={i} src={img} loading="lazy" alt="" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}