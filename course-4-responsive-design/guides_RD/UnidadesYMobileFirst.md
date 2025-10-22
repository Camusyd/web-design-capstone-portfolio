# 📏 Unidades de Medida y Mobile-First

## 1. El Paradigma Mobile-First

**Mobile-First** es una filosofía de diseño que prioriza el desarrollo para dispositivos móviles (las pantallas más pequeñas) antes de escalar a tabletas y ordenadores de escritorio.

| Concepto | Mobile-First (Recomendado) | Desktop-First (Obsoleto) |
| :--- | :--- | :--- |
| **Punto de Partida** | Diseñar primero la versión **móvil** (sin Media Queries). | Diseñar primero la versión de **escritorio**. |
| **Media Queries** | Usar **`min-width`** para **añadir** estilos conforme la pantalla crece. | Usar **`max-width`** para **sobrescribir** estilos conforme la pantalla se reduce. |
| **Ventaja** | Optimiza el rendimiento y la carga de recursos en dispositivos móviles. | Puede llevar a código inflado y lento en móvil. |

## 2. Unidades de Medida Relativas (Fluidas)

Las unidades relativas son esenciales para el diseño responsivo, ya que escalan basándose en otros elementos o el *viewport* (área visible del navegador).

| Unidad | Base de Cálculo | Uso Común |
| :--- | :--- | :--- |
| **`%`** | Porcentaje de la **medida del elemento padre**. | Anchos de contenedores (`width: 50%`). |
| **`em`** | Basado en el tamaño de fuente del **elemento padre**. | Relleno (`padding`) y margen (`margin`) de componentes internos. |
| **`rem`** | Basado en el tamaño de fuente del **elemento raíz (`<html>`)**. | Tamaño de fuente (tipografía) para mantener una escala consistente y accesible. |
| **`vw`** | Porcentaje del **ancho total del *viewport***. | Elementos que deben cubrir el ancho total de la pantalla (ej., banners). |
| **`vh`** | Porcentaje de la **altura total del *viewport***. | Definir la altura de secciones completas (ej., altura mínima `min-height: 100vh`). |