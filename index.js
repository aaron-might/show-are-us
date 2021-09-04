const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
carousel = document.getElementById('carousel');
const right = document.getElementById('right');

const SLIDES_COUNT = slides.length;
let current_slide = 0;
left.addEventListener('click', () => {
    current_slide--;
    if (current_slide < 0 ) {
        current_slide = SLIDES_COUNT - 1;
    }
    updateCarousel();
});

right.addEventListener('click', () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }
    updateCarousel();
})

function updateCarousel() {
    carousel.style.transform = `translateX(${-current_slide * slides[0]. offsetWidth}px)`;
    document.body.style.background = `#${slides[current_slide].getAttribute(
            'data-bg'
        )}`;
            console.log(slides[current_slide].getAttribute('data-bg'));
}