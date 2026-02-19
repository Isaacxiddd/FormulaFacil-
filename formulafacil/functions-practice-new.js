// ══════════════════════════════════════════════════════
// PRACTICE MODE FUNCIONES - VERSIÓN COMPLETA CON NUEVO SISTEMA
// ══════════════════════════════════════════════════════

console.log('🔄 functions-practice-new.js cargando nuevo sistema completo...');

// Importar utilidades del generador
if (typeof exerciseGenerators === 'undefined') {
    // Si el generador no está cargado, definir funciones básicas
    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function formatNumber(num, decimals = 2) {
        if (Number.isInteger(num)) return num;
        return parseFloat(num.toFixed(decimals));
    }
    
    function shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

// Función principal adaptada al código viejo
function generatePracticeExerciseFunctions(difficulty) {
    console.log('🎯 [DEBUG] generatePracticeExerciseFunctions llamado con dificultad:', difficulty);
    console.log('🎯 [DEBUG] Tipo de difficulty:', typeof difficulty);
    console.log('🎯 [DEBUG] difficulty === "easy":', difficulty === 'easy');
    console.log('🎯 [DEBUG] difficulty === "medium":', difficulty === 'medium');
    console.log('🎯 [DEBUG] difficulty === "hard":', difficulty === 'hard');
    
    // SIEMPRE usar el fallback para functions - el nuevo generador es para geometría
    console.log('🔄 [DEBUG] Usando sistema fallback para functions con dificultad:', difficulty);
    const result = generateBasicFunctionExercise(difficulty);
    console.log('🔄 [DEBUG] Resultado del fallback:', result);
    return result;
}

// Función fallback del sistema original
function generateBasicFunctionExercise(difficulty) {
    console.log('🔧 [DEBUG] generateBasicFunctionExercise llamado con difficulty:', difficulty);
    console.log('🔧 [DEBUG] Tipo de difficulty en fallback:', typeof difficulty);
    
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
    
    console.log('🔧 [DEBUG] Total de ejercicios disponibles:', exercises.length);
    
    // Seleccionar ejercicio aleatorio según dificultad
    const easyExercises = exercises.slice(0, 2); // Primeros 2 ejercicios para easy
    const mediumExercises = exercises.slice(2, 4); // Ejercicios 3-4 para medium
    const hardExercises = exercises.slice(4); // Ejercicios 5-6 para hard
    
    console.log('🔧 [DEBUG] easyExercises length:', easyExercises.length);
    console.log('🔧 [DEBUG] mediumExercises length:', mediumExercises.length);
    console.log('🔧 [DEBUG] hardExercises length:', hardExercises.length);
    
    let exercisePool;
    if (difficulty === 'easy') {
        exercisePool = easyExercises;
        console.log('🔧 [DEBUG] Seleccionado easyExercises');
    } else if (difficulty === 'medium') {
        exercisePool = mediumExercises;
        console.log('🔧 [DEBUG] Seleccionado mediumExercises');
    } else if (difficulty === 'hard') {
        exercisePool = hardExercises;
        console.log('🔧 [DEBUG] Seleccionado hardExercises');
    } else { // mixed o cualquier otro valor - usar todos los ejercicios
        exercisePool = exercises;
        console.log('🔧 [DEBUG] Seleccionado todos los ejercicios (mixed):', exercises.length);
    }
    
    console.log('🔧 [DEBUG] exercisePool seleccionado:', exercisePool);
    console.log('🔧 [DEBUG] exercisePool length:', exercisePool.length);
    
    const exercise = exercisePool[Math.floor(Math.random() * exercisePool.length)];
    console.log('🔧 [DEBUG] Ejercicio seleccionado:', exercise);
    console.log('🔧 [DEBUG] Ejercicio question:', exercise.question);
    console.log('🔧 [DEBUG] Ejercicio correctAnswer:', exercise.correctAnswer);
    console.log('🔧 [DEBUG] Ejercicio distractors:', exercise.distractors);
    
    // CRÍTICO: Aplicar Fisher-Yates shuffle para mezclar las opciones
    // Esto soluciona el bug donde la respuesta correcta siempre estaba arriba a la izquierda
    let options = [exercise.correctAnswer, ...exercise.distractors];
    console.log('🔧 [DEBUG] Options antes de shuffle:', options);
    
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    exercise.options = options;
    console.log('🔧 [DEBUG] Options después de shuffle:', exercise.options);
    console.log('🔧 [DEBUG] Exercise completo antes de retornar:', exercise);
    
    exercise.figuresTitle = '📊 Conceptos';
    exercise.formulasTitle = '📝 Fórmulas';
    exercise.instruction = 'Practica funciones evaluando puntos y aplicando fórmulas';
    
    return exercise;
}

// Función de validación simple
function validateExercise(exercise) {
    console.log('🔍 [VALIDATE] Validando exercise:', exercise);
    
    if (!exercise || !exercise.options || !exercise.correctAnswer) {
        console.log('❌ [VALIDATE] Exercise inválido - missing properties');
        return false;
    }
    
    console.log('🔍 [VALIDATE] exercise.options:', exercise.options);
    console.log('🔍 [VALIDATE] exercise.correctAnswer:', exercise.correctAnswer);
    console.log('🔍 [VALIDATE] exercise.options.length:', exercise.options.length);
    
    // Verificar que la respuesta correcta esté en las opciones
    if (!exercise.options.includes(exercise.correctAnswer)) {
        console.log('❌ [VALIDATE] Respuesta correcta no está en las opciones');
        return false;
    }
    
    // Verificar que haya exactamente 4 opciones
    if (exercise.options.length !== 4) {
        console.log('❌ [VALIDATE] Número incorrecto de opciones:', exercise.options.length);
        return false;
    }
    
    // Verificar que No haya duplicados
    const uniqueOptions = new Set(exercise.options);
    if (uniqueOptions.size !== exercise.options.length) {
        console.log('❌ [VALIDATE] Hay opciones duplicadas');
        return false;
    }
    
    console.log('✅ [VALIDATE] Exercise válido');
    return true;
}

// Exportar para compatibilidad con el código existente
if (typeof window !== 'undefined') {
    window.generatePracticeExerciseFunctions = generatePracticeExerciseFunctions;
}

console.log('✅ functions-practice-new.js cargado con nuevo sistema completo');
