// src/scripts/prosjekter.js
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const nextBtn = document.querySelector(".polygon-arrow-right");
const prevBtn = document.querySelector(".polygon-arrow-left");

let index = 0;

function getSlideStep() {
  const slideWidth = slides[0].offsetWidth;
  const styles = window.getComputedStyle(slidesContainer);
  const gap = parseInt(styles.gap) || 0;
  return slideWidth + gap;
}

function updateSlider() {
  const step = getSlideStep();
  slidesContainer.style.transform = `translateX(-${index * step}px)`;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  updateSlider();
});