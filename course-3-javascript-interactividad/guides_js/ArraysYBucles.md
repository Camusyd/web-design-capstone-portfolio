# 🔄 Matrices (Arrays) y Bucles

## 1. Matrices (Arrays)

Una matriz es una estructura de datos que te permite almacenar una colección ordenada de valores, típicamente del mismo tipo, bajo un único nombre de variable.

* **Declaración:**
    ```javascript
    const nombres = ['Alice', 'Bob', 'Charlie'];
    const numeros = new Array(10, 20, 30);
    ```
* **Acceso:** Los elementos se acceden por su **índice**, que comienza en **cero (0)**.
    ```javascript
    console.log(nombres[0]); // Output: 'Alice'
    ```
* **Propiedad Clave:**
    ```javascript
    console.log(nombres.length); // Output: 3
    ```

## 2. Métodos Comunes de Arrays

| Método | Propósito | Ejemplo |
| :--- | :--- | :--- |
| **`.push()`** | Añade uno o más elementos al **final** del array. | `nombres.push('David');` |
| **`.pop()`** | Elimina y **devuelve** el último elemento del array. | `let ultimo = nombres.pop();` |
| **`.shift()`** | Elimina y **devuelve** el primer elemento del array. | `nombres.shift();` |
| **`.unshift()`** | Añade uno o más elementos al **inicio** del array. | `nombres.unshift('Zoe');` |

## 3. Bucles (Loops)

Los bucles se utilizan para ejecutar un bloque de código repetidamente hasta que se cumpla una condición. Esto es crucial para trabajar con datos de arrays (ej., mostrar una galería de fotos).

### Bucle `for` (Uso más común con índices)

Se utiliza cuando se conoce el número exacto de iteraciones.

```javascript
// Mostrar todos los elementos de un array
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```
---

### Bucle `while`

Se utiliza cuando el número de iteraciones es desconocido, dependiendo de una condición:

```JavaScript

let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++; // Siempre incluir la condición de salida
}
```
---

### Bucle `forEach` (Específico para Arrays)

Una forma más limpia y moderna de iterar sobre arrays, sin preocuparse por el índice:

```JavaScript

nombres.forEach(function(nombre) {
    console.log(`Hola, ${nombre}`);
});
```
---