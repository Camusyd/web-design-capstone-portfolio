# ⚖️ Especificidad y Cascada (CSS)

La Cascada (Cascade) es el algoritmo que resuelve los conflictos de estilo cuando múltiples reglas CSS intentan dar estilo al mismo elemento. La Especificidad es la métrica usada dentro de ese algoritmo.

## 1. La Jerarquía de la Cascada

El navegador decide qué estilo aplicar siguiendo este orden de importancia (de menor a mayor):

1.  Hojas de estilo del navegador (User Agent Styles).
2.  Hojas de estilo externas e incrustadas (`<style>` o `<link>`).
3.  Estilos en línea (atributo `style=""`).
4.  Reglas con la palabra clave **`!important`** (Máxima prioridad, debe usarse con extrema precaución).

## 2. Métrica de Especificidad

Cuando dos selectores con el mismo origen entran en conflicto, gana el que tenga mayor Especificidad. La especificidad se calcula con un valor de cuatro dígitos (A, B, C, D):

* **A:** Estilos en línea.
* **B:** Selectores de ID (`#`).
* **C:** Selectores de Clase (`.`), de Atributo (`[]`) y Pseudo-clases (`:hover`).
* **D:** Selectores de Elemento (`p`, `h1`) y Pseudo-elementos (`::before`).

| Selector | Cálculo (A, B, C, D) | Puntuación Decimal |
| :--- | :--- | :--- |
| `style=""` | (1, 0, 0, 0) | 1000 |
| `#header` | (0, 1, 0, 0) | 100 |
| `.nav .item` | (0, 0, 2, 0) | 20 |
| `nav a` | (0, 0, 0, 2) | 2 |

**Regla Clave:** Un solo ID gana a cualquier número de clases o elementos.

## 3. Resolución por Orden de Origen

Si dos selectores son **idénticos en especificidad** (ej., dos selectores de clase diferentes como `.caja` y `.fancy`), se aplica la regla de **Orden de Origen**:

* Gana el estilo que fue **declarado más tarde** en la hoja de estilos.

> **¡Cuidado con el `!important`!**
> La palabra clave `!important` rompe la cascada y anula todas las demás reglas de especificidad. Su uso excesivo hace que el CSS sea impredecible y difícil de mantener.