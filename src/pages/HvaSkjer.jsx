// src/pages/HvaSkjer.jsx
import { useEffect, useState } from "react";

// styles
import "../style/style.css";
import "../style/hva-skjer.css";
import "../style/new-hva-skjer.css";
import "../style/scroll-anim.css";

// JS modules
import { init as initScrollAnimation } from "../js/scroll-animation";

// polygons
const polygon6 = "/hva-skjer/Polygon-6.svg";

const getNextEventDate = (event, now = new Date()) => {
  // Event с несколькими конкретными датами
  if (Array.isArray(event.dates) && event.dates.length > 0) {
    const upcomingDates = event.dates
      .map(date => new Date(date))
      .filter(date => date >= now)
      .sort((a, b) => a - b);

    return upcomingDates[0] || null;
  }

  // Обычный event с одной датой
  const startDate = new Date(event.startDate);

  return startDate >= now ? startDate : null;
};

const getLastEventDate = (event) => {
  if (Array.isArray(event.dates) && event.dates.length > 0) {
    return event.dates
      .map(date => new Date(date))
      .sort((a, b) => b - a)[0];
  }

  return new Date(event.startDate);
};

export default function HvaSkjer() {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/events.json`)
      .then(res => res.json())
      .then(data => {
        const now = new Date();

        const upcomingEvents = data
          .map(event => ({
            ...event,
            nextDate: getNextEventDate(event, now)
          }))
          .filter(event => event.nextDate !== null)
          .sort((a, b) => a.nextDate - b.nextDate);

        const archivedEvents = data
          .map(event => ({
            ...event,
            lastDate: getLastEventDate(event)
          }))
          .filter(event => event.lastDate < now)
          .sort((a, b) => b.lastDate - a.lastDate);

        setEvents(upcomingEvents);
        setPastEvents(archivedEvents);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".event-content-section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -25% 0px"
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();

  }, [events, pastEvents]);

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

      <section className="past-events-section" id="past-events">
        <div id="past-events-container">
          <div className="archive-title">ARKIV</div>
          {pastEvents.map((event, idx) => (
            <div className="event-content-holder archived" key={idx}>
              <div className="event-content-section">
                <img className="event-icon" src={event.icon} alt="" />

                <div className="event-content">
                  <div className="event-info-section">
                    <div className="event-info-title">{event.title}</div>
                    <div className="event-info-main">
                      <div className="event-info-time">{event.date}</div>
                      <div className="event-info-place">{event.place}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="event-imgs-gallery">
                {event.images.map((img, i) => (
                  <img key={i} src={img} alt="" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}