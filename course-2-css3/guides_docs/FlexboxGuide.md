# 🤸 Guía Rápida de Flexbox

Flexbox (Módulo de Diseño de Cajas Flexibles) es un modelo de diseño **unidimensional** diseñado para distribuir el espacio entre los ítems de un contenedor y controlar su alineación, incluso cuando su tamaño es desconocido o dinámico.

## Conceptos Clave

* **Contenedor Flexible:** El elemento padre que tiene `display: flex`.
* **Ítems Flexibles:** Los hijos directos del contenedor.
* **Eje Principal (Main Axis):** La dirección en la que se colocan los ítems (`row` o `column`).
* **Eje Transversal (Cross Axis):** El eje perpendicular al principal.

## Propiedades del Contenedor

| Propiedad | Descripción | Valores Comunes |
| :--- | :--- | :--- |
| **`display`** | Define el contexto flexible. | `flex` |
| **`flex-direction`** | Define el Eje Principal. | `row` (defecto), `column`, `row-reverse`, `column-reverse` |
| **`justify-content`** | Alinea los ítems a lo largo del **Eje Principal**. | `flex-start`, `flex-end`, `center`, `space-between`, `space-around` |
| **`align-items`** | Alinea los ítems a lo largo del **Eje Transversal**. | `flex-start`, `flex-end`, `center`, `stretch` |
| **`flex-wrap`** | Permite que los ítems salten a una nueva línea si no caben. | `nowrap` (defecto), `wrap`, `wrap-reverse` |

## Propiedades de los Ítems (Hijos)

| Propiedad | Descripción | Uso Típico |
| :--- | :--- | :--- |
| **`order`** | Controla el orden visual de los ítems, independientemente del orden en el HTML. | Cambiar la posición de un ítem. |
| **`flex-grow`** | Factor de crecimiento. Determina cuánto espacio extra del contenedor debe ocupar el ítem. | `1` (crece uniformemente), `0` (no crece) |
| **`flex-shrink`** | Factor de encogimiento. Determina cuánto debe encogerse un ítem para evitar el desbordamiento. | `1` (encoge), `0` (no encoge) |
| **`align-self`** | Sobrescribe la propiedad `align-items` del contenedor para un ítem específico. | Alinear un único ítem diferente al resto. |