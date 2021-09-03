const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
carousel = document.getElementById('carousel')
const right = document.getElementById('right');

const SLIDES_COUNT = slides.length;
let current_slide = 0;
left.addEventListener('click', () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }
});

right.addEventListener('click', () => {
    current_slide--;
    if (current_slide < 0 ) {
        current_slide = SLIDES_COUNT - 1;
    }
})