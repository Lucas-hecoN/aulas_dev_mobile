// document.addEventListener('DOMContentLoaded', () => {
//     const carouselWrapper = document.querySelector('.carousel-wrapper');
//     const items = document.querySelectorAll('.carousel-item');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');

//     let index = 0;
//     let startX;
//     let currentTranslate = 0;
//     let prevTranslate = 0;
//     let animationID;
//     const itemWidth = items[0].offsetWidth + 20; // Incluindo a margem

//     function moveCarousel(direction) {
//         index += direction;

//         if (index < 0) {
//             index = items.length - 1;
//         } else if (index >= items.length) {
//             index = 0;
//         }

//         const offset = -index * itemWidth;
//         carouselWrapper.style.transform = `translateX(${offset}px)`;
//     }

//     function touchStart(event) {
//         startX = event.touches[0].clientX;
//         prevTranslate = currentTranslate;
//         cancelAnimationFrame(animationID);
//     }

//     function touchMove(event) {
//         const currentX = event.touches[0].clientX;
//         const distanceMoved = currentX - startX;
//         currentTranslate = prevTranslate + distanceMoved;
//         carouselWrapper.style.transform = `translateX(${currentTranslate}px)`;
//     }

//     function touchEnd(event) {
//         const distanceMoved = currentTranslate - prevTranslate;
//         if (distanceMoved < -100) {
//             moveCarousel(1);
//         } else if (distanceMoved > 100) {
//             moveCarousel(-1);
//         } else {
//             carouselWrapper.style.transform = `translateX(${-index * itemWidth}px)`;
//         }
//         index = Math.min(Math.max(index, 0), items.length - 1);
//     }

//     prevButton.addEventListener('click', () => moveCarousel(-1));
//     nextButton.addEventListener('click', () => moveCarousel(1));
//     carouselWrapper.addEventListener('touchstart', touchStart);
//     carouselWrapper.addEventListener('touchmove', touchMove);
//     carouselWrapper.addEventListener('touchend', touchEnd);
// });



document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;
    let startX;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    const itemWidth = items[0].offsetWidth + 20; // Incluindo a margem

    function updateCarouselPosition() {
        // Ajuste para centralizar o item atual
        const offset = -index * itemWidth + (carouselWrapper.offsetWidth - itemWidth) / 2;
        carouselWrapper.style.transform = `translateX(${offset}px)`;
    }

    function moveCarousel(direction) {
        index += direction;

        if (index < 0) {
            index = items.length - 1;
        } else if (index >= items.length) {
            index = 0;
        }

        updateCarouselPosition();
    }

    function touchStart(event) {
        startX = event.touches[0].clientX;
        prevTranslate = currentTranslate;
        cancelAnimationFrame(animationID);
    }

    function touchMove(event) {
        const currentX = event.touches[0].clientX;
        const distanceMoved = currentX - startX;
        currentTranslate = prevTranslate + distanceMoved;
        carouselWrapper.style.transform = `translateX(${currentTranslate}px)`;
    }

    function touchEnd(event) {
        const distanceMoved = currentTranslate - prevTranslate;
        if (distanceMoved < -100) {
            moveCarousel(1);
        } else if (distanceMoved > 100) {
            moveCarousel(-1);
        } else {
            updateCarouselPosition();
        }
        index = Math.min(Math.max(index, 0), items.length - 1);
    }

    prevButton.addEventListener('click', () => moveCarousel(-1));
    nextButton.addEventListener('click', () => moveCarousel(1));
    carouselWrapper.addEventListener('touchstart', touchStart);
    carouselWrapper.addEventListener('touchmove', touchMove);
    carouselWrapper.addEventListener('touchend', touchEnd);

    // Inicializa a posição do carrossel
    updateCarouselPosition();
});
