// ══════════════════════════════════════════════════════════════
// PRÁCTICA - LOGARITMOS (Segundo Parcial)
// ══════════════════════════════════════════════════════════════

import { shuffle, pickRandom } from '../../core/utils.js';

const exercises = {
    easy: [
        {
            question: "¿Cuánto vale log₁₀(100)?",
            measures: [{ label: "Expresión", value: "log₁₀(100)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="40" text-anchor="middle" font-size="22" fill="#e65100" font-family="serif">log(100)</text>
                <text x="80" y="70" text-anchor="middle" font-size="13" fill="#888">base 10</text>
            </svg>`,
            options: ["2", "10", "100", "1"],
            correctAnswer: "2",
            formulaText: "log₁₀(100) = log₁₀(10²) = 2 · log₁₀(10) = 2 · 1 = 2"
        },
        {
            question: "¿Cuánto vale logₐ(1) para cualquier base válida a?",
            measures: [{ label: "Expresión", value: "logₐ(1)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="45" text-anchor="middle" font-size="22" fill="#c62828" font-family="serif">logₐ(1) = ?</text>
            </svg>`,
            options: ["0", "1", "a", "−1"],
            correctAnswer: "0",
            formulaText: "logₐ(1) = 0 porque a⁰ = 1 para cualquier base válida"
        },
        {
            question: "¿Cuánto vale log₂(8)?",
            measures: [{ label: "Expresión", value: "log₂(8)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="45" text-anchor="middle" font-size="22" fill="#1565c0" font-family="serif">log₂(8)</text>
            </svg>`,
            options: ["3", "2", "4", "8"],
            correctAnswer: "3",
            formulaText: "log₂(8) = log₂(2³) = 3 · log₂(2) = 3 · 1 = 3"
        },
        {
            question: "¿Cuánto vale log₅(5)?",
            measures: [{ label: "Expresión", value: "log₅(5)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="45" text-anchor="middle" font-size="22" fill="#00695c" font-family="serif">log₅(5)</text>
            </svg>`,
            options: ["1", "0", "5", "25"],
            correctAnswer: "1",
            formulaText: "logₐ(a) = 1 siempre. Aquí a = 5, entonces log₅(5) = 1"
        },
    ],
    medium: [
        {
            question: "Simplificar: log(4 · 25)",
            measures: [{ label: "Expresión", value: "log(4 · 25)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="40" text-anchor="middle" font-size="18" fill="#e65100" font-family="serif">log(4 · 25)</text>
                <text x="80" y="68" text-anchor="middle" font-size="12" fill="#888">Propiedad del producto</text>
            </svg>`,
            options: ["2", "log4 + log25", "log100", "Todas son equivalentes"],
            correctAnswer: "Todas son equivalentes",
            formulaText: "log(4·25) = log(100) = 2. También: log4 + log25 = 2. Todas son correctas."
        },
        {
            question: "Resolver: log₃(x) = 4",
            measures: [{ label: "Ecuación", value: "log₃(x) = 4" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="40" text-anchor="middle" font-size="18" fill="#6a1b9a" font-family="serif">log₃(x) = 4</text>
                <text x="80" y="68" text-anchor="middle" font-size="12" fill="#888">Definición de logaritmo</text>
            </svg>`,
            options: ["81", "64", "12", "34"],
            correctAnswer: "81",
            formulaText: "log₃(x) = 4 ↔ x = 3⁴ = 81"
        },
        {
            question: "Simplificar: log(1000) − log(10)",
            measures: [{ label: "Expresión", value: "log(1000) − log(10)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="40" text-anchor="middle" font-size="16" fill="#1565c0" font-family="serif">log(1000) − log(10)</text>
                <text x="80" y="68" text-anchor="middle" font-size="12" fill="#888">Propiedad del cociente</text>
            </svg>`,
            options: ["2", "3", "100", "log(990)"],
            correctAnswer: "2",
            formulaText: "log(1000) − log(10) = log(1000/10) = log(100) = 2"
        },
        {
            question: "¿Para qué valores de x existe log(2x − 6)?",
            measures: [{ label: "Condición", value: "argumento > 0" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="40" text-anchor="middle" font-size="16" fill="#2e7d32" font-family="serif">log(2x − 6)</text>
                <text x="80" y="68" text-anchor="middle" font-size="12" fill="#888">Dom = ?</text>
            </svg>`,
            options: ["x > 3", "x > 6", "x > 0", "x ≥ 3"],
            correctAnswer: "x > 3",
            formulaText: "2x − 6 > 0  →  2x > 6  →  x > 3. Dom = (3, +∞)"
        },
    ],
    hard: [
        {
            question: "¿Es correcto que log(x + 2) = log x + log 2?",
            measures: [{ label: "Afirmación", value: "log(x+2) = logx + log2" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="14" fill="#c62828" font-family="serif">log(x + 2) = log x + log 2</text>
                <text x="80" y="65" text-anchor="middle" font-size="13" fill="#888">¿Verdadero o Falso?</text>
            </svg>`,
            options: ["Falso", "Verdadero", "Solo para x = 0", "Depende de la base"],
            correctAnswer: "Falso",
            formulaText: "FALSO. log(x+2) ≠ logx + log2. La propiedad es log(x·2) = logx + log2. La SUMA del argumento NO se puede separar."
        },
        {
            question: "Resolver: 2·log(x) = log(9)",
            measures: [{ label: "Ecuación", value: "2·log(x) = log(9)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="45" text-anchor="middle" font-size="18" fill="#e65100" font-family="serif">2·log(x) = log(9)</text>
            </svg>`,
            options: ["3", "9", "±3", "4.5"],
            correctAnswer: "3",
            formulaText: "2·log(x) = log(x²) = log(9)  →  x² = 9  →  x = 3 (x > 0 por dom del log)"
        },
        {
            question: "Calcular log₂(32) usando cambio de base",
            measures: [{ label: "Expresión", value: "log₂(32)" }, { label: "Método", value: "Cambio de base" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="18" fill="#6a1b9a" font-family="serif">log₂(32)</text>
                <text x="80" y="65" text-anchor="middle" font-size="12" fill="#888">= log(32)/log(2)</text>
            </svg>`,
            options: ["5", "4", "6", "16"],
            correctAnswer: "5",
            formulaText: "log₂(32) = log(32)/log(2) = log(2⁵)/log(2) = 5·log(2)/log(2) = 5"
        },
    ]
};

const svgDefault = `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
    <text x="80" y="45" text-anchor="middle" font-size="30" fill="#e65100">log</text>
</svg>`;

export function generatePracticeExerciseLogaritmos(difficulty) {
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
        svg: base.svg || svgDefault,
        measures: base.measures || [],
        options: shuffle([...base.options]),
    };
}
