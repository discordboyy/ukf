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






// Модалка для карусели изображений
let modalImages = [];
let modalIndex = 0;
let touchStartX = 0;

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

// Открытие модалки
document.querySelectorAll(".carousel-preview").forEach(preview => {
    preview.addEventListener("click", () => {
        modalImages = JSON.parse(preview.dataset.images);
        modalIndex = 0;
        modalImg.src = modalImages[modalIndex];
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    });
});

// Закрытие
function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

// Показ картинки
function showModalImage(index) {
    modalIndex = (index + modalImages.length) % modalImages.length;
    modalImg.src = modalImages[modalIndex];
}

// Навигация
modalPrev.addEventListener("click", () => showModalImage(modalIndex - 1));
modalNext.addEventListener("click", () => showModalImage(modalIndex + 1));

// Свайпы
modalImg.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX;
});

modalImg.addEventListener("touchend", e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
        diff > 0
            ? showModalImage(modalIndex + 1)
            : showModalImage(modalIndex - 1);
    }
});
