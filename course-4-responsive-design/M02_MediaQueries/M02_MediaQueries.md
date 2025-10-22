# 📄 Módulo 2: Consultas de Medios y Puntos de Interrupción (Análisis de la Tarea)

## Objetivos Cumplidos

* **Implementación de Media Queries:** Se introdujo la sintaxis `@media screen and (...)` para aplicar estilos condicionales.
* **Puntos de Interrupción Mobile-First:** Se utilizaron exclusivamente las propiedades **`min-width`** para **añadir** estilos conforme la pantalla crece, lo cual es la base del diseño responsivo moderno.
* **Layout Adaptativo Básico:** El diseño pasa de:
    1.  **1 Columna** (Base/Móvil).
    2.  **2 Columnas** (Breakpoint Tablet: `min-width: 600px`).
    3.  **3 Columnas** (Breakpoint Desktop: `min-width: 1024px`).

## 💡 Elementos Técnicos Clave

### 1. Principio de Sobrescritura Progresiva
El uso de `min-width` en Media Queries asegura el principio de **sobrescritura progresiva**. El navegador aplica los estilos generales (móviles) primero. Luego, si la condición `min-width: 600px` se cumple, **solo los nuevos estilos se añaden o sobrescriben**, manteniendo la eficiencia del CSS.

### 2. Uso de `flex` y `calc()`
Para la maquetación de 2 y 3 columnas, se implementó un `display: flex` simple en el `.card-container`. La propiedad `calc()` fue fundamental para calcular el ancho de las tarjetas, asegurando que el espacio del `gap` (el espacio entre ellas) se distribuya correctamente, manteniendo la fluidez del diseño.

### 3. Definición de Breakpoints
Los *breakpoints* elegidos (`600px` y `1024px`) son comunes en el diseño web. Estos valores definen los puntos donde el **contenido** (y no necesariamente un dispositivo específico) necesita una reorganización para optimizar el espacio horizontal.