 // Crear grid de imágenes en el hero
 const heroOverlay = document.getElementById('heroOverlay');
 for (let i = 0; i < 12; i++) {
     const div = document.createElement('div');
     div.className = 'hero-overlay-item';
     heroOverlay.appendChild(div);
 }

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