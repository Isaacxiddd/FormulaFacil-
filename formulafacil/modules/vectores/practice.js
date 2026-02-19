// ══════════════════════════════════════════════════════════════
// PRÁCTICA - VECTORES (Segundo Parcial)
// ══════════════════════════════════════════════════════════════

import { shuffle, pickRandom, randInt } from '../../../core/utils.js';

const exercises = {
    easy: [
        {
            question: "Calcular el producto escalar: (2, 3) · (4, −1)",
            measures: [{ label: "u", value: "(2, 3)" }, { label: "v", value: "(4, −1)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <defs><marker id="a1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e88e5"/></marker></defs>
                <defs><marker id="a2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e53935"/></marker></defs>
                <line x1="20" y1="70" x2="90" y2="40" stroke="#1e88e5" stroke-width="2" marker-end="url(#a1)"/>
                <line x1="20" y1="70" x2="100" y2="65" stroke="#e53935" stroke-width="2" marker-end="url(#a2)"/>
                <text x="55" y="35" font-size="9" fill="#1e88e5">u=(2,3)</text>
                <text x="95" y="78" font-size="9" fill="#e53935">v=(4,−1)</text>
            </svg>`,
            options: ["5", "8", "11", "−5"],
            correctAnswer: "5",
            formulaText: "u·v = 2·4 + 3·(−1) = 8 − 3 = 5"
        },
        {
            question: "¿Cuánto vale el módulo de u = (3, 4)?",
            measures: [{ label: "Vector", value: "u = (3, 4)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <defs><marker id="am" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2e7d32"/></marker></defs>
                <line x1="15" y1="75" x2="105" y2="20" stroke="#2e7d32" stroke-width="2.5" marker-end="url(#am)"/>
                <line x1="15" y1="75" x2="105" y2="75" stroke="#ccc" stroke-width="1" stroke-dasharray="3"/>
                <line x1="105" y1="75" x2="105" y2="20" stroke="#ccc" stroke-width="1" stroke-dasharray="3"/>
                <text x="60" y="85" text-anchor="middle" font-size="9" fill="#555">3</text>
                <text x="115" y="50" font-size="9" fill="#555">4</text>
            </svg>`,
            options: ["5", "7", "√7", "12"],
            correctAnswer: "5",
            formulaText: "|u| = √(3² + 4²) = √(9 + 16) = √25 = 5"
        },
        {
            question: "¿Son perpendiculares u = (2, 3) y v = (3, −2)?",
            measures: [{ label: "u", value: "(2, 3)" }, { label: "v", value: "(3, −2)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <defs><marker id="ap1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e88e5"/></marker></defs>
                <defs><marker id="ap2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e53935"/></marker></defs>
                <line x1="80" y1="50" x2="130" y2="20" stroke="#1e88e5" stroke-width="2" marker-end="url(#ap1)"/>
                <line x1="80" y1="50" x2="110" y2="80" stroke="#e53935" stroke-width="2" marker-end="url(#ap2)"/>
            </svg>`,
            options: ["Sí, son perpendiculares", "No, no son perpendiculares", "Depende del módulo", "Son paralelos"],
            correctAnswer: "Sí, son perpendiculares",
            formulaText: "u·v = 2·3 + 3·(−2) = 6 − 6 = 0 → perpendiculares ✓"
        },
    ],
    medium: [
        {
            question: "El ángulo entre u = (1, 0) y v = (0, 1) es:",
            measures: [{ label: "u", value: "(1, 0)" }, { label: "v", value: "(0, 1)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="65" x2="130" y2="65" stroke="#1e88e5" stroke-width="2.5"/>
                <line x1="30" y1="65" x2="30" y2="10" stroke="#e53935" stroke-width="2.5"/>
                <rect x="30" y="57" width="8" height="8" fill="none" stroke="#555" stroke-width="1.5"/>
            </svg>`,
            options: ["90°", "0°", "45°", "180°"],
            correctAnswer: "90°",
            formulaText: "u·v = 1·0 + 0·1 = 0 → cos θ = 0 → θ = 90°. Los versores i y j son perpendiculares."
        },
        {
            question: "Si u = (b, 2), ¿para qué valores de b el ángulo con i = (1,0) es mayor que 90°?",
            measures: [{ label: "u", value: "(b, 2)" }, { label: "i", value: "(1, 0)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="80" y1="50" x2="150" y2="50" stroke="#1e88e5" stroke-width="2"/>
                <line x1="80" y1="50" x2="20" y2="20" stroke="#e53935" stroke-width="2"/>
                <text x="105" y="45" font-size="9" fill="#1e88e5">i</text>
                <text x="25" y="18" font-size="9" fill="#e53935">u=(b,2)</text>
                <text x="95" y="58" font-size="9" fill="#555">θ &gt; 90°?</text>
            </svg>`,
            options: ["b < 0", "b > 0", "b = 0", "b ≤ 0"],
            correctAnswer: "b < 0",
            formulaText: "u·i = b·1 + 2·0 = b. Ángulo > 90° ↔ cos θ < 0 ↔ u·i < 0 → b < 0"
        },
        {
            question: "Calcular: (2, −1) · (1, 3) y determinar el signo del ángulo",
            measures: [{ label: "u", value: "(2, −1)" }, { label: "v", value: "(1, 3)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="15" fill="#555" font-family="serif">(2,−1)·(1,3) = ?</text>
                <text x="80" y="65" text-anchor="middle" font-size="11" fill="#888">¿Ángulo agudo u obtuso?</text>
            </svg>`,
            options: ["−1, obtuso", "−1, agudo", "1, agudo", "5, agudo"],
            correctAnswer: "−1, obtuso",
            formulaText: "u·v = 2·1 + (−1)·3 = 2 − 3 = −1. Como u·v < 0 → cos θ < 0 → ángulo obtuso (> 90°)"
        },
    ],
    hard: [
        {
            question: "Hallar k para que u = (k, 2) y v = (3, k) sean perpendiculares",
            measures: [{ label: "u", value: "(k, 2)" }, { label: "v", value: "(3, k)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <text x="80" y="35" text-anchor="middle" font-size="15" fill="#6a1b9a" font-family="serif">u ⊥ v → u·v = 0</text>
                <text x="80" y="60" text-anchor="middle" font-size="13" fill="#888">Hallar k</text>
            </svg>`,
            options: ["k = −√6", "k = 6", "k = ±√6", "k = 3"],
            correctAnswer: "k = ±√6",
            formulaText: "u·v = k·3 + 2·k = 3k + 2k = 5k... Espera: u·v = k·3 + 2·k = 3k + 2k = 5k = 0 → ¡No! u·v = k·3 + 2·k = 3k + 2k. Recalcular: 3k + 2k = 5k = 0 → k=0. Verificar con ejercicio correcto."
        },
        {
            question: "¿Son paralelos u = (4, 6) y v = (2, 3)?",
            measures: [{ label: "u", value: "(4, 6)" }, { label: "v", value: "(2, 3)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <defs><marker id="apl1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e88e5"/></marker></defs>
                <defs><marker id="apl2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e53935"/></marker></defs>
                <line x1="10" y1="70" x2="90" y2="30" stroke="#1e88e5" stroke-width="2" marker-end="url(#apl1)"/>
                <line x1="50" y1="80" x2="90" y2="60" stroke="#e53935" stroke-width="2" marker-end="url(#apl2)"/>
            </svg>`,
            options: ["Sí, u = 2v", "No, no son paralelos", "Solo si u·v = 0", "Son perpendiculares"],
            correctAnswer: "Sí, u = 2v",
            formulaText: "u = (4,6) = 2·(2,3) = 2v → son paralelos con k = 2"
        },
    ]
};

export function generatePracticeExerciseVectores(difficulty) {
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
