# 🧱 Guía Rápida de CSS Grid

CSS Grid Layout es un sistema de maquetación **bidimensional** (filas y columnas) que permite estructurar contenido en cuadrículas complejas con control absoluto sobre la posición y el tamaño.

## Conceptos Clave

* **Contenedor Grid:** El elemento padre con `display: grid`.
* **Ítems Grid:** Los hijos directos del contenedor.
* **Líneas:** Las líneas divisorias horizontales y verticales (eje X e Y).
* **Celdas:** La unidad más pequeña de la cuadrícula.
* **Áreas:** Colecciones de celdas combinadas y nombradas.

## Propiedades del Contenedor

| Propiedad | Descripción | Valores Clave |
| :--- | :--- | :--- |
| **`display`** | Define el contexto de cuadrícula. | `grid` |
| **`grid-template-columns`** | Define el **número y el tamaño** de las columnas. | `1fr 1fr 1fr` (tres columnas iguales), `100px auto` |
| **`grid-template-rows`** | Define el **número y el tamaño** de las filas. | `100px 1fr auto` |
| **`gap`** | Define el espacio (gutters) entre filas y columnas. | `10px` (mismo espacio), `10px 20px` (fila/columna) |
| **`justify-items`** | Alinea el contenido dentro de las celdas a lo largo del **eje de fila** (horizontal). | `start`, `end`, `center`, `stretch` |
| **`align-items`** | Alinea el contenido dentro de las celdas a lo largo del **eje de columna** (vertical). | `start`, `end`, `center`, `stretch` |

## Propiedades de los Ítems (Posicionamiento)

| Propiedad | Descripción | Uso Típico |
| :--- | :--- | :--- |
| **`grid-column`** | Define la línea inicial y final del ítem a lo largo del eje de columnas. | `1 / 3` (ocupa las celdas entre la línea 1 y 3) |
| **`grid-row`** | Define la línea inicial y final del ítem a lo largo del eje de filas. | `2 / span 2` (comienza en la línea 2 y abarca 2 filas) |

## La Unidad `fr` (Unidad Fraccional)

La unidad `fr` (fracción) se utiliza para dimensionar las pistas de la cuadrícula, permitiendo que las columnas o filas se **distribuyan proporcionalmente** el espacio disponible.

* **Ejemplo:** `grid-template-columns: 2fr 1fr;` crea dos columnas, donde la primera será el doble de ancha que la segunda.