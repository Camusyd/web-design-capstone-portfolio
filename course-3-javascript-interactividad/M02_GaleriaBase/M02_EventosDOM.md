# 📄 Módulo 2: Galería de Fotos Interactiva (Análisis de la Tarea)

## Objetivos Cumplidos

* **Manejo de Eventos de Ratón:** Implementación de `mouseover` y `mouseout` para cambiar el estado de la galería.
* **Manipulación Dinámica del DOM:** Se utiliza el Event Object (`event.target`) para obtener datos y manipular los atributos (`src`, `alt`, `textContent`) de otros elementos en la página.
* **Uso de Data Attributes:** Se emplean `data-full-size` y `data-description` para almacenar información crucial directamente en las miniaturas HTML.

## 💡 Elementos Técnicos Clave

### 1. Obtención de Elementos (`querySelectorAll`)
Se usa `document.querySelectorAll('.thumbnail')` para obtener una lista de todas las miniaturas. El método **`.forEach()`** se utiliza para iterar sobre esta lista y adjuntar un Event Listener a cada una de ellas de forma eficiente.

### 2. Swap y Restore (El "Hover")
* **`swapImage(event)`:** Utiliza `event.target` para acceder a la miniatura que disparó el evento. Luego, lee los atributos personalizados (`data-full-size`, `data-description`) y los aplica a la imagen principal (`#image`).
* **`restoreImage()`:** Es esencial para devolver la galería a su estado inicial, restaurando la URL y el texto original de la imagen principal.

### 3. Preparación para Accesibilidad
El HTML incluye `tabindex="0"` en las miniaturas, permitiendo que sean enfocables con el teclado. El script incluye una función de `keyup` para manejar la interacción de teclado, un concepto que será completado en el Módulo 4.