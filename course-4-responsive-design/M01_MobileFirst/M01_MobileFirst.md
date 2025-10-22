# 📄 Módulo 1: Principios Mobile-First (Análisis de la Tarea)

## Objetivos Cumplidos

* **Meta Viewport Tag:** Se incluyó el `<meta name="viewport"...>` para asegurar que el navegador no escale la página y reconozca el ancho del dispositivo como el *viewport*.
* **Paradigma Mobile-First:** El archivo `mobile_first.css` está escrito bajo la premisa de que los estilos base (sin Media Queries) son para la pantalla más pequeña. Los elementos se apilan verticalmente (`display: block` por defecto).
* **Unidades Fluidas:** Se usaron **`rem`** para la tipografía y el espaciado general, **`em`** para el espaciado interno de los elementos, y **`%`** para definir el ancho del contenedor (`.content-section`).

## 💡 Elementos Técnicos Clave

### 1. El Viewport Meta Tag
El código `<meta name="viewport" content="width=device-width, initial-scale=1.0">` es el inicio de cualquier diseño responsivo.
* `width=device-width`: Le dice al navegador que el ancho del *viewport* debe ser igual al ancho de la pantalla del dispositivo.
* `initial-scale=1.0`: Establece el nivel de zoom inicial a 1.

### 2. Uso de Unidades Relativas
* **`rem` (Root Em):** Se utiliza para la tipografía base y el espaciado principal para mantener una escala consistente y accesible, ya que se basa en el tamaño de fuente del `<html>`.
* **`%`:** Se aplica al `width` del contenedor (`.content-section`) para que siempre ocupe el 95% del espacio disponible, garantizando la fluidez horizontal.