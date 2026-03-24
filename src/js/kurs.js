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

// Мини-карусели с hover-стрелками
document.querySelectorAll('.carousel-preview').forEach(preview => {
    const images = JSON.parse(preview.dataset.images);
    preview.innerHTML = '';

    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.dataset.index = index;

        slide.appendChild(img);
        preview.appendChild(slide);
    });

    $(preview).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: `
          <button class="slick-prev">
              <img src="src/assets/nav-left.svg" alt="Prev">
          </button>
      `,
      nextArrow: `
          <button class="slick-next">
              <img src="src/assets/nav-right.svg" alt="Next">
          </button>
      `,
      dots: false
  });

    preview.querySelectorAll('.slide img').forEach(img => {

        img.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            startY = e.clientY;
            isDragging = false;
        });

        img.addEventListener('mousemove', (e) => {
            if (Math.abs(e.clientX - startX) > 10 || Math.abs(e.clientY - startY) > 10) {
                isDragging = true;
            }
        });

        img.addEventListener('click', (e) => {

            if (isDragging) {
                e.preventDefault();
                return; // если это drag — ничего не делаем
            }

            currentPreview = preview;
            modalImages = images;
            modalIndex = parseInt(img.dataset.index);
            modalImg.src = modalImages[modalIndex];
            modal.classList.add("show");
            document.body.style.overflow = "hidden";
        });

    });
});

// Закрытие
function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";

    // синхронизация с мини-каруселью
    if (currentPreview) {
        $(currentPreview).slick('slickGoTo', modalIndex);
    }
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

$(document).ready(function() {
  // Перебираем каждый слайд и устанавливаем ширину и высоту
  $('.carousel-preview .slick-slide').each(function() {
    $(this).css({
      'width': '526.5px',     // фиксированная ширина слайда
      'height': '527.25px'    // фиксированная высота слайда
    });
  });

  // Теперь для изображений внутри слайдов
  $('.carousel-preview img').each(function() {
    $(this).css({
      'object-fit': 'cover', // изображение полностью заполняет контейнер, возможна обрезка
      'object-position': 'center' // центрируем изображение
    });
  });
});
