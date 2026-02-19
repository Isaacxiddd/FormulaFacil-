// ══════════════════════════════════════════════════════════════
// PRACTICE MODE INECUACIONES - VERSIÓN ES6 MODULES
// ══════════════════════════════════════════════════════════════

import { randInt, pickRandom } from '../../core/utils.js';

export function generatePracticeExerciseInequalities(difficulty) {
    const exercises = [
        // FÁCIL - 1 PASO
        {
            question: "Resolver: x + 5 > 8",
            measures: [
                { label: "Inecuación", value: "x + 5 > 8" }
            ],
            correctAnswer: "x > 3",
            distractors: ["x < 3", "x > 13", "x = 3"]
        },
        {
            question: "Resolver: 2x ≤ 10",
            measures: [
                { label: "Inecuación", value: "2x ≤ 10" }
            ],
            correctAnswer: "x ≤ 5",
            distractors: ["x ≥ 5", "x < 5", "x = 5"]
        },
        // MEDIO - 2 PASOS
        {
            question: "Resolver: 3x - 4 ≥ 8",
            measures: [
                { label: "Inecuación", value: "3x - 4 ≥ 8" }
            ],
            correctAnswer: "x ≥ 4",
            distractors: ["x ≤ 4", "x > 4", "x = 4"]
        },
        {
            question: "Resolver: -2x + 6 < 10",
            measures: [
                { label: "Inecuación", value: "-2x + 6 < 10" }
            ],
            correctAnswer: "x > -2",
            distractors: ["x < -2", "x > 2", "x = -2"]
        },
        // DIFÍCIL - 3+ PASOS
        {
            question: "Resolver: 2(x + 3) ≥ 12",
            measures: [
                { label: "Inecuación", value: "2(x + 3) ≥ 12" }
            ],
            correctAnswer: "x ≥ 3",
            distractors: ["x ≤ 3", "x > 3", "x = 3"]
        },
        {
            question: "Resolver: 4x - 2(3 - x) > 10",
            measures: [
                { label: "Inecuación", value: "4x - 2(3 - x) > 10" }
            ],
            correctAnswer: "x > 4",
            distractors: ["x < 4", "x ≥ 4", "x = 4"]
        }
    ];
    
    // Seleccionar ejercicio según dificultad
    let exercisePool;
    if (difficulty === 'easy') {
        exercisePool = exercises.slice(0, 2);
    } else if (difficulty === 'medium') {
        exercisePool = exercises.slice(2, 4);
    } else {
        exercisePool = exercises;
    }
    
    const exercise = exercisePool[Math.floor(Math.random() * exercisePool.length)];
    
    // Mezclar opciones
    const options = [exercise.correctAnswer, ...exercise.distractors];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    exercise.options = options;
    exercise.figuresTitle = '📊 Conceptos';
    exercise.formulasTitle = '📝 Fórmulas';
    exercise.instruction = 'Practica resolviendo inecuaciones lineales';
    
    return exercise;
}
