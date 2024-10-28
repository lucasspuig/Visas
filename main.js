let currentIndex = 0;
const services = document.querySelectorAll('.carousel .servicio');
const totalServices = services.length;
const carousel = document.querySelector('.carousel');
const paginationDots = document.querySelector('.pagination-dots');
let autoChangeInterval;

// Inicializar puntos de paginación
for (let i = 0; i < totalServices; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', `Ir al servicio ${i + 1}`);
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
        resetAutoChange(); // Reset the automatic change on user interaction
    });
    paginationDots.appendChild(dot);
}

// Navegación del carrusel
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalServices;
    updateCarousel();
    resetAutoChange(); // Reset the automatic change on user interaction
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalServices) % totalServices;
    updateCarousel();
    resetAutoChange(); // Reset the automatic change on user interaction
});

// Actualizar el carrusel
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

// Cambia automáticamente el servicio cada 4 segundos
function startAutoChange() {
    autoChangeInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalServices;
        updateCarousel();
    }, 15000); // Cambia cada 4 segundos
}

// Resetear el cambio automático
function resetAutoChange() {
    clearInterval(autoChangeInterval);
    startAutoChange();
}

// Pausar el cambio automático al pasar el mouse
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoChangeInterval);
});

carousel.addEventListener('mouseleave', () => {
    startAutoChange();
});




    document.addEventListener("DOMContentLoaded", function() {
        const nosotrosSection = document.querySelector('.nosotros');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    nosotrosSection.classList.add('visible'); // Agrega la clase cuando es visible en la pantalla
                }
            });
        }, {
        threshold: 0.5 // Activar cuando el 50% de la sección es visible
        });

        observer.observe(nosotrosSection); // Observar la sección "Nosotros"
    });




