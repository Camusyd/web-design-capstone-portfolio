# 🚀 HTML5: Guía Completa de Conceptos Fundamentales

HTML5 (HyperText Markup Language 5) es el lenguaje de marcado fundamental para la Web.  
Su principal objetivo es proporcionar una estructura semántica clara para el contenido, separando la **estructura (HTML)** de la **presentación (CSS)**.

---

## 📚 Índice

1. [I. Semántica y Estructura del Documento](#i-semántica-y-estructura-del-documento)
   - [A. La Importancia de la Semántica](#a-la-importancia-de-la-semántica)
   - [B. Estructura Básica](#b-estructura-básica)
2. [II. Modelos de Contenido: Bloque vs. Línea](#ii-modelos-de-contenido-bloque-vs-línea)
3. [III. Listas, Tablas y Estructuras de Datos](#iii-listas-tablas-y-estructuras-de-datos)
   - [A. Listas Estándar](#a-listas-estándar)
   - [B. Listas Anidadas](#b-listas-anidadas)
   - [C. Listas de Definición](#c-listas-de-definición)
   - [D. Tablas](#d-tablas)
4. [IV. Enlaces, Imágenes y Accesibilidad](#iv-enlaces-imágenes-y-accesibilidad)
   - [A. Enlaces `<a>`](#a-enlaces-a)
   - [B. Imágenes `<img>`](#b-imágenes-img)
   - [C. Iconos y Accesibilidad (ARIA)](#c-iconos-y-accesibilidad-aria)
5. [✅ Conclusión](#-conclusión)

---

---

## I. Semántica y Estructura del Documento

### A. La Importancia de la Semántica

La **semántica** es la práctica de usar el elemento HTML que mejor describe el significado y la función del contenido.

**Definición:**  
El código semántico describe el valor del contenido, independientemente de su estilo.  
Por ejemplo, en lugar de usar un simple `<div>`, se usa `<nav>` para indicar que el contenido es la navegación principal.

**Beneficios:**
- Mejora la **accesibilidad** (para lectores de pantalla).  
- Mejora el **SEO** (Optimización para Motores de Búsqueda), ayudando a los motores a entender la jerarquía y propósito de cada sección.

**Etiquetas semánticas comunes:**
```html
<header>, <nav>, <main>, <article>, <section>, <footer> 
    
```
---
### B. Estructura Básica

Todo documento HTML correctamente formado debe incluir: **tipo de documento** (`<!DOCTYPE html>`), **encabezado** (`<head>`), y **cuerpo** (`<body>`).

| Etiqueta | Función y Regla |
| :--- | :--- |
| **`<body>`** | Contiene **todo** el contenido que deseas que aparezca en la pantalla. |
| **`<h1>`** | Se utiliza para crear el **encabezado de nivel más alto** (más importante). Solo se recomienda uno por página. |
| **Comentario** | La sintaxis correcta es: **``**. El navegador ignora este contenido. |


---

## II. Modelos de Contenido: Bloque vs. Línea

Los elementos se clasifican según cómo se comportan y el espacio que ocupan en el flujo del documento.

| Tipo de Elemento | Comportamiento | Ejemplos Comunes |
| :--- | :--- | :--- |
| **Nivel de Bloque** | Comienzan en una **nueva línea** y ocupan **todo el ancho** disponible del contenedor. | `<div>`, `<h1>`-`<h6>`, `<p>`, `<ul>`, `<ol>`. |
| **Nivel de Línea (*Inline*)** | **No** comienzan en una nueva línea y solo ocupan el **espacio estricto** de su contenido. | `<span>`, `<a>`, `<img>`, `<strong>`. |

* El **`<div>`** es el contenedor de **nivel de bloque** más común.
* El **`<span>`** es el contenedor de **nivel de línea** más común.
* **Salto de Línea:** La etiqueta **`<br>`** representa un salto de línea (nueva línea).

---

## III. Listas, Tablas y Estructuras de Datos

### A. Listas Estándar

Los elementos `<ul>` y `<ol>` **solo pueden contener directamente** elementos `<li>` (Lista de Ítem).

| Etiqueta | Significado | Función | Atributos Notables |
| :--- | :--- | :--- | :--- |
| **`<ol>`** | *Ordered List* (Lista Ordenada). | Crea listas **numeradas**. | `start`, `reversed`. |
| **`<ul>`** | *Unordered List* (Lista Desordenada). | Crea listas con **viñetas**. | No usa `start` ni `reversed`. |
| **`<li>`** | *List Item*. | El elemento individual dentro de la lista. | **`value`** (en `<ol>`: cambia el número del ítem, afectando a los siguientes). |

## B. Listas Anidadas

Para anidar una lista, la lista secundaria (`<ul>` o `<ol>`) debe estar contenida dentro del elemento `<li>` de la lista principal, antes de cerrarlo.

**Estructura Correcta:**

```html
<ol>
  <li>Item principal</li>
  <li>Elemento Contenedor (Ej: Fruit)
    <ul>
      <li>Sub-ítem A</li>
    </ul>
  </li>
</ol>

```
---

## C. Listas de Definición

Se utilizan para estructuras de datos **clave-valor**.

- `<dl>` (**Definition List**): Contenedor principal.  
- `<dt>` (**Definition Term**): Término que se define.  
- `<dd>` (**Definition Description**): Descripción o definición del término.  

**Ejemplo:**

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para estructurar el contenido web.</dd>

  <dt>CSS</dt>
  <dd>Lenguaje para definir estilos visuales en una página web.</dd>

  <dt>JavaScript</dt>
  <dd>Lenguaje de programación que permite la interactividad en el navegador.</dd>
</dl>

```
---

### D. Tablas

La estructura semántica de una tabla se organiza con los siguientes elementos:

| Tipo | Elementos | Función |
| :--- | :--- | :--- |
| **Estructura** | `<caption>`, `<thead>`, `<tbody>`, `<tfoot>` | Definen el título, encabezado, cuerpo y pie de la tabla, respectivamente. |
| **Celdas** | `<th>` (Table Header) | Define una **celda de encabezado** (usada típicamente en `<thead>`). |
| **Celdas** | `<td>` (Table Data) | Define una **celda de datos** regular (usada típicamente en `<tbody>`). |

---

## IV. Enlaces, Imágenes y Accesibilidad

### A. Enlaces `<a>`

| Concepto | Regla y Función |
| :--- | :--- |
| **Etiqueta** | `<a>` (*Anchor*). Se utiliza para crear hipervínculos. |
| **`target="_blank"`** | Abre el enlace en una **nueva pestaña o ventana**. |
| **Enlaces de Correo** | Se usa `href="mailto:direccion@correo.com?subject=Hola&body=Cómo%20estás"`. Los espacios se codifican como **`%20`**. |

### B. Imágenes `<img>`

| Concepto | Regla y Función |
| :--- | :--- |
| **Atributo `src`** | **Necesario** para especificar la ruta de origen de la imagen. |
| **Texto Alternativo (`alt`)** | Debe describir la **apariencia o función** de la imagen para la accesibilidad. |
| **Texto Nulo** | Se utiliza **`alt=""`** (vacío) cuando la imagen es **puramente decorativa** (para que los lectores de pantalla la ignoren). |

### C. Iconos y Accesibilidad (ARIA)

Para asegurar la accesibilidad en iconos sin texto visible (ej: Font Awesome) usados como enlaces:

* Se debe utilizar el atributo **`aria-label`** en el elemento **`<a>`** (enlace) para proporcionar una descripción al lector de pantalla.

**Ejemplo de Mejor Práctica:**
```html
<a href="[https://twitter.com/](https://twitter.com/)" aria-label="Twitter"> <i class="fa fa-twitter"></i></a>
```
---

### C. Iconos y Accesibilidad (ARIA)

Para asegurar la accesibilidad en iconos sin texto (ej: `<i>` de Font Awesome) usados como enlaces:

* Se debe utilizar el atributo **`aria-label`** en el elemento **`<a>`** contenedor.

**Mejor Práctica:**

```html
<a href="[https://twitter.com/](https://twitter.com/)" aria-label="Twitter"> <i class="fa fa-twitter"></i></a>
```
---

## ✅ Conclusión

El dominio de estos conceptos de HTML5 asegura que el contenido no solo se vea bien, sino que esté **estructurado semánticamente** para garantizar la **accesibilidad** y la **indexación (SEO)** por parte de los motores de búsqueda.


