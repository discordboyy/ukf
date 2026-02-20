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



const testimonials = [
  {
    left: {
      text: "Veldig inspirerende. Anna er veldig flink til å lære bort. Jeg malte litt aquarell fra før men jeg har lært mye nytt.",
      author: "Pascale"
    },
    right: {
      text: "Величезна подяка майстриням за надану можливість навчитись новому!",
      signature: "З повагою до дієвих україночок,",
      author: "пані Людмила з Ірпеня.",
      slogan: "Слава Україні!"
    }
  },
  {
    left: {
      text: "Fantastisk kurs! Jeg lærte så mange nye teknikker og følte meg inspirert til å male mer.",
      author: "Kari"
    },
    right: {
      text: "Дуже цікаво та корисно, отримала масу натхнення для творчості!",
      signature: "",
      author: "Марія",
      slogan: ""
    }
  },
  {
    left: {
      text: "Annas undervisning var tydelig og motiverende. Absolutt verdt tiden!",
      author: "Lars"
    },
    right: {
      text: "Прекрасний досвід! Вчителі дуже уважні і пояснюють усе детально.",
      signature: "",
      author: "Олена",
      slogan: ""
    }
  }
];

let currentIndex = 0;

const reviews = document.querySelectorAll(".review");
const leftReview = reviews[0];
const rightReview = reviews[1];

const leftText = leftReview.querySelector(".review-text");
const leftAuthor = leftReview.querySelector(".review-author");

const rightText = rightReview.querySelector(".review-text");
const rightSignature = rightReview.querySelector(".review-signature");
const rightAuthor = rightReview.querySelector(".review-author");
const rightSlogan = rightReview.querySelector(".review-slogan");

const leftArrow = document.querySelector(".polygon-arrow-left");
const rightArrow = document.querySelector(".polygon-arrow-right");

function showTestimonials(index, direction) {

  const elements = [
    leftText, leftAuthor,
    rightText, rightSignature,
    rightAuthor, rightSlogan
  ].filter(Boolean);

  // fade-out
  elements.forEach(el => {
    el.classList.remove("fade-in");
    el.classList.add("fade-out");
  });

  const offset = direction === "right" ? 50 : -50;

  reviews.forEach(card => {
    card.style.transform = `translateX(${offset}px)`;
  });

  setTimeout(() => {

    // LEFT
    leftText.textContent = testimonials[index].left.text;
    leftAuthor.textContent = testimonials[index].left.author;

    // RIGHT
    rightText.childNodes[0].nodeValue = testimonials[index].right.text + " ";
    
    if (rightSignature)
      rightSignature.textContent = testimonials[index].right.signature;

    if (rightAuthor)
      rightAuthor.textContent = testimonials[index].right.author;

    if (rightSlogan)
      rightSlogan.textContent = testimonials[index].right.slogan;

    // reset position
    reviews.forEach(card => {
      card.style.transform = `translateX(0)`;
    });

    elements.forEach(el => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });

  }, 250);
}

// init
showTestimonials(currentIndex, "right");

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonials(currentIndex, "left");
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonials(currentIndex, "right");
});