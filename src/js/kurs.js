// ukf\src\js\kurs.js
// Исправление: именованные функции-обработчики вместо анонимных стрелок,
// чтобы можно было вызвать removeEventListener перед повторной регистрацией.
// Это решает проблему двойного вызова в React StrictMode (dev-режим).

export function initKurs() {

  const allCheckbox = document.querySelector('.filter-item.all input[type="checkbox"]');
  const cards = document.querySelectorAll(".course-card");
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
      const matches = activeCategories.some(cat => cardCategories.includes(cat));
      card.style.display = matches ? "" : "none";
    });
  }

  // ── Именованные обработчики — нужны для removeEventListener ──────────────
  function onAllChange() {
    if (allCheckbox.checked) {
      categoryCheckboxes.forEach(cb => (cb.checked = true));
    }
    updateCards();
  }

  function makeCategoryHandler(cb) {
    return function onCategoryChange() {
      if (allCheckbox?.checked) allCheckbox.checked = false;
      const allChecked = categoryCheckboxes.every(c => c.checked);
      if (allCheckbox) allCheckbox.checked = allChecked;
      updateCards();
    };
  }

  function onReset() {
    if (allCheckbox) allCheckbox.checked = false;
    categoryCheckboxes.forEach(cb => (cb.checked = false));
    updateCards();
  }

  // ── Удаляем старые listeners перед добавлением новых ─────────────────────
  // Храним обработчики на самих элементах чтобы можно было их снять
  if (allCheckbox) {
    if (allCheckbox._kursHandler) {
      allCheckbox.removeEventListener("change", allCheckbox._kursHandler);
    }
    allCheckbox._kursHandler = onAllChange;
    allCheckbox.addEventListener("change", onAllChange);
  }

  categoryCheckboxes.forEach(cb => {
    if (cb._kursHandler) {
      cb.removeEventListener("change", cb._kursHandler);
    }
    const handler = makeCategoryHandler(cb);
    cb._kursHandler = handler;
    cb.addEventListener("change", handler);
  });

  if (resetBtn) {
    if (resetBtn._kursHandler) {
      resetBtn.removeEventListener("click", resetBtn._kursHandler);
    }
    resetBtn._kursHandler = onReset;
    resetBtn.addEventListener("click", onReset);
  }

  initToggle();
}


function initToggle() {
  const toggles = document.querySelectorAll('.course-toggle');
  const cards   = document.querySelectorAll('.course-card');

  toggles.forEach(toggle => {
    // Удаляем старый listener если он уже был добавлен (StrictMode / HMR)
    if (toggle._toggleHandler) {
      toggle.removeEventListener('click', toggle._toggleHandler);
    }

    function onToggleClick() {
      const currentCard = toggle.closest('.course-card');
      cards.forEach(card => {
        if (card !== currentCard) card.classList.remove('is-open');
      });
      currentCard.classList.toggle('is-open');
    }

    toggle._toggleHandler = onToggleClick;
    toggle.addEventListener('click', onToggleClick);
  });
}