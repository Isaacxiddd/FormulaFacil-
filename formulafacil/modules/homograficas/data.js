// ══════════════════════════════════════════════════════════════
// DATOS - FUNCIONES HOMOGRÁFICAS (Segundo Parcial)
// f(x) = (ax + b) / (cx + d)
// Cards: característica ↔ fórmula / valor
// ══════════════════════════════════════════════════════════════

export const homograficasData = [
    {
        name: "Asíntota vertical",
        icon: "⬆️",
        formulas: "x = -\\frac{d}{c} \\quad \\text{(donde } cx + d = 0\\text{)}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="5" x2="10" y2="78" stroke="#e53935" stroke-width="2" stroke-dasharray="5"/>
            <line x1="5" y1="40" x2="115" y2="40" stroke="#ccc" stroke-width="1"/>
            <path d="M5,10 Q8,40 5,70" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
            <path d="M15,5 Q12,40 15,75" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
            <text x="13" y="10" font-size="8" fill="#e53935">AV</text>
            <text x="30" y="75" font-size="7" fill="#555">x = −d/c</text>
        </svg>`
    },
    {
        name: "Asíntota horizontal",
        icon: "➡️",
        formulas: "y = \\frac{a}{c} \\quad \\text{(cociente de coeficientes líderes)}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="25" x2="115" y2="25" stroke="#e53935" stroke-width="2" stroke-dasharray="5"/>
            <line x1="60" y1="5" x2="60" y2="78" stroke="#ccc" stroke-width="1"/>
            <path d="M5,55 Q30,25 55,24 Q60,24 65,24 Q90,24 115,10" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
            <text x="88" y="20" font-size="8" fill="#e53935">AH</text>
            <text x="3" y="38" font-size="7" fill="#555">y = a/c</text>
        </svg>`
    },
    {
        name: "Dominio",
        icon: "🎯",
        formulas: "\\text{Dom}(f) = \\mathbb{R} - \\left\\{-\\frac{d}{c}\\right\\}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="45" x2="110" y2="45" stroke="#2e7d32" stroke-width="3"/>
            <circle cx="60" cy="45" r="5" fill="white" stroke="#e53935" stroke-width="2"/>
            <line x1="57" y1="42" x2="63" y2="48" stroke="#e53935" stroke-width="1.5"/>
            <text x="58" y="35" font-size="8" fill="#e53935" text-anchor="middle">−d/c</text>
            <text x="60" y="65" text-anchor="middle" font-size="7" fill="#2e7d32">ℝ − {−d/c}</text>
        </svg>`
    },
    {
        name: "Imagen",
        icon: "📊",
        formulas: "\\text{Im}(f) = \\mathbb{R} - \\left\\{\\frac{a}{c}\\right\\}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="60" y1="5" x2="60" y2="78" stroke="#2e7d32" stroke-width="3"/>
            <circle cx="60" cy="40" r="5" fill="white" stroke="#e53935" stroke-width="2"/>
            <line x1="57" y1="37" x2="63" y2="43" stroke="#e53935" stroke-width="1.5"/>
            <text x="75" y="42" font-size="8" fill="#e53935">a/c</text>
            <text x="60" y="72" text-anchor="middle" font-size="7" fill="#2e7d32">ℝ − {a/c}</text>
        </svg>`
    },
    {
        name: "Forma general",
        icon: "📝",
        formulas: "f(x) = \\frac{ax + b}{cx + d}, \\quad ad - bc \\neq 0",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <text x="60" y="28" text-anchor="middle" font-size="11" fill="#37474f" font-family="serif">ax + b</text>
            <line x1="20" y1="38" x2="100" y2="38" stroke="#37474f" stroke-width="2"/>
            <text x="60" y="55" text-anchor="middle" font-size="11" fill="#37474f" font-family="serif">cx + d</text>
            <text x="60" y="73" text-anchor="middle" font-size="8" fill="#888">ad − bc ≠ 0</text>
        </svg>`
    },
    {
        name: "Cero de la función",
        icon: "⭕",
        formulas: "f(x) = 0 \\Rightarrow x = -\\frac{b}{a}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="50" x2="110" y2="50" stroke="#ccc" stroke-width="1"/>
            <circle cx="45" cy="50" r="5" fill="#ff9800" stroke="#ff9800"/>
            <text x="45" y="68" text-anchor="middle" font-size="8" fill="#ff9800">−b/a</text>
            <text x="60" y="25" text-anchor="middle" font-size="9" fill="#ff9800">f(x) = 0</text>
            <text x="60" y="38" text-anchor="middle" font-size="8" fill="#ff9800">donde f corta al eje x</text>
        </svg>`
    },
    {
        name: "Intersección con eje y",
        icon: "↕️",
        formulas: "f(0) = \\frac{b}{d}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="60" y1="5" x2="60" y2="78" stroke="#ccc" stroke-width="1"/>
            <line x1="5" y1="45" x2="115" y2="45" stroke="#ccc" stroke-width="1"/>
            <circle cx="60" cy="28" r="5" fill="#6a1b9a" stroke="#6a1b9a"/>
            <text x="72" y="28" font-size="8" fill="#6a1b9a">(0, b/d)</text>
            <text x="60" y="70" text-anchor="middle" font-size="8" fill="#6a1b9a">f(0) = b/d</text>
        </svg>`
    },
    {
        name: "Hipérbola",
        icon: "〰",
        formulas: "\\text{La gráfica de } f(x) = \\frac{ax+b}{cx+d} \\text{ es una hipérbola}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="60" y1="5" x2="60" y2="78" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="3"/>
            <line x1="5" y1="40" x2="115" y2="40" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="3"/>
            <path d="M5,8 Q30,38 55,39 Q58,39.5 59,40" fill="none" stroke="#1e88e5" stroke-width="2"/>
            <path d="M115,72 Q90,42 65,41 Q62,40.5 61,40" fill="none" stroke="#1e88e5" stroke-width="2"/>
            <text x="60" y="75" text-anchor="middle" font-size="7" fill="#1e88e5">hipérbola</text>
        </svg>`
    },
];

export const homograficasFormulasData = [
    {
        name: "Asíntota Vertical",
        formulas: ["x = -\\frac{d}{c}"],
        explanation: "La asíntota vertical se encuentra igualando el denominador a cero. La función no está definida en ese punto y la gráfica se acerca indefinidamente a esa recta vertical.",
        variables: ["c: coeficiente de x en el denominador", "d: término independiente del denominador"],
        example: {
            problem: "Hallar la AV de f(x) = (2x+1)/(x−3)",
            steps: [
                "Igualar denominador a cero: x − 3 = 0",
                "x = 3",
                "Asíntota vertical: x = 3"
            ]
        }
    },
    {
        name: "Asíntota Horizontal",
        formulas: ["y = \\frac{a}{c}"],
        explanation: "La asíntota horizontal es el cociente entre los coeficientes del término de mayor grado del numerador y el denominador. La función se acerca a este valor cuando x → ±∞.",
        variables: ["a: coeficiente de x en el numerador", "c: coeficiente de x en el denominador"],
        example: {
            problem: "Hallar la AH de f(x) = (2x+1)/(x−3)",
            steps: [
                "AH = a/c = 2/1 = 2",
                "Asíntota horizontal: y = 2",
                "Verificar: cuando x→∞, f(x)→2"
            ]
        }
    },
    {
        name: "Dominio",
        formulas: ["\\text{Dom}(f) = \\mathbb{R} - \\left\\{-\\frac{d}{c}\\right\\}"],
        explanation: "El dominio son todos los reales excepto el valor que anula el denominador (donde está la asíntota vertical).",
        variables: ["Se excluye x = −d/c del dominio"],
        example: {
            problem: "Dom de f(x) = (3x−2)/(2x+6)",
            steps: [
                "Igualar denominador: 2x + 6 = 0",
                "x = −3",
                "Dom = ℝ − {−3} = (−∞, −3) ∪ (−3, +∞)"
            ]
        }
    },
    {
        name: "Imagen",
        formulas: ["\\text{Im}(f) = \\mathbb{R} - \\left\\{\\frac{a}{c}\\right\\}"],
        explanation: "La imagen son todos los reales excepto el valor de la asíntota horizontal. La función puede tomar cualquier valor menos ese.",
        variables: ["Se excluye y = a/c de la imagen"],
        example: {
            problem: "Im de f(x) = (2x+1)/(x−3)",
            steps: [
                "AH: y = a/c = 2/1 = 2",
                "Im = ℝ − {2} = (−∞, 2) ∪ (2, +∞)"
            ]
        }
    },
    {
        name: "Forma General",
        formulas: ["f(x) = \\frac{ax + b}{cx + d}, \\quad c \\neq 0, \\quad ad - bc \\neq 0"],
        explanation: "Una función homográfica es el cociente de dos polinomios de grado 1. La condición ad − bc ≠ 0 asegura que no sea una función constante.",
        variables: ["a, b: coeficientes del numerador", "c, d: coeficientes del denominador", "ad − bc ≠ 0: condición de no degeneración"],
        example: {
            problem: "¿Es f(x) = (2x+4)/(x+2) una homográfica?",
            steps: [
                "Verificar: ad − bc = 2·2 − 4·1 = 4 − 4 = 0",
                "Como ad − bc = 0, NO es homográfica",
                "f(x) = 2(x+2)/(x+2) = 2 (constante)"
            ]
        }
    },
    {
        name: "Cero de la Función",
        formulas: ["f(x) = 0 \\Rightarrow ax + b = 0 \\Rightarrow x = -\\frac{b}{a}"],
        explanation: "El cero es donde la función corta al eje x. Se obtiene igualando el numerador a cero (siempre que ese punto esté en el dominio).",
        variables: ["a: coeficiente de x en numerador", "b: término independiente del numerador"],
        example: {
            problem: "Hallar el cero de f(x) = (2x−6)/(x+1)",
            steps: [
                "Igualar numerador: 2x − 6 = 0",
                "x = 3",
                "Verificar que 3 esté en el dom: 3+1 = 4 ≠ 0 ✓",
                "Cero en x = 3"
            ]
        }
    },
    {
        name: "Intersección con Eje y",
        formulas: ["f(0) = \\frac{b}{d}"],
        explanation: "La intersección con el eje y se obtiene evaluando en x = 0, siempre que 0 esté en el dominio (d ≠ 0).",
        variables: ["b: término independiente del numerador", "d: término independiente del denominador"],
        example: {
            problem: "Intersección con eje y de f(x) = (2x+3)/(x−1)",
            steps: [
                "f(0) = (2·0 + 3)/(0 − 1) = 3/(−1) = −3",
                "Punto: (0, −3)"
            ]
        }
    },
    {
        name: "Gráfica: Hipérbola",
        formulas: ["\\text{La gráfica de toda homográfica es una hipérbola}"],
        explanation: "La gráfica de f(x) = (ax+b)/(cx+d) siempre es una hipérbola con las asíntotas vertical y horizontal como ejes de simetría.",
        variables: ["Las dos ramas se ubican en cuadrantes opuestos respecto a la intersección de las asíntotas"],
        example: {
            problem: "Identificar asíntotas de f(x) = 1/x",
            steps: [
                "AV: x = 0 (eje y)",
                "AH: y = 0 (eje x)",
                "La hipérbola tiene sus ramas en los cuadrantes 1° y 3°"
            ]
        }
    },
];

export const homograficasTips = {
    "Asíntota vertical":       ["AV: igualá el denominador a 0 → x = −d/c", "La función NO está definida en la AV"],
    "Asíntota horizontal":     ["AH: cociente de coeficientes líderes → y = a/c", "La función se acerca a la AH pero nunca la toca"],
    "Dominio":                 ["Dom = ℝ − {AV}. Excluís el valor donde el denominador es 0"],
    "Imagen":                  ["Im = ℝ − {AH}. La función toma todos los valores menos el de la AH"],
    "Forma general":           ["f(x) = (ax+b)/(cx+d). Condición: ad−bc ≠ 0"],
    "Cero de la función":      ["Igualá el NUMERADOR a 0 para encontrar los ceros"],
    "Intersección con eje y":  ["Evaluá en x = 0: f(0) = b/d"],
    "Hipérbola":               ["Toda homográfica tiene gráfica en forma de hipérbola"],
};
