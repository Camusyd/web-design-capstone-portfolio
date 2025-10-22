# M05: Proyecto Final - Diseño Responsivo y Accesibilidad

## 🎯 Objetivo
El objetivo de este proyecto final fue construir un sitio web **responsivo** que se adapta no solo al **tamaño de la pantalla (Mobile-First)** sino también a las **preferencias de accesibilidad del usuario** (Movimiento y Esquema de Color).

---

## 🚀 Solución Implementada: Mobile-First con CSS Grid
Se utilizó un enfoque **Mobile-First**, donde el CSS base establece la vista más simple (móvil).  
Las transiciones a **Tableta** y **Escritorio** se manejan mediante **Media Queries con `min-width`**, que agregan o sobrescriben reglas de forma eficiente para evitar repetir código.

---

### 1. Vista Móvil (Base: `< 772px`)

| Característica | Propiedad CSS | Resultado |
|-----------------|-----------------------------|----------------|
| **Layout** | `grid-template-columns: 1fr;` | Cuadrícula de 1 columna (**Requisito**) |
| **Espaciado** | `gap: 10px;` | Espacio de **10px** entre filas y columnas (**Requisito**) |
| **Imágenes** | `width: 100%; height: auto;` | Imágenes ocupan el ancho total de la columna |

---

### 2. Vista Tableta (Media Query: `≥ 772px`)
Esta consulta se dispara a **772px** para cambiar el layout a dos columnas.

| Requisito | Propiedad CSS | Detalle |
|------------|-----------------------------|----------------|
| **Layout** | `grid-template-columns: repeat(2, 1fr);` | Cuadrícula de 2 columnas (**Requisito**) |
| **Forma** | `figure { border-radius: 50%; overflow: hidden; }` | Crea una forma circular para las figuras |
| **Última Figura** | `.grid figure:last-of-type { grid-column: 1 / -1; }` | La última figura se extiende para ocupar las dos columnas |
| **Tamaño Img** | `figure img { min-height: 250px; }` | Asegura que la imagen tenga una altura mínima para formar el círculo de manera legible |

---

### 3. Vista Pantalla Grande (Media Query: `≥ 992px`)
Esta consulta se dispara a **992px** (Escritorio). Mantiene la cuadrícula de 2 columnas.

| Requisito | Propiedad CSS | Detalle |
|------------|-----------------------------|----------------|
| **Forma** | `figure { border-radius: 10px; overflow: visible; }` | Elimina la forma circular, restaurando los bordes ligeramente redondeados (cuadrados) |
| **Extensión** | `.grid figure:nth-child(3n) { grid-column: 1 / -1; }` | Se utiliza el pseudo-selector `:nth-child(3n)` para hacer que cada tercera figura ocupe ambas columnas |

---

## ♿ Media Queries de Accesibilidad
Se implementaron dos consultas de medios **no relacionadas con el tamaño de la pantalla** para mejorar la experiencia del usuario según sus preferencias del sistema operativo.

---

### 4. `prefers-reduced-motion`

| Requisito | Propiedad CSS | Propósito |
|------------|-----------------------------|----------------|
| **Desplazamiento** | `html { scroll-behavior: auto; }` | Elimina el desplazamiento suave (smooth scrolling) para cumplir con el requisito de reducir el movimiento visual y prevenir mareos en usuarios sensibles |
| **Transiciones** | `transition: none !important;` | Desactiva todas las transiciones animadas |

---

### 5. `prefers-color-scheme: dark`
Asumiendo que el esquema de colores por defecto es claro, esta media query aplica el **Modo Oscuro automáticamente** si el sistema operativo del usuario lo tiene activado.

| Requisito | Propiedad CSS | Detalle de la Solución |
|------------|-----------------------------|----------------|
| **Activación** | `@media (prefers-color-scheme: dark) { ... }` | Se dispara automáticamente si el sistema lo prefiere |
| **Fondo/Texto** | `background-color: #121212; color: #e0e0e0;` | El fondo principal y el texto se ajustan a un tema oscuro |
| **Figuras** | `background-color: #242424; color: #fce38a; border-color: #000000;` | El fondo de las figuras, el texto de las leyendas (color amarillento/cálido) y el borde negro se ajustan según los requisitos |
| **Toggle** | `body:not(.dark-mode) { ... }` | Se usa la negación `:not(.dark-mode)` para asegurar que el Modo Oscuro Automático **no se aplique** si el usuario ya eligió explícitamente un modo a través del botón manual de JavaScript |

---

## 💻 Ejemplo de Código (Fragmento)

```css
/* Base: vista móvil */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

/* Tableta (>= 772px) */
@media screen and (min-width: 772px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  figure {
    border-radius: 50%;
    overflow: hidden;
  }
  .grid figure:last-of-type {
    grid-column: 1 / -1;
  }
  figure img {
    min-height: 250px;
  }
}

/* Escritorio (>= 992px) */
@media screen and (min-width: 992px) {
  figure {
    border-radius: 10px;
    overflow: visible;
  }
  .grid figure:nth-child(3n) {
    grid-column: 1 / -1;
  }
}

/* Accesibilidad: reduce motion */
@media (prefers-reduced-motion) {
  html {
    scroll-behavior: auto;
  }
  * {
    transition: none !important;
  }
}

/* Accesibilidad: modo oscuro */
@media (prefers-color-scheme: dark) {
  body:not(.dark-mode) {
    background-color: #121212;
    color: #e0e0e0;
  }
  body:not(.dark-mode) figure {
    background-color: #242424;
    color: #fce38a;
    border-color: #000000;
  }
}
