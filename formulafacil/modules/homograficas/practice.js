// ══════════════════════════════════════════════════════════════
// PRÁCTICA - FUNCIONES HOMOGRÁFICAS (Segundo Parcial)
// ══════════════════════════════════════════════════════════════

import { shuffle, pickRandom } from '../../../core/utils.js';

const exercises = {
    easy: [
        {
            question: "Hallar la asíntota vertical de f(x) = (2x+1)/(x−3)",
            measures: [{ label: "f(x)", value: "(2x+1)/(x−3)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="15" fill="#e53935" font-family="serif">(2x + 1)</text>
                <line x1="30" y1="45" x2="130" y2="45" stroke="#555" stroke-width="2"/>
                <text x="80" y="62" text-anchor="middle" font-size="15" fill="#e53935" font-family="serif">(x − 3)</text>
                <text x="80" y="82" text-anchor="middle" font-size="9" fill="#888">AV: denominador = 0</text>
            </svg>`,
            options: ["x = 3", "x = −3", "x = 1/2", "y = 2"],
            correctAnswer: "x = 3",
            formulaText: "AV: x − 3 = 0 → x = 3"
        },
        {
            question: "Hallar la asíntota horizontal de f(x) = (2x+1)/(x−3)",
            measures: [{ label: "f(x)", value: "(2x+1)/(x−3)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="15" fill="#1e88e5" font-family="serif">(2x + 1)</text>
                <line x1="30" y1="45" x2="130" y2="45" stroke="#555" stroke-width="2"/>
                <text x="80" y="62" text-anchor="middle" font-size="15" fill="#1e88e5" font-family="serif">(x − 3)</text>
                <text x="80" y="82" text-anchor="middle" font-size="9" fill="#888">AH: coef. líderes</text>
            </svg>`,
            options: ["y = 2", "y = 3", "y = 1", "y = −3"],
            correctAnswer: "y = 2",
            formulaText: "AH = a/c = 2/1 = 2 (cociente de coeficientes de x en num. y den.)"
        },
        {
            question: "¿Cuál es el dominio de f(x) = (x+5)/(2x−4)?",
            measures: [{ label: "f(x)", value: "(x+5)/(2x−4)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="15" fill="#2e7d32" font-family="serif">(x + 5)</text>
                <line x1="30" y1="45" x2="130" y2="45" stroke="#555" stroke-width="2"/>
                <text x="80" y="62" text-anchor="middle" font-size="15" fill="#2e7d32" font-family="serif">(2x − 4)</text>
            </svg>`,
            options: ["ℝ − {2}", "ℝ − {4}", "ℝ − {−5}", "ℝ"],
            correctAnswer: "ℝ − {2}",
            formulaText: "2x − 4 = 0 → x = 2. Dom = ℝ − {2}"
        },
    ],
    medium: [
        {
            question: "Para f(x) = (3x−6)/(x+1), hallar el cero (donde f(x) = 0)",
            measures: [{ label: "f(x)", value: "(3x−6)/(x+1)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="50" x2="150" y2="50" stroke="#ccc" stroke-width="1"/>
                <line x1="80" y1="5" x2="80" y2="85" stroke="#ccc" stroke-width="1"/>
                <text x="80" y="35" text-anchor="middle" font-size="14" fill="#ff9800">f(x) = 0</text>
                <text x="80" y="70" text-anchor="middle" font-size="10" fill="#888">¿Dónde cruza el eje x?</text>
            </svg>`,
            options: ["x = 2", "x = 6", "x = −1", "x = 3"],
            correctAnswer: "x = 2",
            formulaText: "f(x) = 0 → numerador = 0: 3x − 6 = 0 → x = 2. (Verificar: x=2 no anula denominador: 2+1=3 ≠ 0 ✓)"
        },
        {
            question: "Hallar f(0) (intersección con eje y) de f(x) = (2x+3)/(x−1)",
            measures: [{ label: "f(x)", value: "(2x+3)/(x−1)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="80" y1="5" x2="80" y2="85" stroke="#ccc" stroke-width="1"/>
                <line x1="10" y1="45" x2="150" y2="45" stroke="#ccc" stroke-width="1"/>
                <circle cx="80" cy="25" r="6" fill="#6a1b9a"/>
                <text x="95" y="28" font-size="9" fill="#6a1b9a">f(0) = ?</text>
            </svg>`,
            options: ["−3", "3", "2", "−2"],
            correctAnswer: "−3",
            formulaText: "f(0) = (2·0 + 3)/(0 − 1) = 3/(−1) = −3"
        },
        {
            question: "¿Cuál es la imagen de f(x) = (2x+1)/(x−3)?",
            measures: [{ label: "AH", value: "y = 2" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="30" x2="155" y2="30" stroke="#e53935" stroke-width="1.5" stroke-dasharray="4"/>
                <text x="140" y="25" font-size="8" fill="#e53935">y=2</text>
                <text x="80" y="65" text-anchor="middle" font-size="10" fill="#888">La función nunca alcanza</text>
                <text x="80" y="78" text-anchor="middle" font-size="10" fill="#888">el valor de la AH</text>
            </svg>`,
            options: ["ℝ − {2}", "ℝ − {3}", "ℝ", "[2, +∞)"],
            correctAnswer: "ℝ − {2}",
            formulaText: "Im = ℝ − {AH} = ℝ − {2}. La función puede tomar cualquier valor excepto y = 2."
        },
    ],
    hard: [
        {
            question: "¿Es f(x) = (2x+4)/(x+2) una función homográfica?",
            measures: [{ label: "f(x)", value: "(2x+4)/(x+2)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="15" fill="#c62828" font-family="serif">(2x + 4)</text>
                <line x1="30" y1="45" x2="130" y2="45" stroke="#555" stroke-width="2"/>
                <text x="80" y="62" text-anchor="middle" font-size="15" fill="#c62828" font-family="serif">(x + 2)</text>
                <text x="80" y="82" text-anchor="middle" font-size="9" fill="#888">Verificar: ad − bc ≠ 0</text>
            </svg>`,
            options: ["No, es una constante", "Sí, es homográfica", "Sí, con AV en x=−2", "No, el grado no coincide"],
            correctAnswer: "No, es una constante",
            formulaText: "ad − bc = 2·2 − 4·1 = 0. Entonces f(x) = 2(x+2)/(x+2) = 2 (constante, no homográfica)"
        },
    ]
};

export function generatePracticeExerciseHomograficas(difficulty) {
    const pool = difficulty === 'easy'
        ? exercises.easy
        : difficulty === 'medium'
            ? exercises.medium
            : difficulty === 'hard'
                ? exercises.hard
                : [...exercises.easy, ...exercises.medium, ...exercises.hard];

    const base = pickRandom(pool);
    return { ...base, options: shuffle([...base.options]) };
}
