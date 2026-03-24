// src/js/main.js

export function init() {

  console.log("MAIN.JS LOADED");

  async function loadTemplates() {
    const response = await fetch("src/assets/components/components.html");
    const html = await response.text();

    const container = document.createElement("div");
    container.style.display = "none";
    container.innerHTML = html;
    document.body.appendChild(container);
  }

  function mountComponent(templateId, targetId) {
    const template = document.getElementById(templateId);
    const target = document.getElementById(targetId);

    if (template && target) {
      const clone = template.content.cloneNode(true);
      target.appendChild(clone);
    }
  }

  (async () => {
    await loadTemplates();

    mountComponent("contact-component", "contact-root");
    mountComponent("about-component", "about-root");
  })();

  // второй fetch
  fetch("src/assets/components/components.html")
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      function loadComponent(templateId, targetId) {
        const template = doc.getElementById(templateId);
        const target = document.getElementById(targetId);

        if (template && target) {
          target.appendChild(template.content.cloneNode(true));
        }
      }

      loadComponent("header-component", "header");
      setActiveNavItem();
      loadComponent("contact-component", "contact");
      loadComponent("about-component", "about");
    });

  function setActiveNavItem() {
    const currentPage = decodeURIComponent(
      window.location.pathname.split("/").pop()
    );

    document.querySelectorAll(".nav-item").forEach(link => {
      const href = link.getAttribute("href");

      link.classList.remove("active");

      if (href === currentPage) {
        link.classList.add("active");
      }
    });
  }

}