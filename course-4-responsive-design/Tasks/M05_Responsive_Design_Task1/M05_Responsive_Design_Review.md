# 📄 M05: Tarea de Revisión de Diseño Responsivo  
## (Análisis de Media Queries)

---

## 🎯 Objetivo del Proyecto
El proyecto buscaba transformar una vista web inicial (**Mobile-First**) en tres layouts distintos utilizando únicamente **Media Queries de CSS**.  
El objetivo era demostrar el dominio en la manipulación de las propiedades `display`, `width` y `max-height` para lograr un diseño que variara de **1, 2 y 3 columnas**.

---

## 💡 Transiciones Responsivas Implementadas
Se utilizaron **dos min-width Media Queries** para agregar complejidad a medida que la pantalla se agranda, manteniendo la vista móvil como base (Mobile-First).

---

### 1. 📱 Vista Móvil (Base: < 772px)
En la vista predeterminada, los contenedores (`div`) se configuran con:

| Propiedad | Valor | Descripción |
|------------|--------|-------------|
| `display`  | `block` | Fuerza el apilamiento de los elementos. |
| `width`    | `100%`  | Ocupa todo el ancho disponible. |

Resultado: estructura de **1 columna**.

---

### 2. 💻 Vista Tableta (Consulta #1: `@media (min-width: 772px)`)
Transforma el diseño de **1 columna** a **2 columnas**.

| Propiedad | Valor | Razón |
|------------|--------|--------|
| `display` | `inline-block` | Permite colocar elementos horizontalmente. |
| `width` | `45%` | Asegura dos columnas por fila, dejando espacio para márgenes laterales. |
| `max-height` | `30vh` | **Requisito clave:** limita el tamaño de las imágenes al 30% de la altura del viewport. |

---

### 3. 🖥️ Vista Pantalla Grande (Consulta #2: `@media (min-width: 998px)`)
Transforma el diseño de **2 columnas** a **3 columnas** para escritorios y pantallas grandes.

| Propiedad | Valor | Razón |
|------------|--------|--------|
| `width` | `30%` | **Requisito clave:** tres contenedores por fila (`30% × 3 = 90%`). |
| Márgenes | Ajustados | Minimiza el espacio en blanco generado por `inline-block` y asegura que la tercera columna no salte de línea. |

---

## 📐 Solución al Problema del Layout
El desafío principal fue lograr que **tres elementos (`div`) se alinearan horizontalmente** sin saltar de línea, incluso con un ancho porcentual correcto.  
El problema surge del **Modelo de Caja Estándar** y el **espacio en blanco en el HTML**.

### ✅ Solución aplicada:
```css
* {
  box-sizing: border-box;
}
