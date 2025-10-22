# ♿ Consultas de Medios para Accesibilidad (A11y)

Además del tamaño de pantalla, las consultas de medios pueden reaccionar a las **preferencias del usuario** definidas en la configuración de su sistema operativo o navegador. Esto mejora drásticamente la experiencia para usuarios con discapacidades visuales o cinéticas.

## 1. Preferencias de Esquema de Color

Permite a los desarrolladores ofrecer un diseño "Modo Oscuro" basado en si el usuario prefiere esquemas de color claros u oscuros en su sistema.

| Consulta | Descripción | Uso Típico |
| :--- | :--- | :--- |
| **`prefers-color-scheme: light`** | El usuario prefiere un fondo claro (valor por defecto). | |
| **`prefers-color-scheme: dark`** | El usuario prefiere un fondo oscuro. | Invertir colores (`background: #333`, `color: #fff`). |

**Ejemplo:**
```css
/* Estilos Base (Modo Claro) */
body { background: white; color: black; }

/* Sobrescribir al detectar preferencia Oscura */
@media (prefers-color-scheme: dark) {
    body {
        background: #121212; /* Fondo muy oscuro */
        color: #e0e0e0;      /* Texto claro */
    }
}
```
---

### 2. 🌀 Preferencias de Movimiento

Fundamental para usuarios con **sensibilidad al movimiento** (por ejemplo, mareos causados por animaciones o efectos *parallax*).

| Consulta | Descripción | Uso Típico |
|-----------|--------------|-------------|
| **prefers-reduced-motion: reduce** | El usuario ha indicado que prefiere la menor cantidad de movimiento posible. | Desactivar transiciones, animaciones complejas o efectos de paralaje. |

---

#### 💻 Ejemplo (CSS)

```css
/* Estilos Base (con transición) */
.caja {
    transition: all 0.5s ease-in-out;
}

/* Desactivar o simplificar la animación para usuarios sensibles */
@media (prefers-reduced-motion: reduce) {
    .caja {
        /* Desactivar la transición */
        transition: none; 
        /* Usar movimiento instantáneo si es necesario */
        animation: none;
    }
}
```
---

### 3. Otras Preferencias (Resumen)

- `prefers-contrast:` Reacciona a la preferencia del usuario por un mayor o menor contraste en la interfaz.
```css
@media (prefers-contrast: more) {
  body {
    background-color: black;
    color: white;
  }
}
```
---

- `orientation:` Permite aplicar estilos basados en si el dispositivo está en modo horizontal `(landscape)` o vertical `(portrait).`

```css
@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}
```
---

