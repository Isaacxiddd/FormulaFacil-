// ══════════════════════════════════════════════════════
// PRACTICE MODE FUNCIONES - VERSIÓN ES6 MODULES
// ══════════════════════════════════════════════════════

import { randInt, formatNumber } from '../../core/utils.js';

// Función principal exportada
export function generatePracticeExerciseFunctions(difficulty) {
    return generateBasicFunctionExercise(difficulty);
}

// Función fallback del sistema original
function generateBasicFunctionExercise(difficulty) {
    
    const exercises = [
        {
            question: "Evaluar f(x) = 2x + 1 en x = 3",
            measures: [
                { label: "Función", value: "f(x) = 2x + 1" },
                { label: "x", value: "3" }
            ],
            correctAnswer: 7,
            distractors: [6, 5, 8],
            formulaText: "f(3) = 2(3) + 1 = 6 + 1 = 7",
            svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="90" x2="90" y2="10" stroke="#2196f3" stroke-width="3"/><circle cx="30" cy="70" r="3" fill="#ff5722"/><circle cx="0" cy="60" r="3" fill="#4caf50"/><text x="25" y="85" font-size="8" fill="#2196f3">(1,5)</text><text x="5" y="55" font-size="8" fill="#4caf50">(0,3)</text></svg>`
        },
        {
            question: "Calcular la pendiente entre (0,1) y (2,5)",
            measures: [
                { label: "Punto 1", value: "(0,1)" },
                { label: "Punto 2", value: "(2,5)" }
            ],
            correctAnswer: 2,
            distractors: [3, 1, 4],
            formulaText: "m = (y₂ - y₁)/(x₂ - x₁) = (5-1)/(2-0) = 4/2 = 2",
            svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="70" x2="80" y2="30" stroke="#ff9800" stroke-width="3"/><circle cx="20" cy="70" r="3" fill="#ff5722"/><circle cx="80" cy="30" r="3" fill="#ff5722"/><text x="15" y="85" font-size="8" fill="#ff9800">(0,1)</text><text x="75" y="25" font-size="8" fill="#ff9800">(2,5)</text></svg>`
        },
        {
            question: "Evaluar f(x) = x² - 3 en x = 4",
            measures: [
                { label: "Función", value: "f(x) = x² - 3" },
                { label: "x", value: "4" }
            ],
            correctAnswer: 13,
            distractors: [16, 9, 19],
            formulaText: "f(4) = 4² - 3 = 16 - 3 = 13",
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="30" font-size="12" fill="#9c27b0" text-anchor="middle">f(x) = x² - 3</text><text x="50" y="60" font-size="14" fill="#e91e63" text-anchor="middle">f(4) = 13</text></svg>`
        },
        {
            question: "Calcular la pendiente entre (-1,2) y (3,6)",
            measures: [
                { label: "Punto 1", value: "(-1,2)" },
                { label: "Punto 2", value: "(3,6)" }
            ],
            correctAnswer: 1,
            distractors: [2, 0.5, 1.5],
            formulaText: "m = (6-2)/(3-(-1)) = 4/4 = 1",
            svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="70" x2="80" y2="30" stroke="#00bcd4" stroke-width="3"/><circle cx="20" cy="70" r="3" fill="#ff5722"/><circle cx="80" cy="30" r="3" fill="#ff5722"/><text x="10" y="85" font-size="8" fill="#00bcd4">(-1,2)</text><text x="75" y="25" font-size="8" fill="#00bcd4">(3,6)</text></svg>`
        },
        {
            question: "Evaluar f(x) = 3x - 2 en x = -2",
            measures: [
                { label: "Función", value: "f(x) = 3x - 2" },
                { label: "x", value: "-2" }
            ],
            correctAnswer: -8,
            distractors: [-4, -6, -10],
            formulaText: "f(-2) = 3(-2) - 2 = -6 - 2 = -8",
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="30" font-size="12" fill="#673ab7" text-anchor="middle">f(x) = 3x - 2</text><text x="50" y="60" font-size="14" fill="#673ab7" text-anchor="middle">f(-2) = -8</text></svg>`
        },
        {
            question: "Encontrar el intercepto en y de f(x) = 2x + 6",
            measures: [
                { label: "Función", value: "f(x) = 2x + 6" }
            ],
            correctAnswer: 6,
            distractors: [2, -6, 0],
            formulaText: "f(0) = 2(0) + 6 = 6. El intercepto en y es (0,6)",
            svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="30" x2="90" y2="70" stroke="#ff5722" stroke-width="3"/><circle cx="50" cy="50" r="4" fill="#4caf50"/><text x="45" y="45" font-size="8" fill="#4caf50">(0,6)</text><text x="50" y="85" font-size="10" fill="#ff5722" text-anchor="middle">y = 2x + 6</text></svg>`
        }
    ];
    
    
    
    // Seleccionar ejercicio aleatorio según dificultad
    const easyExercises = exercises.slice(0, 2); // Primeros 2 ejercicios para easy
    const mediumExercises = exercises.slice(2, 4); // Ejercicios 3-4 para medium
    const hardExercises = exercises.slice(4); // Ejercicios 5-6 para hard
    
    
    
    
    
    let exercisePool;
    if (difficulty === 'easy') {
        exercisePool = easyExercises;
    
    } else if (difficulty === 'medium') {
        exercisePool = mediumExercises;
    
    } else if (difficulty === 'hard') {
        exercisePool = hardExercises;
    
    } else { // mixed o cualquier otro valor - usar todos los ejercicios
        exercisePool = exercises;
    
    }
    
    
    
    
    const exercise = exercisePool[Math.floor(Math.random() * exercisePool.length)];
    
    
    
    
    
    // CRÍTICO: Aplicar Fisher-Yates shuffle para mezclar las opciones
    // Esto soluciona el bug donde la respuesta correcta siempre estaba arriba a la izquierda
    let options = [exercise.correctAnswer, ...exercise.distractors];
    
    
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    exercise.options = options;
    
    
    
    exercise.figuresTitle = '📊 Conceptos';
    exercise.formulasTitle = '📝 Fórmulas';
    exercise.instruction = 'Practica funciones evaluando puntos y aplicando fórmulas';
    
    return exercise;
}

// Función de validación simple
function validateExercise(exercise) {
    
    if (!exercise || !exercise.options || !exercise.correctAnswer) {
        return false;
    }
    
    
    // Verificar que la respuesta correcta esté en las opciones
    if (!exercise.options.includes(exercise.correctAnswer)) {
        return false;
    }
    
    // Verificar que haya exactamente 4 opciones
    if (exercise.options.length !== 4) {
        return false;
    }
    
    // Verificar que No haya duplicados
    const uniqueOptions = new Set(exercise.options);
    if (uniqueOptions.size !== exercise.options.length) {
        return false;
    }
    
    return true;
}

