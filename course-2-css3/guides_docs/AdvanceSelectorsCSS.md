# 📚 Conceptos Fundamentales de CSS: Guía de Estudio  
**Archivo:** `AdvanceSelectrosCSS.md`  

Este documento resume los **principios esenciales de CSS**, la jerarquía de estilos y las propiedades de maquetación abordadas en el cuestionario del curso.

---

## 1. 🎯 Fundamentos de Selectores y Sintaxis

### Selectores de Clase (.), Elemento (tag) e ID (#)

| Tipo de Selector | Uso | Sintaxis CSS | Especificidad |
|------------------|------|--------------|----------------|
| **Elemento (Etiqueta)** | Da estilo a todas las instancias de una etiqueta HTML (ej. `<p>`, `<h1>`). | `p { ... }` | Baja (0,0,0,1) |
| **Clase (.nombre)** | Da estilo a todos los elementos con el atributo `class` correspondiente. | `.clase-nombre { ... }` | Media (0,0,1,0) |
| **ID (#nombre)** | Da estilo a un elemento único con el atributo `id` correspondiente. | `#id-nombre { ... }` | Alta (0,1,0,0) |

> ⚠️ **Importante:** Los selectores `.clase` y `#id` distinguen entre mayúsculas y minúsculas.  
> Error común: usar `.` antes de un selector de elemento (ej. `.body` ≠ `body`).

---

## 2. 🌿 Selectores Descendentes

Los **selectores descendentes** aplican estilos según la posición jerárquica de los elementos dentro del HTML.

| Selector | Significado | Generalidad |
|-----------|--------------|-------------|
| `nav a` | Aplica a todos los `<a>` dentro de `<nav>`, sin importar la profundidad. | Más general |
| `nav > a` | Solo aplica a los `<a>` que son **hijos directos** de `<nav>`. | Más restrictivo |

---

## 3. ⚖️ La Cascada y la Especificidad

La **Cascada** es el mecanismo de prioridad de CSS. Determina qué regla se aplica cuando varias afectan al mismo elemento.

1. **Estilos en línea (Inline):** tienen la prioridad más alta.  
2. **Especificidad:** `ID > Clase > Etiqueta`.  
3. **Orden de origen:** la regla definida **última** en la hoja de estilos gana si hay empate.

> 🧩 *Ejemplo:* Si un párrafo tiene `.rojo` y `.azul`, el color será azul (última regla definida). Si además tiene un `id`, el estilo del ID prevalece.

---

## 4. 🧱 Propiedades Comunes de Estilo

| Propiedad | Función | Valor común / Uso |
|------------|----------|--------------------|
| `text-decoration` | Controla líneas en el texto (subrayado, tachado). | `none` (quita el subrayado de los enlaces). |
| `font-size` | Controla el tamaño del texto. | Valores en `px`, `em`, `rem`. |
| `list-style-type` | Define los marcadores de lista. | `none` para eliminarlos en `<ul>` o `<ol>`. |

---

## 5. 🧩 Maquetación Avanzada (Layout)

### CSS Grid  
Sistema **bidimensional** (filas y columnas).  
- Propiedad clave: `grid-template-columns` define número y tamaño de columnas.  
- Ideal para estructuras complejas de página.

### CSS Flexbox  
Sistema **unidimensional** (fila o columna).  
- Propiedad clave: `flex-wrap: wrap;` permite que los elementos pasen a otra línea.  
- Ideal para menús, galerías y alineaciones dinámicas.

---

## 6. 🔗 El Concepto de Anclaje (ID y Enlaces)

El símbolo `#` en HTML tiene dos usos:

- **En CSS:** define un selector de ID → `#mi-id { ... }`
- **En HTML:** crea un enlace interno → `<a href="#mi-seccion">Ir a la sección</a>`  
  que lleva al elemento con `id="mi-seccion"`.

---

## 7. 🧠 Hojas de Estilo por Defecto del Navegador

Todos los navegadores aplican una **User Agent Stylesheet**, una hoja de estilos predeterminada.  
Ejemplos:
- Enlaces azules y subrayados.  
- Márgenes automáticos en `<body>` y `<h1>`.  
- Texto negro por defecto.  

> Por ello, es común usar un *reset CSS* o *normalize.css* para unificar la base visual entre navegadores.

---
