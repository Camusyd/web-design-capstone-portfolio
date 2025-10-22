# ⚙️ Manipulación del DOM y Eventos

El **DOM (Document Object Model)** es una interfaz de programación para documentos HTML. Representa la página para que los programas puedan cambiar la estructura, el estilo y el contenido del documento.

## 1. Selección de Elementos (Obtener Nodos)

Antes de manipular un elemento, debemos seleccionarlo del DOM:

| Método | Tipo de Selector | Uso Común |
| :--- | :--- | :--- |
| **`document.getElementById()`** | ID (`#`) | Útil para obtener un elemento único de forma rápida. |
| **`document.querySelector()`** | Selector CSS | Obtiene el **primer** elemento que coincida con el selector CSS (clase, ID, etiqueta). |
| **`document.querySelectorAll()`** | Selector CSS | Obtiene una lista (`NodeList`) de **todos** los elementos que coincidan con el selector. |

## 2. Modificación del DOM (Propiedades Comunes)

Una vez que tienes un elemento (`nodo`), puedes cambiar sus propiedades:

| Propiedad | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **`.innerHTML`** | Obtiene o establece el **contenido HTML** (incluyendo etiquetas). | `elemento.innerHTML = '<h1>Nuevo Título</h1>';` |
| **`.textContent`** | Obtiene o establece el **contenido de texto puro** (ignora etiquetas HTML). | `elemento.textContent = 'Solo texto.';` |
| **`.style.propiedad`** | Modifica los estilos CSS en línea del elemento. | `elemento.style.backgroundColor = 'red';` |
| **`.classList.add()`** | Añade una clase CSS al elemento. | `elemento.classList.add('clase-activa');` |
| **`.setAttribute()`** | Establece el valor de un atributo (ej., `src`, `id`, `alt`). | `imagen.setAttribute('src', 'nueva.jpg');` |

## 3. Manejo de Eventos

Los eventos son la base de la interactividad. Permiten que tu código reaccione a las acciones del usuario.

* **Event Listener:** El método más común y limpio para asignar una función (manejador) a un evento.

```javascript
// Sintaxis
elemento.addEventListener('nombreDelEvento', funcionAEjecutar);

// Ejemplo de Evento de Ratón
let boton = document.querySelector('#miBoton');
boton.addEventListener('click', function() {
    console.log('Botón clickeado.');
});

// Ejemplo de Evento de Ratón (Hover)
imagen.addEventListener('mouseover', funcionMostrar); // Cuando el ratón entra
imagen.addEventListener('mouseout', funcionOcultar);  // Cuando el ratón sale
```

| Evento Común | Descripción | Módulo 2 Foco |
| :--- | :--- | :--- |
| click | Cuando el ratón hace clic sobre un elemento | Sí |
mouseover / mouseenter,Cuando el puntero se mueve sobre un elemento.,Sí
mouseout / mouseleave,Cuando el puntero se mueve fuera de un elemento.,Sí
touchstart,Cuando un dedo toca la pantalla (móvil).,Sí (Eventos Táctiles)