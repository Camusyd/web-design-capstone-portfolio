# 📦 Modelo de Caja Avanzado

El Modelo de Caja de CSS describe cómo los elementos HTML se modelan como cajas rectangulares para diseño y maquetación, controlando la forma en que se aplican el padding, el borde y el margen.

## 1. Componentes del Modelo de Caja

El tamaño total de un elemento se compone de cuatro partes, de dentro hacia afuera:

1.  **Contenido (Content):** El área donde se muestra el texto o las imágenes. Controlado por `width` y `height`.
2.  **Relleno (Padding):** Espacio transparente entre el contenido y el borde.
3.  **Borde (Border):** La línea que envuelve el padding y el contenido.
4.  **Margen (Margin):** Espacio transparente **fuera** del borde, utilizado para separar elementos adyacentes.

## 2. La Propiedad `box-sizing` (La Regla Moderna)

Esta es la propiedad más importante para controlar cómo se calculan el `width` y `height`.

| Valor | Regla de Cálculo | Uso |
| :--- | :--- | :--- |
| **`content-box`** (Defecto) | **Ancho Total** = `width` + `padding` + `border` + `margin` | Requiere cálculos manuales constantes. |
| **`border-box`** (Mejor Práctica) | **Ancho Total** = `width` + `margin` | **Recomendado:** El `width` y `height` ya incluyen el padding y el borde, haciendo la maquetación mucho más predecible. |

## 3. El Colapso de Márgenes (Margin Collapsing)

Cuando se encuentran los márgenes verticales de dos elementos (ej., el margen inferior de un `<p>` y el margen superior del siguiente `<p>`), el navegador no suma los márgenes. En su lugar, el espacio resultante es igual al **margen más grande** de los dos.

## 4. Propiedades de `display`

El valor de la propiedad `display` determina el flujo de un elemento en la página:

* **`block`:** Ocupa todo el ancho disponible y fuerza saltos de línea (ej., `<div>`, `<p>`).
* **`inline`:** Solo ocupa el ancho necesario por su contenido; no se pueden aplicar `width`/`height` (ej., `<span>`, `<a>`).
* **`inline-block`:** Ocupa solo el ancho necesario, pero permite establecer `width`, `height`, y `margin`/`padding` en todas las direcciones.