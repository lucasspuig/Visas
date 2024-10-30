// Arreglo de imágenes de fondo
const images = [
    'assets/img-asientosavion.avif',
    'assets/pasaporteaeropuertoportda.avif', 
    'assets/aviondespegando.avif',
    './assets/img-portadamapa.avif',
     './assets/pasajeroimgportada.avif'
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

// Llama a la función de cambio al cargar la página
changeBackgroundImage();


 // Animación suave para las tarjetas de servicio
 const observer = new IntersectionObserver((entries) => {
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
     observer.observe(card);
 });

      // Toggle para el menú móvil
 const navToggle = document.querySelector('.nav-toggle');
 const navLinks = document.querySelector('.nav-links');

 navToggle.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Cerrar menú al hacer click en un enlace
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
     });
 });

 // Cerrar menú al hacer click fuera
 document.addEventListener('click', (e) => {
     if (!e.target.closest('.navbar')) {
         navLinks.classList.remove('active');
     }
 });

 document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('contacto');
    const logo = document.querySelector('.logo');
    const socialIcons = document.querySelectorAll('.social-icon');
    const copyright = document.querySelector('.copyright');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar el logo
                logo.classList.add('slide-left');

                // Animar los íconos sociales
                socialIcons.forEach((icon, index) => {
                    icon.classList.add('slide-left');
                    // Añadir un retraso a cada ícono para un efecto secuencial
                    icon.style.animationDelay = `${index * 0.1}s`;
                });

                // Animar el texto de copyright
                copyright.classList.add('slide-left');
                
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(footer);
});

