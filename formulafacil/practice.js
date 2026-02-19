// ══════════════════════════════════════════════════════════════
// PRACTICE MODE - CONFIGURACIÓN DE EJERCICIOS DE GEOMETRÍA
// ══════════════════════════════════════════════════════════════

const exerciseConfigs = [
    // ─── EASY pool ────────────────────────────────────────────
    {
        name: "Cuadrado",
        pool: ["easy", "mixed"],
        generate() {
            const l = randInt(2, 9);
            const correct = l * l;
            return {
                measures: [{ label: "Lado (l)", value: l + " cm" }],
                question: "¿Cuál es el área del cuadrado?",
                correctAnswer: correct,
                distractors: [4 * l, l * l + l, l],
                formulaText: "A = l² = " + l + "² = " + correct + " cm²"
            };
        }
    },
    {
        name: "Rectángulo",
        pool: ["easy", "mixed"],
        generate() {
            let b = randInt(2, 9), h = randInt(2, 9);
            while (h === b) h = randInt(2, 9);
            const correct = b * h;
            return {
                measures: [
                    { label: "Base (b)", value: b + " cm" }, 
                    { label: "Altura (h)", value: h + " cm" }
                ],
                question: "¿Cuál es el área del rectángulo?",
                correctAnswer: correct,
                distractors: [2 * (b + h), b + h, correct + b],
                formulaText: "A = b × h = " + b + " × " + h + " = " + correct + " cm²"
            };
        }
    },
    // ─── MEDIUM pool ──────────────────────────────────────────
    {
        name: "Triángulo",
        pool: ["medium", "mixed"],
        generate() {
            let b = randInt(2, 12), h = randInt(2, 12);
            if ((b * h) % 2 !== 0) b++;
            const correct = (b * h) / 2;
            return {
                measures: [
                    { label: "Base (b)", value: b + " cm" }, 
                    { label: "Altura (h)", value: h + " cm" }
                ],
                question: "¿Cuál es el área del triángulo?",
                correctAnswer: correct,
                distractors: [b * h, correct + b, correct + h],
                formulaText: "A = (b × h) / 2 = (" + b + " × " + h + ") / 2 = " + correct + " cm²"
            };
        }
    },
    {
        name: "Círculo",
        pool: ["medium", "mixed"],
        generate() {
            const r = randInt(1, 7);
            const correct = Math.round(Math.PI * r * r);
            return {
                measures: [{ label: "Radio (r)", value: r + " cm" }],
                question: "¿Cuál es el área aproximada del círculo?",
                correctAnswer: correct,
                distractors: [
                    Math.round(2 * Math.PI * r), 
                    Math.round(Math.PI * r), 
                    correct + r * 2
                ],
                formulaText: "A = π × r² = π × " + r + "² ≈ " + correct + " cm²"
            };
        }
    },
    // ─── HARD pool ────────────────────────────────────────────
    {
        name: "Trapecio",
        pool: ["hard", "mixed"],
        generate() {
            let B = randInt(4, 14), b = randInt(2, B - 1), h = randInt(2, 10);
            if (((B + b) * h) % 2 !== 0) h++;
            const correct = ((B + b) * h) / 2;
            return {
                measures: [
                    { label: "Base mayor (B)", value: B + " cm" },
                    { label: "Base menor (b)", value: b + " cm" },
                    { label: "Altura (h)", value: h + " cm" }
                ],
                question: "¿Cuál es el área del trapecio?",
                correctAnswer: correct,
                distractors: [(B + b) * h, correct + B, correct + h],
                formulaText: "A = [(B + b) × h] / 2 = [(" + B + " + " + b + ") × " + h + "] / 2 = " + correct + " cm²"
            };
        }
    },
    {
        name: "Rombo",
        pool: ["hard", "mixed"],
        generate() {
            let D = randInt(4, 14), d = randInt(2, 12);
            if ((D * d) % 2 !== 0) d++;
            const correct = (D * d) / 2;
            return {
                measures: [
                    { label: "Diagonal mayor (D)", value: D + " cm" },
                    { label: "Diagonal menor (d)", value: d + " cm" }
                ],
                question: "¿Cuál es el área del rombo?",
                correctAnswer: correct,
                distractors: [D * d, correct + D, correct + d],
                formulaText: "A = (D × d) / 2 = (" + D + " × " + d + ") / 2 = " + correct + " cm²"
            };
        }
    },
    {
        name: "Paralelogramo",
        pool: ["hard", "mixed"],
        generate() {
            const b = randInt(3, 12), h = randInt(2, 10);
            const correct = b * h;
            return {
                measures: [
                    { label: "Base (b)", value: b + " cm" },
                    { label: "Altura (h)", value: h + " cm" }
                ],
                question: "¿Cuál es el área del paralelogramo?",
                correctAnswer: correct,
                distractors: [2 * (b + h), correct + h, correct + b],
                formulaText: "A = b × h = " + b + " × " + h + " = " + correct + " cm²"
            };
        }
    },
    {
        name: "Corona Circular",
        pool: ["hard", "mixed"],
        generate() {
            const R = randInt(5, 10), r = randInt(2, R - 2);
            const correct = Math.round(Math.PI * (R * R - r * r));
            return {
                measures: [
                    { label: "Radio mayor (R)", value: R + " cm" },
                    { label: "Radio menor (r)", value: r + " cm" }
                ],
                question: "¿Cuál es el área aproximada de la corona circular?",
                correctAnswer: correct,
                distractors: [
                    Math.round(Math.PI * R * R),
                    Math.round(Math.PI * (R + r) * (R + r)),
                    Math.round(Math.PI * (R - r))
                ],
                formulaText: "A = π(R² - r²) = π(" + R + "² - " + r + "²) ≈ " + correct + " cm²"
            };
        }
    },
    {
        name: "Sector Circular",
        pool: ["hard", "mixed"],
        generate() {
            const r = randInt(4, 9);
            const alpha = [30, 45, 60, 90, 120][randInt(0, 4)];
            const correct = Math.round((Math.PI * r * r * alpha) / 360);
            return {
                measures: [
                    { label: "Radio (r)", value: r + " cm" },
                    { label: "Ángulo (α)", value: alpha + "°" }
                ],
                question: "¿Cuál es el área aproximada del sector circular?",
                correctAnswer: correct,
                distractors: [
                    Math.round(Math.PI * r * r),
                    Math.round((2 * Math.PI * r * alpha) / 360),
                    correct + r
                ],
                formulaText: "A = (πr²α)/360 = (π×" + r + "²×" + alpha + ")/360 ≈ " + correct + " cm²"
            };
        }
    },
    {
        name: "Cilindro",
        pool: ["hard", "mixed"],
        generate() {
            const r = randInt(2, 6), h = randInt(5, 12);
            const correct = Math.round(Math.PI * r * r * h);
            return {
                measures: [
                    { label: "Radio (r)", value: r + " cm" },
                    { label: "Altura (h)", value: h + " cm" }
                ],
                question: "¿Cuál es el volumen aproximado del cilindro?",
                correctAnswer: correct,
                distractors: [
                    Math.round(2 * Math.PI * r * h),
                    Math.round(Math.PI * r * h),
                    Math.round(Math.PI * r * r + h)
                ],
                formulaText: "V = πr²h = π×" + r + "²×" + h + " ≈ " + correct + " cm³"
            };
        }
    },
    {
        name: "Esfera",
        pool: ["hard", "mixed"],
        generate() {
            const r = randInt(2, 7);
            const correct = Math.round((4 * Math.PI * r * r * r) / 3);
            return {
                measures: [
                    { label: "Radio (r)", value: r + " cm" }
                ],
                question: "¿Cuál es el volumen aproximado de la esfera?",
                correctAnswer: correct,
                distractors: [
                    Math.round(4 * Math.PI * r * r),
                    Math.round((4 * Math.PI * r * r) / 3),
                    correct + r * 10
                ],
                formulaText: "V = (4πr³)/3 = (4π×" + r + "³)/3 ≈ " + correct + " cm³"
            };
        }
    },
    {
        name: "Cono",
        pool: ["hard", "mixed"],
        generate() {
            const r = randInt(2, 6), h = randInt(5, 12);
            const correct = Math.round((Math.PI * r * r * h) / 3);
            return {
                measures: [
                    { label: "Radio (r)", value: r + " cm" },
                    { label: "Altura (h)", value: h + " cm" }
                ],
                question: "¿Cuál es el volumen aproximado del cono?",
                correctAnswer: correct,
                distractors: [
                    Math.round(Math.PI * r * r * h),
                    Math.round((Math.PI * r * h) / 3),
                    correct + r * h
                ],
                formulaText: "V = (πr²h)/3 = (π×" + r + "²×" + h + ")/3 ≈ " + correct + " cm³"
            };
        }
    }
];

// ══════════════════════════════════════════════════════════════
// PRACTICE MODE - POOLS DE DIFICULTAD
// ══════════════════════════════════════════════════════════════

const difficultyPools = {
    easy: ["Cuadrado", "Rectángulo"],
    medium: ["Cuadrado", "Rectángulo", "Triángulo", "Círculo"],
    hard: ["Trapecio", "Rombo", "Paralelogramo", "Corona Circular", "Sector Circular", "Cilindro", "Esfera", "Cono"],
    mixed: ["Cuadrado", "Rectángulo", "Triángulo", "Círculo", "Trapecio", "Rombo", "Paralelogramo", "Corona Circular", "Sector Circular", "Cilindro", "Esfera", "Cono"]
};

// ══════════════════════════════════════════════════════════════
// PRACTICE MODE - ESTADO ACTUAL
// ══════════════════════════════════════════════════════════════

let currentDifficulty = 'mixed';
let currentExercise = null;

// ══════════════════════════════════════════════════════════════
// PRACTICE MODE - GENERADOR DE EJERCICIOS PRINCIPAL
// ══════════════════════════════════════════════════════════════

function generatePracticeExerciseGeometry(difficulty) {
    console.log('📐 Generando ejercicio de geometría - Dificultad:', difficulty);
    
    const names = difficultyPools[difficulty];
    const name = pickRandom(names);
    const config = exerciseConfigs.find(c => c.name === name);
    
    if (!config) {
        console.error('No se encontró config para:', name);
        return null;
    }
    
    const ex = config.generate();

    // Construir array de 4 opciones: correcta + 3 distractores
    let options = [ex.correctAnswer];
    for (const d of ex.distractors) {
        let val = d, attempts = 0;
        while (options.includes(val) && attempts < 20) {
            val += (attempts % 2 === 0 ? 1 : -1) * (attempts + 1);
            attempts++;
        }
        if (val <= 0) val = ex.correctAnswer + options.length + 1;
        options.push(val);
    }
    
    // Fisher-Yates shuffle
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    // Encontrar el SVG de geometryData
    const geoEntry = geometryData.find(g => g.name === config.name);

    return {
        figureName: config.name,
        svg: geoEntry ? geoEntry.svg : '',
        measures: ex.measures,
        question: ex.question,
        correctAnswer: ex.correctAnswer,
        options: options,
        formulaText: ex.formulaText
    };
}
