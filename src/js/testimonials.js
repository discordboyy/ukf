// src/scripts/testimonials.js
document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('click', () => {
    document
      .querySelectorAll('.event-card.is-open')
      .forEach(open => {
        if (open !== card) open.classList.remove('is-open');
      });

    card.classList.toggle('is-open');
  });
});



const testimonials1 = [
    { text: "Veldig inspirerende. Anna er veldig flink til å lære bort. Jeg malte litt aquarell fra før men jeg har lært mye nytt.", author: "Pascale" },
    { text: "Fantastisk kurs! Jeg lærte så mange nye teknikker og følte meg inspirert til å male mer.", author: "Kari" },
    { text: "Annas undervisning var tydelig og motiverende. Absolutt verdt tiden!", author: "Lars" }
];

const testimonials2 = [
    { text: "Величезна подяка майстриням за надану можливість навчитись новому! З повагою до дієвих україночок,", author: "пані Людмила з Ірпеня. Слава Україні!" },
    { text: "Дуже цікаво та корисно, отримала масу натхнення для творчості!", author: "Марія" },
    { text: "Прекрасний досвід! Вчителі дуже уважні і пояснюють усе детально.", author: "Олена" }
];

let currentIndex = 0;

const testimonialText1 = document.querySelector(".testimonial-text");
const testimonialAuthor1 = document.querySelector(".testimonial-author");
const testimonialText2 = document.querySelector(".testimonial-text2");
const testimonialAuthor2 = document.querySelector(".testimonial-author2");

const leftArrow = document.querySelector(".polygon-arrow-left");
const rightArrow = document.querySelector(".polygon-arrow-right");

const testimonialCard1 = document.querySelector(".testimonial-card");
const testimonialCard2 = document.querySelector(".testimonial-card2");

// Функция показа с анимацией
function showTestimonials(index, direction) {
    // Добавляем fade-out
    [testimonialText1, testimonialAuthor1, testimonialText2, testimonialAuthor2].forEach(el => {
        el.classList.remove("fade-in");
        el.classList.add("fade-out");
    });

    // Сдвиг карточек влево/вправо
    const offset = direction === "right" ? 50 : -50; // пиксели для сдвига
    testimonialCard1.style.transform = `translateX(${offset}px)`;
    testimonialCard2.style.transform = `translateX(${offset}px)`;

    setTimeout(() => {
        // Меняем текст
        testimonialText1.textContent = testimonials1[index].text;
        testimonialAuthor1.textContent = testimonials1[index].author;

        testimonialText2.textContent = testimonials2[index].text;
        testimonialAuthor2.textContent = testimonials2[index].author;

        // Возвращаем карточки на место и делаем fade-in
        testimonialCard1.style.transform = `translateX(0)`;
        testimonialCard2.style.transform = `translateX(0)`;

        [testimonialText1, testimonialAuthor1, testimonialText2, testimonialAuthor2].forEach(el => {
            el.classList.remove("fade-out");
            el.classList.add("fade-in");
        });
    }, 250); // половина времени анимации
}

// Изначально показываем первый отзыв
showTestimonials(currentIndex, "right");

// Навигация
leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials1.length) % testimonials1.length;
    showTestimonials(currentIndex, "left");
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials1.length;
    showTestimonials(currentIndex, "right");
});










