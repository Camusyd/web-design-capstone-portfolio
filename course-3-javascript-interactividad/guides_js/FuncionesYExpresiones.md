# 🚀 Funciones y Expresiones

Las funciones son bloques de código diseñados para realizar una tarea particular. Ayudan a organizar el código, hacerlo reutilizable y evitar la repetición (**DRY: Don't Repeat Yourself**).

## 1. Declaración de Funciones

Existen dos formas principales de definir una función:

### A. Declaración de Función Clásica

La función puede llamarse antes de ser definida en el código (**Hoisting**).

```javascript
// Definición
function saludar(nombre) {
    return `Hola, ${nombre}`;
}


// Llamada (ejecución)
let mensaje = saludar('Alice'); 
```
----
### B. Expresión de Función

La función se asigna a una variable (`const` o `let`). No se beneficia del Hoisting.
```JavaScript
const sumar = function(a, b) {
    return a + b;
};

// Llamada
let resultado = sumar(5, 3);
```

----

## 2. Arrow Functions (Funciones Flecha)

Es una sintaxis más corta y concisa para escribir expresiones de función. Son ideales para manejadores de eventos y callbacks (funciones que se pasan a otras funciones).

- Sintaxis Concisa:
```JavaScript
const multiplicar = (a, b) => a * b;

// Si solo hay un parámetro, los paréntesis son opcionales
const duplicar = x => x * 2;
```
---

### 3. Ámbito de Variables (Scope)

El **Ámbito (Scope)** define la accesibilidad de una variable en diferentes partes del código.  
Es crucial para prevenir conflictos de nombres y garantizar que las funciones solo accedan a los datos que necesitan.

| Tipo de Scope | Definición | Palabras Clave Afectadas |
|----------------|-------------|----------------------------|
| **Global** | Una variable declarada fuera de cualquier función o bloque. Es accesible desde cualquier lugar del script. Se desaconseja su uso excesivo. | `var`, `let`, `const` |
| **Función** | El ámbito tradicional de JavaScript. Las variables declaradas con `var` solo son accesibles dentro de la función donde se definieron. | `var` |
| **Bloque** | Introducido con ES6. Las variables declaradas con `let` o `const` solo son accesibles dentro del bloque de código `{}` donde se definieron (por ejemplo, dentro de un bucle `for`, un condicional `if`, o cualquier otro bloque). | `let`, `const` |


```JavaScript
// Ejemplo de Scope de Bloque
function testScope() {
    let a = 1;
    if (true) {
        let b = 2; // b es visible solo dentro de este if
        console.log(a); // OK
    }
    // console.log(b); // Error: b no está definida aquí
}
```