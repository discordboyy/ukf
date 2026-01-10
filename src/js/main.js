// src/scripts/main.js
async function loadTemplates() {
  const response = await fetch("src/assets/components/components.html");
  const html = await response.text();

  // Вставляем шаблоны в DOM (скрыто)
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

document.addEventListener("DOMContentLoaded", async () => {
  await loadTemplates();

  mountComponent("contact-component", "contact-root");
  mountComponent("about-component", "about-root");
});

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
    loadComponent("contact-component", "contact");
    loadComponent("about-component", "about");
  });
