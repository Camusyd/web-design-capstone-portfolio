# 💾 Tipos de Datos y Variables en JavaScript

## 1. Declaración de Variables

En JavaScript moderno, utilizamos principalmente `let` y `const` para declarar variables, en lugar de `var`.

| Palabra Clave | Propósito | Reasignación | Ámbito (Scope) |
| :--- | :--- | :--- | :--- |
| **`const`** | Para valores que **no cambiarán** (constantes). | **No** se puede reasignar después de la inicialización. | Ámbito de Bloque (`{}`) |
| **`let`** | Para valores que **cambiarán** (contadores, valores temporales). | **Sí** se puede reasignar. | Ámbito de Bloque (`{}`) |
| **`var`** | (Obsoleto) | Sí se puede reasignar. | Ámbito de Función (o Global) |

## 2. Tipos de Datos Primitivos Comunes

Los datos primitivos son inmutables (no se pueden cambiar, solo se puede reasignar una nueva variable).

| Tipo de Dato | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **`string`** | Texto. Se encierra entre comillas simples (`'`) o dobles (`"`). | `'Hola Mundo'` |
| **`number`** | Números enteros o decimales (no hay distinción entre `int` y `float`). | `42`, `3.14159` |
| **`boolean`** | Valores lógicos que representan verdadero o falso. | `true`, `false` |
| **`null`** | Representa la ausencia intencional de valor. | `let datos = null;` |
| **`undefined`** | Indica que a la variable se le ha declarado, pero aún no se le ha asignado un valor. | `let nombre;` |

## 3. Expresiones y Operadores

* **Expresión:** Cualquier código que se evalúa a un solo valor (ej., `3 + 5` es una expresión que se evalúa a `8`).
* **Operador de Asignación:** `=` (asigna un valor: `let x = 10;`)
* **Operadores Aritméticos:** `+`, `-`, `*`, `/`, `%` (módulo o residuo).
* **Operadores de Comparación:** `==` (igualdad simple, solo valor), `===` (igualdad estricta, valor Y tipo), `!=`, `!==`, `>`, `<`.
* **Operadores Lógicos:** `&&` (AND), `||` (OR), `!` (NOT).