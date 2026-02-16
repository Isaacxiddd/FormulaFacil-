// ══════════════════════════════════════════════════════════════
// PRACTICE MODE INECUACIONES - EJERCICIOS TIPO EXAMEN
// Sistema de 3 niveles: Fácil (1 paso), Medio (2 pasos), Difícil (3+ pasos)
// ══════════════════════════════════════════════════════════════

const inequalitiesExerciseConfigs = [
    // ═══════════════════════════════════════════════════════════
    // 🟢 FÁCIL - 1 PASO, REGLAS BÁSICAS
    // ═══════════════════════════════════════════════════════════
    
    {
        name: "Suma/resta simple",
        pool: ["easy", "mixed"],
        generate() {
            const a = randInt(2, 8);
            const b = randInt(a + 2, 15);
            const sign = pickRandom(['>', '<']);
            const correct = b - a;
            
            return {
                measures: [
                    { label: "Inecuación", value: "x + " + a + " " + sign + " " + b }
                ],
                question: "Resolver la inecuación",
                correctAnswer: "x " + sign + " " + correct,
                distractors: [
                    "x " + sign + " " + (b + a),
                    "x " + sign + " " + b,
                    "x " + sign + " " + a
                ],
                formulaText: "x + " + a + " " + sign + " " + b + "\\nx " + sign + " " + b + " - " + a + "\\nx " + sign + " " + correct
            };
        }
    },
    
    {
        name: "Multiplicación simple",
        pool: ["easy", "mixed"],
        generate() {
            const a = randInt(2, 5);
            let b = randInt(6, 20);
            while (b % a !== 0) b = randInt(6, 20);
            const sign = pickRandom(['>', '<']);
            const correct = b / a;
            
            return {
                measures: [
                    { label: "Inecuación", value: a + "x " + sign + " " + b }
                ],
                question: "Resolver la inecuación",
                correctAnswer: "x " + sign + " " + correct,
                distractors: [
                    "x " + sign + " " + (a * b),
                    "x " + sign + " " + (b - a),
                    "x " + sign + " " + b
                ],
                formulaText: a + "x " + sign + " " + b + "\\nx " + sign + " " + b + "/" + a + "\\nx " + sign + " " + correct
            };
        }
    },
    
    {
        name: "Intervalo simple",
        pool: ["easy", "mixed"],
        generate() {
            const a = randInt(2, 8);
            const b = randInt(a + 3, 15);
            const sign = pickRandom(['>', '<']);
            const correct = b - a;
            
            const interval = sign === '>' ? 
                "(" + correct + ", +∞)" : 
                "(-∞, " + correct + ")";
            const wrongInterval = sign === '>' ?
                "(-∞, " + correct + ")" :
                "(" + correct + ", +∞)";
            
            return {
                measures: [
                    { label: "Inecuación", value: "x + " + a + " " + sign + " " + b }
                ],
                question: "¿Cuál es el conjunto solución?",
                correctAnswer: interval,
                distractors: [
                    wrongInterval,
                    "[" + correct + ", +∞)",
                    "{" + correct + "}"
                ],
                formulaText: "x + " + a + " " + sign + " " + b + "\\nx " + sign + " " + correct + "\\nIntervalo: " + interval
            };
        }
    },
    
    // ═══════════════════════════════════════════════════════════
    // 🟡 MEDIO - 2 PASOS, CAMBIO DE SENTIDO
    // ═══════════════════════════════════════════════════════════
    
    {
        name: "Cambio de sentido",
        pool: ["medium", "mixed"],
        generate() {
            const a = randInt(2, 5);
            const b = randInt(4, 12);
            const sign = pickRandom(['>', '<']);
            const invertedSign = sign === '>' ? '<' : '>';
            const correct = -b / a;
            
            return {
                measures: [
                    { label: "Inecuación", value: "-" + a + "x " + sign + " " + b },
                    { label: "⚠️ Regla", value: "Al dividir por negativo se invierte" }
                ],
                question: "Resolver la inecuación",
                correctAnswer: "x " + invertedSign + " " + correct,
                distractors: [
                    "x " + sign + " " + correct,
                    "x " + invertedSign + " " + (-correct),
                    "x " + sign + " " + (-correct)
                ],
                formulaText: "-" + a + "x " + sign + " " + b + "\\nx " + invertedSign + " " + b + "/(-" + a + ")  (¡se invierte!)\\nx " + invertedSign + " " + correct
            };
        }
    },
    
    {
        name: "Con fracciones",
        pool: ["medium", "mixed"],
        generate() {
            const num = randInt(2, 6);
            const den = randInt(2, 4);
            const rhs = randInt(1, 4);
            const correct = rhs * den + num;
            
            return {
                measures: [
                    { label: "Inecuación", value: "(x - " + num + ")/" + den + " ≥ " + rhs }
                ],
                question: "Resolver eliminando el denominador",
                correctAnswer: "x ≥ " + correct,
                distractors: [
                    "x ≤ " + correct,
                    "x ≥ " + (rhs * den - num),
                    "x ≥ " + (num - rhs)
                ],
                formulaText: "(x - " + num + ")/" + den + " ≥ " + rhs + "\\nx - " + num + " ≥ " + (rhs * den) + "\\nx ≥ " + correct
            };
        }
    },
    
    {
        name: "Doble desigualdad",
        pool: ["medium", "mixed"],
        generate() {
            const a = randInt(1, 4);
            const b = randInt(a + 4, a + 9);
            const c = randInt(2, 4);
            const d = randInt(1, 3);
            
            const left = ((a + d) / c).toFixed(1);
            const right = ((b + d) / c).toFixed(1);
            
            return {
                measures: [
                    { label: "Inecuación", value: a + " < " + c + "x - " + d + " < " + b }
                ],
                question: "Resolver la doble desigualdad",
                correctAnswer: left + " < x < " + right,
                distractors: [
                    a + " < x < " + b,
                    "x < " + right,
                    "x > " + left
                ],
                formulaText: a + " < " + c + "x - " + d + " < " + b + "\\n" + (a + d) + " < " + c + "x < " + (b + d) + "\\n" + left + " < x < " + right
            };
        }
    },
    
    // ═══════════════════════════════════════════════════════════
    // 🔴 DIFÍCIL - 3+ PASOS, CUADRÁTICAS, RACIONALES
    // ═══════════════════════════════════════════════════════════
    
    {
        name: "Producto de factores",
        pool: ["hard", "mixed"],
        generate() {
            const a = randInt(-3, 1);
            const b = randInt(a + 3, a + 7);
            
            return {
                measures: [
                    { label: "Inecuación", value: "(x - (" + a + "))(x - " + b + ") < 0" },
                    { label: "Puntos críticos", value: "x = " + a + ", x = " + b }
                ],
                question: "Hallar el conjunto solución",
                correctAnswer: "(" + a + ", " + b + ")",
                distractors: [
                    "(-∞, " + a + ") ∪ (" + b + ", +∞)",
                    "[" + a + ", " + b + "]",
                    "(-∞, " + a + "] ∪ [" + b + ", +∞)"
                ],
                formulaText: "(x - (" + a + "))(x - " + b + ") < 0\\nAnálisis de signos:\\n(-∞, " + a + "):  (+)\\n(" + a + ", " + b + "):  (-) ✓\\n(" + b + ", +∞):  (+)"
            };
        }
    },
    
    {
        name: "Cuadrática factorizada",
        pool: ["hard", "mixed"],
        generate() {
            const a = randInt(1, 4);
            const b = randInt(a + 2, a + 5);
            const sum = a + b;
            const prod = a * b;
            
            return {
                measures: [
                    { label: "Inecuación", value: "x² - " + sum + "x + " + prod + " < 0" }
                ],
                question: "Factorizar y resolver",
                correctAnswer: "(" + a + ", " + b + ")",
                distractors: [
                    "(-∞, " + a + ") ∪ (" + b + ", +∞)",
                    "[" + a + ", " + b + "]",
                    "(-∞, " + a + "] ∪ [" + b + ", +∞)"
                ],
                formulaText: "x² - " + sum + "x + " + prod + " < 0\\nFactorizar: (x - " + a + ")(x - " + b + ") < 0\\nRaíces: x = " + a + ", x = " + b + "\\nSolución: (" + a + ", " + b + ")"
            };
        }
    },
    
    {
        name: "Racional positiva",
        pool: ["hard", "mixed"],
        generate() {
            const a = randInt(1, 4);
            const b = randInt(a + 2, a + 6);
            
            return {
                measures: [
                    { label: "Inecuación", value: "(x - " + a + ")/(x - " + b + ") > 0" },
                    { label: "⚠️ Restricción", value: "x ≠ " + b }
                ],
                question: "Resolver la inecuación racional",
                correctAnswer: "(-∞, " + a + ") ∪ (" + b + ", +∞)",
                distractors: [
                    "(" + a + ", " + b + ")",
                    "(-∞, " + a + "] ∪ [" + b + ", +∞)",
                    "[" + a + ", " + b + "]"
                ],
                formulaText: "(x - " + a + ")/(x - " + b + ") > 0\\nRestricción: x ≠ " + b + "\\nTabla de signos:\\n(-∞, " + a + "):  (+) ✓\\n(" + a + ", " + b + "):  (-)\\n(" + b + ", +∞):  (+) ✓"
            };
        }
    },
    
    {
        name: "Valor absoluto menor",
        pool: ["hard", "mixed"],
        generate() {
            const a = randInt(3, 8);
            
            return {
                measures: [
                    { label: "Inecuación", value: "|x| < " + a }
                ],
                question: "Resolver la inecuación con valor absoluto",
                correctAnswer: "(-" + a + ", " + a + ")",
                distractors: [
                    "(-∞, -" + a + ") ∪ (" + a + ", +∞)",
                    "[-" + a + ", " + a + "]",
                    "(0, " + a + ")"
                ],
                formulaText: "|x| < " + a + "\\nPor definición:\\n-" + a + " < x < " + a + "\\nSolución: (-" + a + ", " + a + ")"
            };
        }
    },
    
    {
        name: "Valor absoluto mayor",
        pool: ["hard", "mixed"],
        generate() {
            const a = randInt(3, 8);
            
            return {
                measures: [
                    { label: "Inecuación", value: "|x| > " + a }
                ],
                question: "Resolver la inecuación con valor absoluto",
                correctAnswer: "(-∞, -" + a + ") ∪ (" + a + ", +∞)",
                distractors: [
                    "(-" + a + ", " + a + ")",
                    "[-" + a + ", " + a + "]",
                    "(" + a + ", +∞)"
                ],
                formulaText: "|x| > " + a + "\\nPor definición:\\nx < -" + a + "  o  x > " + a + "\\nSolución: (-∞, -" + a + ") ∪ (" + a + ", +∞)"
            };
        }
    }
];

// ══════════════════════════════════════════════════════════════
// PRACTICE MODE INECUACIONES - POOLS DE DIFICULTAD
// ══════════════════════════════════════════════════════════════

const inequalitiesDifficultyPools = {
    easy: [
        "Suma/resta simple",
        "Multiplicación simple",
        "Intervalo simple"
    ],
    medium: [
        "Suma/resta simple",
        "Multiplicación simple",
        "Intervalo simple",
        "Cambio de sentido",
        "Con fracciones",
        "Doble desigualdad"
    ],
    hard: [
        "Producto de factores",
        "Cuadrática factorizada",
        "Racional positiva",
        "Valor absoluto menor",
        "Valor absoluto mayor"
    ],
    mixed: [
        "Suma/resta simple",
        "Multiplicación simple",
        "Intervalo simple",
        "Cambio de sentido",
        "Con fracciones",
        "Doble desigualdad",
        "Producto de factores",
        "Cuadrática factorizada",
        "Racional positiva",
        "Valor absoluto menor",
        "Valor absoluto mayor"
    ]
};

// ══════════════════════════════════════════════════════════════
// PRACTICE MODE INECUACIONES - GENERADOR
// ══════════════════════════════════════════════════════════════

function generatePracticeExerciseInequalities(difficulty) {
    console.log('≠ Generando ejercicio de inecuaciones - Dificultad:', difficulty);
    
    // Verificar que existan los pools
    if (typeof inequalitiesDifficultyPools === 'undefined') {
        console.error('❌ inequalitiesDifficultyPools no está definido');
        return generateBasicInequalityExercise();
    }
    
    const names = inequalitiesDifficultyPools[difficulty];
    if (!names || names.length === 0) {
        console.error('❌ No hay nombres en el pool:', difficulty);
        return generateBasicInequalityExercise();
    }
    
    const name = pickRandom(names);
    console.log('≠ Nombre seleccionado:', name);
    
    // Buscar en inequalitiesExerciseConfigs
    if (typeof inequalitiesExerciseConfigs === 'undefined') {
        console.error('❌ inequalitiesExerciseConfigs no está definido');
        return generateBasicInequalityExercise();
    }
    
    const config = inequalitiesExerciseConfigs.find(c => c.name === name);
    if (!config) {
        console.warn('⚠️ No se encontró config para:', name, '- Usando ejercicio básico');
        return generateBasicInequalityExercise();
    }
    
    const ex = config.generate();

    // Construir array de 4 opciones (las respuestas son strings para inecuaciones)
    let options = [ex.correctAnswer];
    for (const d of ex.distractors) {
        if (!options.includes(d)) {
            options.push(d);
        }
    }
    
    // Asegurar que haya 4 opciones
    while (options.length < 4) {
        options.push("x > 0");
    }
    
    // Fisher-Yates shuffle
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    // Las inecuaciones no tienen SVG, solo el icono en el modal
    return {
        figureName: config.name,
        svg: '',
        measures: ex.measures,
        question: ex.question,
        correctAnswer: ex.correctAnswer,
        options: options,
        formulaText: ex.formulaText
    };
}

// Hacer la función disponible globalmente
window.generatePracticeExerciseInequalities = generatePracticeExerciseInequalities;

function generateBasicInequalityExercise() {
    console.log('🔧 Generando ejercicio básico de inecuación');
    
    const a = randInt(2, 8);
    const b = randInt(a + 2, 15);
    const correct = b - a;
    
    return {
        figureName: "Inecuación Lineal",
        svg: '',
        measures: [
            { label: "Inecuación", value: `x + ${a} > ${b}` }
        ],
        question: "Resolver la inecuación",
        correctAnswer: `x > ${correct}`,
        options: [`x > ${correct}`, `x < ${correct}`, `x ≥ ${b}`, `x ≤ ${a}`],
        formulaText: `x + ${a} > ${b}\\nx > ${b} - ${a}\\nx > ${correct}`
    };
}

console.log('✅ inequalities-practice.js cargado correctamente');
console.log('🔍 Verificación: generatePracticeExerciseInequalities disponible:', typeof window.generatePracticeExerciseInequalities);
