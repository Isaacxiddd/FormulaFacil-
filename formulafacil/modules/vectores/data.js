// ══════════════════════════════════════════════════════════════
// DATOS - VECTORES (Segundo Parcial)
// Cards: operación / propiedad ↔ fórmula / resultado
// ══════════════════════════════════════════════════════════════

export const vectoresData = [
    {
        name: "Producto escalar",
        icon: "·",
        formulas: "\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <defs><marker id="ah1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e88e5"/></marker></defs>
            <line x1="20" y1="60" x2="80" y2="25" stroke="#1e88e5" stroke-width="2" marker-end="url(#ah1)"/>
            <defs><marker id="ah2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e53935"/></marker></defs>
            <line x1="20" y1="60" x2="95" y2="50" stroke="#e53935" stroke-width="2" marker-end="url(#ah2)"/>
            <text x="60" y="75" text-anchor="middle" font-size="8" fill="#555">u·v = u₁v₁ + u₂v₂</text>
        </svg>`
    },
    {
        name: "Módulo de vector",
        icon: "📏",
        formulas: "|\\vec{u}| = \\sqrt{u_1^2 + u_2^2}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <defs><marker id="ahm" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2e7d32"/></marker></defs>
            <line x1="20" y1="65" x2="95" y2="20" stroke="#2e7d32" stroke-width="2" marker-end="url(#ahm)"/>
            <line x1="20" y1="65" x2="95" y2="65" stroke="#ccc" stroke-width="1" stroke-dasharray="3"/>
            <line x1="95" y1="65" x2="95" y2="20" stroke="#ccc" stroke-width="1" stroke-dasharray="3"/>
            <text x="58" y="78" text-anchor="middle" font-size="8" fill="#2e7d32">|u| = √(u₁² + u₂²)</text>
        </svg>`
    },
    {
        name: "Perpendicularidad",
        icon: "⊥",
        formulas: "\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="ahp1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e88e5"/></marker>
                <marker id="ahp2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e53935"/></marker>
            </defs>
            <line x1="60" y1="60" x2="100" y2="60" stroke="#1e88e5" stroke-width="2" marker-end="url(#ahp1)"/>
            <line x1="60" y1="60" x2="60" y2="15" stroke="#e53935" stroke-width="2" marker-end="url(#ahp2)"/>
            <rect x="60" y="52" width="8" height="8" fill="none" stroke="#555" stroke-width="1.5"/>
            <text x="60" y="75" text-anchor="middle" font-size="8" fill="#555">u · v = 0</text>
        </svg>`
    },
    {
        name: "Ángulo entre vectores",
        icon: "📐",
        formulas: "\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}||\\vec{v}|}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="aha1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6a1b9a"/></marker>
                <marker id="aha2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f57c00"/></marker>
            </defs>
            <line x1="20" y1="60" x2="100" y2="60" stroke="#6a1b9a" stroke-width="2" marker-end="url(#aha1)"/>
            <line x1="20" y1="60" x2="70" y2="20" stroke="#f57c00" stroke-width="2" marker-end="url(#aha2)"/>
            <path d="M38,60 A18,18 0 0,0 28,45" fill="none" stroke="#333" stroke-width="1.5"/>
            <text x="42" y="53" font-size="9" fill="#333">θ</text>
        </svg>`
    },
    {
        name: "Versores i y j",
        icon: "🧭",
        formulas: "\\vec{i} = (1,0), \\quad \\vec{j} = (0,1)",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="ahi" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e88e5"/></marker>
                <marker id="ahj" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e53935"/></marker>
            </defs>
            <line x1="25" y1="55" x2="75" y2="55" stroke="#1e88e5" stroke-width="2.5" marker-end="url(#ahi)"/>
            <line x1="25" y1="55" x2="25" y2="10" stroke="#e53935" stroke-width="2.5" marker-end="url(#ahj)"/>
            <text x="50" y="70" text-anchor="middle" font-size="10" fill="#1e88e5" font-weight="bold">i</text>
            <text x="15" y="35" text-anchor="middle" font-size="10" fill="#e53935" font-weight="bold">j</text>
        </svg>`
    },
    {
        name: "Suma de vectores",
        icon: "➕",
        formulas: "\\vec{u} + \\vec{v} = (u_1 + v_1,\\; u_2 + v_2)",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="ahs1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e88e5"/></marker>
                <marker id="ahs2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e53935"/></marker>
                <marker id="ahs3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2e7d32"/></marker>
            </defs>
            <line x1="15" y1="65" x2="65" y2="40" stroke="#1e88e5" stroke-width="2" marker-end="url(#ahs1)"/>
            <line x1="65" y1="40" x2="100" y2="20" stroke="#e53935" stroke-width="2" marker-end="url(#ahs2)"/>
            <line x1="15" y1="65" x2="100" y2="20" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="4" marker-end="url(#ahs3)"/>
            <text x="60" y="78" text-anchor="middle" font-size="8" fill="#2e7d32">u + v</text>
        </svg>`
    },
    {
        name: "Vector en 2° cuadrante",
        icon: "↖️",
        formulas: "\\text{2°cuad.} \\Rightarrow \\angle(\\vec{u},\\vec{i}) > 90°",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="60" y1="10" x2="60" y2="75" stroke="#ccc" stroke-width="1"/>
            <line x1="5" y1="45" x2="115" y2="45" stroke="#ccc" stroke-width="1"/>
            <defs><marker id="ahv2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6a1b9a"/></marker></defs>
            <line x1="60" y1="45" x2="25" y2="20" stroke="#6a1b9a" stroke-width="2.5" marker-end="url(#ahv2)"/>
            <path d="M78,45 A18,18 0 0,0 68,30" fill="none" stroke="#333" stroke-width="1.5"/>
            <text x="82" y="38" font-size="9" fill="#333">θ&gt;90°</text>
            <text x="20" y="15" font-size="8" fill="#6a1b9a">2°C</text>
        </svg>`
    },
    {
        name: "Paralelismo",
        icon: "‖",
        formulas: "\\vec{u} \\parallel \\vec{v} \\iff \\vec{u} = k\\vec{v} \\text{ para algún } k",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="ahll1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e88e5"/></marker>
                <marker id="ahll2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e53935"/></marker>
            </defs>
            <line x1="15" y1="30" x2="75" y2="30" stroke="#1e88e5" stroke-width="2" marker-end="url(#ahll1)"/>
            <line x1="35" y1="55" x2="95" y2="55" stroke="#e53935" stroke-width="2" marker-end="url(#ahll2)"/>
            <text x="60" y="73" text-anchor="middle" font-size="8" fill="#555">u = k·v</text>
        </svg>`
    },
];

export const vectoresFormulasData = [
    {
        name: "Producto Escalar",
        formulas: ["\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2"],
        explanation: "El producto escalar (o producto punto) de dos vectores da un número real, no un vector. Es la suma de los productos de las componentes correspondientes.",
        variables: ["u₁, u₂: componentes del vector u", "v₁, v₂: componentes del vector v"],
        example: {
            problem: "Calcular (2, 3) · (4, −1)",
            steps: [
                "u·v = u₁v₁ + u₂v₂",
                "= 2·4 + 3·(−1)",
                "= 8 − 3 = 5"
            ]
        }
    },
    {
        name: "Módulo de un Vector",
        formulas: ["|\\vec{u}| = \\sqrt{u_1^2 + u_2^2}"],
        explanation: "El módulo es la longitud del vector. Se calcula con Pitágoras aplicado a las componentes.",
        variables: ["u₁, u₂: componentes del vector"],
        example: {
            problem: "Hallar |u| si u = (3, 4)",
            steps: [
                "|u| = √(3² + 4²)",
                "= √(9 + 16) = √25",
                "= 5"
            ]
        }
    },
    {
        name: "Perpendicularidad",
        formulas: ["\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0"],
        explanation: "Dos vectores son perpendiculares (forman 90°) si y solo si su producto escalar es cero.",
        variables: ["u · v = 0: condición necesaria y suficiente"],
        example: {
            problem: "¿Son perpendiculares u = (2, 3) y v = (3, −2)?",
            steps: [
                "u · v = 2·3 + 3·(−2)",
                "= 6 − 6 = 0",
                "Sí, son perpendiculares ✓"
            ]
        }
    },
    {
        name: "Ángulo entre Vectores",
        formulas: ["\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}||\\vec{v}|}"],
        explanation: "Esta fórmula permite encontrar el ángulo entre dos vectores usando el producto escalar y sus módulos.",
        variables: ["θ: ángulo entre los vectores (0° ≤ θ ≤ 180°)", "Si u·v > 0 → θ < 90°", "Si u·v < 0 → θ > 90°", "Si u·v = 0 → θ = 90°"],
        example: {
            problem: "Hallar el ángulo entre u = (1, 0) y v = (1, 1)",
            steps: [
                "u·v = 1·1 + 0·1 = 1",
                "|u| = 1, |v| = √2",
                "cos θ = 1 / (1·√2) = 1/√2",
                "θ = 45°"
            ]
        }
    },
    {
        name: "Versores i y j",
        formulas: ["\\vec{i} = (1,0), \\quad \\vec{j} = (0,1)", "|\\vec{i}| = |\\vec{j}| = 1, \\quad \\vec{i} \\cdot \\vec{j} = 0"],
        explanation: "Los versores son vectores unitarios en la dirección de los ejes. Todo vector puede escribirse como combinación lineal de i y j.",
        variables: ["i: versor del eje x", "j: versor del eje y"],
        example: {
            problem: "Expresar u = (3, −2) en términos de i y j",
            steps: [
                "u = 3·i + (−2)·j",
                "= 3(1,0) + (−2)(0,1) = (3, −2) ✓"
            ]
        }
    },
    {
        name: "Suma de Vectores",
        formulas: ["\\vec{u} + \\vec{v} = (u_1 + v_1,\\; u_2 + v_2)"],
        explanation: "La suma de vectores se hace componente a componente. Geométricamente es la regla del paralelogramo o la regla del triángulo.",
        variables: ["Se suman las componentes x por separado y las y por separado"],
        example: {
            problem: "Sumar u = (2, 5) y v = (−1, 3)",
            steps: [
                "u + v = (2 + (−1), 5 + 3)",
                "= (1, 8)"
            ]
        }
    },
    {
        name: "Vector en 2° Cuadrante",
        formulas: ["\\vec{u}\\text{ en 2°cuad.} \\Rightarrow u_1 < 0,\\; u_2 > 0", "\\Rightarrow \\angle(\\vec{u}, \\vec{i}) \\in (90°, 180°)"],
        explanation: "Un vector en el segundo cuadrante tiene componente x negativa e y positiva. El ángulo con el versor i es entre 90° y 180°. Este análisis aparece en parciales con parámetros.",
        variables: ["El signo de u·i = u₁ determina si el ángulo es agudo o obtuso"],
        example: {
            problem: "u = (b, 2). ¿Para qué valores de b el ángulo con i es mayor que 90°?",
            steps: [
                "u · i = b·1 + 2·0 = b",
                "Ángulo > 90° ↔ cos θ < 0 ↔ u·i < 0",
                "b < 0",
                "Respuesta: b < 0"
            ]
        }
    },
    {
        name: "Paralelismo",
        formulas: ["\\vec{u} \\parallel \\vec{v} \\iff \\vec{u} = k\\vec{v} \\text{ para algún } k \\in \\mathbb{R}"],
        explanation: "Dos vectores son paralelos si uno es múltiplo escalar del otro. Esto equivale a que tengan la misma dirección (pueden tener sentidos opuestos).",
        variables: ["k > 0: mismo sentido", "k < 0: sentidos opuestos", "k = 0: uno de los vectores es el vector nulo"],
        example: {
            problem: "¿Son paralelos u = (2, 4) y v = (1, 2)?",
            steps: [
                "Verificar si u = k·v",
                "2 = k·1 → k = 2",
                "4 = k·2 = 2·2 = 4 ✓",
                "Sí son paralelos (u = 2v)"
            ]
        }
    },
];

export const vectoresTips = {
    "Producto escalar":      ["u·v = u₁v₁ + u₂v₂. El resultado es un número, no un vector.", "Si u·v > 0 → ángulo agudo; = 0 → perpendiculares; < 0 → ángulo obtuso"],
    "Módulo de vector":      ["|u| = √(u₁² + u₂²). Pitágoras aplicado al vector."],
    "Perpendicularidad":     ["u ⊥ v ↔ u·v = 0. Calculá el producto escalar y verificá que sea cero."],
    "Ángulo entre vectores": ["cos θ = (u·v) / (|u|·|v|). Si u·v < 0, el ángulo es obtuso."],
    "Versores i y j":        ["i = (1,0) y j = (0,1). Son unitarios y perpendiculares entre sí."],
    "Suma de vectores":      ["Suma componente a componente: (u₁+v₁, u₂+v₂)."],
    "Vector en 2° cuadrante": ["En 2° cuadrante: x < 0, y > 0. El ángulo con i es > 90°."],
    "Paralelismo":           ["u ∥ v ↔ u = k·v para algún k. Las componentes son proporcionales."],
};
