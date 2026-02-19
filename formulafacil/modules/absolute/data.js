// ══════════════════════════════════════════════════════════════
// DATOS DE VALOR ABSOLUTO - PRIMER PARCIAL
// ══════════════════════════════════════════════════════════════

export const absoluteValueData = [
    // DEFINICIÓN Y CONCEPTOS BÁSICOS
    {
        name: "Definición de valor absoluto",
        category: "definicion",
        formulas: "|x| = \\begin{cases} x & \\text{si } x \\geq 0 \\\\ -x & \\text{si } x < 0 \\end{cases}",
        icon: "📏",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="80" y2="50" stroke="#2196f3" stroke-width="2"/><circle cx="50" cy="50" r="3" fill="#ff5722"/><text x="45" y="40" font-size="12" fill="#2196f3">|x|</text></svg>`
    },
    {
        name: "Distancia en la recta",
        category: "definicion",
        formulas: "|x - a| = \\text{distancia entre } x \\text{ y } a",
        icon: "📐",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="90" y2="50" stroke="#4caf50" stroke-width="2"/><circle cx="30" cy="50" r="3" fill="#ff5722"/><circle cx="70" cy="50" r="3" fill="#ff5722"/><text x="25" y="40" font-size="10" fill="#4caf50">a</text><text x="65" y="40" font-size="10" fill="#4caf50">x</text><text x="45" y="65" font-size="10" fill="#4caf50">|x-a|</text></svg>`
    },
    {
        name: "Propiedades básicas",
        category: "propiedades",
        formulas: "|x| \\geq 0 \\quad | \\quad |x| = 0 \\Leftrightarrow x = 0 \\quad | \\quad |-x| = |x|",
        icon: "🔧",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="30" font-size="12" fill="#9c27b0" text-anchor="middle">|x| ≥ 0</text><text x="50" y="50" font-size="12" fill="#9c27b0" text-anchor="middle">|x| = 0 ⇔ x = 0</text><text x="50" y="70" font-size="12" fill="#9c27b0" text-anchor="middle">|-x| = |x|</text></svg>`
    },

    // ECUACIONES CON VALOR ABSOLUTO
    {
        name: "Ecuación |x| = a",
        category: "ecuaciones",
        formulas: "|x| = a \\Rightarrow x = a \\quad \\text{o} \\quad x = -a",
        icon: "⚖️",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="90" y2="50" stroke="#ff9800" stroke-width="2"/><circle cx="25" cy="50" r="3" fill="#ff5722"/><circle cx="75" cy="50" r="3" fill="#ff5722"/><text x="20" y="40" font-size="10" fill="#ff9800">-a</text><text x="70" y="40" font-size="10" fill="#ff9800">a</text><text x="45" y="65" font-size="10" fill="#ff9800">|x|=a</text></svg>`
    },
    {
        name: "Ecuación |x| = 0",
        category: "ecuaciones",
        formulas: "|x| = 0 \\Rightarrow x = 0",
        icon: "🎯",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="90" y2="50" stroke="#673ab7" stroke-width="2"/><circle cx="50" cy="50" r="4" fill="#ff5722"/><text x="45" y="40" font-size="10" fill="#673ab7">0</text></svg>`
    },
    {
        name: "Ecuación |x - a| = b",
        category: "ecuaciones",
        formulas: "|x - a| = b \\Rightarrow x - a = b \\quad \\text{o} \\quad x - a = -b",
        icon: "📍",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="90" y2="50" stroke="#e91e63" stroke-width="2"/><circle cx="35" cy="50" r="3" fill="#ff5722"/><circle cx="65" cy="50" r="3" fill="#ff5722"/><circle cx="50" cy="50" r="3" fill="#4caf50"/><text x="45" y="40" font-size="10" fill="#4caf50">a</text><text x="30" y="40" font-size="10" fill="#e91e63">a-b</text><text x="60" y="40" font-size="10" fill="#e91e63">a+b</text></svg>`
    },

    // INECUACIONES CON VALOR ABSOLUTO
    {
        name: "Inecuación |x| < a",
        category: "inecuaciones",
        formulas: "|x| < a \\Rightarrow -a < x < a",
        icon: "🔷",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="90" y2="50" stroke="#00bcd4" stroke-width="2"/><circle cx="30" cy="50" r="3" fill="#ff5722"/><circle cx="70" cy="50" r="3" fill="#ff5722"/><line x1="30" y1="45" x2="70" y2="45" stroke="#00bcd4" stroke-width="3"/><text x="25" y="40" font-size="10" fill="#00bcd4">-a</text><text x="65" y="40" font-size="10" fill="#00bcd4">a</text></svg>`
    },
    {
        name: "Inecuación |x| > a",
        category: "inecuaciones",
        formulas: "|x| > a \\Rightarrow x < -a \\quad \\text{o} \\quad x > a",
        icon: "🔸",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="90" y2="50" stroke="#ff5722" stroke-width="2"/><circle cx="25" cy="50" r="3" fill="#ff5722"/><circle cx="75" cy="50" r="3" fill="#ff5722"/><line x1="10" y1="45" x2="25" y2="45" stroke="#ff5722" stroke-width="3"/><line x1="75" y1="45" x2="90" y2="45" stroke="#ff5722" stroke-width="3"/><text x="20" y="40" font-size="10" fill="#ff5722">-a</text><text x="70" y="40" font-size="10" fill="#ff5722">a</text></svg>`
    },
    {
        name: "Inecuación |x| ≤ a",
        category: "inecuaciones",
        formulas: "|x| \\leq a \\Rightarrow -a \\leq x \\leq a",
        icon: "🔷",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="90" y2="50" stroke="#3f51b5" stroke-width="2"/><circle cx="30" cy="50" r="3" fill="#ff5722"/><circle cx="70" cy="50" r="3" fill="#ff5722"/><line x1="30" y1="45" x2="70" y2="45" stroke="#3f51b5" stroke-width="4"/><text x="25" y="40" font-size="10" fill="#3f51b5">-a</text><text x="65" y="40" font-size="10" fill="#3f51b5">a</text></svg>`
    },
    {
        name: "Inecuación |x| ≥ a",
        category: "inecuaciones",
        formulas: "|x| \\geq a \\Rightarrow x \\leq -a \\quad \\text{o} \\quad x \\geq a",
        icon: "🔸",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="90" y2="50" stroke="#795548" stroke-width="2"/><circle cx="25" cy="50" r="3" fill="#ff5722"/><circle cx="75" cy="50" r="3" fill="#ff5722"/><line x1="10" y1="45" x2="25" y2="45" stroke="#795548" stroke-width="4"/><line x1="75" y1="45" x2="90" y2="45" stroke="#795548" stroke-width="4"/><text x="20" y="40" font-size="10" fill="#795548">-a</text><text x="70" y="40" font-size="10" fill="#795548">a</text></svg>`
    },

    // ERRORES TÍPICOS
    {
        name: "Error típico: |x|² = x",
        category: "errores",
        formulas: "❌ |x|^2 = x \\quad \\quad \\quad ✅ |x|^2 = x^2",
        icon: "⚠️",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="30" font-size="12" fill="#f44336" text-anchor="middle">❌ |x|² = x</text><text x="50" y="50" font-size="12" fill="#4caf50" text-anchor="middle">✅ |x|² = x²</text><text x="50" y="70" font-size="10" fill="#666" text-anchor="middle">El valor absoluto siempre es ≥ 0</text></svg>`
    },
    {
        name: "Error típico: |x + y| = |x| + |y|",
        category: "errores",
        formulas: "❌ |x + y| = |x| + |y| \\quad ✅ |x + y| \\leq |x| + |y|",
        icon: "⚠️",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="30" font-size="11" fill="#f44336" text-anchor="middle">❌ |x + y| = |x| + |y|</text><text x="50" y="50" font-size="11" fill="#4caf50" text-anchor="middle">✅ |x + y| ≤ |x| + |y|</text><text x="50" y="70" font-size="10" fill="#666" text-anchor="middle">Desigualdad triangular</text></svg>`
    },

    // PROPIEDADES AVANZADAS
    {
        name: "Desigualdad triangular",
        category: "propiedades",
        formulas: "|x + y| \\leq |x| + |y|",
        icon: "🔺",
        svg: `<svg viewBox="0 0 100 100"><path d="M 30 70 L 70 70 L 50 30 Z" stroke="#9c27b0" stroke-width="2" fill="none"/><text x="50" y="85" font-size="10" fill="#9c27b0" text-anchor="middle">|x + y| ≤ |x| + |y|</text></svg>`
    },
    {
        name: "Valor absoluto y productos",
        category: "propiedades",
        formulas: "|xy| = |x| \\cdot |y| \\quad | \\quad \\left|\\frac{x}{y}\\right| = \\frac{|x|}{|y|}",
        icon: "🔢",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" font-size="11" fill="#607d8b" text-anchor="middle">|xy| = |x| · |y|</text><text x="50" y="55" font-size="11" fill="#607d8b" text-anchor="middle">|x/y| = |x|/|y|</text><text x="50" y="75" font-size="10" fill="#666" text-anchor="middle">y ≠ 0</text></svg>`
    }
];

// ══════════════════════════════════════════════════════════════
// DATOS COMPLETOS DE FÓRMULAS DE VALOR ABSOLUTO CON EXPLICACIONES
// ══════════════════════════════════════════════════════════════

export const absoluteValueFormulasData = [
    // DEFINICIÓN
    {
        name: "Definición de valor absoluto",
        formulas: ["|x| = \\begin{cases} x & \\text{si } x \\geq 0 \\\\ -x & \\text{si } x < 0 \\end{cases}"],
        explanation: "El valor absoluto de un número es su distancia al cero en la recta real. Siempre es un valor no negativo.",
        variables: [
            "|x|: Valor absoluto de x",
            "x: Número real",
            "Si x ≥ 0: |x| = x (el número es positivo o cero)",
            "Si x < 0: |x| = -x (se cambia el signo)"
        ],
        example: {
            problem: "Calcular |5|, |-3| y |0|",
            steps: [
                "|5| = 5 (porque 5 ≥ 0)",
                "|-3| = -(-3) = 3 (porque -3 < 0)",
                "|0| = 0 (porque 0 ≥ 0)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXAV" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker><marker id="arrowYAV" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="10" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXAV)"/><line x1="100" y1="190" x2="100" y2="10" stroke="#666" stroke-width="1" marker-end="url(#arrowYAV)"/><circle cx="150" cy="100" r="4" fill="#ff5722"/><text x="155" y="95" font-size="10" fill="#ff5722">5</text><circle cx="50" cy="100" r="4" fill="#4caf50"/><text x="40" y="95" font-size="10" fill="#4caf50">-3</text><circle cx="100" cy="100" r="4" fill="#9c27b0"/><text x="105" y="95" font-size="10" fill="#9c27b0">0</text></svg>`
        }
    },

    // DISTANCIA
    {
        name: "Distancia en la recta real",
        formulas: ["|x - a| = \\text{distancia entre } x \\text{ y } a"],
        explanation: "El valor absoluto de la diferencia entre dos números representa la distancia entre ellos en la recta real.",
        variables: [
            "|x - a|: Distancia entre x y a",
            "x: Primer punto",
            "a: Segundo punto",
            "La distancia siempre es positiva"
        ],
        example: {
            problem: "Calcular la distancia entre 7 y 3 en la recta real.",
            steps: [
                "Usamos la fórmula: |x - a|",
                "|7 - 3| = |4| = 4",
                "También: |3 - 7| = |-4| = 4",
                "La distancia entre 7 y 3 es 4 unidades"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXAV2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXAV2)"/><circle cx="80" cy="100" r="4" fill="#ff5722"/><text x="75" y="90" font-size="10" fill="#ff5722">3</text><circle cx="140" cy="100" r="4" fill="#ff5722"/><text x="135" y="90" font-size="10" fill="#ff5722">7</text><line x1="80" y1="85" x2="140" y2="85" stroke="#4caf50" stroke-width="2"/><text x="105" y="80" font-size="10" fill="#4caf50">distancia = 4</text></svg>`
        }
    },

    // ECUACIONES
    {
        name: "Ecuación |x| = a (a > 0)",
        formulas: ["|x| = a \\Rightarrow x = a \\quad \\text{o} \\quad x = -a"],
        explanation: "Cuando el valor absoluto de x es igual a un número positivo, x puede ser ese número o su opuesto.",
        variables: [
            "a: Número positivo (a > 0)",
            "x: Variable desconocida",
            "Siempre hay dos soluciones: x = a y x = -a"
        ],
        example: {
            problem: "Resolver |x| = 5",
            steps: [
                "Como a = 5 > 0, aplicamos la fórmula",
                "x = 5 o x = -5",
                "Soluciones: x₁ = 5, x₂ = -5"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXAV3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXAV3)"/><circle cx="60" cy="100" r="4" fill="#ff5722"/><text x="50" y="90" font-size="10" fill="#ff5722">-5</text><circle cx="140" cy="100" r="4" fill="#ff5722"/><text x="135" y="90" font-size="10" fill="#ff5722">5</text><text x="100" y="130" font-size="12" fill="#ff9800" text-anchor="middle">|x| = 5</text></svg>`
        }
    },

    {
        name: "Ecuación |x| = 0",
        formulas: ["|x| = 0 \\Rightarrow x = 0"],
        explanation: "El único número cuyo valor absoluto es cero es el cero mismo.",
        variables: [
            "|x|: Valor absoluto de x",
            "x: Variable (solo puede ser 0)"
        ],
        example: {
            problem: "Resolver |x| = 0",
            steps: [
                "Por definición de valor absoluto",
                "La única solución es x = 0"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXAV4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXAV4)"/><circle cx="100" cy="100" r="5" fill="#ff5722"/><text x="105" y="95" font-size="10" fill="#ff5722">0</text><text x="100" y="130" font-size="12" fill="#ff9800" text-anchor="middle">|x| = 0</text></svg>`
        }
    },

    // INECUACIONES
    {
        name: "Inecuación |x| < a (a > 0)",
        formulas: ["|x| < a \\Rightarrow -a < x < a"],
        explanation: "Cuando el valor absoluto de x es menor que un número positivo, x está entre el opuesto de ese número y el número mismo.",
        variables: [
            "a: Número positivo (a > 0)",
            "x: Variable que debe estar en el intervalo (-a, a)",
            "Es un intervalo abierto"
        ],
        example: {
            problem: "Resolver |x| < 3",
            steps: [
                "Como a = 3 > 0, aplicamos la fórmula",
                "-3 < x < 3",
                "Solución: x ∈ (-3, 3)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXAV5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXAV5)"/><circle cx="70" cy="100" r="3" fill="#ff5722"/><text x="60" y="90" font-size="10" fill="#ff5722">-3</text><circle cx="130" cy="100" r="3" fill="#ff5722"/><text x="125" y="90" font-size="10" fill="#ff5722">3</text><line x1="70" y1="85" x2="130" y2="85" stroke="#00bcd4" stroke-width="3"/><text x="95" y="80" font-size="10" fill="#00bcd4">|x| < 3</text></svg>`
        }
    },

    {
        name: "Inecuación |x| > a (a > 0)",
        formulas: ["|x| > a \\Rightarrow x < -a \\quad \\text{o} \\quad x > a"],
        explanation: "Cuando el valor absoluto de x es mayor que un número positivo, x está fuera del intervalo [-a, a].",
        variables: [
            "a: Número positivo (a > 0)",
            "x: Variable que debe ser menor que -a o mayor que a",
            "Son dos intervalos abiertos"
        ],
        example: {
            problem: "Resolver |x| > 2",
            steps: [
                "Como a = 2 > 0, aplicamos la fórmula",
                "x < -2 o x > 2",
                "Solución: x ∈ (-∞, -2) ∪ (2, ∞)"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXAV6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXAV6)"/><circle cx="80" cy="100" r="3" fill="#ff5722"/><text x="70" y="90" font-size="10" fill="#ff5722">-2</text><circle cx="120" cy="100" r="3" fill="#ff5722"/><text x="115" y="90" font-size="10" fill="#ff5722">2</text><line x1="20" y1="85" x2="80" y2="85" stroke="#ff5722" stroke-width="3"/><line x1="120" y1="85" x2="180" y2="85" stroke="#ff5722" stroke-width="3"/><text x="95" y="80" font-size="10" fill="#ff5722">|x| > 2</text></svg>`
        }
    },

    // ERRORES TÍPICOS
    {
        name: "Error típico: |x|² = x",
        formulas: ["❌ |x|^2 = x \\quad \\quad \\quad ✅ |x|^2 = x^2"],
        explanation: "Un error común es pensar que elevar al cuadrado elimina el valor absoluto. En realidad, |x|² = x² porque el valor absoluto siempre es no negativo.",
        variables: [
            "|x|²: Cuadrado del valor absoluto",
            "x²: Cuadrado del número",
            "Ambos son siempre ≥ 0"
        ],
        example: {
            problem: "Calcular |-3|²",
            steps: [
                "Forma incorrecta: |-3|² = -3 = -3 ❌",
                "Forma correcta: |-3|² = 3² = 9 ✅",
                "El valor absoluto siempre es positivo antes de elevar"
            ],
            svg: `<svg viewBox="0 0 200 200"><text x="100" y="40" font-size="14" fill="#f44336" text-anchor="middle">❌ |-3|² = -3</text><text x="100" y="70" font-size="14" fill="#4caf50" text-anchor="middle">✅ |-3|² = 3² = 9</text><text x="100" y="100" font-size="12" fill="#666" text-anchor="middle">El valor absoluto siempre es ≥ 0</text><text x="100" y="130" font-size="12" fill="#666" text-anchor="middle">antes de cualquier operación</text></svg>`
        }
    }
];

// Tips para valor absoluto (para modo practice futuro)
const absoluteValueTips = {
    "Definición de valor absoluto": [
        "El valor absoluto siempre es un número no negativo",
        "Representa la distancia al cero en la recta real"
    ],
    "Ecuación |x| = a": [
        "Si a > 0, siempre hay dos soluciones",
        "Si a = 0, solo hay una solución: x = 0",
        "Si a < 0, no hay solución"
    ],
    "Inecuación |x| < a": [
        "La solución siempre es un intervalo abierto (-a, a)",
        "x está 'cerca' del cero"
    ],
    "Inecuación |x| > a": [
        "La solución son dos intervalos abiertos",
        "x está 'lejos' del cero"
    ]
};
