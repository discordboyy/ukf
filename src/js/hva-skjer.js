// src/js/hva-skjer.js

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("events-container");

    fetch("src/data/events.json")
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                const eventHTML = `
                <div class="event-content-holder">
                    <div class="event-content-section">
                        <img class="event-icon" loading="lazy" src="${event.icon}" alt="Event icon"> 
                        <div class="event-content">
                            <div class="event-info-section">
                                <div class="event-info-title">
                                    ${event.title}
                                </div>
                                <div class="event-info-main">
                                    <div class="event-info-time">
                                        ${event.date}
                                    </div>
                                    <div class="event-info-place">
                                        ${event.place}
                                    </div>
                                </div>
                            </div>
                            <div class="event-info-links">
                                <a href="${event.readMoreLink}" class="link-find-out-more" target="_blank" rel="noopener noreferrer">
                                    <div class="link-text-more">Finn ut mer</div>
                                </a>
                                <a href="${event.registrationLink}" class="link-registration" target="_blank" rel="noopener noreferrer">
                                    <div class="link-registration-text">Påmelding</div>
                                </a>
                                <div class="event-price">
                                    <div class="event-price-text">${event.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-imgs-gallery">
                        ${event.images.map(img => `
                            <div class="event-gallery-img" style="background-image: url('${img}')"></div>
                        `).join("")}
                    </div>
                </div>
                `;

                container.innerHTML += eventHTML;
            });
        })
        .catch(error => console.error("Error loading events:", error));
});