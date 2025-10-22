# ☕ Documentación del Proyecto: "Aromas del Mundo"

Este documento detalla la **implementación técnica** y el **cumplimiento de los requisitos** de la tarea de **CSS y accesibilidad** para el proyecto de sitio web **"Aromas del Mundo"**.  
El sitio utiliza una estructura de **tres páginas HTML separadas**, enlazadas a un **único archivo CSS externo**.



---

## 1. 📂 Estructura del Proyecto

El sitio está compuesto por tres archivos **HTML individuales** que comparten la misma navegación y estilos enlazados a un archivo `style.css` externo:

| **Archivo** | **Contenido Principal** | **Maquetación Avanzada** |
|--------------|--------------------------|----------------------------|
| [`index.html`](./Task3/index.html) | Página de inicio y artículo principal. | **CSS Grid** (`.grid-container`) |
| [`drinks.html`](./Task3/drinks.html) | Lista de tres bebidas clave. | **Modelo de Caja** y `:nth-child` |
| [`gallery.html`](./Task3/gallery.html) | Galería de seis imágenes. | **Flexbox** (`.gallery-flex`) |
| [`style.css`](./Task3/style.css) | Contiene todas las reglas de estilo y maquetación. | — |

---

## ♿ Accesibilidad

Se implementó un enlace **"Saltar al contenido principal"** accesible mediante teclado.  
Por defecto permanece oculto, y al recibir foco se hace visible, permitiendo una navegación inclusiva y cumpliendo buenas prácticas de accesibilidad.

---

## 📐 Estilo y Maquetación

El diseño combina **CSS Grid**, **Flexbox** y el **modelo de caja**, con uniformidad visual y efectos interactivos:

- **Flexbox**: usado en la navegación y la galería de imágenes.  
- **CSS Grid**: estructura principal de la página de inicio.  
- **Modelo de caja**: aplicado a todas las imágenes con bordes, relleno y esquinas redondeadas.  
- **Selectores avanzados (`:nth-child`)**: generan patrones alternos y efectos visuales en listas e imágenes.  
- **Efectos hover**: los enlaces de navegación se agrandan y rotan ligeramente al pasar el cursor.

---

En conjunto, *Aromas del Mundo* demuestra un dominio claro de los fundamentos de **CSS3, accesibilidad web y diseño adaptable**.
