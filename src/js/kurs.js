// ukf\src\js\kurs.js

let isInitialized = false;

export function initKurs() {
  if (isInitialized) return;
  isInitialized = true;

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

  initToggle();     // 👈 LEGG TIL DENNE
  initCarousel();

  // RESET
  resetBtn?.addEventListener("click", () => {
    if (allCheckbox) allCheckbox.checked = false;
    categoryCheckboxes.forEach(cb => (cb.checked = false));
    updateCards();
  });

  initCarousel();
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



function initCarousel() {
  let currentPreview = null;
  let modalImages = [];
  let modalIndex = 0;
  let touchStartX = 0;

  let startX = 0;
  let startY = 0;
  let isDragging = false;

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalClose = document.getElementById("modalClose");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");

  document.querySelectorAll('.carousel-preview').forEach(preview => {
    const images = JSON.parse(preview.dataset.images);
    preview.innerHTML = '';

    images.forEach((src, index) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');

      const img = document.createElement('img');
      img.src = src;
      img.dataset.index = index;

      slide.appendChild(img);
      preview.appendChild(slide);
    });

    let currentIndex = 0;
    const slides = preview.querySelectorAll('.slide');

    function showSlide(index) {
      slides.forEach((s, i) => {
        s.style.display = i === index ? "block" : "none";
      });
    }

    showSlide(0);

    // next
    preview.querySelector('.slick-next')?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    // prev
    preview.querySelector('.slick-prev')?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    preview.querySelectorAll('img').forEach(img => {
      img.addEventListener('click', () => {
        currentPreview = preview;
        modalImages = images;
        modalIndex = parseInt(img.dataset.index);
        modalImg.src = modalImages[modalIndex];
        modal?.classList.add("show");
        document.body.style.overflow = "hidden";
      });
    });
  });

  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal?.classList.remove("show");
    document.body.style.overflow = "";

    if (currentPreview) {
    }
  }

  modalPrev?.addEventListener("click", () => {
    modalIndex--;
    modalImg.src = modalImages[(modalIndex + modalImages.length) % modalImages.length];
  });

  modalNext?.addEventListener("click", () => {
    modalIndex++;
    modalImg.src = modalImages[modalIndex % modalImages.length];
  });
}