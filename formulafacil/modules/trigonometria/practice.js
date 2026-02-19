// ══════════════════════════════════════════════════════════════
// PRÁCTICA - TRIGONOMETRÍA (Segundo Parcial)
// ══════════════════════════════════════════════════════════════

import { shuffle, pickRandom } from '../../../core/utils.js';

const exercises = {
    easy: [
        {
            question: "¿Cuál es la imagen (rango) de la función sen(x)?",
            measures: [{ label: "Función", value: "f(x) = sen(x)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="45" x2="150" y2="45" stroke="#ccc" stroke-width="1"/>
                <path d="M10,45 Q30,5 50,45 Q70,85 90,45 Q110,5 130,45 Q150,85 160,45" fill="none" stroke="#e53935" stroke-width="2.5"/>
                <line x1="10" y1="5" x2="150" y2="5" stroke="#1e88e5" stroke-width="1" stroke-dasharray="4"/>
                <line x1="10" y1="85" x2="150" y2="85" stroke="#1e88e5" stroke-width="1" stroke-dasharray="4"/>
                <text x="5" y="9" font-size="8" fill="#1e88e5">1</text>
                <text x="2" y="89" font-size="8" fill="#1e88e5">−1</text>
            </svg>`,
            options: ["[−1, 1]", "(−∞, +∞)", "[0, 1]", "(−1, 1)"],
            correctAnswer: "[−1, 1]",
            formulaText: "Im(sen(x)) = [−1, 1]. El seno oscila entre −1 y 1, ambos valores se alcanzan."
        },
        {
            question: "¿Para qué valores de k tiene solución real sen(x) = k?",
            measures: [{ label: "Ecuación", value: "sen(x) = k" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="55" x2="150" y2="55" stroke="#ccc" stroke-width="1"/>
                <line x1="45" y1="55" x2="115" y2="55" stroke="#e53935" stroke-width="4"/>
                <circle cx="45" cy="55" r="5" fill="#e53935"/>
                <circle cx="115" cy="55" r="5" fill="#e53935"/>
                <text x="42" y="45" font-size="10" fill="#e53935" text-anchor="middle">−1</text>
                <text x="116" y="45" font-size="10" fill="#e53935" text-anchor="middle">1</text>
                <text x="80" y="75" text-anchor="middle" font-size="9" fill="#555">k debe estar en este intervalo</text>
            </svg>`,
            options: ["k ∈ [−1, 1]", "k ∈ ℝ", "k ≥ 0", "k ∈ (−1, 1)"],
            correctAnswer: "k ∈ [−1, 1]",
            formulaText: "sen(x) = k tiene solución ↔ k ∈ [−1, 1] (la imagen del seno)"
        },
        {
            question: "SOHCAHTOA: si el cateto opuesto = 3 y la hipotenusa = 5, ¿cuánto vale sen(θ)?",
            measures: [{ label: "Opuesto", value: "3" }, { label: "Hipotenusa", value: "5" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,80 120,80 120,20" fill="none" stroke="#2e7d32" stroke-width="2"/>
                <rect x="112" y="72" width="8" height="8" fill="none" stroke="#555" stroke-width="1.5"/>
                <text x="70" y="75" text-anchor="middle" font-size="9" fill="#555">adyacente</text>
                <text x="130" y="52" font-size="9" fill="#e53935" font-weight="bold">3</text>
                <text x="55" y="42" text-anchor="middle" font-size="9" fill="#2e7d32">hip=5</text>
                <text x="23" y="75" font-size="9" fill="#6a1b9a">θ</text>
            </svg>`,
            options: ["3/5", "5/3", "4/5", "3/4"],
            correctAnswer: "3/5",
            formulaText: "SOH: sen(θ) = opuesto/hipotenusa = 3/5 = 0.6"
        },
        {
            question: "¿Cuál es el período de la función cos(x)?",
            measures: [{ label: "Función", value: "f(x) = cos(x)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="45" x2="150" y2="45" stroke="#ccc" stroke-width="1"/>
                <path d="M10,5 Q30,85 50,45 Q70,5 90,85 Q110,45 130,5" fill="none" stroke="#1e88e5" stroke-width="2"/>
                <line x1="10" y1="65" x2="90" y2="65" stroke="#ff9800" stroke-width="1.5" stroke-dasharray="3"/>
                <text x="50" y="78" text-anchor="middle" font-size="9" fill="#ff9800">T = 2π</text>
            </svg>`,
            options: ["2π", "π", "π/2", "4π"],
            correctAnswer: "2π",
            formulaText: "El período de cos(x) es 2π ≈ 6.28. Se repite cada 2π unidades."
        },
    ],
    medium: [
        {
            question: "Usando la identidad pitagórica, si sen(x) = 4/5, ¿cuánto vale cos(x) en el 1° cuadrante?",
            measures: [{ label: "sen(x)", value: "4/5" }, { label: "Cuadrante", value: "1°" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,80 140,80 140,20" fill="none" stroke="#7b1fa2" stroke-width="2"/>
                <rect x="132" y="72" width="8" height="8" fill="none" stroke="#555" stroke-width="1.5"/>
                <text x="80" y="76" text-anchor="middle" font-size="9" fill="#555">adyacente = ?</text>
                <text x="150" y="52" font-size="9" fill="#7b1fa2">4</text>
                <text x="70" y="42" text-anchor="middle" font-size="9" fill="#7b1fa2">hip = 5</text>
            </svg>`,
            options: ["3/5", "4/5", "5/4", "√7/5"],
            correctAnswer: "3/5",
            formulaText: "sen²x + cos²x = 1 → (4/5)² + cos²x = 1 → cos²x = 9/25 → cos(x) = 3/5 (positivo en 1°)"
        },
        {
            question: "¿Para qué valores de k la ecuación sen(x) = k² tiene solución?",
            measures: [{ label: "Ecuación", value: "sen(x) = k²" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="18" fill="#e53935" font-family="serif">sen(x) = k²</text>
                <text x="80" y="65" text-anchor="middle" font-size="12" fill="#888">¿Para qué k tiene solución?</text>
            </svg>`,
            options: ["k ∈ [−1, 1]", "k ∈ ℝ", "k ≥ 0", "k ∈ [0, 1]"],
            correctAnswer: "k ∈ [−1, 1]",
            formulaText: "Se necesita k² ∈ [0, 1] (seno entre −1 y 1, y k²≥0). Entonces k² ≤ 1, lo que ocurre para k ∈ [−1, 1]."
        },
        {
            question: "Si tan(θ) = 3/4 en un triángulo rectángulo, ¿cuánto vale sen(θ)?",
            measures: [{ label: "tan(θ)", value: "3/4" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,80 140,80 140,20" fill="none" stroke="#00897b" stroke-width="2"/>
                <rect x="132" y="72" width="8" height="8" fill="none" stroke="#555" stroke-width="1.5"/>
                <text x="80" y="76" text-anchor="middle" font-size="9" fill="#555">adyacente = 4</text>
                <text x="150" y="52" font-size="9" fill="#00897b">op=3</text>
                <text x="23" y="75" font-size="9" fill="#6a1b9a">θ</text>
            </svg>`,
            options: ["3/5", "4/5", "3/4", "4/3"],
            correctAnswer: "3/5",
            formulaText: "tan=opp/adj=3/4 → hipotenusa=√(9+16)=5 → sen=opp/hip=3/5"
        },
    ],
    hard: [
        {
            question: "¿Para qué valores de b la ecuación sen(x) = b − 2 tiene solución?",
            measures: [{ label: "Ecuación", value: "sen(x) = b − 2" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="18" fill="#c62828" font-family="serif">sen(x) = b − 2</text>
                <text x="80" y="65" text-anchor="middle" font-size="12" fill="#888">Restricción por imagen del seno</text>
            </svg>`,
            options: ["b ∈ [1, 3]", "b ∈ [−1, 1]", "b ∈ [−3, −1]", "b ∈ ℝ"],
            correctAnswer: "b ∈ [1, 3]",
            formulaText: "Se necesita b − 2 ∈ [−1, 1] → −1 ≤ b−2 ≤ 1 → 1 ≤ b ≤ 3. Respuesta: b ∈ [1, 3]"
        },
        {
            question: "¿Cuál es el período de f(x) = sen(3x)?",
            measures: [{ label: "Función", value: "f(x) = sen(3x)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="45" x2="150" y2="45" stroke="#ccc" stroke-width="1"/>
                <path d="M10,45 Q20,5 30,45 Q40,85 50,45 Q60,5 70,45 Q80,85 90,45 Q100,5 110,45 Q120,85 130,45" fill="none" stroke="#e53935" stroke-width="2"/>
                <text x="80" y="75" text-anchor="middle" font-size="9" fill="#888">T = 2π/|b|</text>
            </svg>`,
            options: ["2π/3", "6π", "2π", "π/3"],
            correctAnswer: "2π/3",
            formulaText: "Período = 2π/|b| = 2π/3. El coeficiente b=3 comprime el período."
        },
    ]
};

export function generatePracticeExerciseTrigonometria(difficulty) {
    const pool = difficulty === 'easy'
        ? exercises.easy
        : difficulty === 'medium'
            ? exercises.medium
            : difficulty === 'hard'
                ? exercises.hard
                : [...exercises.easy, ...exercises.medium, ...exercises.hard];

    const base = pickRandom(pool);
    return {
        ...base,
        options: shuffle([...base.options]),
    };
}
