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
    {
        name: "Dominio e imagen de la tangente",
        formulas: ["\\text{Dom}(\\tan x) = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi\\}", "\\text{Im}(\\tan x) = \\mathbb{R}", "T_{\\tan} = \\pi"],
        explanation: "La tangente no está definida donde el coseno es cero (π/2 + kπ). Su imagen es todos los reales y su período es π.",
        variables: ["Dom: todos los reales excepto π/2 + kπ", "Im: todos los números reales", "T: período = π"],
        example: {
            problem: "¿Está definida tan(π/2)? ¿Y tan(π/4)?",
            steps: [
                "tan(π/2) no está definida (cos π/2 = 0)",
                "tan(π/4) = 1 (está definida)",
                "π/4 no es de la forma π/2 + kπ"
            ]
        }
    },
    {
        name: "Solución general de ecuaciones trigonométricas",
        formulas: ["\\sin x = a \\Rightarrow x = \\arcsin(a) + 2k\\pi \\text{ o } x = \\pi - \\arcsin(a) + 2k\\pi", "\\cos x = a \\Rightarrow x = \\pm \\arccos(a) + 2k\\pi", "\\tan x = a \\Rightarrow x = \\arctan(a) + k\\pi"],
        explanation: "Para resolver ecuaciones trigonométricas se usan las funciones inversas y se agregan todos los períodos. k ∈ ℤ.",
        variables: ["arcsin, arccos, arctan: funciones inversas", "k: número entero (..., -2, -1, 0, 1, 2, ...)"],
        example: {
            problem: "Resolver sin(x) = 1/2",
            steps: [
                "x = arcsin(1/2) + 2kπ = π/6 + 2kπ",
                "x = π - arcsin(1/2) + 2kπ = π - π/6 + 2kπ = 5π/6 + 2kπ",
                "Solución: x = π/6 + 2kπ o x = 5π/6 + 2kπ"
            ]
        }
    },
    {
        name: "Amplitud y período general",
        formulas: ["f(x) = a\\sin(bx) \\Rightarrow |a| = \\text{Amplitud}, \\frac{2\\pi}{|b|} = \\text{Período}", "f(x) = a\\cos(bx) \\Rightarrow |a| = \\text{Amplitud}, \\frac{2\\pi}{|b|} = \\text{Período}"],
        explanation: "La amplitud es el valor absoluto del coeficiente principal. El período se calcula dividiendo 2π por el valor absoluto del coeficiente del argumento.",
        variables: ["|a|: amplitud (distancia del centro al extremo)", "|b|: afecta el período", "Período = 2π/|b|"],
        example: {
            problem: "Hallar amplitud y período de f(x) = 3sin(2x)",
            steps: [
                "Amplitud = |3| = 3",
                "Período = 2π/|2| = π",
                "La función oscila entre -3 y 3 cada π unidades"
            ]
        }
    },
    {
        name: "Imagen de funciones transformadas",
        formulas: ["\\text{Im}(a\\sin x) = [-|a|, |a|]", "\\text{Im}(a\\cos x) = [-|a|, |a|]"],
        explanation: "Cuando se multiplica una función trigonométrica por una constante a, la imagen se escala por |a|.",
        variables: ["|a|: valor absoluto del coeficiente", "[-|a|, |a|]: nuevo rango de valores"],
        example: {
            problem: "Hallar la imagen de f(x) = 2sin(x)",
            steps: [
                "La imagen de sin(x) es [-1, 1]",
                "Se multiplica por |2| = 2",
                "Imagen = [-2, 2]"
            ]
        }
    },
    {
        name: "Identidades básicas adicionales",
        formulas: ["\\tan x = \\frac{\\sin x}{\\cos x}", "1 + \\tan^2 x = \\frac{1}{\\cos^2 x}"],
        explanation: "La tangente es el cociente entre seno y coseno. La segunda identidad es útil para simplificaciones.",
        variables: ["tan x: seno sobre coseno", "1 + tan²x: igual a 1/cos²x"],
        example: {
            problem: "Simplificar 1 + tan²x",
            steps: [
                "Usar la identidad: 1 + tan²x = 1/cos²x",
                "Esta forma es útil para resolver ecuaciones",
                "Si 1 + tan²x = 4, entonces 1/cos²x = 4"
            ]
        }
    },
    {
        name: "Desplazamiento horizontal",
        formulas: ["f(x) = \\sin(x - \\alpha) \\Rightarrow \\text{desplazamiento } \\alpha \\text{ a la derecha}", "f(x) = \\sin(x + \\alpha) \\Rightarrow \\text{desplazamiento } \\alpha \\text{ a la izquierda}"],
        explanation: "El signo dentro del argumento indica la dirección del desplazamiento horizontal. Menos = derecha, más = izquierda.",
        variables: ["α: cantidad de desplazamiento", "x - α: desplaza α a la derecha", "x + α: desplaza α a la izquierda"],
        example: {
            problem: "Graficar f(x) = sin(x - π/2)",
            steps: [
                "Es la función seno desplazada π/2 a la derecha",
                "sin(x - π/2) = -cos(x)",
                "El gráfico es el coseno negativo"
            ]
        }
    }
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
