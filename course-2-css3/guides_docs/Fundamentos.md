# 📚 Fundamentos Esenciales de CSS3

Este resumen abarca los **conceptos centrales de CSS3**, incluyendo la **cascada**, la **especificidad**, el **modelo de caja** y las **mejores prácticas de codificación**.

---

## 1. La Cascada y la Especificidad

La **Cascada** es el algoritmo de CSS que resuelve los conflictos de estilo cuando múltiples reglas se aplican al mismo elemento.  
La **Especificidad** es la puntuación que determina qué selector es el más relevante y, por lo tanto, el que prevalece.

### A. Prioridad de Estilos (De Mayor a Menor Especificidad)

| Nivel | Tipo de Estilo | Ejemplo | Descripción |
|:------|:----------------|:--------|:-------------|
| 1️⃣ | **Estilos en línea** | `<p style="color: red;">` | Tienen la máxima especificidad. Anulan casi todas las demás reglas. |
| 2️⃣ | **Selectores de ID** | `#menu` | Alta prioridad. |
| 3️⃣ | **Selectores de Clase, Atributo y Pseudo-Clase** | `.nav`, `[type="text"]`, `:hover` | Nivel medio de prioridad. |
| 4️⃣ | **Selectores de Tipo y Pseudo-Elementos** | `p`, `h1`, `::first-letter` | Baja prioridad. |
| 5️⃣ | **Estilos del Navegador (User Agent)** | *Por defecto* | Son los estilos predefinidos por el navegador (ej: color azul en enlaces no visitados). |

### B. Reglas de Desempate

Cuando dos reglas tienen **la misma especificidad**, el navegador aplica la que **aparece más tarde** en el código.

> 💡 *Ejemplo:*  
> Si defines una regla `body { color: blue; }` en una hoja externa y luego en un bloque `<style>` defines otra idéntica, **la segunda** (la última procesada) será la que se aplique.

---

## 2. Sintaxis, Vínculos y Referencias

### A. Estructura de una Regla CSS

Toda regla sigue la forma:

```css
selector {
  propiedad: valor;
  propiedad: valor;
}
```

- Cada declaración finaliza con ;

- Un selector puede tener múltiples declaraciones dentro de las llaves {}.
---

### B. Formatos de Color

CSS3 permite múltiples formatos para definir colores:

| **Formato**        | **Ejemplo**                              | **Descripción**                                                      |
|--------------------|------------------------------------------|----------------------------------------------------------------------|
| Nombre de color    | `red`, `blue`, `green`                   | Palabras clave simples.                                              |
| Hexadecimal        | `#FF0000`                                | Código de color RGB en base 16.                                      |
| RGB / RGBA         | `rgb(255, 0, 0)` / `rgba(255, 0, 0, 0.5)`| Valores decimales entre 0 y 255; `rgba()` incluye un canal de alfa (transparencia). |

---

### C. Vínculo a una Hoja de Estilo Externa

La forma correcta de enlazar un archivo CSS a tu HTML es usando la etiqueta `<link>` dentro de la sección `<head>`.

**Ejemplo práctico:**

```html
<link rel="stylesheet" href="css/style.css">
```

- Aquí el archivo style.css está dentro de la subcarpeta /css/.

---

## 3. El Modelo de Caja y la Propiedad `display`

La propiedad `display` determina cómo un elemento participa en el flujo del documento.

### A. Elementos de Bloque (`display: block`)

| **Característica** | **Descripción** |
|---------------------|-----------------|
| **Comportamiento**  | Ocupan el 100% del ancho disponible. |
| **Flujo**           | Comienzan en una nueva línea. |
| **Ejemplos**        | `<div>`, `<p>`, `<h1>` |

### B. Elementos en Línea (`display: inline`)

| **Característica** | **Descripción** |
|---------------------|-----------------|
| **Comportamiento**  | Solo ocupan el ancho de su contenido. |
| **Flujo**           | Se alinean uno junto a otro en la misma línea. |
| **Ejemplos**        | `<a>`, `<span>` |

---

## 4. Tipografía y Buenas Prácticas

### A. Mecanismo de Respaldo de Fuentes (`font-family`)

Las fuentes deben declararse en orden de preferencia:

```css
font-family: Arial, Helvetica, sans-serif;
```

- Si una fuente no está disponible, el navegador usa la siguiente en la lista.

- El último valor (por ejemplo sans-serif) es la familia genérica de respaldo.

---

### B. Alineación de Contenido

Para centrar texto dentro de un elemento de bloque se usa:

```css
text-align: center;
```
---

### C. Accesibilidad y Semántica

La mejor forma de indicar **importancia** o **énfasis** en el texto es mediante etiquetas semánticas de HTML, como `<strong>` o `<em>`.

Evita depender solo del **color** o **tamaño**, ya que los lectores de pantalla no interpretan esos estilos visuales.

---

### D. Depuración y Herramientas del Desarrollador

La herramienta **Inspeccionar elemento** (DevTools del navegador) es esencial para:

- Ver en tiempo real qué reglas CSS se aplican a cada elemento.  
- Modificar estilos directamente.  
- Analizar qué reglas están siendo **anuladas o sobrescritas**.  



