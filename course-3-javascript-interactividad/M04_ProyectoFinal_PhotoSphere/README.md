# 🚀 Módulo 4: Proyecto Final PhotoSphere (Galería Accesible)

## 🎯 Objetivo de la Tarea

El objetivo de esta semana fue integrar todos los conocimientos del curso (Arrays, Bucles, DOM y Eventos) y aplicar el principio fundamental de **Accesibilidad (A11y)**. La galería final es completamente funcional utilizando el ratón y el teclado.

Este módulo cumple con el requisito del **Proyecto Final: Galería de Fotos Interactiva con Accesibilidad por Teclado**.

---

## 🛠️ Contenido de la Carpeta

| Archivo | Descripción | Rol Principal |
| :--- | :--- | :--- |
| **`index.html`** | Estructura final y semántica. Incluye el enlace **"Saltar al Contenido Principal"** (`.skip-link`) para mejorar la navegación de teclado y atributos **ARIA**. | Estructura HTML y Accesibilidad. |
| **`style.css`** | Estilos avanzados. Incluye CSS para la visibilidad del `skip-link` al enfocar y la implementación del efecto de **transición suave** (fade) con las clases `.fade-in` y `.fade-out`. | Presentación y Usabilidad. |
| **`final_gallery.js`** | **Lógica Final.** Contiene la lógica de bucle para construir la galería y el *event listener* para el evento **`click`** y **`keyup`** (Enter/Espacio) para la accesibilidad del teclado. | Interactividad JS (A11y y Transición). |
| **`M04_ProyectoFinal.md`** | **Documentación de Entrega.** Análisis detallado de la implementación de la accesibilidad, la transición visual y la refactorización de los eventos. | Documentación. |

---

## 💡 Innovaciones Clave del Proyecto

El proyecto **PhotoSphere** incorpora las siguientes características clave de la web moderna:

### 1. Sistema de Transición Controlada

El cambio de imagen principal se realiza en tres pasos controlados, utilizando una combinación de CSS (`transition`) y JavaScript (`setTimeout`):

1.  **`fade-out`**: Oculta la imagen actual.
2.  **Cambio de `src`**: Se actualiza la URL y el texto `alt` **mientras la imagen está oculta**.
3.  **`fade-in`**: Muestra la nueva imagen con una transición suave.

### 2. Accesibilidad Prioritaria (A11y)

* **Navegación por Teclado:** Las miniaturas son navegables usando la tecla **Tab** (`tabindex="0"`) y se pueden seleccionar usando las teclas **Enter** o **Espacio** (`keyup`).
* **Enlace de Salto:** El enlace invisible **"Saltar al Contenido Principal"** (`.skip-link`) permite a los usuarios de tecnología asistida evitar la tediosa navegación por todas las miniaturas al cargar la página.