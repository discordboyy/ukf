// src/js/events-menu.js

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("events-menu");

    fetch("src/data/events.json")
        .then(res => res.json())
        .then(events => {

            const now = new Date();

            const upcoming = events
                .filter(event => new Date(event.startDate) >= now)
                .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
                .slice(0, 3);

            const colors = ["red", "blue", "yellow"];

            const polygons = [
                "src/assets/Polygon 1 (5).svg",
                "src/assets/Polygon 1 (1).svg",
                "src/assets/Polygon 1 (2).svg"
            ];

            upcoming.forEach((event, index) => {

                const color = colors[index % colors.length];
                const polygon = polygons[index % polygons.length];

                const dateObj = new Date(event.startDate);

                const dateFormatted = dateObj
                    .toLocaleDateString("no-NO")
                    .replace(/\./g, "/");

                const city = event.place
                    .split(",")[0]
                    .toUpperCase();

                const html = `
                <div class="event-card ${color}">
                    <div class="event-row">

                        <div class="event-date ${color}">
                            <div class="date">${dateFormatted}</div>
                            <div class="city">${city}</div>
                        </div>

                        <img class="event-polygon" src="${polygon}" />

                        <div class="event-content">

                            <div class="event-title ${color}">
                                ${event.title}
                            </div>

                            <div class="event-body">
                                <div class="event-description">
                                    ${event.description || ""}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                `;

                container.insertAdjacentHTML("beforeend", html);

            });

            enableEventToggle();

        })
        .catch(err => console.error("Events loading error:", err));

});


function enableEventToggle() {

    const cards = document.querySelectorAll(".event-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            cards.forEach(c => {
                if (c !== card) c.classList.remove("is-open");
            });

            card.classList.toggle("is-open");

        });

    });

}