// ══════════════════════════════════════════════════════════════
// DATOS DE FUNCIONES LINEALES Y CUADRÁTICAS
// ══════════════════════════════════════════════════════════════

export const functionsData = [
    // FUNCIONES LINEALES
    {
        name: "Recta",
        category: "lineal",
        formulas: "y = mx + b",
        icon: "📏",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="80" x2="90" y2="20" stroke="#2196f3" stroke-width="3"/><circle cx="10" cy="80" r="2" fill="#2196f3"/><circle cx="90" cy="20" r="2" fill="#2196f3"/></svg>`
    },
    {
        name: "Pendiente",
        category: "lineal",
        formulas: "m = \\frac{y_2 - y_1}{x_2 - x_1}",
        icon: "📐",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="70" x2="80" y2="30" stroke="#4caf50" stroke-width="3"/><line x1="20" y1="70" x2="80" y2="70" stroke="#f44336" stroke-width="2" stroke-dasharray="4,4"/><line x1="80" y1="70" x2="80" y2="30" stroke="#f44336" stroke-width="2" stroke-dasharray="4,4"/></svg>`
    },
    {
        name: "Ordenada al origen",
        category: "lineal",
        formulas: "b = y_1 - mx_1",
        icon: "🎯",
        svg: `<svg viewBox="0 0 100 100"><line x1="0" y1="100" x2="100" y2="0" stroke="#9c27b0" stroke-width="2"/><line x1="0" y1="0" x2="0" y2="100" stroke="#666" stroke-width="1"/><circle cx="0" cy="60" r="4" fill="#ff5722"/></svg>`
    },
    {
        name: "Distancia entre dos puntos",
        category: "lineal",
        formulas: "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}",
        icon: "📏",
        svg: `<svg viewBox="0 0 100 100"><circle cx="25" cy="70" r="4" fill="#00bcd4"/><circle cx="75" cy="30" r="4" fill="#00bcd4"/><line x1="25" y1="70" x2="75" y2="30" stroke="#00bcd4" stroke-width="3"/></svg>`
    },
    {
        name: "Recta por dos puntos",
        category: "lineal",
        formulas: "y - y_1 = m(x - x_1)",
        icon: "✏️",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="75" x2="90" y2="25" stroke="#ff9800" stroke-width="3"/><circle cx="30" cy="65" r="4" fill="#ff5722"/><circle cx="70" cy="35" r="4" fill="#ff5722"/></svg>`
    },
    {
        name: "Paralela",
        category: "lineal",
        formulas: "m_1 = m_2",
        icon: "⫽",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="70" x2="90" y2="30" stroke="#e91e63" stroke-width="3"/><line x1="10" y1="85" x2="90" y2="45" stroke="#e91e63" stroke-width="3" stroke-dasharray="5,5"/></svg>`
    },
    {
        name: "Perpendicular",
        category: "lineal",
        formulas: "m_1 \\cdot m_2 = -1",
        icon: "⟂",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="80" x2="90" y2="20" stroke="#673ab7" stroke-width="3"/><line x1="20" y1="20" x2="80" y2="80" stroke="#3f51b5" stroke-width="3"/><circle cx="50" cy="50" r="3" fill="#fff" stroke="#000"/></svg>`
    },
    {
        name: "Intersección de rectas",
        category: "lineal",
        formulas: "x = \\frac{b_2 - b_1}{m_1 - m_2}",
        icon: "✖️",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="80" x2="90" y2="30" stroke="#795548" stroke-width="3"/><line x1="10" y1="30" x2="90" y2="80" stroke="#607d8b" stroke-width="3"/><circle cx="50" cy="55" r="5" fill="#ff5722"/></svg>`
    },
        {
        name: "Recta por punto y pendiente",
        category: "lineal",
        formulas: "y - y_1 = m(x - x_1)",
        icon: "📍",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="75" x2="90" y2="25" stroke="#ff5722" stroke-width="3"/><circle cx="30" cy="65" r="4" fill="#ff5722"/><text x="35" y="60" font-size="8" fill="#ff5722">(x₁,y₁)</text></svg>`
    },
    {
        name: "Punto medio",
        category: "lineal",
        formulas: "\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)",
        icon: "⊙",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="70" x2="80" y2="30" stroke="#cddc39" stroke-width="2"/><circle cx="20" cy="70" r="4" fill="#8bc34a"/><circle cx="80" cy="30" r="4" fill="#8bc34a"/><circle cx="50" cy="50" r="5" fill="#ff5722"/></svg>`
    },

    // FUNCIONES CUADRÁTICAS
    {
        name: "Función cuadrática",
        category: "cuadratica",
        formulas: "y = ax^2 + bx + c",
        icon: "📈",
        svg: `<svg viewBox="0 0 100 100"><path d="M 10 90 Q 50 10 90 90" stroke="#2196f3" stroke-width="3" fill="none"/><circle cx="50" cy="10" r="3" fill="#ff5722"/></svg>`
    },
    {
        name: "Raíces (función cuadrática)",
        category: "cuadratica",
        formulas: "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}",
        icon: "🔢",
        svg: `<svg viewBox="0 0 100 100"><path d="M 10 50 Q 50 10 90 50" stroke="#4caf50" stroke-width="3" fill="none"/><line x1="0" y1="50" x2="100" y2="50" stroke="#666" stroke-width="1"/><circle cx="25" cy="50" r="4" fill="#ff5722"/><circle cx="75" cy="50" r="4" fill="#ff5722"/></svg>`
    },
    {
        name: "Discriminante",
        category: "cuadratica",
        formulas: "\\Delta = b^2 - 4ac",
        icon: "Δ",
        svg: `<svg viewBox="0 0 100 100"><path d="M 10 80 Q 50 20 90 80" stroke="#9c27b0" stroke-width="3" fill="none"/><text x="50" y="55" font-size="20" fill="#9c27b0" text-anchor="middle" font-weight="bold">Δ</text></svg>`
    },
    {
        name: "Eje de simetría",
        category: "cuadratica",
        formulas: "x_v = -\\frac{b}{2a}",
        icon: "⫿",
        svg: `<svg viewBox="0 0 100 100"><path d="M 10 90 Q 50 20 90 90" stroke="#ff9800" stroke-width="3" fill="none"/><line x1="50" y1="10" x2="50" y2="95" stroke="#f44336" stroke-width="2" stroke-dasharray="4,4"/><circle cx="50" cy="20" r="4" fill="#ff5722"/></svg>`
    },
    {
        name: "Vértice",
        category: "cuadratica",
        formulas: "\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)",
        icon: "🔝",
        svg: `<svg viewBox="0 0 100 100"><path d="M 10 90 Q 50 20 90 90" stroke="#00bcd4" stroke-width="3" fill="none"/><circle cx="50" cy="20" r="5" fill="#ff5722"/><line x1="50" y1="20" x2="50" y2="95" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/><line x1="10" y1="20" x2="50" y2="20" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/></svg>`
    },
    {
        name: "Intersecciones con los ejes",
        category: "cuadratica",
        formulas: "x: y=0 \\quad | \\quad y: x=0 \\Rightarrow y=c",
        icon: "🎯",
        svg: `<svg viewBox="0 0 100 100"><path d="M 10 80 Q 50 20 90 80" stroke="#2196f3" stroke-width="3" fill="none"/><line x1="0" y1="50" x2="100" y2="50" stroke="#666" stroke-width="1"/><line x1="50" y1="0" x2="50" y2="100" stroke="#666" stroke-width="1"/><circle cx="25" cy="50" r="3" fill="#ff5722"/><circle cx="75" cy="50" r="3" fill="#ff5722"/><circle cx="50" cy="80" r="3" fill="#4caf50"/></svg>`
    },
    {
        name: "Análisis de parábola",
        category: "cuadratica",
        formulas: "a>0 \\uparrow \\quad | \\quad a<0 \\downarrow \\quad | \\quad \\Delta>0:2 \\quad \\Delta=0:1 \\quad \\Delta<0:0",
        icon: "📊",
        svg: `<svg viewBox="0 0 100 100"><path d="M 10 80 Q 50 30 90 80" stroke="#9c27b0" stroke-width="3" fill="none"/><text x="20" y="20" font-size="10" fill="#9c27b0">a>0</text><text x="50" y="90" font-size="8" fill="#666">Δ>0: 2 raíces</text></svg>`
    },
    {
        name: "Forma canónica",
        category: "cuadratica",
        formulas: "y = a(x-h)^2 + k",
        icon: "📊",
        svg: `<svg viewBox="0 0 100 100"><path d="M 20 80 Q 50 30 80 80" stroke="#e91e63" stroke-width="3" fill="none"/><circle cx="50" cy="30" r="4" fill="#ff5722"/></svg>`
    }
];

// ══════════════════════════════════════════════════════════════
// DATOS COMPLETOS DE FÓRMULAS DE FUNCIONES CON EXPLICACIONES
// ══════════════════════════════════════════════════════════════

export const functionsFormulasData = [
    // LINEALES
    {
        name: "Recta",
        formulas: ["y = mx + b"],
        explanation: "Es la ecuación general de una recta en el plano. 'm' representa la pendiente (inclinación) y 'b' es la ordenada al origen (punto donde cruza el eje Y).",
        variables: [
            "y: Variable dependiente (ordenada)",
            "x: Variable independiente (abscisa)",
            "m: Pendiente de la recta",
            "b: Ordenada al origen (intersección con eje Y)"
        ],
        example: {
            problem: "Encontrar la ecuación de la recta con pendiente m=2 que pasa por el punto (0,3).",
            steps: [
                "Datos: m = 2, punto (0,3) → b = 3",
                "Ecuación: y = mx + b",
                "Sustituimos: y = 2x + 3",
                "Respuesta: y = 2x + 3"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY)"/><line x1="20" y1="160" x2="180" y2="20" stroke="#2196f3" stroke-width="3"/><circle cx="100" cy="100-30" r="4" fill="#ff5722"/><text x="105" y="68" font-size="10" fill="#ff5722">(0,3)</text><text x="185" y="95" font-size="10" fill="#666">x</text><text x="105" y="15" font-size="10" fill="#666">y</text></svg>`
        }
    },
    {
        name: "Pendiente",
        formulas: ["m = \\frac{y_2 - y_1}{x_2 - x_1}"],
        explanation: "La pendiente mide la inclinación de la recta. Es el cambio en Y dividido por el cambio en X entre dos puntos.",
        variables: [
            "m: Pendiente de la recta",
            "(x₁, y₁): Primer punto",
            "(x₂, y₂): Segundo punto",
            "Si m > 0: la recta sube",
            "Si m < 0: la recta baja",
            "Si m = 0: la recta es horizontal"
        ],
        example: {
            problem: "Calcular la pendiente de la recta que pasa por A(1,2) y B(4,8).",
            steps: [
                "Datos: A(1,2) → x₁=1, y₁=2  |  B(4,8) → x₂=4, y₂=8",
                "Fórmula: m = (y₂ - y₁) / (x₂ - x₁)",
                "m = (8 - 2) / (4 - 1) = 6 / 3 = 2",
                "Respuesta: m = 2 (la recta sube 2 unidades por cada 1 en x)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX2)"/><line x1="50" y1="190" x2="50" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY2)"/><line x1="30" y1="170" x2="170" y2="30" stroke="#4caf50" stroke-width="3"/><circle cx="70" cy="150" r="4" fill="#ff5722"/><circle cx="150" cy="50" r="4" fill="#ff5722"/><line x1="70" y1="150" x2="150" y2="150" stroke="#f44336" stroke-width="2" stroke-dasharray="4,4"/><line x1="150" y1="150" x2="150" y2="50" stroke="#f44336" stroke-width="2" stroke-dasharray="4,4"/><text x="108" y="165" font-size="10" fill="#f44336">Δx=3</text><text x="155" y="105" font-size="10" fill="#f44336">Δy=6</text><text x="60" y="145" font-size="10" fill="#ff5722">A(1,2)</text><text x="155" y="48" font-size="10" fill="#ff5722">B(4,8)</text></svg>`
        }
    },
    {
        name: "Ordenada al origen",
        formulas: ["b = y_1 - mx_1"],
        explanation: "La ordenada al origen es el valor de Y cuando X=0, es decir, el punto donde la recta cruza el eje Y.",
        variables: [
            "b: Ordenada al origen",
            "m: Pendiente de la recta",
            "(x₁, y₁): Un punto conocido de la recta"
        ],
        example: {
            problem: "Si una recta tiene pendiente m=3 y pasa por (2,10), ¿cuál es b?",
            steps: [
                "Datos: m = 3, punto (2,10) → x₁=2, y₁=10",
                "Fórmula: b = y₁ - mx₁",
                "b = 10 - 3(2) = 10 - 6 = 4",
                "Respuesta: b = 4. La ecuación completa es y = 3x + 4"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX3)"/><line x1="50" y1="190" x2="50" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY3)"/><line x1="10" y1="145" x2="170" y2="25" stroke="#9c27b0" stroke-width="3"/><circle cx="50" cy="115" r="5" fill="#ff5722"/><text x="55" y="115" font-size="10" fill="#ff5722">b=4</text></svg>`
        }
    },
    {
        name: "Distancia entre dos puntos",
        formulas: ["d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}"],
        explanation: "Fórmula del Teorema de Pitágoras aplicada al plano cartesiano. Calcula la distancia en línea recta entre dos puntos.",
        variables: [
            "d: Distancia entre los puntos",
            "(x₁, y₁): Coordenadas del primer punto",
            "(x₂, y₂): Coordenadas del segundo punto"
        ],
        example: {
            problem: "Calcular la distancia entre P(1,2) y Q(4,6).",
            steps: [
                "Datos: P(1,2) y Q(4,6)",
                "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                "d = √[(4-1)² + (6-2)²] = √[3² + 4²]",
                "d = √[9 + 16] = √25 = 5 unidades"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="150" x2="190" y2="150" stroke="#666" stroke-width="1" marker-end="url(#arrowX4)"/><line x1="40" y1="180" x2="40" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY4)"/><circle cx="70" cy="130" r="5" fill="#00bcd4"/><circle cx="130" cy="70" r="5" fill="#00bcd4"/><line x1="70" y1="130" x2="130" y2="70" stroke="#00bcd4" stroke-width="3"/><text x="95" y="95" font-size="12" fill="#00bcd4">d=5</text><text x="60" y="145" font-size="10" fill="#00bcd4">P(1,2)</text><text x="135" y="68" font-size="10" fill="#00bcd4">Q(4,6)</text></svg>`
        }
    },
    {
        name: "Punto medio",
        formulas: ["\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)"],
        explanation: "El punto medio es el punto que se encuentra exactamente a la mitad del segmento que une dos puntos.",
        variables: [
            "M: Punto medio",
            "(x₁, y₁): Coordenadas del primer punto",
            "(x₂, y₂): Coordenadas del segundo punto"
        ],
        example: {
            problem: "Encontrar el punto medio entre A(2,4) y B(8,10).",
            steps: [
                "Datos: A(2,4) y B(8,10)",
                "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                "M = ((2+8)/2, (4+10)/2)",
                "M = (10/2, 14/2) = (5, 7)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="150" x2="190" y2="150" stroke="#666" stroke-width="1" marker-end="url(#arrowX5)"/><line x1="40" y1="180" x2="40" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY5)"/><line x1="60" y1="130" x2="140" y2="50" stroke="#cddc39" stroke-width="2"/><circle cx="60" cy="130" r="4" fill="#8bc34a"/><circle cx="140" cy="50" r="4" fill="#8bc34a"/><circle cx="100" cy="90" r="5" fill="#ff5722"/><text x="52" y="145" font-size="10" fill="#8bc34a">A(2,4)</text><text x="145" y="48" font-size="10" fill="#8bc34a">B(8,10)</text><text x="105" y="88" font-size="10" fill="#ff5722">M(5,7)</text></svg>`
        }
    },
    {
        name: "Rectas paralelas",
        formulas: ["m_1 = m_2"],
        explanation: "Dos rectas son paralelas si tienen la misma pendiente. Nunca se cruzan porque mantienen la misma inclinación.",
        variables: [
            "m₁: Pendiente de la primera recta",
            "m₂: Pendiente de la segunda recta"
        ],
        example: {
            problem: "¿Son paralelas y=2x+1 e y=2x-3?",
            steps: [
                "Recta 1: y = 2x + 1 → m₁ = 2",
                "Recta 2: y = 2x - 3 → m₂ = 2",
                "Como m₁ = m₂ = 2",
                "Respuesta: SÍ son paralelas"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX6)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY6)"/><line x1="20" y1="140" x2="180" y2="20" stroke="#e91e63" stroke-width="3"/><line x1="20" y1="170" x2="180" y2="50" stroke="#e91e63" stroke-width="3" stroke-dasharray="5,5"/><text x="150" y="35" font-size="10" fill="#e91e63">y=2x+1</text><text x="150" y="65" font-size="10" fill="#e91e63">y=2x-3</text></svg>`
        }
    },
    {
        name: "Rectas perpendiculares",
        formulas: ["m_1 \\cdot m_2 = -1", "m_\\perp = -\\frac{1}{m}"],
        explanation: "Dos rectas son perpendiculares si el producto de sus pendientes es -1. Se cruzan formando un ángulo de 90°.",
        variables: [
            "m₁: Pendiente de la primera recta",
            "m₂: Pendiente de la segunda recta",
            "m⊥: Pendiente perpendicular a m"
        ],
        example: {
            problem: "Encontrar la recta perpendicular a y=2x+1 que pasa por (0,5).",
            steps: [
                "Recta original: y = 2x + 1 → m = 2",
                "Pendiente perpendicular: m⊥ = -1/2 = -0.5",
                "Pasa por (0,5) → b = 5",
                "Respuesta: y = -0.5x + 5"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX7)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY7)"/><line x1="20" y1="140" x2="180" y2="20" stroke="#673ab7" stroke-width="3"/><line x1="40" y1="20" x2="160" y2="140" stroke="#3f51b5" stroke-width="3"/><circle cx="100" cy="80" r="3" fill="#fff" stroke="#000"/><path d="M 95 75 L 95 85 L 105 85" stroke="#000" stroke-width="1.5" fill="none"/></svg>`
        }
    },

    // CUADRÁTICAS
    {
        name: "Recta por punto y pendiente",
        formulas: ["y - y_1 = m(x - x_1)"],
        explanation: "Forma de la ecuación de recta que se usa cuando se conoce un punto y la pendiente. Es muy útil en problemas donde la recta no pasa por el origen.",
        variables: [
            "m: Pendiente de la recta",
            "(x₁, y₁): Punto conocido por donde pasa la recta",
            "(x, y): Punto genérico de la recta"
        ],
        example: {
            problem: "Encontrar la ecuación de la recta con pendiente m=2 que pasa por (3,5).",
            steps: [
                "Datos: m = 2, punto (3,5) → x₁=3, y₁=5",
                "Ecuación: y - y₁ = m(x - x₁)",
                "y - 5 = 2(x - 3)",
                "y - 5 = 2x - 6",
                "y = 2x - 1"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX14" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY14" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX14)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY14)"/><line x1="20" y1="160" x2="180" y2="20" stroke="#ff5722" stroke-width="3"/><circle cx="120" cy="60" r="5" fill="#ff5722"/><text x="125" y="58" font-size="10" fill="#ff5722">(3,5)</text><text x="150" y="35" font-size="10" fill="#ff5722">y=2x-1</text></svg>`
        }
    },

    // CUADRÁTICAS
    {
        name: "Función cuadrática",
        formulas: ["y = ax^2 + bx + c"],
        explanation: "Es una función polinómica de grado 2. Su gráfica es una parábola que abre hacia arriba si a>0 o hacia abajo si a<0.",
        variables: [
            "y: Variable dependiente",
            "x: Variable independiente",
            "a: Coeficiente principal (≠ 0)",
            "b: Coeficiente lineal",
            "c: Término independiente (ordenada al origen)"
        ],
        example: {
            problem: "Graficar y = x² - 4x + 3",
            steps: [
                "Datos: a=1, b=-4, c=3",
                "Como a > 0, la parábola abre hacia arriba",
                "Vértice: x = -b/(2a) = 4/2 = 2",
                "y(2) = 4 - 8 + 3 = -1 → Vértice: (2, -1)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX8" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY8" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX8)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY8)"/><path d="M 30 140 Q 100 50 170 140" stroke="#2196f3" stroke-width="3" fill="none"/><circle cx="100" cy="50" r="4" fill="#ff5722"/><text x="105" y="48" font-size="10" fill="#ff5722">V(2,-1)</text></svg>`
        }
    },
    {
        name: "Raíces (fórmula general)",
        formulas: ["x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}"],
        explanation: "Fórmula que encuentra los valores de x donde la parábola cruza el eje X (donde y=0). También llamada fórmula de Bhaskara.",
        variables: [
            "x: Raíces de la ecuación",
            "a, b, c: Coeficientes de ax²+bx+c=0",
            "±: Indica que hay dos soluciones posibles"
        ],
        example: {
            problem: "Resolver x² - 5x + 6 = 0",
            steps: [
                "Datos: a=1, b=-5, c=6",
                "x = [5 ± √(25-24)] / 2",
                "x = [5 ± √1] / 2 = [5 ± 1] / 2",
                "x₁ = 6/2 = 3  |  x₂ = 4/2 = 2"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX9" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY9" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX9)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY9)"/><path d="M 30 140 Q 100 30 170 140" stroke="#4caf50" stroke-width="3" fill="none"/><circle cx="75" cy="100" r="4" fill="#ff5722"/><circle cx="125" cy="100" r="4" fill="#ff5722"/><text x="70" y="115" font-size="10" fill="#ff5722">x₁=2</text><text x="120" y="115" font-size="10" fill="#ff5722">x₂=3</text></svg>`
        }
    },
    {
        name: "Discriminante",
        formulas: ["\\Delta = b^2 - 4ac"],
        explanation: "El discriminante determina cuántas raíces reales tiene la ecuación cuadrática.",
        variables: [
            "Δ (Delta): Discriminante",
            "Si Δ > 0: dos raíces reales distintas",
            "Si Δ = 0: una raíz real doble",
            "Si Δ < 0: no hay raíces reales"
        ],
        example: {
            problem: "Determinar el tipo de raíces de x² + 2x + 5 = 0",
            steps: [
                "Datos: a=1, b=2, c=5",
                "Δ = b² - 4ac = 4 - 4(1)(5)",
                "Δ = 4 - 20 = -16",
                "Como Δ < 0, no tiene raíces reales"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX10" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY10" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX10)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY10)"/><path d="M 30 90 Q 100 20 170 90" stroke="#9c27b0" stroke-width="3" fill="none"/><text x="85" y="60" font-size="18" fill="#9c27b0" font-weight="bold">Δ<0</text><text x="70" y="180" font-size="9" fill="#666">Sin raíces reales</text></svg>`
        }
    },
    {
        name: "Eje de simetría",
        formulas: ["x_v = -\\frac{b}{2a}"],
        explanation: "Es la recta vertical que divide la parábola en dos partes simétricas. Pasa por el vértice.",
        variables: [
            "xᵥ: Coordenada x del vértice (eje de simetría)",
            "a, b: Coeficientes de la función cuadrática"
        ],
        example: {
            problem: "Encontrar el eje de simetría de y = 2x² - 8x + 5",
            steps: [
                "Datos: a=2, b=-8",
                "xᵥ = -b/(2a) = -(-8)/(2·2)",
                "xᵥ = 8/4 = 2",
                "Respuesta: El eje es la recta x = 2"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX11" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY11" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX11)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY11)"/><path d="M 30 150 Q 100 40 170 150" stroke="#ff9800" stroke-width="3" fill="none"/><line x1="100" y1="20" x2="100" y2="180" stroke="#f44336" stroke-width="2" stroke-dasharray="4,4"/><circle cx="100" cy="40" r="4" fill="#ff5722"/><text x="105" y="35" font-size="10" fill="#ff5722">Vértice</text><text x="105" y="170" font-size="10" fill="#f44336">x=2</text></svg>`
        }
    },
    {
        name: "Vértice",
        formulas: ["\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right)", "V(x_v, y_v)"],
        explanation: "El vértice es el punto máximo (si a<0) o mínimo (si a>0) de la parábola. Es el punto más alto o más bajo de la curva.",
        variables: [
            "V: Vértice de la parábola",
            "xᵥ = -b/(2a): Coordenada x del vértice",
            "yᵥ = -Δ/(4a): Coordenada y del vértice",
            "Δ = b²-4ac: Discriminante"
        ],
        example: {
            problem: "Encontrar el vértice de y = x² - 4x + 3",
            steps: [
                "Datos: a=1, b=-4, c=3",
                "xᵥ = -(-4)/(2·1) = 4/2 = 2",
                "yᵥ = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1",
                "Respuesta: V(2, -1)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX12" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY12" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX12)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY12)"/><path d="M 30 150 Q 100 50 170 150" stroke="#00bcd4" stroke-width="3" fill="none"/><circle cx="100" cy="50" r="5" fill="#ff5722"/><line x1="100" y1="50" x2="100" y2="180" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/><line x1="30" y1="50" x2="100" y2="50" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/><text x="105" y="48" font-size="10" fill="#ff5722">V(2,-1)</text></svg>`
        }
    },
    {
        name: "Intersecciones con los ejes",
        formulas: ["x: y=0 \\quad | \\quad y: x=0 \\Rightarrow y=c"],
        explanation: "Para encontrar las intersecciones con los ejes, se iguala a cero la variable correspondiente. Con el eje X se buscan las raíces (y=0), con el eje Y se evalúa en x=0.",
        variables: [
            "Intersección con eje X: resolver ax² + bx + c = 0",
            "Intersección con eje Y: evaluar y(0) = c",
            "c: Ordenada al origen (intersección con eje Y)"
        ],
        example: {
            problem: "Encontrar las intersecciones de y = x² - 5x + 6 con los ejes.",
            steps: [
                "Con eje Y: y(0) = 0² - 5(0) + 6 = 6 → (0,6)",
                "Con eje X: x² - 5x + 6 = 0",
                "(x-2)(x-3) = 0 → x₁=2, x₂=3",
                "Intersecciones: (2,0) y (3,0)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX15" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY15" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX15)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY15)"/><path d="M 30 140 Q 100 40 170 140" stroke="#2196f3" stroke-width="3" fill="none"/><circle cx="100" cy="140" r="4" fill="#4caf50"/><text x="105" y="145" font-size="10" fill="#4caf50">(0,6)</text><circle cx="130" cy="100" r="4" fill="#ff5722"/><circle cx="170" cy="100" r="4" fill="#ff5722"/><text x="125" y="115" font-size="10" fill="#ff5722">(2,0)</text><text x="165" y="115" font-size="10" fill="#ff5722">(3,0)</text></svg>`
        }
    },
    {
        name: "Análisis de parábola",
        formulas: ["a>0 \\uparrow \\quad | \\quad a<0 \\downarrow \\quad | \\quad \\Delta>0:2 \\quad \\Delta=0:1 \\quad \\Delta<0:0"],
        explanation: "Análisis rápido de las características principales de una parábola: concavidad según el signo de 'a' y cantidad de raíces según el discriminante.",
        variables: [
            "a > 0: parábola abre hacia arriba (mínimo)",
            "a < 0: parábola abre hacia abajo (máximo)",
            "Δ > 0: dos raíces reales distintas",
            "Δ = 0: una raíz real doble",
            "Δ < 0: no hay raíces reales"
        ],
        example: {
            problem: "Analizar rápidamente y = x² - 4x + 3",
            steps: [
                "Datos: a=1 (>0), b=-4, c=3",
                "Concavidad: a > 0 → abre hacia arriba (tiene mínimo)",
                "Discriminante: Δ = (-4)² - 4(1)(3) = 16 - 12 = 4",
                "Como Δ > 0 → tiene 2 raíces reales distintas"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX16" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY16" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX16)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY16)"/><path d="M 30 140 Q 100 40 170 140" stroke="#9c27b0" stroke-width="3" fill="none"/><text x="20" y="30" font-size="12" fill="#9c27b0">a>0 ↑</text><text x="150" y="90" font-size="10" fill="#9c27b0">Δ>0: 2 raíces</text><circle cx="75" cy="100" r="3" fill="#ff5722"/><circle cx="125" cy="100" r="3" fill="#ff5722"/></svg>`
        }
    },
    {
        name: "Forma canónica",
        formulas: ["y = a(x-h)^2 + k"],
        explanation: "Forma alternativa de escribir una función cuadrática donde se ve claramente el vértice V(h,k).",
        variables: [
            "a: Coeficiente que determina la concavidad",
            "h: Coordenada x del vértice",
            "k: Coordenada y del vértice",
            "V(h, k): Vértice de la parábola"
        ],
        example: {
            problem: "Convertir y = x² - 6x + 5 a forma canónica",
            steps: [
                "Completar cuadrados: y = (x² - 6x + 9) - 9 + 5",
                "y = (x - 3)² - 4",
                "Forma canónica: y = (x - 3)² - 4",
                "Vértice: V(3, -4)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowX13" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowY13" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowX13)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowY13)"/><path d="M 40 150 Q 110 60 180 150" stroke="#e91e63" stroke-width="3" fill="none"/><circle cx="110" cy="60" r="5" fill="#ff5722"/><text x="115" y="58" font-size="10" fill="#ff5722">V(h,k)</text><text x="70" y="180" font-size="9" fill="#666">y=a(x-h)²+k</text></svg>`
        }
    }
];

// Tips para funciones (para modo practice futuro)
const functionsTips = {
    "Recta": [
        "La pendiente 'm' indica la inclinación de la recta",
        "El valor 'b' es donde la recta cruza el eje Y"
    ],
    "Pendiente": [
        "Una pendiente positiva indica que la recta sube",
        "Una pendiente negativa indica que la recta baja"
    ],
    "Función cuadrática": [
        "Si a>0 la parábola abre hacia arriba, si a<0 abre hacia abajo",
        "El término 'c' es la ordenada al origen"
    ],
    "Discriminante": [
        "Si Δ > 0: dos raíces reales distintas",
        "Si Δ = 0: una raíz real doble",
        "Si Δ < 0: no hay raíces reales"
    ],
    "Vértice": [
        "El vértice es el punto máximo o mínimo de la parábola",
        "El eje de simetría pasa por el vértice"
    ]
};
