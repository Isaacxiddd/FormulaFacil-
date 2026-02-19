// ════════════════════════════════════════════════════════════
// PRACTICE MODE GEOMETRÍA - VERSIÓN ES6 MODULES
// ══════════════════════════════════════════════════════════════════

import { randInt, formatNumber } from '../../core/utils.js';

export function generatePracticeExerciseGeometry(difficulty) {
    console.log('🎯 Generando ejercicio de geometría - Dificultad:', difficulty);
    
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
            formulaText: "A = l² = 5² = 25 cm²",
            svg: `<svg viewBox="0 0 100 100"><rect x="25" y="25" width="50" height="50" fill="#ffeb3b" stroke="#f57f17" stroke-width="2.5"/></svg>`
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
            formulaText: "P = 2(b + h) = 2(6 + 4) = 20 cm",
            svg: `<svg viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="40" fill="#4caf50" stroke="#1b5e20" stroke-width="2.5"/></svg>`
        },
        {
            question: "Calcular el área de un triángulo de base 8 cm y altura 6 cm",
            measures: [
                { label: "Figura", value: "Triángulo" },
                { label: "Base", value: "8 cm" },
                { label: "Altura", value: "6 cm" }
            ],
            correctAnswer: 24,
            distractors: [48, 12, 18],
            formulaText: "A = (b × h)/2 = (8 × 6)/2 = 24 cm²",
            svg: `<svg viewBox="0 0 100 100"><polygon points="50,20 20,80 80,20" fill="#4caf50" stroke="#1b5e20" stroke-width="2.5"/></svg>`
        },
        {
            question: "Calcular el área de un círculo de radio 4 cm",
            measures: [
                { label: "Figura", value: "Círculo" },
                { label: "Radio", value: "4 cm" }
            ],
            correctAnswer: 50.27,
            distractors: [25.13, 75.40, 100.53],
            formulaText: "A = πr² = π(4)² ≈ 50.27 cm²",
            svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#2196f3" stroke="#f44336" stroke-width="2.5"/></svg>`
        },
        
        // MEDIO - Figuras 2D intermedias
        {
            question: "Calcular el área de un trapecio con bases 6 cm y 4 cm, altura 5 cm",
            measures: [
                { label: "Figura", value: "Trapecio" },
                { label: "Base 1", value: "6 cm" },
                { label: "Base 2", value: "4 cm" },
                { label: "Altura", value: "5 cm" }
            ],
            correctAnswer: 25,
            distractors: [20, 30, 15],
            formulaText: "A = (B₁ + B₂) × h / 2 = (6 + 4) × 5 / 2 = 25 cm²",
            svg: `<svg viewBox="0 0 100 100"><polygon points="30,70 70,70 60,30 40,30" fill="#ff9800" stroke="#f57c00" stroke-width="2.5"/></svg>`
        },
        {
            question: "Calcular el área de un rombo de diagonales 8 cm y 6 cm",
            measures: [
                { label: "Figura", value: "Rombo" },
                { label: "Diagonal 1", value: "8 cm" },
                { label: "Diagonal 2", value: "6 cm" }
            ],
            correctAnswer: 24,
            distractors: [48, 12, 16],
            formulaText: "A = (d₁ × d₂)/2 = (8 × 6)/2 = 24 cm²",
            svg: `<svg viewBox="0 0 100 100"><polygon points="30,20 70,20 70,50 30,50" fill="#9c27b0" stroke="#795548" stroke-width="2.5"/></svg>`
        },
        {
            question: "Calcular el área de un pentágono regular de lado 5 cm",
            measures: [
                { label: "Figura", value: "Pentágono" },
                { label: "Lado", value: "5 cm" }
            ],
            correctAnswer: 43.01,
            distractors: [25, 50, 35],
            formulaText: "A = (5² × 5) / (4 × tan(π/5)) ≈ 43.01 cm²",
            svg: `<svg viewBox="0 0 100 100"><polygon points="50,25 80,40 70,70 30,70 20,40" fill="#e91e63" stroke="#795548" stroke-width="2.5"/></svg>`
        },
        
        // DIFÍCIL - Figuras 3D
        {
            question: "Calcular el volumen de un cubo de arista 3 cm",
            measures: [
                { label: "Figura", value: "Cubo" },
                { label: "Arista", value: "3 cm" }
            ],
            correctAnswer: 27,
            distractors: [9, 18, 36],
            formulaText: "V = a³ = 3³ = 27 cm³",
            svg: `<svg viewBox="0 0 100 100"><g transform="translate(50,50)"><rect x="-25" y="-25" width="50" height="50" fill="#ff5722" stroke="#795548" stroke-width="2.5"/><rect x="-25" y="-25" width="50" height="50" fill="none" stroke="#795548" stroke-width="2.5"/><line x1="-25" y1="-25" x2="25" y2="25" stroke="#795548" stroke-width="2.5"/><line x1="25" y1="-25" x2="25" y2="25" stroke="#795548" stroke-width="2.5"/><line x1="-25" y1="25" x2="0" y2="25" stroke="#795548" stroke-width="2.5"/></g></svg>`
        },
        {
            question: "Calcular el volumen de una esfera de radio 3 cm",
            measures: [
                { label: "Figura", value: "Esfera" },
                { label: "Radio", value: "3 cm" }
            ],
            correctAnswer: 113.10,
            distractors: [84.82, 141.37, 56.55],
            formulaText: "V = (4/3)πr³ = (4/3)π(3)³ ≈ 113.10 cm³",
            svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="#00bcd4" stroke="#0d47a1" stroke-width="2.5"/></svg>`
        },
        {
            question: "Calcular el volumen de un cilindro de radio 2 cm y altura 5 cm",
            measures: [
                { label: "Figura", value: "Cilindro" },
                { label: "Radio", value: "2 cm" },
                { label: "Altura", value: "5 cm" }
            ],
            correctAnswer: 62.83,
            distractors: [31.42, 78.54, 94.25],
            formulaText: "V = πr²h = π(2)²(5) ≈ 62.83 cm³",
            svg: `<svg viewBox="0 0 100 100"><g transform="translate(50,50)"><rect x="-20" y="-50" width="40" height="100" fill="#00bcd4" stroke="#0d47a1" stroke-width="2.5"/><ellipse cx="0" cy="0" rx="20" ry="50" fill="none" stroke="#0d47a1" stroke-width="2.5"/></g></svg>`
        },
        {
            question: "Calcular el volumen de un cono de radio 3 cm y altura 6 cm",
            measures: [
                { label: "Figura", value: "Cono" },
                { label: "Radio", value: "3 cm" },
                { label: "Altura", value: "6 cm" }
            ],
            correctAnswer: 56.55,
            distractors: [28.27, 84.82, 42.41],
            formulaText: "V = (1/3)πr²h = (1/3)π(3)²(6) ≈ 56.55 cm³",
            svg: `<svg viewBox="0 0 100 100"><g transform="translate(50,50)"><polygon points="50,20 20,80 80,20" fill="#00bcd4" stroke="#0d47a1" stroke-width="2.5"/><circle cx="50" cy="20" r="3" fill="none" stroke="#0d47a1" stroke-width="2.5"/><line x1="50" y1="20" x2="50" y2="80" stroke="#0d47a1" stroke-width="2.5"/></g></svg>`
        },
        {
            question: "Calcular el volumen de una pirámide cuadrada de base 4x4 cm y altura 6 cm",
            measures: [
                { label: "Figura", value: "Pirámide" },
                { label: "Base", value: "4×4 cm" },
                { label: "Altura", value: "6 cm" }
            ],
            correctAnswer: 32,
            distractors: [48, 24, 16],
            formulaText: "V = (1/3) × área base × h = (1/3) × 16 × 6 = 32 cm³",
            svg: `<svg viewBox="0 0 100 100"><g transform="translate(50,50)"><polygon points="50,20 30,80 70,80 70,30" fill="#00bcd4" stroke="#0d47a1" stroke-width="2.5"/><line x1="30" y1="80" x2="70" y2="80" stroke="#0d47a1" stroke-width="2.5"/><line x1="70" y1="80" x2="50" y2="20" stroke="#0d47a1" stroke-width="2.5"/><line x1="30" y1="80" x2="50" y2="20" stroke="#0d47a1" stroke-width="2.5"/></g></svg>`
        },
        {
            question: "Calcular el volumen de un prisma rectangular de 3x4x5 cm",
            measures: [
                { label: "Figura", value: "Prisma" },
                { label: "Dimensiones", value: "3×4×5 cm" }
            ],
            correctAnswer: 60,
            distractors: [80, 40, 20],
            formulaText: "V = l × w × h = 3 × 4 × 5 = 60 cm³",
            svg: `<svg viewBox="0 0 100 100"><g transform="translate(50,50)"><rect x="-40" y="-50" width="80" height="100" fill="#00bcd4" stroke="#0d47a1" stroke-width="2.5"/><rect x="-40" y="-50" width="80" height="100" fill="none" stroke="#0d47a1" stroke-width="2.5"/><line x1="-40" y1="-50" x2="40" y2="50" stroke="#0d47a1" stroke-width="2.5"/><line x1="40" y1="-50" x2="40" y2="0" stroke="#0d47a1" stroke-width="2.5"/><line x1="40" y1="0" x2="40" y2="50" stroke="#0d47a1" stroke-width="2.5"/><line x1="-40" y1="50" x2="0" y2="50" stroke="#0d47a1" stroke-width="2.5"/></g></svg>`
        }
    ];
    
    // Seleccionar ejercicio según dificultad
    let exercisePool;
    if (difficulty === 'easy') {
        exercisePool = exercises.slice(0, 4);
    } else if (difficulty === 'medium') {
        exercisePool = exercises.slice(4, 8);
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
    exercise.figuresTitle = '📐 Figuras';
    exercise.formulasTitle = '📝 Fórmulas';
    exercise.instruction = 'Practica cálculos de geometría';
    
    console.log('✅ Ejercicio geometry generado:', exercise);
    return exercise;
}
