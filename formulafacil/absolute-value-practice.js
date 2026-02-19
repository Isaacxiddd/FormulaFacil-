// ══════════════════════════════════════════════════════════════
// PRACTICE MODE - VALOR ABSOLUTO (MÓDULOS)
// ══════════════════════════════════════════════════════════════

console.log('🔄 absolute-value-practice.js cargando...');

// Importar utilidades si no están disponibles
if (typeof randInt === 'undefined') {
    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

if (typeof pickRandom === 'undefined') {
    function pickRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

// ══════════════════════════════════════════════════════════════
// PRACTICE MODE - EJERCICIOS DE VALOR ABSOLUTO
// ══════════════════════════════════════════════════════════════

function generatePracticeExerciseAbsoluteValue(difficulty) {
    console.log('🔍 Generando ejercicio de valor absoluto - Dificultad:', difficulty);
    
    // Generar valores consistentes para cada ejercicio
    const num1 = randInt(5, 15);
    const isNegative = Math.random() < 0.5;
    const value1 = isNegative ? -num1 : num1;
    
    const num2 = randInt(2, 8);
    const num3 = randInt(3, 9);
    const sum = num2 + num3;
    
    const num4 = randInt(3, 12);
    
    const num5 = randInt(4, 10);
    
    const num6 = randInt(6, 12);
    const num7 = randInt(2, 8);
    const diff = num6 - num7;
    
    const num8 = randInt(2, 8);
    
    const num9 = randInt(1, 5);
    const num10 = randInt(4, 10);
    const sol1 = (num10 - num9) / 2;
    const sol2 = (-num10 - num9) / 2;
    
    const num11 = randInt(2, 6);
    const num12 = randInt(5, 12);
    const left = (-num12 - num11) / 3;
    const right = (num12 - num11) / 3;
    
    // Generar ejercicios más complejos manteniendo la misma estructura
    const exercises = [
        {
            question: "Calcular |" + value1 + "|",
            measures: [{ label: "Número", value: "|" + value1 + "|" }],
            options: [Math.abs(value1), -Math.abs(value1), 0, Math.abs(value1) * 2],
            correctAnswer: Math.abs(value1).toString(),
            formulaText: "|" + value1 + "| = " + (isNegative ? "-(" + value1 + ") = " + Math.abs(value1) : value1 + " = " + Math.abs(value1)),
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="50" font-size="16" fill="#2196f3" text-anchor="middle">|${value1}| = ${Math.abs(value1)}</text></svg>`
        },
        {
            question: "Calcular |" + num2 + " + " + num3 + "|",
            measures: [{ label: "Expresión", value: "|" + num2 + " + " + num3 + "|" }],
            options: [sum, -sum, Math.min(num2, num3), sum + 10],
            correctAnswer: sum.toString(),
            formulaText: "|" + num2 + " + " + num3 + "| = |" + sum + "| = " + sum,
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="50" font-size="14" fill="#4caf50" text-anchor="middle">|${num2} + ${num3}| = ${sum}</text></svg>`
        },
        {
            question: "Resolver |x| = " + num4,
            measures: [{ label: "Ecuación", value: "|x| = " + num4 }],
            options: [
                "x = " + num4, 
                "x = -" + num4, 
                "x = " + num4 + " o -" + num4, 
                "x = 0"
            ],
            correctAnswer: "x = " + num4 + " o -" + num4,
            formulaText: "|x| = " + num4 + " ⇒ x = " + num4 + " o x = -" + num4,
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" font-size="14" fill="#ff9800" text-anchor="middle">|x| = ${num4}</text><text x="50" y="60" font-size="12" fill="#ff9800" text-anchor="middle">x = ${num4}, -${num4}</text></svg>`
        },
        {
            question: "Resolver |x| < " + num5,
            measures: [{ label: "Inecuación", value: "|x| < " + num5 }],
            options: [
                "(-" + num5 + ", " + num5 + ")", 
                "(-∞, -" + num5 + ") ∪ (" + num5 + ", ∞)", 
                "[-" + num5 + ", " + num5 + "]", 
                "x = " + num5
            ],
            correctAnswer: "(-" + num5 + ", " + num5 + ")",
            formulaText: "|x| < " + num5 + " ⇒ -" + num5 + " < x < " + num5 + " ⇒ (-" + num5 + ", " + num5 + ")",
            svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="80" y2="50" stroke="#00bcd4" stroke-width="2"/><circle cx="20" cy="50" r="2" fill="white" stroke="#00bcd4"/><circle cx="80" cy="50" r="2" fill="white" stroke="#00bcd4"/><line x1="20" y1="45" x2="80" y2="45" stroke="#00bcd4" stroke-width="3"/><text x="15" y="40" font-size="10" fill="#00bcd4">-${num5}</text><text x="75" y="40" font-size="10" fill="#00bcd4">${num5}</text></svg>`
        },
        {
            question: "Calcular |" + num6 + " - " + num7 + "|",
            measures: [{ label: "Expresión", value: "|" + num6 + " - " + num7 + "|" }],
            options: [Math.abs(diff), -Math.abs(diff), Math.abs(diff) + 5, Math.abs(diff) - 5],
            correctAnswer: Math.abs(diff).toString(),
            formulaText: "|" + num6 + " - " + num7 + "| = |" + diff + "| = " + Math.abs(diff),
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" font-size="14" fill="#9c27b0" text-anchor="middle">|${num6} - ${num7}|</text><text x="50" y="60" font-size="12" fill="#9c27b0" text-anchor="middle">= ${Math.abs(diff)}</text></svg>`
        },
        {
            question: "Resolver |x| ≥ " + num8,
            measures: [{ label: "Inecuación", value: "|x| ≥ " + num8 }],
            options: [
                "(-∞, -" + num8 + "] ∪ [" + num8 + ", ∞)", 
                "(-" + num8 + ", " + num8 + ")", 
                "[-" + num8 + ", " + num8 + "]", 
                "x = " + num8
            ],
            correctAnswer: "(-∞, -" + num8 + "] ∪ [" + num8 + ", ∞)",
            formulaText: "|x| ≥ " + num8 + " ⇒ x ≤ -" + num8 + " o x ≥ " + num8 + " ⇒ (-∞, -" + num8 + "] ∪ [" + num8 + ", ∞)",
            svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="30" y2="50" stroke="#e91e63" stroke-width="2"/><circle cx="30" cy="50" r="2" fill="#e91e63"/><line x1="70" y1="50" x2="90" y2="50" stroke="#e91e63" stroke-width="2"/><circle cx="70" cy="50" r="2" fill="#e91e63"/><text x="25" y="40" font-size="10" fill="#e91e63">-${num8}</text><text x="65" y="40" font-size="10" fill="#e91e63">${num8}</text></svg>`
        },
        {
            question: "Resolver |2x + " + num9 + "| = " + num10,
            measures: [{ label: "Ecuación", value: "|2x + " + num9 + "| = " + num10 }],
            options: [
                "x = " + sol1.toFixed(1), 
                "x = -" + sol1.toFixed(1), 
                "x = " + sol1.toFixed(1) + " o -" + sol2.toFixed(1), 
                "x = 0"
            ],
            correctAnswer: "x = " + sol1.toFixed(1) + " o x = -" + sol2.toFixed(1),
            formulaText: "|2x + " + num9 + "| = " + num10 + "\n2x + " + num9 + " = " + num10 + " o 2x + " + num9 + " = -" + num10 + "\n2x = " + (num10 - num9) + " o 2x = " + (-num10 - num9) + "\nx = " + sol1.toFixed(1) + " o x = " + sol2.toFixed(1),
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" font-size="12" fill="#673ab7" text-anchor="middle">|2x + ${num9}| = ${num10}</text><text x="50" y="60" font-size="10" fill="#673ab7" text-anchor="middle">x = ${sol1.toFixed(1)}, ${sol2.toFixed(1)}</text></svg>`
        },
        {
            question: "Resolver |3x - " + num11 + "| < " + num12,
            measures: [{ label: "Inecuación", value: "|3x - " + num11 + "| < " + num12 }],
            options: [
                "(" + left.toFixed(1) + ", " + right.toFixed(1) + ")", 
                "(-∞, " + left.toFixed(1) + ") ∪ (" + right.toFixed(1) + ", ∞)", 
                "[" + left.toFixed(1) + ", " + right.toFixed(1) + "]", 
                "x < " + right.toFixed(1)
            ],
            correctAnswer: "(" + left.toFixed(1) + ", " + right.toFixed(1) + ")",
            formulaText: "|3x - " + num11 + "| < " + num12 + "\n-" + num12 + " < 3x - " + num11 + " < " + num12 + "\n" + (num11 - num12) + " < 3x < " + (num12 + num11) + "\n" + left.toFixed(1) + " < x < " + right.toFixed(1) + "\n(" + left.toFixed(1) + ", " + right.toFixed(1) + ")",
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" font-size="12" fill="#3f51b5" text-anchor="middle">|3x - ${num11}| < ${num12}</text><text x="50" y="60" font-size="10" fill="#3f51b5" text-anchor="middle">(${left.toFixed(1)}, ${right.toFixed(1)})</text></svg>`
        }
    ];
    
    console.log('📊 Ejercicios de valor absoluto disponibles:', exercises.length);
    
    // Seleccionar ejercicios según dificultad manteniendo la misma lógica
    let exercisePool;
    if (difficulty === 'easy') {
        exercisePool = exercises.slice(0, 2); // Primeros 2: básicos
    } else if (difficulty === 'medium') {
        exercisePool = exercises.slice(2, 6); // Siguientes 4: intermedios
    } else if (difficulty === 'hard') {
        exercisePool = exercises.slice(6, 8); // Últimos 2: avanzados
    } else { // mixed
        exercisePool = exercises; // Todos
    }
    
    const exercise = exercisePool[Math.floor(Math.random() * exercisePool.length)];
    console.log('📝 Ejercicio de valor absoluto seleccionado:', exercise);
    
    // CRÍTICO: Aplicar Fisher-Yates shuffle para mezclar las opciones
    // Esto soluciona el bug donde la respuesta correcta siempre estaba arriba a la izquierda
    let options = [...exercise.options]; // Crear copia para no modificar el original
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    exercise.options = options;
    
    exercise.figuresTitle = '📏 Valor Absoluto';
    exercise.formulasTitle = '📝 Propiedades';
    exercise.instruction = 'Practica valor absoluto calculando y resolviendo ecuaciones';
    
    return exercise;
}

// Exportar para compatibilidad con el código existente
if (typeof window !== 'undefined') {
    window.generatePracticeExerciseAbsoluteValue = generatePracticeExerciseAbsoluteValue;
}

console.log('✅ absolute-value-practice.js cargado correctamente');
