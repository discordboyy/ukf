// ukf\src\js\kurs.js

export function initKurs() {

  console.log("initKurs running");

  const allCheckbox = document.querySelector('.filter-item.all input[type="checkbox"]');
  console.log("allCheckbox found:", allCheckbox);

  const cards = document.querySelectorAll(".course-card");
  console.log("cards found:", cards.length);

  const toggles = document.querySelectorAll('.course-toggle');
  console.log("toggles found:", toggles.length);

  const categoryCheckboxes = Array.from(
    document.querySelectorAll('.filter-checkbox')
  ).filter(cb => cb !== allCheckbox);

  const resetBtn = document.querySelector(".filters-reset");

  function updateCards() {
    const activeCategories = categoryCheckboxes
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    if (activeCategories.length === 0) {
      cards.forEach(card => (card.style.display = ""));
      return;
    }

    cards.forEach(card => {
      const cardCategories = card.dataset.category.split(" ");
      const matches = activeCategories.some(cat =>
        cardCategories.includes(cat)
      );
      card.style.display = matches ? "" : "none";
    });
  }

  // VIS ALT
  allCheckbox?.addEventListener("change", () => {
    if (allCheckbox.checked) {
      categoryCheckboxes.forEach(cb => (cb.checked = true));
    }
    updateCards();
  });

  // FILTERS
  categoryCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      if (allCheckbox?.checked) {
        allCheckbox.checked = false;
      }
      const allChecked = categoryCheckboxes.every(c => c.checked);
      if (allCheckbox) allCheckbox.checked = allChecked;
      updateCards();
    });
  });

  // RESET
  resetBtn?.addEventListener("click", () => {
    if (allCheckbox) allCheckbox.checked = false;
    categoryCheckboxes.forEach(cb => (cb.checked = false));
    updateCards();
  });

  initToggle();
}


function initToggle() {
  const toggles = document.querySelectorAll('.course-toggle');
  const cards = document.querySelectorAll('.course-card');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentCard = toggle.closest('.course-card');

      cards.forEach(card => {
        if (card !== currentCard) {
          card.classList.remove('is-open');
        }
      });

      currentCard.classList.toggle('is-open');
    });
  });
}