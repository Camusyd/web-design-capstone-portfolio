# 📄 Módulo 4: Proyecto Final PhotoSphere (Análisis de la Tarea)

## Objetivos Cumplidos

* **Accesibilidad por Teclado:** Implementación del `tabindex="0"` en todas las miniaturas y manejo de los eventos `click` y `keyup` (teclas **Enter** y **Espacio**) para la interacción.
* **Transición Visual Única:** Uso de CSS (propiedad `transition: opacity`) y manipulación de clases JS (`.fade-out`, `.fade-in`) para crear un efecto de desvanecimiento suave al cambiar de imagen.
* **Estructura A11y:** Inclusión de un enlace **"Saltar al Contenido Principal"** (`.skip-link`) y el uso de atributos **ARIA** (`role="group"`, `aria-label`) para una navegación robusta con lectores de pantalla.
* **Refactorización a Click:** El evento `mouseover` fue reemplazado por `click`, mejorando la usabilidad y la accesibilidad en general.

## 💡 Elementos Técnicos Clave

### 1. Sistema de Transición (`setTimeout`)

Para lograr el efecto de *fade*, el script utiliza `setTimeout()`:
1.  **Añadir `fade-out`:** Oculta la imagen inmediatamente (establece `opacity: 0`).
2.  **`setTimeout`:** Permite que el navegador ejecute la transición CSS.
3.  **Cambio de Imagen:** Dentro del `setTimeout` (después de 400ms), se cambian los atributos `src` y `alt`.
4.  **Quitar `fade-out`:** El navegador restaura la imagen a `opacity: 1`, creando el efecto de *fade in*.

### 2. Accesibilidad A11y

* **`skip-link`**: Asegura que los usuarios de teclado puedan saltar la navegación repetitiva (`#miniaturas`).
* **`tabindex="0"`**: Permite que las miniaturas, que son elementos `<img>`, sean enfocables.
* **`keyup: Enter / Espacio`**: Asigna el evento de cambio de imagen a las teclas esperadas por los usuarios de tecnología asistida, asegurando que la galería sea completamente operable sin ratón.