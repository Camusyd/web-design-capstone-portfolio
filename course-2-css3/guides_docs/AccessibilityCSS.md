# ♿ Accesibilidad con CSS

CSS juega un papel vital en la accesibilidad (A11y) al garantizar que la interfaz sea utilizable para todos, incluidos aquellos que utilizan tecnologías de asistencia.

## 1. Enfoque y Navegación por Teclado (`:focus`)

El uso de la pseudo-clase `:focus` es fundamental para que los usuarios de teclado puedan navegar.

* **Enlace "Saltar al Contenido Principal" (Skip Link):**
    * **Propósito:** Permite a los usuarios de teclado saltar el bloque de navegación repetitivo directamente al contenido principal.
    * **Implementación CSS:** Se oculta visualmente el enlace por defecto, pero se hace visible usando **`:focus`** para la navegación por teclado.

* **Regla de Oro:** Nunca elimines completamente el contorno de enfoque predeterminado (`outline: none;`) en elementos interactivos sin proporcionar un indicador visual de enfoque alternativo.

## 2. Contraste de Color y Legibilidad

* **Requisito WAVE/WCAG:** El contraste de color entre el texto y el fondo debe ser suficiente para que las personas con baja visión o daltonismo puedan leer el contenido.
* **Verificación:** Utiliza herramientas como el **validador WAVE** para verificar que el contraste cumpla con los estándares WCAG 2.1 (mínimo AA).

## 3. Ocultar Elementos de Forma Accesible

Si necesitas ocultar visualmente un elemento sin eliminarlo para los lectores de pantalla (por ejemplo, para proporcionar contexto adicional), utiliza técnicas que solo oculten el elemento de la vista, no del DOM:

```css
.sr-only { /* Ejemplo de clase */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}