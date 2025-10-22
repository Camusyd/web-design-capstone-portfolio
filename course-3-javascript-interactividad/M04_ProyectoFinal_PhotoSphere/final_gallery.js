/*
 * Módulo 4: Proyecto Final PhotoSphere (Accesibilidad y Transición)
 * Objetivo: Implementar Click, Transición CSS y accesibilidad total.
 */

// 1. Array de Datos (Usando datos de marcadores de posición)
const imageGalleryData = [
    // Usar datos reales aquí, ejemplo:
    { thumbUrl: "https://images.unsplash.com/photo-1526482312921-58d5666a52c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", fullUrl: "https://images.unsplash.com/photo-1526482312921-58d5666a52c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", altText: "Ciudad Nocturna", description: "Luces de la ciudad reflejándose en el río al anochecer, seleccionado." },
    { thumbUrl: "https://st2.depositphotos.com/10440072/43945/i/950/depositphotos_439458380-stock-photo-tropical-beach-panorama-view-summer.jpg", fullUrl: "https://st2.depositphotos.com/10440072/43945/i/950/depositphotos_439458380-stock-photo-tropical-beach-panorama-view-summer.jpg", altText: "Playa Tropical", description: "Arena blanca y palmeras en una playa tropical, seleccionado." }
];

// 2. Obtención de Elementos del DOM
const fullImage = document.getElementById('image');
const caption = document.getElementById('caption');
const imageList = document.getElementById('image-list');

// 3. Variables de Estado (Para saber qué imagen está activa)
let currentImageIndex = 0;


// 4. Función de Cambio de Imagen (Integra Transición)
function swapImage(imageData, eventTarget) {
    // 1. Iniciar la Transición (Fade Out)
    fullImage.classList.add('fade-out');

    // 2. Esperar el final del Fade Out (Usando un pequeño retraso)
    setTimeout(() => {
        // Actualizar el SRC, ALT, y CAPTION
        fullImage.src = imageData.fullUrl;
        fullImage.alt = imageData.altText;
        caption.textContent = imageData.description;
        
        // 3. Finalizar la Transición (Fade In)
        fullImage.classList.remove('fade-out');
        fullImage.classList.add('fade-in');
        
    }, 400); // El tiempo debe coincidir con la duración del 'transition' en el CSS (0.4s)

    // A11Y: Quitar la clase 'selected' a todas las miniaturas
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('selected'));
    
    // A11Y: Añadir la clase 'selected' a la miniatura activa (para indicar el foco visual)
    if (eventTarget) {
        eventTarget.classList.add('selected');
    }
}


// 5. Bucle para construir y asignar eventos (Del Módulo 3)
imageGalleryData.forEach((imageData, index) => {
    // [CÓDIGO DE CREACIÓN DE ELEMENTOS DEL MÓDULO 3]
    const listItem = document.createElement('li');
    const thumbImage = document.createElement('img');
    
    thumbImage.className = 'thumbnail';
    thumbImage.src = imageData.thumbUrl;
    thumbImage.alt = `Miniatura: ${imageData.altText}`; // ALT descriptivo para miniatura
    thumbImage.setAttribute('data-index', index); // Usamos el índice del array
    thumbImage.setAttribute('tabindex', '0'); 
    
    listItem.appendChild(thumbImage);
    imageList.appendChild(listItem);

    
    // ASIGNACIÓN DE EVENTOS (CLICK Y TECLADO)
    
    // Evento Principal: CLICK del ratón
    thumbImage.addEventListener('click', function(e) {
        swapImage(imageData, e.target);
    });

    // Evento Secundario: TECLADO (Accesibilidad A11y)
    thumbImage.addEventListener('keyup', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { // Enter o Espacio para seleccionar
            swapImage(imageData, e.target);
            e.preventDefault(); // Evita el scroll o comportamiento por defecto
        }
    });
    
    // Evento de Foco: Cuando un usuario de teclado enfoca
    thumbImage.addEventListener('focus', function(e) {
        // Opcional: Ejecutar swapImage(imageData, e.target) en focus para previsualizar al navegar
    });
});