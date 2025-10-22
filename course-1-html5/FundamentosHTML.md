# 🌐 Fundamentos de la Web y HTML

Este documento resume los conceptos esenciales sobre la tecnología web, desde la estructura de las redes hasta el lenguaje HTML y el ciclo de solicitud/respuesta.

---

## 📚 Índice

| Sección | Descripción |
|----------|--------------|
| [I. Conceptos Fundamentales y Terminología](#i-conceptos-fundamentales-y-terminología) | Siglas y términos esenciales del desarrollo web. |
| [II. Redes e Internet](#ii-redes-e-internet) | Origen, estructura y estándares de Internet. |
| [III. Ciclo de Solicitud/Respuesta y Servidores](#iii-ciclo-de-solicitudrespuesta-y-servidores) | Funcionamiento del intercambio de datos en la web. |
| [IV. Evolución y Estándares de HTML](#iv-evolución-y-estándares-de-html) | Historia, estandarización y buenas prácticas de HTML. |

---

## I. Conceptos Fundamentales y Terminología

Esta sección define las **siglas y los términos esenciales** que rigen la comunicación en la World Wide Web.

| **Término** | **Significado** | **Explicación** |
|--------------|----------------|-----------------|
| **HTML** | HyperText Markup Language (Lenguaje de Marcado de Hipertexto) | Lenguaje base utilizado para estructurar y presentar contenido en la web. |
| **HTTP** | Protocolo de transferencia de hiper texto (Hypertext Transfer Protocol) | Protocolo que permite la transferencia de datos (hipertexto) entre un navegador (cliente) y un servidor. |
| **FTP** | File Transfer Protocol (Protocolo de Transferencia de Archivos) | Protocolo estándar para la transferencia de archivos entre computadoras a través de una red. |
| **LAN** | Red de Área Local (Local Area Network) | Red que conecta computadoras en un área geográfica limitada (ej: una oficina). |
| **WAN** | Red de Área Extendida (Wide Area Network) | Red que cubre una gran área geográfica (ej: Internet es un tipo de WAN). |

---

## II. Redes e Internet

El funcionamiento de la web se basa en la interconexión de redes y la estandarización de los recursos.

### A. Origen y Evolución

- El predecesor de **Internet** fue **Arpanet**.  
- La **web original** se desarrolló como una forma de intercambio de información científica.  
- El **primer navegador gráfico** (que mostraba imágenes) fue **Mosaic**.  

### B. Estructura de la Web

- Internet es un tipo de **Red de área extendida (WAN)**.  
- **HTML** utiliza **etiquetas** para marcar el contenido y definir su estructura.  
- La extensión correcta para un archivo web es **.html**.  

### C. URLs y Dominios

- Una **URL** (Localizador Uniforme de Recursos) incluye el **protocolo** (ej: `https://`) y el **dominio** (host).  
- Ejemplos de **dominios de nivel superior (TLD)**: `.com`, `.org`, `.edu`, `.biz`.  

### D. DNS y Estándares

- El **DNS (Domain Name System)** traduce nombres de dominio (ej: `www.google.com`) en **direcciones IP**.  
- La organización encargada de los nombres de dominio de nivel superior es **ICANN** (Internet Corporation for Assigned Names and Numbers).  

---

## III. Ciclo de Solicitud/Respuesta y Servidores

La comunicación web se basa en un **ciclo continuo de petición y respuesta** entre cliente y servidor.

- **Servidor:** Computadora que gestiona las solicitudes de recursos desde los clientes.  
- **Ciclo de Solicitud/Respuesta:** El navegador solicita una página y el servidor responde con los archivos necesarios (HTML, CSS, JS, imágenes, etc.).  
- **Iteraciones:** Cada recurso requiere una **solicitud separada**, lo que puede implicar varias iteraciones por página.  

---

## IV. Evolución y Estándares de HTML

Los navegadores **interpretan el código HTML** para mostrar páginas web, y los estándares garantizan su correcta visualización.

### A. Funcionalidad del Navegador

Los navegadores traducen el código HTML en contenido visual para el usuario.

### B. HTML y Semántica

Las etiquetas **HTML5** tienen un **significado semántico uniforme** en todos los navegadores, gracias a los esfuerzos de estandarización.

### C. Etiquetas de Propiedad (Proprietary Tags)

- Algunas etiquetas, como `<blink>` en Netscape, eran **específicas de ciertos navegadores**.  
- Causaron incompatibilidades, por lo que se eliminaron en versiones modernas.  

### D. Separación de Contenido y Diseño

- La etiqueta `<font>` violaba la separación entre **contenido y estilo**.  
- En **HTML5**, el estilo se define mediante **CSS**.  

### E. Cooperación de Estándares

- **HTML5** es el resultado de la cooperación entre **W3C** (World Wide Web Consortium) y **WHATWG** (Web Hypertext Application Technology Working Group).  
- **DARPA** (Agencia de Proyectos de Investigación Avanzados de Defensa) **no forma parte** de esta cooperación.  

### F. HTML 3.2

- Introdujo **etiquetas propietarias** específicas de algunos navegadores.  
- Esto generó **problemas de compatibilidad** y motivó la creación de estándares más estrictos.  

### G. Navegadores Comunes

Ejemplos de navegadores modernos: **Chrome**, **Safari**, **Firefox**, **Internet Explorer**.  

