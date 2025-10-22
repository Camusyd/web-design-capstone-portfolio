# 🧩 Tarea 2: Refactorización de Estilos – "Aromas del Mundo"

La **Tarea 2** consistió en refactorizar y optimizar los estilos del proyecto, aplicando mejoras de accesibilidad y selectores CSS más específicos, partiendo de la estructura creada en la Tarea 1.

---

## ♿ Accesibilidad

Se implementó el enlace **“Saltar al contenido principal”** en todas las páginas para cumplir con los requisitos de accesibilidad:

- **En HTML:**  
  Se añadió un enlace `<a href="#main_content">` al inicio del cuerpo y se asignó `id="main_content"` al elemento `<main>` en cada página.  
- **En CSS:**  
  Se utilizó un **selector de atributo** junto con la pseudo-clase `:focus` para mantener el enlace oculto de forma predeterminada y hacerlo visible únicamente al recibir foco (tecla **Tab**).

---

## 🎨 Modificaciones y Aplicaciones de Selectores CSS

Se actualizaron reglas en `style.css` para mejorar la maquetación, especificidad y control visual de los elementos.

### A. Estructura y Navegación

- Se **comentó el estilo base de `li`** para evitar interferencias con la navegación.  
- En la **barra de navegación (`nav`)**, se aplicó `display: inline-block` y un **ancho del 80%** para un diseño más limpio y centrado.  

### B. Selectores Descendentes y Grid

- Se usaron **selectores descendentes** para aplicar estilos únicamente donde correspondía:  
  - En `nav img`, las imágenes del menú obtuvieron un ancho del **10%**.  
  - En `.grid-container img`, las imágenes dentro del grid se ajustaron al **100%** de su celda.  
- La clase `.grid-container` fue redefinida con **display: grid** de dos columnas al **40%** cada una.  
- Se ajustaron propiedades de **alineación y espaciado** (`justify-content`, `align-items`, `row-gap`) para mejorar la distribución visual.

### C. Flexbox en Galería

- La clase `.gallery-flex` se configuró con **display: flex**.  
- Se aplicaron `flex-wrap` y `justify-content` para permitir la reorganización de imágenes en varias líneas y mantener una presentación equilibrada y responsiva.

---

## ✅ Validación y Revisión Final

El proyecto fue revisado exhaustivamente para asegurar calidad técnica y cumplimiento de estándares:

- **Validación W3C:** Comprobación de la sintaxis CSS y HTML.  
- **Validación de Accesibilidad (WAVE):** Verificación de contraste, estructura semántica y navegación por teclado.  
- **Verificación de Enlaces:** Confirmación del enlace correcto del archivo `style.css` en las tres páginas (`index.html`, `drinks.html`, `gallery.html`).

---

Con esta refactorización, *Aromas del Mundo* alcanza una estructura CSS más clara, mantenible y accesible, demostrando dominio en **selectores avanzados, Flexbox y CSS Grid**.
