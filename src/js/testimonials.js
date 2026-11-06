
// src/js/testimonials.js

export function init() {

  // ── Event cards ──
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

  // ── Testimonials data ──
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

  const reviews = document.querySelectorAll(".review");

  if (reviews.length < 2) return;

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

  // ── State ──
  let currentIndex = 0;
  let mobileIndex = 0;
  let isMobile = window.matchMedia("(max-width: 768px)").matches;

  let mobileTimer = null;
  let animationTimer = null;

  const MOBILE_INTERVAL = 7000;

  // ── Update left review ──
  function updateLeftReview(data) {
    leftText.textContent = data.text;
    leftAuthor.textContent = data.author;
  }

  // ── Update right review ──
  function updateRightReview(data) {
    rightText.childNodes[0].nodeValue = data.text + " ";

    if (rightSignature) {
      rightSignature.textContent = data.signature || "";
    }

    if (rightAuthor) {
      rightAuthor.textContent = data.author;
    }

    if (rightSlogan) {
      rightSlogan.textContent = data.slogan || "";
    }
  }

  // ── Desktop testimonials ──
  function showTestimonials(index, direction = "right") {

    const elements = [
      leftText,
      leftAuthor,
      rightText,
      rightSignature,
      rightAuthor,
      rightSlogan
    ].filter(Boolean);

    elements.forEach(el => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });

    const offset = direction === "right" ? 50 : -50;

    reviews.forEach(card => {
      card.style.transform = `translateX(${offset}px)`;
    });

    clearTimeout(animationTimer);

    animationTimer = setTimeout(() => {

      updateLeftReview(testimonials[index].left);
      updateRightReview(testimonials[index].right);

      reviews.forEach(card => {
        card.style.transform = "translateX(0)";
      });

      elements.forEach(el => {
        el.classList.remove("fade-out");
        el.classList.add("fade-in");
      });

    }, 250);
  }

  // ── Mobile testimonials ──
  function showMobileTestimonial(index) {

    const testimonialIndex = Math.floor(index / 2);
    const showLeft = index % 2 === 0;

    const activeReview = showLeft ? leftReview : rightReview;
    const inactiveReview = showLeft ? rightReview : leftReview;

    // Fade out current review
    reviews.forEach(card => {
      card.classList.remove("mobile-active");
    });

    clearTimeout(animationTimer);

    animationTimer = setTimeout(() => {

      // Update only the review that will be displayed
      if (showLeft) {
        updateLeftReview(testimonials[testimonialIndex].left);
      } else {
        updateRightReview(testimonials[testimonialIndex].right);
      }

      // Hide inactive review
      inactiveReview.classList.remove("mobile-active");

      // Show active review
      activeReview.classList.add("mobile-active");

    }, 400);
  }

  // ── Start mobile autoplay ──
  function startMobileTimer() {

    clearInterval(mobileTimer);

    showMobileTestimonial(mobileIndex);

    mobileTimer = setInterval(() => {

      mobileIndex = (mobileIndex + 1) % (testimonials.length * 2);

      showMobileTestimonial(mobileIndex);

    }, MOBILE_INTERVAL);
  }

  // ── Stop mobile autoplay ──
  function stopMobileTimer() {
    clearInterval(mobileTimer);
    mobileTimer = null;
    clearTimeout(animationTimer);
  }

  // ── Initial setup ──
  if (isMobile) {
    startMobileTimer();
  } else {
    showTestimonials(currentIndex, "right");
  }

  // ── Arrow navigation (desktop) ──
  if (leftArrow) {
    leftArrow.addEventListener("click", () => {

      if (isMobile) return;

      currentIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;

      showTestimonials(currentIndex, "left");
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener("click", () => {

      if (isMobile) return;

      currentIndex =
        (currentIndex + 1) % testimonials.length;

      showTestimonials(currentIndex, "right");
    });
  }

  // ── Handle screen resize ──
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function handleResize(event) {

    if (event.matches === isMobile) return;

    isMobile = event.matches;

    if (isMobile) {
      startMobileTimer();
    } else {
      stopMobileTimer();

      reviews.forEach(card => {
        card.classList.remove("mobile-active");
        card.style.transform = "";
      });

      showTestimonials(currentIndex, "right");
    }
  }

  mediaQuery.addEventListener("change", handleResize);
}
