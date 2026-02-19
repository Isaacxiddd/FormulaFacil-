// ══════════════════════════════════════════════════════════════
// PRÁCTICA - INYECTIVAS Y SOBREYECTIVAS (Segundo Parcial)
// ══════════════════════════════════════════════════════════════

import { shuffle, pickRandom } from '../../../core/utils.js';

const exercises = {
    easy: [
        {
            question: "¿Es f(x) = 2x + 1 inyectiva en ℝ?",
            measures: [{ label: "f(x)", value: "2x + 1" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="45" x2="150" y2="45" stroke="#ccc" stroke-width="1"/>
                <line x1="80" y1="5" x2="80" y2="85" stroke="#ccc" stroke-width="1"/>
                <line x1="10" y1="80" x2="150" y2="10" stroke="#1e88e5" stroke-width="2.5"/>
                <line x1="10" y1="30" x2="150" y2="30" stroke="#e53935" stroke-width="1" stroke-dasharray="4"/>
                <circle cx="53" cy="30" r="4" fill="#e53935"/>
                <text x="80" y="82" text-anchor="middle" font-size="8" fill="#888">Test recta horizontal</text>
            </svg>`,
            options: ["Sí, es inyectiva", "No, no es inyectiva", "Solo en [0,+∞)", "Depende del codominio"],
            correctAnswer: "Sí, es inyectiva",
            formulaText: "f(x₁)=f(x₂) → 2x₁+1=2x₂+1 → x₁=x₂ ✓. Toda recta horizontal la corta una sola vez."
        },
        {
            question: "¿Es f(x) = x² inyectiva en ℝ?",
            measures: [{ label: "f(x)", value: "x²" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="45" x2="150" y2="45" stroke="#ccc" stroke-width="1"/>
                <line x1="80" y1="5" x2="80" y2="85" stroke="#ccc" stroke-width="1"/>
                <path d="M15,80 Q80,5 145,80" fill="none" stroke="#1e88e5" stroke-width="2.5"/>
                <line x1="10" y1="35" x2="150" y2="35" stroke="#e53935" stroke-width="1" stroke-dasharray="4"/>
                <circle cx="50" cy="35" r="4" fill="#e53935"/>
                <circle cx="110" cy="35" r="4" fill="#e53935"/>
                <text x="80" y="82" text-anchor="middle" font-size="8" fill="#e53935">2 intersecciones → NO inyectiva</text>
            </svg>`,
            options: ["No, no es inyectiva", "Sí, es inyectiva", "Solo para x > 0", "Sí, porque es continua"],
            correctAnswer: "No, no es inyectiva",
            formulaText: "f(2) = 4 = f(−2) pero 2 ≠ −2. No es inyectiva. La parábola corta dos veces a cualquier recta horizontal positiva."
        },
        {
            question: "Una función f: A → B es sobreyectiva cuando:",
            measures: [{ label: "Condición", value: "Im(f) vs Cod(f)" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="15" width="55" height="60" rx="8" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
                <rect x="95" y="15" width="55" height="60" rx="8" fill="none" stroke="#2e7d32" stroke-width="1.5"/>
                <circle cx="37" cy="30" r="4" fill="#1e88e5"/>
                <circle cx="37" cy="50" r="4" fill="#1e88e5"/>
                <circle cx="37" cy="68" r="4" fill="#1e88e5"/>
                <circle cx="122" cy="30" r="4" fill="#2e7d32"/>
                <circle cx="122" cy="50" r="4" fill="#2e7d32"/>
                <circle cx="122" cy="68" r="4" fill="#2e7d32"/>
                <line x1="41" y1="30" x2="118" y2="30" stroke="#555" stroke-width="1"/>
                <line x1="41" y1="50" x2="118" y2="68" stroke="#555" stroke-width="1"/>
                <line x1="41" y1="68" x2="118" y2="50" stroke="#555" stroke-width="1"/>
            </svg>`,
            options: ["Im(f) = Cod(f)", "Im(f) ⊊ Cod(f)", "Dom(f) = Cod(f)", "f es inyectiva"],
            correctAnswer: "Im(f) = Cod(f)",
            formulaText: "Sobreyectiva ↔ Im(f) = Cod(f). Cada elemento del codominio tiene al menos un preimagen."
        },
    ],
    medium: [
        {
            question: "¿Es f: ℝ → ℝ, f(x) = x² sobreyectiva?",
            measures: [{ label: "f(x)", value: "x²" }, { label: "Cod", value: "ℝ" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="50" x2="150" y2="50" stroke="#ccc" stroke-width="1"/>
                <line x1="80" y1="5" x2="80" y2="85" stroke="#ccc" stroke-width="1"/>
                <path d="M15,80 Q80,5 145,80" fill="none" stroke="#1e88e5" stroke-width="2"/>
                <text x="40" y="78" font-size="9" fill="#555">Im=[0,∞)</text>
                <text x="80" y="85" text-anchor="middle" font-size="8" fill="#e53935">¿cubre todo ℝ?</text>
            </svg>`,
            options: ["No, Im = [0, +∞) ≠ ℝ", "Sí, toma todos los valores", "Sí, porque Dom = ℝ", "Depende de x"],
            correctAnswer: "No, Im = [0, +∞) ≠ ℝ",
            formulaText: "Im(x²) = [0,+∞). Los negativos no tienen preimagen. No es sobreyectiva cuando Cod = ℝ."
        },
        {
            question: "Para que f: ℝ → ℝ, f(x) = x² sea sobreyectiva, ¿cuál debería ser el codominio?",
            measures: [{ label: "f(x)", value: "x²" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,75 Q80,5 140,75" fill="none" stroke="#1e88e5" stroke-width="2"/>
                <text x="80" y="85" text-anchor="middle" font-size="9" fill="#888">Im = [0, +∞)</text>
                <text x="80" y="35" text-anchor="middle" font-size="10" fill="#555">Cod = ?</text>
            </svg>`,
            options: ["[0, +∞)", "ℝ", "(0, +∞)", "ℝ − {0}"],
            correctAnswer: "[0, +∞)",
            formulaText: "Si declaramos Cod = [0,+∞) = Im(x²), entonces Im = Cod y f sería sobreyectiva."
        },
        {
            question: "Una función biyectiva es:",
            measures: [{ label: "Definición", value: "Inyectiva + Sobreyectiva" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="15" width="55" height="60" rx="8" fill="none" stroke="#1e88e5" stroke-width="1.5"/>
                <rect x="95" y="15" width="55" height="60" rx="8" fill="none" stroke="#2e7d32" stroke-width="1.5"/>
                <circle cx="37" cy="28" r="4" fill="#1e88e5"/>
                <circle cx="37" cy="48" r="4" fill="#1e88e5"/>
                <circle cx="37" cy="68" r="4" fill="#1e88e5"/>
                <circle cx="122" cy="28" r="4" fill="#2e7d32"/>
                <circle cx="122" cy="48" r="4" fill="#2e7d32"/>
                <circle cx="122" cy="68" r="4" fill="#2e7d32"/>
                <line x1="41" y1="28" x2="118" y2="28" stroke="#555" stroke-width="1"/>
                <line x1="41" y1="48" x2="118" y2="48" stroke="#555" stroke-width="1"/>
                <line x1="41" y1="68" x2="118" y2="68" stroke="#555" stroke-width="1"/>
                <text x="80" y="10" text-anchor="middle" font-size="7" fill="#ff9800">correspondencia 1-1</text>
            </svg>`,
            options: ["Inyectiva y sobreyectiva", "Solo inyectiva", "Solo sobreyectiva", "Ni inyectiva ni sobreyectiva"],
            correctAnswer: "Inyectiva y sobreyectiva",
            formulaText: "Biyectiva = inyectiva + sobreyectiva. Establece una correspondencia 1 a 1 entre Dom y Cod."
        },
    ],
    hard: [
        {
            question: "f: ℝ → ℝ, f(x) = 2x + 3. ¿Es biyectiva?",
            measures: [{ label: "f(x)", value: "2x + 3" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="45" x2="150" y2="45" stroke="#ccc" stroke-width="1"/>
                <line x1="80" y1="5" x2="80" y2="85" stroke="#ccc" stroke-width="1"/>
                <line x1="10" y1="78" x2="150" y2="12" stroke="#1e88e5" stroke-width="2.5"/>
            </svg>`,
            options: ["Sí, es biyectiva", "No, no es inyectiva", "No, no es sobreyectiva", "Solo si Dom = [0,∞)"],
            correctAnswer: "Sí, es biyectiva",
            formulaText: "Inyectiva: 2x₁+3=2x₂+3→x₁=x₂ ✓. Sobreyectiva: para todo y, x=(y−3)/2 ✓. Es biyectiva."
        },
        {
            question: "Si f es biyectiva, ¿qué podemos asegurar?",
            measures: [{ label: "f", value: "biyectiva" }],
            svg: `<svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="80" x2="155" y2="10" stroke="#1e88e5" stroke-width="2"/>
                <line x1="5" y1="10" x2="155" y2="80" stroke="#e53935" stroke-width="1.5" stroke-dasharray="4"/>
                <text x="80" y="70" text-anchor="middle" font-size="8" fill="#e53935">f⁻¹</text>
                <text x="80" y="25" text-anchor="middle" font-size="8" fill="#1e88e5">f</text>
            </svg>`,
            options: ["Existe f⁻¹", "No existe f⁻¹", "f es constante", "Dom = ℝ"],
            correctAnswer: "Existe f⁻¹",
            formulaText: "f biyectiva ↔ existe f⁻¹. La inversa existe sí y solo si f es biyectiva."
        },
    ]
};

export function generatePracticeExerciseInyectivas(difficulty) {
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
