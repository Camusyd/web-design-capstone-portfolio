/*
 * Módulo 2: Galería de Fotos Interactiva (Manejo de Eventos)
 * Objetivo: Cambiar la imagen principal y la descripción al hacer hover sobre las miniaturas.
 */

// 1. Obtención de Elementos del DOM
const fullImage = document.getElementById('image');
const caption = document.getElementById('caption');
const thumbnails = document.querySelectorAll('.thumbnail'); // NodeList de todas las miniaturas

// 2. Almacenar el estado inicial para restaurarlo al salir (mouseout)
const initialSrc = fullImage.src;
const initialAlt = fullImage.alt;
const initialCaption = caption.textContent;


// 3. Función para cambiar la imagen (Manejador de Evento)
function swapImage(event) {
    // El 'event.target' es la miniatura (<img>) sobre la que se hizo hover.

    // Obtenemos los data-attributes (los datos personalizados del HTML)
    const newSrc = event.target.getAttribute('data-full-size');
    const newDescription = event.target.getAttribute('data-description');

    // Cambiar la imagen principal (el visor)
    fullImage.src = newSrc;
    fullImage.alt = newDescription; // Actualizamos el ALT por accesibilidad

    // Cambiar el pie de foto
    caption.textContent = newDescription;
}

// 4. Función para restaurar la imagen al estado inicial
function restoreImage() {
    fullImage.src = initialSrc;
    fullImage.alt = initialAlt;
    caption.textContent = initialCaption;
}


// 5. Asignación de Event Listeners (Bucle)
// Iteramos sobre la lista de miniaturas para asignarles los eventos a cada una.
thumbnails.forEach(thumb => {
    // Evento Principal: Cuando el puntero entra en la miniatura
    thumb.addEventListener('mouseover', swapImage);

    // Evento Secundario: Cuando el puntero sale de la miniatura
    thumb.addEventListener('mouseout', restoreImage);

    // **Preparación para Módulo 4:** Añadir un listener para el teclado (Enter)
    // Esto se utiliza para accesibilidad.
    thumb.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            swapImage(event);
            // El 'restore' no funciona bien con el teclado en este método, 
            // pero se corregirá con la versión final del M4.
        }
    });
});