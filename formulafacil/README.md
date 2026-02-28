# 📐 FormulaFacil UTN - Juego Educativo de Fórmulas Matemáticas

## 🎓 **Proyecto Desarrollado para Ingreso UTN FRBA**

Juego educativo interactivo diseñado para facilitar el aprendizaje y memorización de fórmulas matemáticas, con énfasis en trigonometría, geometría, funciones y otros temas del ingreso a la Universidad Tecnológica Nacional Facultad Regional Buenos Aires.

---

## 🎯 **Objetivo del Proyecto**

Crear una herramienta educativa accesible y efectiva que permita a los estudiantes del ingreso UTN:
- 📚 **Memorizar fórmulas** mediante juego de asociación
- 🧮 **Visualizar expresiones** matemáticas con MathJax
- 🌙 **Estudiar en modo oscuro** para reducir fatiga visual
- 📱 **Acceder desde cualquier dispositivo** (responsive design)
- 🎮 **Aprender mediante práctica** y repetición espaciada

---

## 🏗️ **Arquitectura del Sistema**

### **📁 Estructura de Directorios**
```
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
```

### **🔧 Componentes Principales**

#### **1. Sistema de Juego (`core/game.js`)**
- **Modo Clásico:** Asociación figura-fórmula
- **Modo Práctica:** Ejercicios guiados
- **Sistema de puntuación:** Aciertos, precisión, racha
- **Dinámica de tarjetas:** Shuffle, matching, feedback

#### **2. Gestión de Temas (`core/themes.js`)**
- **9 temas principales:** Geometría, Funciones, Trigonometría, etc.
- **Configuración modular:** Cada tema con datos y fórmulas
- **Sistema de parciales:** Primer y segundo parcial
- **Navegación dinámica:** Cambio instantáneo entre temas

#### **3. Motor Matemático (`MathJax 3.2.2`)**
- **Renderizado LaTeX:** Fórmulas matemáticas profesionales
- **Configuración optimizada:** Delimitadores `\[...\]` y `\(...\)`
- **Soporte completo:** Fracciones, raíces, integrales, etc.

#### **4. Sistema de UI/UX (`core/ui.js`)**
- **Modo oscuro:** Tema UTN morado completo
- **Diseño responsivo:** Adaptación móvil/tablet/desktop
- **Animaciones fluidas:** Transiciones y micro-interacciones
- **Feedback visual:** Colores, estados, loading

---

## 📊 **Características Destacadas**

### **🔢 Trigonometría Completa (66 fórmulas)**
- **Funciones recíprocas:** csc, sec, cot
- **Identidades pitagóricas:** 3 variantes
- **Ángulo doble:** 4 formas diferentes
- **Ángulo triple:** sen(3x), cos(3x), tan(3x)
- **Ángulo mitad:** 6 variantes con raíces
- **Suma/Diferencia:** sen, cos, tan
- **Transformaciones:** Suma→Producto (4 tipos)
- **Reducción de potencias:** sen²x, cos²x
- **Leyes de triángulos:** Seno, Coseno (3 formas)
- **Paridad:** Funciones pares e impares
- **Cofunciones:** Relaciones π/2 ± x
- **Ecuaciones trigonométricas:** Soluciones generales

### **🎨 Diseño UTN**
- **Paleta morada:** Colores institucionales UTN
- **Modo oscuro:** Reducción de fatiga visual
- **Branding oficial:** Logo UTN y mascota Fueguito
- **Interfaz limpia:** Minimalista y funcional

### **⚡ Rendimiento**
- **Carga rápida:** < 2 segundos inicial
- **Optimización:** 5.04 MB totales
- **Sin dependencias:** Vanilla JavaScript
- **Compatibilidad:** Navegadores modernos

---

## 🛠️ **Tecnologías Utilizadas**

### **Frontend:**
- **HTML5:** Estructura semántica
- **CSS3:** Flexbox, Grid, Animaciones
- **JavaScript ES6+:** Módulos, clases, async/await
- **MathJax 3.2.2:** Renderizado matemático

### **Herramientas:**
- **Git:** Control de versiones
- **VS Code:** Desarrollo
- **PowerShell:** Automatización
- **Python:** Servidor local

---

## 🎮 **Modos de Juego**

### **1. Modo Clásico**
- **Objetivo:** Asociar figuras con fórmulas
- **Mecánica:** Tarjetas interactivas con shuffle
- **Puntuación:** Aciertos, precisión, racha máxima
- **Dificultad:** Progresiva según rendimiento

### **2. Modo Práctica**
- **Objetivo:** Resolver ejercicios guiados
- **Mecánica:** Problemas con ayuda paso a paso
- **Feedback:** Explicaciones detalladas
- **Progresión:** Por temas y dificultad

---

## 📱 **Diseño Responsivo**

### **Desktop (1200px+):**
- Grid 4x4 de tarjetas
- Panel lateral de información
- Animaciones completas

### **Tablet (768px-1199px):**
- Grid 3x3 adaptado
- Interfaz táctil optimizada
- Botones más grandes

### **Móvil (320px-767px):**
- Grid 2x2 compacto
- Navegación por gestos
- Modo retrato/landscape

---

## 🌙 **Modo Oscuro**

### **Características:**
- **Tema UTN morado:** Gradientes y sombras institucionales
- **Alto contraste:** Texto blanco sobre fondos oscuros
- **Transiciones suaves:** Animaciones entre modos
- **Persistencia:** Preferencia guardada en localStorage

### **Implementación:**
- **CSS Variables:** Sistema dinámico de colores
- **Clase .dark-mode:** Toggle con JavaScript
- **Iconos dinámicos:** 🌙/☀️ según estado
- **Universal:** Todos los componentes adaptados

---

## 🚀 **Deploy y Producción**

### **Ambientes:**
- **Local:** Python HTTP Server (desarrollo)
- **Staging:** Vercel (testing)
- **Producción:** Neocities (actual)

### **Optimizaciones:**
- **Minificación:** CSS y JavaScript
- **Compresión:** Imágenes optimizadas
- **CDN:** MathJax desde CDN
- **Cache:** Estrategia de caché eficiente

---

## 📈 **Métricas y Estadísticas**

### **Contenido:**
- **66 fórmulas trigonométricas**
- **200+ fórmulas totales** (todos los temas)
- **9 temas educativos**
- **2 modos de juego**

### **Rendimiento:**
- **< 2s** tiempo de carga
- **60fps** animaciones fluidas
- **100%** compatibilidad móvil
- **A+** rendimiento en Lighthouse

---

## 🎓 **Contexto Educativo**

### **Público Objetivo:**
- **Estudiantes UTN FRBA:** Ingreso a ingeniería
- **Nivel educativo:** Nivel medio/superior
- **Edad:** 17-25 años
- **Contexto:** Preparación para exámenes

### **Alineación Curricular:**
- **Matemática I:** Geometría y trigonometría
- **Matemática II:** Funciones y análisis
- **Ingreso UTN:** Temas específicos del examen
- **Práctica:** Repetición espaciada y activa

---

## 🔮 **Visión Futura**

### **Mejoras Planificadas:**
- **Progreso del usuario:** Guardar avances
- **Modo multijugador:** Competencias online
- **Análisis de rendimiento:** Estadísticas detalladas
- **Expansión de temas:** Más áreas matemáticas
- **API de ejercicios:** Generador dinámico

### **Escalabilidad:**
- **Arquitectura modular:** Fácil adición de temas
- **Sistema de plugins:** Extensiones futuras
- **Internacionalización:** Múltiples idiomas
- **Accesibilidad:** WCAG 2.1 compliance

---

## 👥 **Desarrollo y Contribuciones**

### **Creado por:**
- **Estudiantes UTN FRBA:** Proyecto educativo
- **Propósito:** Facilitar el ingreso a la universidad
- **Tecnología:** Vanilla JavaScript y MathJax
- **Diseño:** UX/UI centrado en el aprendizaje

### **Licencia:**
- **MIT:** Uso libre y abierto
- **Educativo:** Sin fines comerciales
- **Colaborativo:** Bienvenidas las contribuciones

---

## 🌐 **Acceso y Deploy**

### **Producción:**
- **URL Principal:** https://formulafaciutn.neocities.org
- **Alternativa:** https://formulafacil-utn.vercel.app

### **Desarrollo:**
- **Repositorio:** GitHub (próximamente)
- **Local:** Python HTTP Server
- **Testing:** Vercel staging

---

## 📞 **Contacto y Soporte**

### **Proyecto Educativo:**
- **Finalidad:** Apoyo al ingreso UTN
- **Sin fines comerciales:** 100% educativo
- **Código abierto:** Para la comunidad estudiantil
- **Mejoras continuas:** Basadas en feedback

---

**🎓 FormulaFacil UTN - Herramienta educativa creada por estudiantes, para estudiantes.**

*Facilitando el camino a la ingeniería UTN FRBA, una fórmula a la vez.* 🚀
