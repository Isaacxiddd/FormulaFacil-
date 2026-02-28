📐 FormulaFacil UTN

Juego educativo que hice mientras estudiaba para el ingreso a la Universidad Tecnológica Nacional 

La idea del proyecto es tener una forma más práctica de repasar fórmulas matemáticas sin depender solamente de apuntes. Funciona como un juego de asociación donde el objetivo es relacionar conceptos con sus fórmulas.

Las fórmulas se muestran en formato matemático para una mejor visualización.

El proyecto está pensado principalmente para temas del ingreso como geometría, trigonometría, funciones, vectores.

---

Objetivo del proyecto

Hice este proyecto para practicar fórmulas del ingreso a la UTN de una forma más interactiva.

La idea es que el estudiante pueda:

* memorizar fórmulas mediante repetición
* ver las expresiones matemáticas renderizadas correctamente
* estudiar usando modo oscuro
* usar la aplicación desde celular o computadora
* practicar con un sistema tipo juego

---

 Arquitectura del sistema

📁 Estructura de directorios



formulafacil/
├── index.html              # Página principal
├── styles.css              # Estilos CSS completos
├── app.js                 # Lógica principal de la aplicación
├── core/                  # Módulos centrales
│   ├── darkmode.js        # Gestión de modo oscuro
│   ├── game.js            # Lógica del juego
│   ├── router.js          # Navegación y rutas
│   ├── state.js           # Estado global
│   ├── themes.js          # Configuración de temas
│   └── ui.js              # Interfaz de usuario
├── modules/               # Módulos por tema
│   ├── functions/         # Funciones matemáticas
│   ├── geometry/          # Geometría
│   ├── trigonometria/     # Trigonometría (66 fórmulas)
│   ├── inequalities/      # Inecuaciones
│   ├── absolute/          # Valor absoluto
│   ├── intervals/         # Intervalos
│   ├── logaritmos/       # Logaritmos
│   ├── trigonometria/     # Trigonometría avanzada
│   ├── vectores/          # Vectores
│   ├── homograficas/      # Funciones homográficas
│   └── inyectivas/        # Funciones inyectivas
├── audio/                 # Efectos de sonido
│   ├── correct.mp3        # Sonido de respuesta correcta
│   └── wrong.mp3          # Sonido de respuesta incorrecta
└── assets/                # Recursos visuales
    ├── logo-utn.png      # Logo UTN
    ├── fueguito.png       # Mascota principal
    ├── fueguito3.png      # Mascota alternativa
    └── logofmt.png        # Logo FormulaFacil

---

Componentes principales

Sistema del juego

El juego funciona con tarjetas que se mezclan aleatoriamente.
El objetivo es encontrar la relación entre un concepto y su fórmula de una forma mas visual.

También se registran estadísticas básicas como:

* cantidad de aciertos
* precisión
* racha de respuestas correctas

---

Sistema de temas

Los contenidos están organizados por temas matemáticos.
Cada tema contiene su propia lista de fórmulas.

Esto permite agregar nuevos temas sin tener que modificar el resto del proyecto.

---

Renderizado matemático

Las fórmulas se muestran en formato LaTeX y se visualizan correctamente en el navegador.

Esto incluye:

* fracciones
* raíces
* potencias
* identidades trigonométricas

---

Interfaz

El menu y está pensada para que sea rápida de usar.

Incluye:

* animaciones básicas
* diseño responsive
* un menu simple 

---

Contenido de trigonometría

El módulo de trigonometría incluye varias identidades importantes del ingreso.

Entre ellas:

* funciones recíprocas (sec, csc, cot)
* identidades pitagóricas
* ángulo doble
* ángulo triple
* ángulo mitad
* suma y diferencia de ángulos
* reducción de potencias
* leyes del seno y coseno
* paridad de funciones
* cofunciones
* ecuaciones trigonométricas básicas

---

Tecnologías utilizadas

Frontend:

* HTML5
* CSS3
* JavaScript
* MathJax

Herramientas usadas durante el desarrollo:

* Git
* VS Code
* Python (para servidor local)

---

Modos de uso

Modo clásico

En este modo aparecen tarjetas que deben asociarse correctamente.

El juego mezcla las cartas y el usuario debe encontrar la relación entre concepto y fórmula.

Se registran:

* aciertos
* precisión
* racha máxima

---

Modo práctica

Este modo está pensado para repasar fórmulas de forma más activa .

(recomendacion personal usar calculadora)

---

Diseño responsive

La aplicación funciona en distintos tamaños de pantalla.

Desktop

* grilla de tarjetas más grande
* mayor espacio visual

Tablet

* interfaz adaptada para pantalla táctil

Móvil

* grilla compacta
* botones más grandes

---

Modo oscuro

El proyecto incluye un modo oscuro para estudiar con menos fatiga visual.

La preferencia se guarda en el navegador usando localStorage.

---

Deploy

El proyecto se puede ejecutar localmente con un servidor simple.

Durante el desarrollo utilicé un servidor de Python.

También se hicieron pruebas de deploy en:

* Vercel
* Neocities

---

Futuras mejoras

Algunas ideas para seguir mejorando el proyecto:

* guardar progreso del usuario
* estadísticas más detalladas
* agregar más temas matemáticos
* generar ejercicios automáticamente

---

Proyecto educativo

Este proyecto fue creado como herramienta de práctica para estudiantes que estén preparando el ingreso a la UTN.

No tiene fines comerciales y puede usarse libremente para estudiar.

---

Acceso al proyecto

Producción:

https://formulafaciutn.neocities.org

Alternativa:

https://formulafacil-utn.vercel.app

---

FormulaFacil UTN

Proyecto hecho para practicar fórmulas matemáticas del ingreso a la UTN.

