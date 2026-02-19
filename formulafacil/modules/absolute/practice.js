// ══════════════════════════════════════════════════════════════
// PRACTICE MODE - VALOR ABSOLUTO - VERSIÓN ES6 MODULES
// ══════════════════════════════════════════════════════════════

import { randInt, pickRandom } from '../../core/utils.js';

export function generatePracticeExerciseAbsoluteValue(difficulty) {
    const exercises = [
        // FÁCIL - Definición básica
        {
            question: "Calcular |5|",
            measures: [
                { label: "Expresión", value: "|5|" }
            ],
            correctAnswer: 5,
            distractors: [-5, 0, 25]
        },
        {
            question: "Calcular |-3|",
            measures: [
                { label: "Expresión", value: "|-3|" }
            ],
            correctAnswer: 3,
            distractors: [-3, 0, 9]
        },
        // MEDIO - Operaciones simples
        {
            question: "Calcular |2 - 7|",
            measures: [
                { label: "Expresión", value: "|2 - 7|" }
            ],
            correctAnswer: 5,
            distractors: [-5, 9, 14]
        },
        {
            question: "Calcular |-4 + 1|",
            measures: [
                { label: "Expresión", value: "|-4 + 1|" }
            ],
            correctAnswer: 3,
            distractors: [-3, 5, 12]
        },
        // DIFÍCIL - Ecuaciones con valor absoluto
        {
            question: "Resolver: |x| = 4",
            measures: [
                { label: "Ecuación", value: "|x| = 4" }
            ],
            correctAnswer: "x = ±4",
            distractors: ["x = 4", "x = -4", "x = 0"]
        },
        {
            question: "Resolver: |x - 2| = 3",
            measures: [
                { label: "Ecuación", value: "|x - 2| = 3" }
            ],
            correctAnswer: "x = -1, 5",
            distractors: ["x = 1, 5", "x = -1, 3", "x = 2"]
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
    exercise.instruction = 'Practica operaciones con valor absoluto';
    
    return exercise;
}
