# 🖼️ Módulo 2: Galería de Fotos Interactiva (Base de Eventos)

## 🎯 Objetivo de la Tarea

El objetivo de esta semana fue introducir la **interactividad con JavaScript** a través del manejo de eventos del ratón (`mouseover`, `mouseout`) y la manipulación dinámica del DOM para crear una galería de fotos funcional.

Este módulo cumple con el requisito de la "Galería fotográfica interactiva en JavaScript" (versión base).

---

## 🛠️ Contenido de la Carpeta

| Archivo | Descripción | Rol Principal |
| :--- | :--- | :--- |
| **`index.html`** | Estructura semántica de la galería. Contiene el visor (`#image`), el pie de foto (`#caption`) y la lista de miniaturas (`.thumbnail`). | Estructura HTML y semántica. |
| **`style.css`** | Estilos básicos para la galería, incluyendo un layout Flexbox simple para las miniaturas y estilos para el estado `:hover` y `:focus`. | Presentación y usabilidad. |
| **`gallery.js`** | **Lógica de la Galería.** Contiene los `Event Listeners` para `mouseover` y `mouseout`, y las funciones para obtener los datos (`data-attributes`) y cambiar la imagen principal. | Interactividad JS (DOM y Eventos). |
| **`M02_EventosDOM.md`** | **Documentación de Entrega.** Análisis detallado de cómo se implementaron los eventos y la justificación de las mejores prácticas (uso de `data-attributes`). | Documentación. |

---

## 💡 Elementos Clave de JavaScript

El script **`gallery.js`** demuestra los siguientes conceptos:

1.  **Selección de Múltiples Elementos:** Uso de `document.querySelectorAll('.thumbnail')` y el método `.forEach()` para asignar funcionalidad a cada miniatura.
2.  **Manejo de Eventos Dobles:** Implementación de `mouseover` para activar la previsualización y `mouseout` para restaurar el estado inicial.
3.  **Uso de `data-attributes`:** Se lee la URL de la imagen completa y la descripción (`data-full-size`, `data-description`) directamente desde el HTML de la miniatura para evitar tener que almacenar estos datos en JavaScript.
4.  **Preparación para Accesibilidad:** Se incluye la lógica inicial para la interacción con el teclado (`keyup` para la tecla `Enter`), que se completará en el proyecto final del Módulo 4.