/*
 * Módulo 1: Fundamentos y Tipos de Datos
 * Demostración de Variables, Operadores y Salida NO INSTRUSIVA.
 */

// 1. Declaración de Variables (let y const)
const NOMBRE_CURSO = "Interactividad con JavaScript"; // Constante en mayúsculas
let totalSemanas = 4;
let finalizado = false;

// 2. Tipos de Datos y Operaciones
let precioBase = 15.50;
let cantidad = 5;

// Expresión Aritmética
let totalAPagar = precioBase * cantidad; // 77.5
let esMayor = (totalAPagar > 100); // false

// 3. Salida de Datos (Mejores Prácticas)

// A. Salida en Consola (para depuración)
console.log("--- Consola: Tipos de Datos y Lógica ---");
console.log("Tipo de 'totalAPagar' (number):", typeof totalAPagar); 
console.log("¿La variable 'finalizado' es un booleano?:", typeof finalizado === 'boolean');
console.log("Valor final de totalAPagar:", totalAPagar);
console.log("-----------------------------------------");


// B. Inyección al DOM (Salida Semántica)
// 1. Obtener el contenedor semántico
const outputDiv = document.getElementById('output-container');

// 2. Crear un nuevo elemento para el resultado
const resultadoParrafo = document.createElement('p');

// 3. Usar textContent para mantener la seguridad y la semántica
resultadoParrafo.textContent = `
    El curso es: ${NOMBRE_CURSO}. 
    Costo total calculado: $${totalAPagar.toFixed(2)}. 
    ¿El costo total supera los $100?: ${esMayor}
`;

// 4. Inyectar en el DOM
if (outputDiv) {
    // Usamos el método appendChild() para añadir el nuevo nodo al DOM
    outputDiv.appendChild(resultadoParrafo);
} else {
    // Esto solo ocurriría si el JS se ejecutara antes que el HTML, pero es una buena práctica de seguridad.
    console.error("El contenedor 'output-container' no se encontró en el DOM.");
}