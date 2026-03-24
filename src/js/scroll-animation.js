// src/js/scroll-animation.js

export function init() {

    const scrollBlocks = document.querySelectorAll(".scroll-animate");

    function checkScrollBlocks() {
        scrollBlocks.forEach(block => {
            const rect = block.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                block.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScrollBlocks);

    // Проверка при загрузке
    checkScrollBlocks();
}