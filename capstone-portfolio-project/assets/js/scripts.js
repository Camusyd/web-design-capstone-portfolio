document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle para el menú de hamburguesa en móvil
    menuToggle.addEventListener('click', () => {
        // Simple toggle de una clase para mostrar/ocultar el menú
        navLinks.classList.toggle('active'); 
    });

    // NOTA: La clase '.active' deberá ser definida en style.css 
    // dentro de una media query para asegurar que solo funciona en móvil.
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 1. Alternar menú de hamburguesa
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); 
    });
    
    // 2. Transición de aparición suave (Scroll Reveal Lite)
    const fadeInElements = document.querySelectorAll('section');

    const checkVisibility = () => {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            // Si el elemento está al menos 1/5 de la pantalla visible
            if (rect.top < window.innerHeight - (window.innerHeight / 5) && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    // Aplicar la clase fade-in inicialmente a todas las secciones (para la animación)
    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
    });

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Ejecutar al cargar para los elementos iniciales
    
    // 3. Smooth Scroll para todos los enlaces ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});