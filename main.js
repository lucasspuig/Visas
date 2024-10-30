// Arreglo de imágenes de fondo
const images = [
    'assets/img-asientosavion.avif',
    'assets/pasaporteaeropuertoportda.avif', 
    'assets/aviondespegando.avif',
    'assets/img-portadamapa.avif',
    'assets/pasajeroimgportada.avif'
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero');

// Función para cambiar la imagen de fondo
function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Cicla el índice
}

// Cambia la imagen cada 5 segundos
setInterval(changeBackgroundImage, 5000);
changeBackgroundImage();

// Animación suave para las tarjetas de servicio
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    serviceObserver.observe(card);
});

// Animación en el pie de página
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('contacto');
    const logo = document.querySelector('.logo');
    const socialIcons = document.querySelectorAll('.social-icon');
    const copyright = document.querySelector('.copyright');

    const footerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                logo.classList.add('slide-left');

                socialIcons.forEach((icon, index) => {
                    icon.classList.add('slide-left');
                    icon.style.animationDelay = `${index * 0.1}s`;
                });

                copyright.classList.add('slide-left');
                footerObserver.unobserve(entry.target);
            }
        });
    });

    footerObserver.observe(footer);
});

// Animación para el contenido del héroe
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('fadeInUp');
});

// Toggle para el menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLogo = document.querySelector('.nav-logo');

    // Función para manejar el desplazamiento
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) { // Cambia este valor según tu necesidad
            navLogo.classList.add('nav-logo-visible'); // Añade la clase para mostrar el logo
        }
    };

    window.addEventListener('scroll', handleScroll);
});
