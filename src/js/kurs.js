document.addEventListener("DOMContentLoaded", () => {
  const allCheckbox = document.querySelector(
    '.filter-item.all input[type="checkbox"]'
  );

  const categoryCheckboxes = Array.from(
    document.querySelectorAll('.filter-checkbox')
  ).filter(cb => cb !== allCheckbox);

  const cards = document.querySelectorAll(".course-card");

  const resetBtn = document.querySelector(".filters-reset");

  function updateCards() {
    const activeCategories = categoryCheckboxes
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    if (activeCategories.length === 0) {
      // показываем все карточки
      cards.forEach(card => (card.style.display = ""));
      return;
    }

    cards.forEach(card => {
      const category = card.dataset.category;
      card.style.display = activeCategories.includes(category) ? "" : "none";
    });
  }

  /* VIS ALT */
  allCheckbox.addEventListener("change", () => {
    if (allCheckbox.checked) {
      categoryCheckboxes.forEach(cb => (cb.checked = true));
    }
    updateCards();
  });

  /* ОСТАЛЬНЫЕ ФИЛЬТРЫ */
  categoryCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      if (allCheckbox.checked) {
        allCheckbox.checked = false;
      }

      const allChecked = categoryCheckboxes.every(c => c.checked);
      allCheckbox.checked = allChecked;

      updateCards();
    });
  });

  /* RESET КНОПКА */
  resetBtn.addEventListener("click", () => {
    allCheckbox.checked = false;
    categoryCheckboxes.forEach(cb => (cb.checked = false));
    updateCards();
  });
});
