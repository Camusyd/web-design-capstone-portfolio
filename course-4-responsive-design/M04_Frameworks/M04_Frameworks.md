# 📄 Módulo 4: Proyecto Final - Responsive Dev Showcase (Análisis Detallado)

## Objetivos Cumplidos

* **Diseño Atractivo:** Implementación de un **Hero Header** (CSS con `vh` y `background-image`) para un impacto visual inmediato.
* **Sistema de Grid Responsivo:** Uso de las clases `col-12`, `col-md-6`, `col-lg-4` de **Bootstrap** para un layout que se adapta fluidamente de 1 a 3 columnas.
* **JavaScript Avanzado (Interactividad):**
    * **Modo Oscuro (Toggle):** Se añadió un interruptor que usa **JavaScript** para cambiar el atributo `data-bs-theme` del `<body>`, permitiendo al usuario alternar entre el tema claro/oscuro de Bootstrap y **persistiendo la preferencia** con `localStorage`.
    * **Scroll to Top:** Script que mejora la usabilidad al mostrar un botón fijo al hacer scroll y permite el desplazamiento suave (`behavior: 'smooth'`).
* **Navegación Avanzada:** Configuración de **Scroll Spy** en el `<body>` y la `Navbar` para resaltar automáticamente el enlace de la sección activa.

## 💡 Elementos Técnicos Clave

### 1. Control de Estado y Persistencia
La funcionalidad de **Modo Oscuro** demuestra el control de estado simple en el Frontend:
1.  **Toggle:** El evento `change` del interruptor llama a `toggleDarkMode()`.
2.  **Modificación:** `body.setAttribute('data-bs-theme', 'dark')` cambia la variable CSS raíz de Bootstrap.
3.  **Persistencia:** `localStorage.setItem('theme', 'dark')` guarda la elección para que el tema se mantenga incluso después de recargar la página.

### 2. Combinación de Flexbox y Grid
Se utilizan ambas técnicas:
* **Grid (Bootstrap):** Para el diseño principal de la página (`.col-*-*`).
* **Flexbox (Utilidades):** Para la alineación vertical de elementos específicos (`.align-items-center` en la tarjeta de Perfil) y la organización del contenido dentro de las columnas.

### 3. Usabilidad con Scroll Suave
El uso de `window.scrollTo({ top: 0, behavior: 'smooth' })` es crucial para una buena experiencia de usuario, haciendo que la navegación de regreso a la parte superior sea agradable y no abrupta.