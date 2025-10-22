/*
 * M04: JavaScript Personalizado - Modo Oscuro y Scroll Top
 * */

const scrollBtn = document.getElementById("scrollToTopBtn");
const darkModeSwitch = document.getElementById("darkModeSwitch");
const body = document.body;

/* ----------------------------------------------------------------- */
/* 1. FUNCIÓN DE SCROLL TOP */
/* ----------------------------------------------------------------- */

// Muestra/oculta el botón de scroll
function toggleScrollBtn() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Desplaza la página hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

// Asignar al evento de scroll
window.onscroll = function() { toggleScrollBtn() };
window.scrollToTop = scrollToTop; // Hacemos la función global para el onclick en HTML


/* ----------------------------------------------------------------- */
/* 2. FUNCIÓN DE MODO OSCURO (Toggle) */
/* ----------------------------------------------------------------- */

// Función principal para cambiar el tema
function toggleDarkMode() {
    if (darkModeSwitch.checked) {
        // Establecer el tema oscuro de Bootstrap
        body.setAttribute('data-bs-theme', 'dark');
        // Guardar la preferencia
        localStorage.setItem('theme', 'dark');
    } else {
        // Establecer el tema claro de Bootstrap
        body.setAttribute('data-bs-theme', 'light');
        // Guardar la preferencia
        localStorage.setItem('theme', 'light');
    }
}

// 3. Cargar la preferencia al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        darkModeSwitch.checked = true;
        body.setAttribute('data-bs-theme', 'dark');
    } else {
        darkModeSwitch.checked = false;
        body.setAttribute('data-bs-theme', 'light');
    }
});

// 4. Escuchar el cambio en el interruptor
darkModeSwitch.addEventListener('change', toggleDarkMode);