# 📄 Módulo 3: Arrays y Bucles (Análisis de la Tarea)

## Objetivos Cumplidos

* **Estructura de Datos:** Se implementó un **Array de Objetos** (`imageGalleryData`) para centralizar y organizar toda la información de la galería (URL de miniatura, URL completa, descripción).
* **Renderizado Dinámico:** Se utilizó el método **`.forEach()`** para iterar sobre el Array de datos y **construir dinámicamente** los elementos `<li>` e `<img>` en el DOM, insertándolos en el contenedor `#image-list`.
* **Mejora del Rendimiento:** Al centralizar los datos en JavaScript, el código es más fácil de mantener y escalar (añadir una imagen es tan simple como añadir un nuevo objeto al Array).

## 💡 Elementos Técnicos Clave

### 1. El Array de Objetos

El uso de un Array de Objetos es fundamental para manejar conjuntos de datos complejos. Cada objeto en el Array representa una imagen completa con sus propiedades:

```javascript
const imageGalleryData = [
    { thumbUrl: "...", fullUrl: "...", description: "..." },
    // ... más imágenes
];
```
---

### 2. Creación Dinámica de Nodos

La lógica en el bucle ```forEach``` utiliza los siguientes métodos clave del DOM para construir el HTML, manteniendo las buenas prácticas:

- ```document.createElement('tag'):``` Crea el nodo ```li``` y el nodo ```img```.

- ```.setAttribute()``` / ```.propiedad:``` Asigna los ```src, alt, data-attributes y tabindex``` a la imagen a partir de los datos del Array.

- ```contenedor.appendChild(nodo):``` Inserta el nodo final en la estructura HTML visible.

### 3. Asignación de Eventos en el Bucle
Los ```Event Listeners (mouseover, mouseout, keyup)``` se asignan dentro del bucle inmediatamente después de crear cada elemento ```<img>.``` Esto garantiza que los manejadores de eventos se conecten a cada miniatura recién creada, manteniendo la interactividad.