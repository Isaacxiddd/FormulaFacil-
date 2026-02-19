// ══════════════════════════════════════════════════════════════
// DATOS - TRIGONOMETRÍA (Segundo Parcial)
// Cards: identidad / función ↔ resultado / rango / fórmula
// ══════════════════════════════════════════════════════════════

export const trigonometriaData = [
    {
        name: "Imagen de sin(x)",
        icon: "〰️",
        formulas: "\\text{Im}(\\sin x) = [-1, 1]",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="40" x2="110" y2="40" stroke="#ccc" stroke-width="1"/>
            <path d="M10,40 Q30,10 50,40 Q70,70 90,40 Q110,10 120,40" fill="none" stroke="#e53935" stroke-width="2"/>
            <text x="60" y="75" text-anchor="middle" font-size="9" fill="#e53935">Im = [−1, 1]</text>
        </svg>`
    },
    {
        name: "Imagen de cos(x)",
        icon: "📈",
        formulas: "\\text{Im}(\\cos x) = [-1, 1]",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="40" x2="110" y2="40" stroke="#ccc" stroke-width="1"/>
            <path d="M10,10 Q30,70 50,40 Q70,10 90,70 Q110,40 120,40" fill="none" stroke="#1e88e5" stroke-width="2"/>
            <text x="60" y="75" text-anchor="middle" font-size="9" fill="#1e88e5">Im = [−1, 1]</text>
        </svg>`
    },
    {
        name: "Identidad Pitagórica",
        icon: "🔺",
        formulas: "\\sin^2 x + \\cos^2 x = 1",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <polygon points="20,70 100,70 60,15" fill="none" stroke="#7b1fa2" stroke-width="2"/>
            <text x="60" y="50" text-anchor="middle" font-size="8" fill="#7b1fa2">sen²x + cos²x</text>
            <text x="60" y="65" text-anchor="middle" font-size="11" fill="#7b1fa2" font-weight="bold">= 1</text>
        </svg>`
    },
    {
        name: "SOHCAHTOA – sin",
        icon: "📐",
        formulas: "\\sin\\theta = \\frac{\\text{opuesto}}{\\text{hipotenusa}}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <polygon points="15,70 105,70 105,15" fill="none" stroke="#00897b" stroke-width="2"/>
            <text x="60" y="78" text-anchor="middle" font-size="8" fill="#00897b">hipotenusa</text>
            <text x="110" y="45" text-anchor="start" font-size="8" fill="#00897b">op.</text>
            <text x="40" y="35" text-anchor="middle" font-size="9" fill="#00897b">SOH</text>
        </svg>`
    },
    {
        name: "SOHCAHTOA – cos",
        icon: "📏",
        formulas: "\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <polygon points="15,70 105,70 105,15" fill="none" stroke="#f57c00" stroke-width="2"/>
            <text x="60" y="78" text-anchor="middle" font-size="8" fill="#f57c00">hipotenusa</text>
            <text x="60" y="67" text-anchor="middle" font-size="8" fill="#f57c00">adyacente</text>
            <text x="40" y="35" text-anchor="middle" font-size="9" fill="#f57c00">CAH</text>
        </svg>`
    },
    {
        name: "SOHCAHTOA – tan",
        icon: "↗️",
        formulas: "\\tan\\theta = \\frac{\\text{opuesto}}{\\text{adyacente}} = \\frac{\\sin\\theta}{\\cos\\theta}",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <polygon points="15,70 105,70 105,15" fill="none" stroke="#c62828" stroke-width="2"/>
            <text x="60" y="67" text-anchor="middle" font-size="8" fill="#c62828">adyacente</text>
            <text x="112" y="45" text-anchor="start" font-size="8" fill="#c62828">op.</text>
            <text x="40" y="35" text-anchor="middle" font-size="9" fill="#c62828">TOA</text>
        </svg>`
    },
    {
        name: "Solución de sin(x) = k",
        icon: "❓",
        formulas: "\\sin(x) = k \\text{ tiene solución} \\iff k \\in [-1,1]",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="50" x2="110" y2="50" stroke="#ccc" stroke-width="1"/>
            <line x1="35" y1="50" x2="85" y2="50" stroke="#e53935" stroke-width="4"/>
            <circle cx="35" cy="50" r="4" fill="#e53935"/>
            <circle cx="85" cy="50" r="4" fill="#e53935"/>
            <text x="32" y="42" font-size="9" fill="#e53935" text-anchor="middle">−1</text>
            <text x="86" y="42" font-size="9" fill="#e53935" text-anchor="middle">1</text>
            <text x="60" y="70" text-anchor="middle" font-size="8" fill="#e53935">k ∈ [−1, 1]</text>
        </svg>`
    },
    {
        name: "Período de sin y cos",
        icon: "🔁",
        formulas: "T = 2\\pi \\quad (\\text{período de } \\sin x \\text{ y } \\cos x)",
        svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="40" x2="115" y2="40" stroke="#ccc" stroke-width="1"/>
            <path d="M5,40 Q20,10 35,40 Q50,70 65,40 Q80,10 95,40" fill="none" stroke="#1e88e5" stroke-width="2"/>
            <line x1="5" y1="60" x2="65" y2="60" stroke="#ff9800" stroke-width="1.5" stroke-dasharray="3"/>
            <text x="35" y="73" text-anchor="middle" font-size="9" fill="#ff9800">T = 2π</text>
        </svg>`
    },
];

export const trigonometriaFormulasData = [
    {
        name: "Imagen de sin(x)",
        formulas: ["\\text{Im}(\\sin x) = [-1, 1]"],
        explanation: "La función seno oscila entre −1 y 1. Nunca puede salir de ese intervalo. Ambos extremos se alcanzan.",
        variables: ["sin(π/2) = 1 (máximo)", "sin(3π/2) = −1 (mínimo)"],
        example: {
            problem: "¿Para qué valores de k tiene solución sin(x) = k?",
            steps: [
                "La imagen de sin(x) es [−1, 1]",
                "sin(x) = k tiene solución ↔ k ∈ [−1, 1]",
                "Si k = 0.5 → tiene solución (x = π/6)",
                "Si k = 2 → no tiene solución ✗"
            ]
        }
    },
    {
        name: "Imagen de cos(x)",
        formulas: ["\\text{Im}(\\cos x) = [-1, 1]"],
        explanation: "La función coseno también oscila entre −1 y 1, igual que el seno. El máximo es en x = 0 y el mínimo en x = π.",
        variables: ["cos(0) = 1 (máximo)", "cos(π) = −1 (mínimo)"],
        example: {
            problem: "¿Es posible que cos(x) = 1.5?",
            steps: [
                "La imagen de cos es [−1, 1]",
                "1.5 ∉ [−1, 1]",
                "No es posible. cos(x) = 1.5 no tiene solución real. ✗"
            ]
        }
    },
    {
        name: "Identidad Pitagórica",
        formulas: ["\\sin^2 x + \\cos^2 x = 1"],
        explanation: "La identidad trigonométrica fundamental. Viene del teorema de Pitágoras aplicado al círculo unitario.",
        variables: ["Válida para todo x ∈ ℝ", "Permite expresar sin²x = 1 − cos²x y viceversa"],
        example: {
            problem: "Si sin(x) = 3/5, hallar cos(x) en el primer cuadrante",
            steps: [
                "sin²x + cos²x = 1",
                "(3/5)² + cos²x = 1",
                "cos²x = 1 − 9/25 = 16/25",
                "cos(x) = 4/5 (positivo en 1° cuadrante)"
            ]
        }
    },
    {
        name: "SOHCAHTOA – Seno",
        formulas: ["\\sin\\theta = \\frac{\\text{cateto opuesto}}{\\text{hipotenusa}}"],
        explanation: "SOH: Seno = Opuesto / Hipotenusa. Mnemotecnia para recordar las razones trigonométricas en triángulo rectángulo.",
        variables: ["cateto opuesto: el lado frente al ángulo θ", "hipotenusa: el lado más largo (frente al ángulo recto)"],
        example: {
            problem: "En un triángulo con hipotenusa 10 y cateto opuesto 6, hallar sin(θ)",
            steps: [
                "sin(θ) = opuesto / hipotenusa",
                "sin(θ) = 6 / 10 = 0.6",
                "θ = arcsin(0.6) ≈ 36.87°"
            ]
        }
    },
    {
        name: "SOHCAHTOA – Coseno",
        formulas: ["\\cos\\theta = \\frac{\\text{cateto adyacente}}{\\text{hipotenusa}}"],
        explanation: "CAH: Coseno = Adyacente / Hipotenusa. El cateto adyacente es el lado que forma el ángulo θ junto con la hipotenusa.",
        variables: ["cateto adyacente: el lado que forma el ángulo θ con la hipotenusa", "hipotenusa: el lado más largo"],
        example: {
            problem: "Hipotenusa = 13, cateto adyacente = 5. Hallar cos(θ)",
            steps: [
                "cos(θ) = adyacente / hipotenusa",
                "cos(θ) = 5/13 ≈ 0.385",
                "θ = arccos(5/13) ≈ 67.38°"
            ]
        }
    },
    {
        name: "SOHCAHTOA – Tangente",
        formulas: ["\\tan\\theta = \\frac{\\text{opuesto}}{\\text{adyacente}} = \\frac{\\sin\\theta}{\\cos\\theta}"],
        explanation: "TOA: Tangente = Opuesto / Adyacente. También puede calcularse como sin/cos.",
        variables: ["opuesto: cateto frente al ángulo", "adyacente: cateto junto al ángulo"],
        example: {
            problem: "Cateto opuesto = 4, cateto adyacente = 3. Hallar tan(θ)",
            steps: [
                "tan(θ) = opuesto / adyacente = 4/3",
                "θ = arctan(4/3) ≈ 53.13°"
            ]
        }
    },
    {
        name: "Solución de sin(x) = k",
        formulas: ["\\sin(x) = k \\text{ tiene solución real} \\iff k \\in [-1, 1]"],
        explanation: "Pregunta típica de parcial: para qué valores de k la ecuación tiene solución. La respuesta es exactamente el rango de la función seno.",
        variables: ["k: valor del lado derecho de la ecuación", "Si |k| > 1, no existe ningún x real que lo satisfaga"],
        example: {
            problem: "¿Para qué valores de k tiene solución sin(x) = k²?",
            steps: [
                "Se necesita k² ∈ [−1, 1]",
                "Como k² ≥ 0 siempre, se necesita k² ≤ 1",
                "Esto ocurre cuando k ∈ [−1, 1]",
                "Respuesta: k ∈ [−1, 1]"
            ]
        }
    },
    {
        name: "Período de sin y cos",
        formulas: ["T_{\\sin} = T_{\\cos} = 2\\pi"],
        explanation: "El seno y el coseno se repiten cada 2π. Si la función es f(x) = sin(bx), el período es 2π/|b|.",
        variables: ["T: período (longitud de un ciclo completo)", "b: coeficiente del argumento"],
        example: {
            problem: "Hallar el período de f(x) = sin(3x)",
            steps: [
                "Período = 2π / |b| = 2π / 3",
                "La función se repite cada 2π/3 unidades"
            ]
        }
    },
];

export const trigonometriaTips = {
    "Imagen de sin(x)":     ["La imagen de sin es [−1, 1]. Memorizalo: el seno nunca supera 1 ni baja de −1."],
    "Imagen de cos(x)":     ["Igual que el seno: Im(cos) = [−1, 1]."],
    "Identidad Pitagórica": ["sin²x + cos²x = 1. Sirve para encontrar una razón si tenés la otra."],
    "SOHCAHTOA – sin":      ["SOH: Seno = Opuesto / Hipotenusa"],
    "SOHCAHTOA – cos":      ["CAH: Coseno = Adyacente / Hipotenusa"],
    "SOHCAHTOA – tan":      ["TOA: Tangente = Opuesto / Adyacente"],
    "Solución de sin(x) = k": ["sin(x) = k tiene solución ↔ k ∈ [−1, 1]. Típico de parcial."],
    "Período de sin y cos": ["El período de sin y cos es 2π. Para sin(bx) es 2π/|b|."],
};
