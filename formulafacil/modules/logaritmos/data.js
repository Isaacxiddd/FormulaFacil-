// ══════════════════════════════════════════════════════════════
// DATOS DE LOGARITMOS
// ══════════════════════════════════════════════════════════════

export const logaritmosData = [
    {
        name: "Logaritmo Base 10",
        formulas: "\\log_{10} x = \\log x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="50" text-anchor="middle" font-size="20" fill="#2196f3">log</text></svg>`
    },
    {
        name: "Logaritmo Natural",
        formulas: "\\ln x = \\log_e x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="50" text-anchor="middle" font-size="20" fill="#4caf50">ln</text></svg>`
    },
    {
        name: "Logaritmo Base a",
        formulas: "\\log_a b = \\frac{\\ln b}{\\ln a}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="16" fill="#ff9800">log</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#ff9800">a</text></svg>`
    },
    {
        name: "Propiedad Producto",
        formulas: "\\log_a (xy) = \\log_a x + \\log_a y",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#9c27b0">log(xy)</text><text x="50" y="60" text-anchor="middle" font-size="14" fill="#9c27b0">=</text></svg>`
    },
    {
        name: "Propiedad Cociente",
        formulas: "\\log_a \\frac{x}{y} = \\log_a x - \\log_a y",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#f44336">log(x/y)</text><text x="50" y="60" text-anchor="middle" font-size="14" fill="#f44336">=</text></svg>`
    }
];

// ══════════════════════════════════════════════════════════════
// TIPS POR FIGURA (2-4 pistas por cada una)
// ══════════════════════════════════════════════════════════════

const figureTips = {
    "Logaritmo Base 10": [
        "Es el logaritmo más común en calculadoras",
        "Se usa para medir magnitudes como pH y decibeles",
        "log(1000) = 3 porque 10³ = 1000"
    ],
    "Logaritmo Natural": [
        "Usa el número e ≈ 2.71828 como base",
        "Es fundamental en cálculo y crecimiento exponencial",
        "ln(e) = 1 porque e¹ = e"
    ],
    "Logaritmo Base a": [
        "Permite cambiar entre diferentes bases",
        "Útil cuando trabajas con bases no estándar",
        "log₂ 8 = 3 porque 2³ = 8"
    ],
    "Propiedad Producto": [
        "El logaritmo de un producto es la suma de logaritmos",
        "Simplifica multiplicaciones complejas",
        "log(2×3) = log(2) + log(3)"
    ],
    "Propiedad Cociente": [
        "El logaritmo de una división es la resta de logaritmos", 
        "Convierte divisiones en restas más simples",
        "log(8/2) = log(8) - log(2)"
    ]
};

// ══════════════════════════════════════════════════════════════
// DATOS COMPLETOS DE FÓRMULAS CON EXPLICACIONES Y EJERCICIOS
// ══════════════════════════════════════════════════════════════

export const logaritmosFormulasData = [
    {
        name: "Logaritmo Base 10",
        formulas: ["\\log_{10} x = \\log x"],
        explanation: "El logaritmo base 10 es el logaritmo común o decimal. Es el inverso de 10 elevado a una potencia.",
        variables: [
            "log: Logaritmo base 10",
            "x: Argumento del logaritmo (debe ser positivo)"
        ],
        example: {
            problem: "Calcular log(1000)",
            answer: "3",
            steps: [
                "log(1000) = ?",
                "10^? = 1000",
                "10^3 = 1000",
                "Por lo tanto, log(1000) = 3"
            ]
        }
    },
    {
        name: "Logaritmo Natural",
        formulas: ["\\ln x = \\log_e x"],
        explanation: "El logaritmo natural usa la constante e (aproximadamente 2.71828) como base. Es fundamental en cálculo.",
        variables: [
            "ln: Logaritmo natural",
            "e: Número de Euler (≈ 2.71828)",
            "x: Argumento del logaritmo (debe ser positivo)"
        ],
        example: {
            problem: "Calcular ln(e^2)",
            answer: "2",
            steps: [
                "ln(e^2) = ?",
                "Por definición, ln(e^x) = x",
                "Por lo tanto, ln(e^2) = 2"
            ]
        }
    },
    {
        name: "Logaritmo Base a",
        formulas: ["\\log_a b = \\frac{\\ln b}{\\ln a}"],
        explanation: "Permite cambiar de base usando logaritmos naturales. Es útil cuando calculadoras solo tienen ln o log.",
        variables: [
            "log_a: Logaritmo en base a",
            "a: Base del logaritmo (a > 0, a ≠ 1)",
            "b: Argumento del logaritmo (b > 0)"
        ],
        example: {
            problem: "Calcular log_2 8 usando cambio de base",
            answer: "3",
            steps: [
                "log_2 8 = ln(8)/ln(2)",
                "ln(8) ≈ 2.079",
                "ln(2) ≈ 0.693",
                "log_2 8 ≈ 2.079/0.693 ≈ 3"
            ]
        }
    },
    {
        name: "Propiedad Producto",
        formulas: ["\\log_a (xy) = \\log_a x + \\log_a y"],
        explanation: "El logaritmo de un producto es igual a la suma de los logaritmos de los factores.",
        variables: [
            "log_a: Logaritmo en base a",
            "x, y: Argumentos positivos"
        ],
        example: {
            problem: "Calcular log(100 × 1000)",
            answer: "5",
            steps: [
                "log(100 × 1000) = log(100) + log(1000)",
                "log(100) = 2",
                "log(1000) = 3",
                "log(100 × 1000) = 2 + 3 = 5"
            ]
        }
    },
    {
        name: "Propiedad Cociente",
        formulas: ["\\log_a \\frac{x}{y} = \\log_a x - \\log_a y"],
        explanation: "El logaritmo de un cociente es igual a la diferencia de los logaritmos del numerador y denominador.",
        variables: [
            "log_a: Logaritmo en base a",
            "x: Numerador positivo",
            "y: Denominador positivo"
        ],
        example: {
            problem: "Calcular log(1000/100)",
            answer: "1",
            steps: [
                "log(1000/100) = log(1000) - log(100)",
                "log(1000) = 3",
                "log(100) = 2",
                "log(1000/100) = 3 - 2 = 1"
            ]
        }
    }
];

export const logaritmosTips = figureTips;
