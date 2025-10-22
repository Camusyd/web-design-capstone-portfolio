/*
 * Módulo 3: Arrays, Bucles y DOM Dinámico
 * Objetivo: Mejorar la galería utilizando un Array para la información de las imágenes.
 */

// 1. Array de Objetos (Los datos de la galería)
const imageGalleryData = [

    {
        thumbUrl: "https://images.unsplash.com/photo-1526482312921-58d5666a52c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullUrl: "https://images.unsplash.com/photo-1526482312921-58d5666a52c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Miniatura de una ciudad por la noche.",
        description: "Luces de la ciudad reflejándose en el río al anochecer."
    },
    {
        thumbUrl: "https://st2.depositphotos.com/10440072/43945/i/950/depositphotos_439458380-stock-photo-tropical-beach-panorama-view-summer.jpg",
        fullUrl: "https://st2.depositphotos.com/10440072/43945/i/950/depositphotos_439458380-stock-photo-tropical-beach-panorama-view-summer.jpg",
        altText: "Miniatura de una playa tropical.",
        description: "Arena blanca y palmeras en una playa tropical."
    }
];


// 2. Obtención de Elementos del DOM
const fullImage = document.getElementById('image');
const caption = document.getElementById('caption');
const imageList = document.getElementById('image-list'); // El <ul> contenedor de las miniaturas

// 3. Almacenar el estado inicial (para restauración)
const initialSrc = fullImage.src; 
const initialAlt = fullImage.alt;
const initialCaption = caption.textContent;


// 4. Bucle para construir las miniaturas dinámicamente y asignar eventos
// Usamos forEach para iterar sobre el Array 'imageGalleryData'
imageGalleryData.forEach(imageData => {
    // A. Crear los elementos HTML (nodos)
    const listItem = document.createElement('li');
    const thumbImage = document.createElement('img');

    // B. Asignar propiedades y data-attributes (usando los datos del Array)
    thumbImage.className = 'thumbnail';
    thumbImage.src = imageData.thumbUrl;
    thumbImage.alt = imageData.altText;
    thumbImage.setAttribute('data-full-size', imageData.fullUrl);
    thumbImage.setAttribute('data-description', imageData.description);
    thumbImage.setAttribute('tabindex', '0'); // Mantenemos la accesibilidad

    // C. Ensamblar los nodos
    listItem.appendChild(thumbImage);
    imageList.appendChild(listItem);

    
    // D. Asignar Event Listeners (al elemento de imagen recién creado)
    thumbImage.addEventListener('mouseover', swapImage);
    thumbImage.addEventListener('mouseout', restoreImage);
    
    // Añadimos la función keyup para accesibilidad por teclado (Enter)
    thumbImage.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            swapImage(event);
        }
    });
});


// 5. Funciones de Evento (Iguales al Módulo 2, pero ahora manejan nodos creados por JS)
function swapImage(event) {
    const newSrc = event.target.getAttribute('data-full-size');
    const newDescription = event.target.getAttribute('data-description');
    
    fullImage.src = newSrc;
    fullImage.alt = newDescription;
    caption.textContent = newDescription;
}

function restoreImage() {
    fullImage.src = initialSrc;
    fullImage.alt = initialAlt;
    caption.textContent = initialCaption;
}