# 📄 Módulo 3: Flexbox, CSS Grid y Accesibilidad (Análisis de la Tarea)

## Objetivos Cumplidos

* **CSS Grid para Layout Principal:** Se utilizó `display: grid` y `grid-template-columns` con la unidad **`fr`** para definir el layout de dos columnas del blog (`3fr 1fr`) en el *breakpoint* de escritorio.
* **Flexbox para Componentes:** Se utilizó `display: flex` para alinear y distribuir los elementos de la navegación (`.flex-nav`) y las tarjetas internas (`.flex-cards`), demostrando el uso de Flexbox para componentes unidimensionales.
* **Media Queries para Accesibilidad (A11y):** Se implementaron consultas que reaccionan a las preferencias del usuario:
    * **`(prefers-color-scheme: dark)`:** Inversión de colores para el **Modo Oscuro**.
    * **`(prefers-reduced-motion: reduce)`:** Desactivación de transiciones/animaciones.

## 💡 Elementos Técnicos Clave

### 1. Grid vs. Flexbox
* **Grid:** Usado para el **macro-layout** (`.page-wrapper`). En móvil, el Grid se colapsa (comportamiento por defecto) y en desktop, se define explícitamente el layout de 2 columnas.
* **Flexbox:** Usado para el **micro-layout** (`.flex-nav`, `.flex-cards`). En la navegación, se usa `justify-content: space-between` para la distribución.

### 2. Unidad `fr`
La unidad `fr` (fracción) en CSS Grid (`grid-template-columns: 3fr 1fr;`) se utiliza para distribuir el espacio disponible. Esto es muy responsivo, ya que el espacio se reparte proporcionalmente sin necesidad de cálculos con `calc()`.

### 3. Diseño Progresivo
El diseño mantiene su enfoque Mobile-First:
1.  **Móvil:** `display: block` y `flex-direction: column` son el estado predeterminado.
2.  **Desktop:** Se **añaden** `display: grid` y `flex-direction: row` para la reorganización.