// ══════════════════════════════════════════════════════════════
// DATOS - INYECTIVAS Y SOBREYECTIVAS (Segundo Parcial)
// Cards: concepto ↔ definición / propiedad / test gráfico
// ══════════════════════════════════════════════════════════════

export const inyectivasData = [
    {
        name: "Inyectiva",
        icon: "1️⃣",
        formulas: "f \\text{ inyectiva} \\iff f(x_1) = f(x_2) \\Rightarrow x_1 = x_2",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="45" height="60" rx="8" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
            <rect x="70" y="10" width="45" height="60" rx="8" fill="none" stroke="#2e7d32" stroke-width="1.5"/>
            <circle cx="27" cy="25" r="4" fill="#1e88e5"/>
            <circle cx="27" cy="45" r="4" fill="#1e88e5"/>
            <circle cx="27" cy="65" r="4" fill="#1e88e5"/>
            <circle cx="93" cy="25" r="4" fill="#2e7d32"/>
            <circle cx="93" cy="45" r="4" fill="#2e7d32"/>
            <circle cx="93" cy="65" r="4" fill="#2e7d32"/>
            <line x1="31" y1="25" x2="89" y2="25" stroke="#555" stroke-width="1" marker-end="url(#arri)"/>
            <line x1="31" y1="45" x2="89" y2="45" stroke="#555" stroke-width="1"/>
            <line x1="31" y1="65" x2="89" y2="65" stroke="#555" stroke-width="1"/>
            <text x="27" y="6" text-anchor="middle" font-size="7" fill="#1e88e5">Dom</text>
            <text x="93" y="6" text-anchor="middle" font-size="7" fill="#2e7d32">Cod</text>
        </svg>`
    },
    {
        name: "No inyectiva",
        icon: "❌",
        formulas: "\\exists\\, x_1 \\neq x_2 : f(x_1) = f(x_2)",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="45" height="60" rx="8" fill="none" stroke="#e53935" stroke-width="1.5"/>
            <rect x="70" y="10" width="45" height="60" rx="8" fill="none" stroke="#2e7d32" stroke-width="1.5"/>
            <circle cx="27" cy="25" r="4" fill="#e53935"/>
            <circle cx="27" cy="45" r="4" fill="#e53935"/>
            <circle cx="27" cy="65" r="4" fill="#e53935"/>
            <circle cx="93" cy="30" r="4" fill="#2e7d32"/>
            <circle cx="93" cy="55" r="4" fill="#2e7d32"/>
            <line x1="31" y1="25" x2="89" y2="32" stroke="#555" stroke-width="1"/>
            <line x1="31" y1="45" x2="89" y2="32" stroke="#555" stroke-width="1"/>
            <line x1="31" y1="65" x2="89" y2="57" stroke="#555" stroke-width="1"/>
            <text x="27" y="6" text-anchor="middle" font-size="7" fill="#e53935">Dom</text>
        </svg>`
    },
    {
        name: "Sobreyectiva",
        icon: "🎯",
        formulas: "f \\text{ sobreyectiva} \\iff \\text{Im}(f) = \\text{Cod}(f)",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="45" height="60" rx="8" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
            <rect x="70" y="10" width="45" height="60" rx="8" fill="none" stroke="#2e7d32" stroke-width="1.5"/>
            <circle cx="27" cy="25" r="4" fill="#1e88e5"/>
            <circle cx="27" cy="45" r="4" fill="#1e88e5"/>
            <circle cx="27" cy="65" r="4" fill="#1e88e5"/>
            <circle cx="93" cy="25" r="4" fill="#2e7d32"/>
            <circle cx="93" cy="45" r="4" fill="#2e7d32"/>
            <circle cx="93" cy="65" r="4" fill="#2e7d32"/>
            <line x1="31" y1="25" x2="89" y2="25" stroke="#555" stroke-width="1"/>
            <line x1="31" y1="45" x2="89" y2="65" stroke="#555" stroke-width="1"/>
            <line x1="31" y1="65" x2="89" y2="45" stroke="#555" stroke-width="1"/>
            <text x="93" y="6" text-anchor="middle" font-size="7" fill="#2e7d32">Im = Cod ✓</text>
        </svg>`
    },
    {
        name: "No sobreyectiva",
        icon: "⚠️",
        formulas: "\\text{Im}(f) \\subsetneq \\text{Cod}(f)",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="45" height="60" rx="8" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
            <rect x="70" y="10" width="45" height="60" rx="8" fill="none" stroke="#e53935" stroke-width="1.5"/>
            <circle cx="27" cy="30" r="4" fill="#1e88e5"/>
            <circle cx="27" cy="55" r="4" fill="#1e88e5"/>
            <circle cx="93" cy="25" r="4" fill="#2e7d32"/>
            <circle cx="93" cy="45" r="4" fill="#e53935" stroke="#e53935"/>
            <circle cx="93" cy="65" r="4" fill="#2e7d32"/>
            <line x1="31" y1="30" x2="89" y2="25" stroke="#555" stroke-width="1"/>
            <line x1="31" y1="55" x2="89" y2="65" stroke="#555" stroke-width="1"/>
            <text x="93" y="6" text-anchor="middle" font-size="7" fill="#e53935">Im ⊊ Cod</text>
        </svg>`
    },
    {
        name: "Test recta horizontal",
        icon: "📏",
        formulas: "f \\text{ inyectiva} \\iff \\text{toda recta } y=k \\text{ corta la gráfica a lo sumo una vez}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="40" x2="115" y2="40" stroke="#e53935" stroke-width="1.5" stroke-dasharray="4"/>
            <path d="M10,75 Q40,5 70,45 Q90,70 110,20" fill="none" stroke="#1e88e5" stroke-width="2"/>
            <circle cx="32" cy="40" r="4" fill="#e53935"/>
            <circle cx="65" cy="40" r="4" fill="#e53935"/>
            <circle cx="93" cy="40" r="4" fill="#e53935"/>
            <text x="60" y="75" text-anchor="middle" font-size="7" fill="#e53935">3 intersecciones → NO inyectiva</text>
        </svg>`
    },
    {
        name: "Biyectiva",
        icon: "⭐",
        formulas: "f \\text{ biyectiva} \\iff f \\text{ inyectiva y sobreyectiva}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="15" width="45" height="55" rx="8" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
            <rect x="70" y="15" width="45" height="55" rx="8" fill="none" stroke="#2e7d32" stroke-width="1.5"/>
            <circle cx="27" cy="28" r="4" fill="#1e88e5"/>
            <circle cx="27" cy="45" r="4" fill="#1e88e5"/>
            <circle cx="27" cy="62" r="4" fill="#1e88e5"/>
            <circle cx="93" cy="28" r="4" fill="#2e7d32"/>
            <circle cx="93" cy="45" r="4" fill="#2e7d32"/>
            <circle cx="93" cy="62" r="4" fill="#2e7d32"/>
            <line x1="31" y1="28" x2="89" y2="28" stroke="#555" stroke-width="1"/>
            <line x1="31" y1="45" x2="89" y2="45" stroke="#555" stroke-width="1"/>
            <line x1="31" y1="62" x2="89" y2="62" stroke="#555" stroke-width="1"/>
            <text x="60" y="12" text-anchor="middle" font-size="7" fill="#ff9800">inyectiva + sobreyectiva</text>
        </svg>`
    },
    {
        name: "Parábola – inyectividad",
        icon: "🔄",
        formulas: "f(x) = x^2 \\text{ NO es inyectiva en } \\mathbb{R}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="40" x2="115" y2="40" stroke="#ccc" stroke-width="1"/>
            <line x1="60" y1="5" x2="60" y2="78" stroke="#ccc" stroke-width="1"/>
            <path d="M15,75 Q60,5 105,75" fill="none" stroke="#1e88e5" stroke-width="2"/>
            <line x1="5" y1="30" x2="115" y2="30" stroke="#e53935" stroke-width="1.5" stroke-dasharray="4"/>
            <circle cx="35" cy="30" r="4" fill="#e53935"/>
            <circle cx="85" cy="30" r="4" fill="#e53935"/>
            <text x="60" y="75" text-anchor="middle" font-size="7" fill="#e53935">f(−x) = f(x) → NO inyectiva</text>
        </svg>`
    },
    {
        name: "Función inversa",
        icon: "↩️",
        formulas: "f \\text{ tiene inversa} \\iff f \\text{ es biyectiva}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="78" x2="115" y2="5" stroke="#1e88e5" stroke-width="2"/>
            <line x1="5" y1="5" x2="115" y2="5" stroke="#ccc" stroke-width="1" stroke-dasharray="3"/>
            <line x1="5" y1="5" x2="5" y2="78" stroke="#ccc" stroke-width="1" stroke-dasharray="3"/>
            <text x="90" y="25" font-size="8" fill="#1e88e5">f(x)</text>
            <line x1="5" y1="5" x2="115" y2="78" stroke="#e53935" stroke-width="1.5" stroke-dasharray="3"/>
            <text x="90" y="72" font-size="8" fill="#e53935">f⁻¹(x)</text>
            <text x="60" y="75" text-anchor="middle" font-size="7" fill="#555">simetría respecto y=x</text>
        </svg>`
    },
];

export const inyectivasFormulasData = [
    {
        name: "Función Inyectiva",
        formulas: ["f \\text{ es inyectiva} \\iff f(x_1) = f(x_2) \\Rightarrow x_1 = x_2"],
        explanation: "Una función es inyectiva si elementos distintos del dominio tienen imágenes distintas. Equivalentemente: cada valor del codominio tiene a lo sumo un preimagen.",
        variables: ["x₁, x₂ ∈ Dom(f)", "Contrarecíproco: x₁ ≠ x₂ ⟹ f(x₁) ≠ f(x₂)"],
        example: {
            problem: "¿Es f(x) = 2x + 1 inyectiva?",
            steps: [
                "Suponer f(x₁) = f(x₂)",
                "2x₁ + 1 = 2x₂ + 1",
                "2x₁ = 2x₂  →  x₁ = x₂",
                "Sí es inyectiva ✓"
            ]
        }
    },
    {
        name: "Función No Inyectiva",
        formulas: ["f \\text{ NO inyectiva} \\iff \\exists\\, x_1 \\neq x_2 : f(x_1) = f(x_2)"],
        explanation: "Una función no es inyectiva si existe al menos un valor de la imagen con dos o más preimágenes distintas.",
        variables: ["Ejemplo clásico: f(x) = x² en ℝ, ya que f(2) = f(−2) = 4"],
        example: {
            problem: "Demostrar que f(x) = x² NO es inyectiva en ℝ",
            steps: [
                "Tomar x₁ = 2, x₂ = −2",
                "f(2) = 4, f(−2) = 4",
                "x₁ ≠ x₂ pero f(x₁) = f(x₂)",
                "No es inyectiva ✗"
            ]
        }
    },
    {
        name: "Función Sobreyectiva",
        formulas: ["f: A \\to B \\text{ es sobreyectiva} \\iff \\text{Im}(f) = B"],
        explanation: "Una función es sobreyectiva si su imagen coincide con el codominio. Todo elemento del codominio es imagen de al menos un elemento del dominio.",
        variables: ["Im(f): conjunto de valores que toma la función", "B: codominio (conjunto de llegada declarado)"],
        example: {
            problem: "¿Es f: ℝ → ℝ, f(x) = 2x+1 sobreyectiva?",
            steps: [
                "Para cualquier y ∈ ℝ, encontrar x tal que f(x) = y",
                "2x + 1 = y  →  x = (y−1)/2",
                "x existe para todo y ∈ ℝ",
                "Sí es sobreyectiva ✓"
            ]
        }
    },
    {
        name: "Función No Sobreyectiva",
        formulas: ["f \\text{ NO sobreyectiva} \\iff \\text{Im}(f) \\subsetneq \\text{Cod}(f)"],
        explanation: "Cuando el codominio declarado es más grande que la imagen real de la función, la función no es sobreyectiva.",
        variables: ["Ejemplo: f: ℝ → ℝ, f(x) = x² tiene Im = [0,+∞) ≠ ℝ"],
        example: {
            problem: "¿Es f: ℝ → ℝ, f(x) = x² sobreyectiva?",
            steps: [
                "Im(f) = [0, +∞) (solo valores ≥ 0)",
                "Cod(f) = ℝ",
                "Im(f) ≠ Cod(f)",
                "No es sobreyectiva. Ejemplo: −1 ∈ ℝ no tiene preimagen ✗"
            ]
        }
    },
    {
        name: "Test Recta Horizontal",
        formulas: ["f \\text{ inyectiva} \\iff \\text{toda recta } y=k \\text{ intersecta la gráfica a lo sumo una vez}"],
        explanation: "Test gráfico para detectar inyectividad. Si al trazar cualquier recta horizontal corta la gráfica más de una vez, la función no es inyectiva.",
        variables: ["Una intersección o ninguna → inyectiva", "Dos o más intersecciones → no inyectiva"],
        example: {
            problem: "Analizar gráficamente si f(x) = sin(x) es inyectiva en ℝ",
            steps: [
                "Trazar la recta y = 0.5",
                "Corta la curva en infinitos puntos (x = π/6, 5π/6, ...)",
                "Sin(x) NO es inyectiva en ℝ",
                "Sí lo es en [−π/2, π/2]"
            ]
        }
    },
    {
        name: "Función Biyectiva",
        formulas: ["f \\text{ biyectiva} \\iff f \\text{ inyectiva} \\land f \\text{ sobreyectiva}"],
        explanation: "Una función biyectiva es a la vez inyectiva y sobreyectiva. Establece una correspondencia uno a uno entre dominio y codominio.",
        variables: ["Toda función biyectiva tiene función inversa", "f: A → B biyectiva ↔ existe f⁻¹: B → A"],
        example: {
            problem: "¿Es f: ℝ → ℝ, f(x) = 3x − 5 biyectiva?",
            steps: [
                "Inyectiva: f(x₁)=f(x₂) → 3x₁−5=3x₂−5 → x₁=x₂ ✓",
                "Sobreyectiva: para todo y, x=(y+5)/3 ✓",
                "Es biyectiva ✓"
            ]
        }
    },
    {
        name: "Parábola – Inyectividad",
        formulas: ["f(x)=x^2 \\text{ NO inyectiva en } \\mathbb{R}", "\\text{Sí inyectiva en } [0,+\\infty)"],
        explanation: "La parábola f(x) = x² no es inyectiva en ℝ porque f(2) = f(−2). Sin embargo, restringida a [0,+∞) sí es inyectiva.",
        variables: ["Restricción del dominio puede hacer inyectiva a una función que no lo era"],
        example: {
            problem: "¿En qué dominio f(x) = x² es inyectiva?",
            steps: [
                "En ℝ: no es inyectiva (f(a) = f(−a))",
                "En [0, +∞): sí es inyectiva",
                "En (−∞, 0]: también es inyectiva"
            ]
        }
    },
    {
        name: "Función Inversa",
        formulas: ["f \\text{ tiene inversa} \\iff f \\text{ es biyectiva}", "\\text{Gráfica de } f^{-1}: \\text{simetría respecto a } y=x"],
        explanation: "La función inversa existe solo cuando f es biyectiva. La gráfica de f⁻¹ es el reflejo de la gráfica de f respecto a la recta y = x.",
        variables: ["f⁻¹(f(x)) = x para todo x ∈ Dom(f)", "f(f⁻¹(y)) = y para todo y ∈ Im(f)"],
        example: {
            problem: "Hallar la inversa de f(x) = 2x + 3",
            steps: [
                "Escribir y = 2x + 3",
                "Despejar x: x = (y − 3)/2",
                "Intercambiar: f⁻¹(x) = (x − 3)/2"
            ]
        }
    },
];

export const inyectivasTips = {
    "Inyectiva":              ["f(x₁) = f(x₂) ⟹ x₁ = x₂. Cada imagen tiene a lo sumo un preimagen.", "Test gráfico: recta horizontal corta la curva a lo sumo una vez"],
    "No inyectiva":           ["Si encontrás x₁ ≠ x₂ con f(x₁) = f(x₂), ya no es inyectiva", "La parábola x² no es inyectiva en ℝ"],
    "Sobreyectiva":           ["Im(f) = Codominio. Todo elemento del codominio tiene preimagen", "Test: para todo y, podés despejar x"],
    "No sobreyectiva":        ["Im(f) ⊊ Cod(f). Hay valores del codominio sin preimagen"],
    "Test recta horizontal":  ["Recta horizontal corta la gráfica más de una vez → NO inyectiva"],
    "Biyectiva":              ["Inyectiva + Sobreyectiva = Biyectiva. Solo las biyectivas tienen inversa"],
    "Parábola – inyectividad":["x² no es inyectiva en ℝ porque f(a) = f(−a). Sí lo es en [0,+∞)"],
    "Función inversa":        ["Solo existe si f es biyectiva. Gráfica: reflejo respecto a y = x"],
};
