let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const wrapper = document.querySelector('.carousel-wrapper');

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

document.querySelector('.prev').addEventListener('click', () => moveCarousel(-1));
document.querySelector('.next').addEventListener('click', () => moveCarousel(1));

// Inicializa o carrossel
updateCarousel();

// Adiciona responsividade
window.addEventListener('resize', updateCarousel);