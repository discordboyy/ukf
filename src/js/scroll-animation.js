    document.addEventListener("DOMContentLoaded", function () {
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
        checkScrollBlocks(); // Проверка при загрузке страницы
    });