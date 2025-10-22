# 🎨 Resumen del Proyecto: Introducción a CSS3

Este documento resume el proceso y los requisitos conceptuales cumplidos para la tarea de **CSS3** de la **Universidad de Míchigan**, cuyo objetivo era estilizar un sitio web preexistente utilizando una **única hoja de estilos** y asegurando la **accesibilidad**.

📂 [Ir a la carpeta del proyecto `task1`](./task1)

---

## 1. Configuración y Enlace de Archivos

La base del proyecto fue establecer una arquitectura correcta, separando el contenido del estilo.

- **Creación y Unificación:**  
  Se creó un solo archivo llamado `style.css` para centralizar todos los estilos.

- **Vínculo Crucial:**  
  Se aseguró que la etiqueta `<link rel="stylesheet" href="style.css">` fuera incluida en la sección `<head>` de todas las páginas HTML (`index.html`, `neighborhood.html`, y `parks.html`) para que el estilo se aplicara a todo el sitio.

- **Alojamiento (Replit):**  
  Para obtener la URL de entrega, el proyecto fue ejecutado (botón **“Run”**) en **Replit**, y la dirección pública fue copiada desde la vista previa abierta en una nueva pestaña.

---

## 2. Cumplimiento de Requisitos CSS3

Se aplicaron reglas a todas las etiquetas estructurales y de contenido solicitadas, enfocándose en la **sintaxis** (`selector { propiedad: valor; }`) y el **contraste de color**.

### A. Estructura y Color (Contraste)

Se aplicó la propiedad `background-color` a las siguientes etiquetas, eligiendo una paleta **oscura para los límites** y **clara para el contenido**, lo que garantiza el contraste (requisito **WAVE**):

| **Etiqueta** | **Propiedad Clave** | **Estilo Aplicado (Concepto)** |
|---------------|---------------------|--------------------------------|
| `body` | `font-family`, `font-size` | Define el tipo y tamaño base de la fuente para todo el documento. |
| `header` | `background-color` | Color oscuro (ej. azul marino) con texto blanco para asegurar contraste. |
| `nav` | `background-color` | Color oscuro, ligeramente distinto al del header, para la barra de navegación. |
| `main` | `background-color`, `font-size` | Fondo claro o blanco para mejorar la legibilidad del contenido. |
| `footer` | `background-color` | Mismo color oscuro del header, creando un cierre visual uniforme. |

---

### B. Modelo de Caja y Tipografía

- **Listas (`li`):**  
  Se utilizó `display: inline-block;` en la lista de navegación.  
  Esto permite que los elementos se muestren en línea (como `inline`) pero acepten propiedades de bloque (`width`, `height`), cumpliendo con los requisitos del diseño.

- **Título (`h1`):**  
  Se aplicó `text-align: center;` para centrar el título, usando además un color de acento fuerte para destacarlo visualmente.

- **Párrafos (`p`):**  
  Se ajustó `line-height: 1.6;` para aumentar el espaciado vertical entre líneas, mejorando la legibilidad del texto largo.

---

## 3. Criterios de Calificación Final

La tarea se centró en dos criterios fundamentales, esenciales para superar la revisión por pares:

- **Sintaxis Correcta:**  
  Se verificó que cada regla incluyera un **selector**, una **propiedad** y un **valor**, y que todas las declaraciones terminaran con un **punto y coma (;)**.

- **Accesibilidad:**  
  Se utilizó el **validador WAVE (WebAIM)** para confirmar que las combinaciones de **texto** y **fondo** tuvieran suficiente contraste, garantizando la legibilidad y eliminando errores de accesibilidad.

---
