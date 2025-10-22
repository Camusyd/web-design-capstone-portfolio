# 💻 Consultas de Medios (Media Queries)

Las Consultas de Medios son la herramienta clave de CSS para aplicar estilos basados en las características del dispositivo o del entorno de visualización.

## 1. Sintaxis Básica y Estructura

Una consulta de medios comienza con la regla `@media`, seguida del tipo de medio y una o más expresiones que definen la condición (el *breakpoint*).

```css
/* Sintaxis General */
@media screen and (condición) {
    /* Estilos aplicados si la condición es verdadera */
}
```
---

### 2. 📱 Puntos de Interrupción (Breakpoints)

Los **breakpoints** más comunes se definen por el **ancho del viewport**.  
Siguiendo el paradigma **Mobile-First**, siempre se usa `min-width`.

| Propiedad | Descripción | Paradigma (Mobile-First) |
|------------|--------------|---------------------------|
| **min-width** | Aplica estilos si el viewport es igual o mayor que el valor especificado. | Usado para escalar el diseño hacia arriba (de móvil a escritorio). |
| **max-width** | Aplica estilos si el viewport es igual o menor que el valor especificado. | Usado para sobrescribir estilos de escritorio en móvil (Desktop-First). |

---

### 3. 💡 Ejemplo Práctico (Mobile-First)

En este enfoque, el **CSS base** está diseñado para móviles,  
y las consultas (`@media`) añaden estilos solo cuando hay suficiente espacio.

```css
/* 1. ESTILOS BASE (MÓVIL) */
.contenedor {
    width: 90%;
    padding: 10px; /* Estilos de móvil */
}

/* 2. BREAKPOINT TABLET (> 768px) */
@media screen and (min-width: 768px) {
    .contenedor {
        width: 70%; /* Cambia el ancho al pasar a tablet */
    }
}

/* 3. BREAKPOINT ESCRITORIO (> 1200px) */
@media screen and (min-width: 1200px) {
    .contenedor {
        width: 50%; /* Cambia el ancho al pasar a escritorio */
    }
}
```
---