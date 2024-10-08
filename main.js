let currentIndex = 0;
const services = document.querySelectorAll('.carousel .servicio');
const totalServices = services.length;
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
dots.forEach(dot => dot.addEventListener('click', handleDotClick));

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalServices;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalServices) % totalServices;
    updateCarousel();
}

function handleDotClick(event) {
    currentIndex = parseInt(event.target.getAttribute('data-index'));
    updateCarousel();
}

function updateCarousel() {
    const width = services[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    services.forEach((service, index) => {
        service.classList.toggle('active', index === currentIndex);
        service.setAttribute('aria-hidden', index !== currentIndex);
    });
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

window.addEventListener('resize', updateCarousel);

// Auto-play functionality
let autoSlide = setInterval(nextSlide, 3000);
carousel.addEventListener('mouseover', () => clearInterval(autoSlide));
carousel.addEventListener('mouseout', () => autoSlide = setInterval(nextSlide, 3000));

// Touch swipe for mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchEndX < touchStartX) nextSlide();
    if (touchEndX > touchStartX) prevSlide();
}
