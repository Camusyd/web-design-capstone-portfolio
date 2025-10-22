# 📄 Módulo 1: Tipos de Datos y Fundamentos (Análisis de la Tarea)

## Objetivos Cumplidos

* **Fundamentos de Programación:** Declaración de variables (`let`/`const`), uso de expresiones aritméticas y booleanas.
* **Salida Inicial:** Demostración de tres formas de generar salida: `console.log()`, `alert()` (descomentado para prueba) y manipulación básica del DOM.

## 💡 Mejor Práctica (Manipulación del DOM)

Para esta tarea inicial, nos enfocamos en una manipulación del DOM **no intrusiva**, que es la base para las interacciones con JavaScript en la web moderna.

* **Evitamos `document.write`:** Este método es intrusivo y a menudo borra el DOM existente.
* **Implementamos `getElementById` y `textContent`:**
    1.  Se selecciona el elemento `<section id="output-container">` del HTML.
    2.  Se utiliza el método **`appendChild`** para inyectar un nuevo párrafo creado con **`textContent`**, asegurando que el HTML semántico permanezca limpio y el script solo trabaje con los nodos que necesita.