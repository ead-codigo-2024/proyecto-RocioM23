
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', function() {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(-1);
});

function changeSlide(direction) {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
}

