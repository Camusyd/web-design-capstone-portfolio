# 🏗️ Layout Avanzado: Flexbox y CSS Grid

Flexbox y Grid son los módulos esenciales de CSS3 para la maquetación moderna y responsiva, eliminando la necesidad de *floats* complejos.

## 1. Flexbox (Layout Unidimensional)

**Flexbox** (Flexible Box Module) es ideal para alinear, espaciar y ordenar elementos en **una sola dimensión** (fila o columna).

| Propiedad (Contenedor Padre) | Descripción |
| :--- | :--- |
| **`display: flex;`** | Define el contenedor como un *flex container*. |
| **`flex-direction`** | Define la dirección del eje principal (`row`, `column`). |
| **`justify-content`** | Alinea los elementos a lo largo del **eje principal** (horizontal en `row`). |
| **`align-items`** | Alinea los elementos a lo largo del **eje secundario** (vertical en `row`). |
| **`flex-wrap`** | Permite que los elementos pasen a la línea siguiente (`wrap`). **Es crucial para la responsividad.** |

## 2. CSS Grid (Layout Bidimensional)

**CSS Grid** es ideal para el diseño de páginas completas, permitiendo organizar elementos simultáneamente en **filas y columnas** (dos dimensiones).

| Propiedad (Contenedor Padre) | Descripción |
| :--- | :--- |
| **`display: grid;`** | Define el contenedor como una *grid*. |
| **`grid-template-columns`** | Define el número y tamaño de las columnas. |
| **`grid-template-rows`** | Define el número y tamaño de las filas. |
| **`grid-gap`** | Espacio entre las filas y columnas (`row-gap` y `column-gap`). |
| **Unidad `fr`** | Unidad flexible que distribuye el espacio disponible proporcionalmente (ej., `1fr 2fr 1fr`). |

## 3. Uso Responsivo

| Técnica | Descripción |
| :--- | :--- |
| **Combinación** | Flexbox se utiliza dentro de las celdas de una Grid para alinear contenidos específicos. |
| **Media Queries** | La Grid puede redefinirse completamente dentro de una Media Query. Por ejemplo, pasar de 1 columna en móvil a 3 columnas en escritorio: **`grid-template-columns: 1fr;`** (móvil) a **`grid-template-columns: 1fr 1fr 1fr;`** (escritorio). |