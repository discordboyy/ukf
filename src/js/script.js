// src/scripts/script.js
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
