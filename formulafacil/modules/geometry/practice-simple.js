// ══════════════════════════════════════════════════════════════
// PRACTICE MODE GEOMETRÍA - VERSIÓN ES6 MODULES
// ══════════════════════════════════════════════════════════════

import { randInt, formatNumber } from '../../core/utils.js';

export function generatePracticeExerciseGeometry(difficulty) {
    const exercises = [
        // FÁCIL - Figuras 2D básicas
        {
            question: "Calcular el área de un cuadrado de lado 5 cm",
            measures: [
                { label: "Figura", value: "Cuadrado" },
                { label: "Lado", value: "5 cm" }
            ],
            correctAnswer: 25,
            distractors: [20, 15, 30],
            formulaText: "A = l² = 5² = 25 cm²"
        },
        {
            question: "Calcular el perímetro de un rectángulo de 6x4 cm",
            measures: [
                { label: "Figura", value: "Rectángulo" },
                { label: "Base", value: "6 cm" },
                { label: "Altura", value: "4 cm" }
            ],
            correctAnswer: 20,
            distractors: [24, 16, 12],
            formulaText: "P = 2(b + h) = 2(6 + 4) = 20 cm"
        },
        // MEDIO - Figuras 2D intermedias
        {
            question: "Calcular el área de un círculo de radio 3 cm",
            measures: [
                { label: "Figura", value: "Círculo" },
                { label: "Radio", value: "3 cm" }
            ],
            correctAnswer: 28.27,
            distractors: [18.85, 9.42, 37.70],
            formulaText: "A = πr² = π(3)² ≈ 28.27 cm²"
        },
        {
            question: "Calcular el área de un triángulo de base 8 cm y altura 6 cm",
            measures: [
                { label: "Figura", value: "Triángulo" },
                { label: "Base", value: "8 cm" },
                { label: "Altura", value: "6 cm" }
            ],
            correctAnswer: 24,
            distractors: [48, 14, 32],
            formulaText: "A = (b × h)/2 = (8 × 6)/2 = 24 cm²"
        },
        // DIFÍCIL - Figuras 3D
        {
            question: "Calcular el volumen de una esfera de radio 2 cm",
            measures: [
                { label: "Figura", value: "Esfera" },
                { label: "Radio", value: "2 cm" }
            ],
            correctAnswer: 33.51,
            distractors: [50.27, 25.13, 16.76],
            formulaText: "V = (4/3)πr³ = (4/3)π(2)³ ≈ 33.51 cm³"
        },
        {
            question: "Calcular el volumen de un cilindro de radio 3 cm y altura 5 cm",
            measures: [
                { label: "Figura", value: "Cilindro" },
                { label: "Radio", value: "3 cm" },
                { label: "Altura", value: "5 cm" }
            ],
            correctAnswer: 141.37,
            distractors: [282.74, 94.25, 188.50],
            formulaText: "V = πr²h = π(3)²(5) ≈ 141.37 cm³"
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
    exercise.figuresTitle = '📊 Figuras';
    exercise.formulasTitle = '📝 Fórmulas';
    exercise.instruction = 'Practica cálculos de geometría';
    
    return exercise;
}
