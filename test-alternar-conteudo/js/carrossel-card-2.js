document.addEventListener('DOMContentLoaded', function() {
    const carrossels = document.querySelectorAll('[data-carousel]');

    carrossels.forEach(carrossel => {
        const btnLeft = carrossel.previousElementSibling; // Botão à esquerda
        const btnRight = carrossel.nextElementSibling; // Botão à direita

        const cardWidth = carrossel.querySelector('.card').offsetWidth; // Largura de um card (inclui margens)
        const scrollAmount = cardWidth + 16; // 16px é o gap entre os cards

        // Função para mover o carrossel para a esquerda
        btnLeft.addEventListener('click', () => {
            carrossel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Função para mover o carrossel para a direita
        btnRight.addEventListener('click', () => {
            carrossel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
});
