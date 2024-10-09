let currentIndex = 0;
const services = document.querySelectorAll('.carousel .servicio');
const totalServices = services.length;
const carousel = document.querySelector('.carousel');
const paginationDots = document.querySelector('.pagination-dots');

// Inicializar puntos de paginación
for (let i = 0; i < totalServices; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
    });
    paginationDots.appendChild(dot);
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalServices;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalServices) % totalServices;
    updateCarousel();
});

function updateCarousel() {
    const width = services[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;

    // Actualizar la opacidad de los servicios
    services.forEach((service, index) => {
        service.classList.remove('active');
        paginationDots.children[index].classList.remove('active');
        if (index === currentIndex) {
            service.classList.add('active');
            paginationDots.children[index].classList.add('active');
        }
    });
}

// Actualizar el carrusel en el redimensionamiento de la ventana
window.addEventListener('resize', updateCarousel);

// Cambia automáticamente el servicio cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalServices;
    updateCarousel();
}, 4000); // Cambia cada 3 segundos
