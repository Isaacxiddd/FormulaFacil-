// ============================================================
// IMPLEMENTACIÓN COMPLETA - GENERADOR DE EJERCICIOS
// Modo Practice: Funciones Lineales y Cuadráticas
// ============================================================

// ============================================================
// UTILIDADES MATEMÁTICAS
// ============================================================

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumber(num, decimals = 2) {
    if (Number.isInteger(num)) return num;
    return parseFloat(num.toFixed(decimals));
}

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a || 1;
}

function simplifyFraction(num, den) {
    const g = gcd(num, den);
    return [num / g, den / g];
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Función centralizada para generar opciones con shuffle robusto
function generateOptions(correct, distractors) {
    console.log('🔍 ANTES DE TODO - correct:', correct);
    console.log('🔍 ANTES DE TODO - distractors:', distractors);
    
    // Filtrar y asegurar unicidad
    const filteredDistractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    console.log('🔍 DESPUÉS DE FILTRAR - filteredDistractors:', filteredDistractors);
    
    // Mezclar opciones de forma robusta
    let options = [correct, ...filteredDistractors];
    
    console.log('🔍 ANTES DE SHUFFLE - options:', options);
    console.log('🔍 ANTES DE SHUFFLE - correct en posición:', options.indexOf(correct));
    
    // Shuffle multiple times para asegurar aleatoriedad
    for (let shuffleCount = 0; shuffleCount < 5; shuffleCount++) {
        options = shuffleArray(options);
        console.log(`🔍 SHUFFLE ${shuffleCount + 1} - options:`, options);
    }
    
    // VERIFICACIÓN FORZADA: Asegurar que la correcta no esté en la primera posición
    let attempts = 0;
    while (options[0] === correct && attempts < 10) {
        // Si la primera es correcta, hacer shuffle de nuevo
        options = shuffleArray(options);
        console.log(`🔍 INTENTO ${attempts + 1} - options:`, options);
        attempts++;
    }
    
    // Si después de 10 intentos sigue siendo primera, moverla manualmente
    if (options[0] === correct) {
        const randomPos = Math.floor(Math.random() * (options.length - 1)) + 1;
        [options[0], options[randomPos]] = [options[randomPos], options[0]];
        console.log('🔧 Forzado movimiento de posición - correcta era primera');
        console.log('🔧 DESPUÉS DE MOVER - options:', options);
    }
    
    console.log('🔍 FINAL - Opciones finales:', options);
    console.log('🔍 FINAL - Respuesta correcta:', correct, 'posición:', options.indexOf(correct));
    
    return options;
}

function ensureUnique(options, value) {
    let val = value;
    let attempts = 0;
    
    while (options.includes(val) && attempts < 20) {
        if (typeof val === 'number') {
            val = formatNumber(val + (attempts % 2 === 0 ? 1 : -1) * (attempts + 1) * 0.5);
        }
        attempts++;
    }
    
    return val;
}

// ============================================================
// FUNCIONES LINEALES - NIVEL MEDIO
// ============================================================

function generateImplicitLineWithPoint_M1() {
    const A = randInt(1, 5);
    const B = randInt(-5, -1);
    const C = randInt(1, 10);
    
    const x1 = randInt(1, 5);
    const y1 = randInt(2, 8);
    
    const m = -A / B;
    const b = y1 - m * x1;
    const correct = formatNumber(b);
    
    let distractors = [
        formatNumber(y1),
        formatNumber(-b),
        formatNumber(y1 - (-m) * x1),
        formatNumber(m * x1)
    ];
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'implicit_line_point_M1',
        difficulty: 'medium',
        question: `Una recta tiene ecuación ${A}x ${B >= 0 ? '+' : ''}${B}y + ${C} = 0 y pasa por el punto (${x1}, ${y1}). ¿Cuál es su ordenada al origen b?`,
        options,
        correct,
        explanation: `Convertir a forma explícita: ${B}y = -${A}x - ${C}. Luego y = ${formatNumber(m)}x + ${formatNumber(-C/B)}. Como pasa por (${x1}, ${y1}), entonces b = ${y1} - ${formatNumber(m)}·${x1} = ${correct}`,
        formula: 'b = y₁ - mx₁',
        concepts: ['ecuación implícita', 'conversión de formas', 'punto-pendiente']
    };
}

function generateParallelLineThroughPoint_M2() {
    const m1 = randInt(2, 5);
    const b1 = randInt(1, 8);
    
    const x0 = randInt(1, 4);
    const y0 = randInt(3, 9);
    
    const m2 = m1;
    const b2 = y0 - m2 * x0;
    const correct = formatNumber(b2);
    
    let distractors = [
        formatNumber(b1),
        formatNumber(y0),
        formatNumber(y0 + m2 * x0),
        formatNumber((-1/m2) * x0 + y0)
    ];
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'parallel_line_point_M2',
        difficulty: 'medium',
        question: `Hallar la ordenada al origen de la recta paralela a y = ${m1}x + ${b1} que pasa por (${x0}, ${y0}).`,
        options,
        correct,
        explanation: `Rectas paralelas tienen la misma pendiente: m = ${m1}. Usando y = mx + b con el punto (${x0}, ${y0}): b = ${y0} - ${m1}·${x0} = ${correct}`,
        formula: 'm₁ = m₂ (paralelas)',
        concepts: ['paralelismo', 'pendiente', 'ecuación punto-pendiente']
    };
}

function generatePerpendicularLineThroughPoint_M3() {
    const m1 = randInt(2, 4);
    const b1 = randInt(1, 6);
    
    const m2 = -1 / m1;
    const correct = formatNumber(m2);
    
    let distractors = [
        formatNumber(-m1),
        formatNumber(1/m1),
        formatNumber(m1),
        formatNumber(-1/m1 - 1)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'perpendicular_slope_M3',
        difficulty: 'medium',
        question: `¿Cuál es la pendiente de la recta perpendicular a y = ${m1}x + ${b1}?`,
        options,
        correct,
        explanation: `Para rectas perpendiculares: m₁ · m₂ = -1. Entonces m₂ = -1/m₁ = -1/${m1} = ${correct}`,
        formula: 'm⊥ = -1/m',
        concepts: ['perpendicularidad', 'pendiente']
    };
}

function generateLineFromTwoPoints_M4() {
    const x1 = randInt(1, 4);
    const y1 = randInt(2, 6);
    const x2 = x1 + randInt(2, 5);
    const y2 = y1 + randInt(3, 7);
    
    const m = (y2 - y1) / (x2 - x1);
    const b = y1 - m * x1;
    const correct = formatNumber(b);
    
    let distractors = [
        formatNumber(y1),
        formatNumber(b + m),
        formatNumber(y2 - m * x2),
        formatNumber(-b)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'line_two_points_M4',
        difficulty: 'medium',
        question: `Una recta pasa por A(${x1}, ${y1}) y B(${x2}, ${y2}). Determinar su ordenada al origen.`,
        options,
        correct,
        explanation: `Primero m = (${y2}-${y1})/(${x2}-${x1}) = ${formatNumber(m)}. Luego b = ${y1} - ${formatNumber(m)}·${x1} = ${correct}`,
        formula: 'm = (y₂-y₁)/(x₂-x₁), b = y₁ - mx₁',
        concepts: ['pendiente', 'dos puntos', 'ordenada al origen']
    };
}

function generateLineRoot_M5() {
    const m = randInt(2, 6);
    const b = randInt(3, 12);
    
    const root = -b / m;
    const correct = formatNumber(root);
    
    let distractors = [
        formatNumber(b/m),
        formatNumber(-m/b),
        formatNumber(b),
        formatNumber(-b)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'line_root_M5',
        difficulty: 'medium',
        question: `¿En qué valor de x la función f(x) = ${m}x + ${b} corta al eje X?`,
        options,
        correct,
        explanation: `Cuando y = 0: 0 = ${m}x + ${b}. Despejando: x = -${b}/${m} = ${correct}`,
        formula: 'x₀ = -b/m',
        concepts: ['raíz', 'intersección eje X', 'cero de la función']
    };
}

function generateLineIntersection_M6() {
    const m1 = randInt(2, 4);
    const b1 = randInt(1, 5);
    const m2 = randInt(-4, -2);
    const b2 = randInt(6, 10);
    
    const xInt = (b2 - b1) / (m1 - m2);
    const correct = formatNumber(xInt);
    
    let distractors = [
        formatNumber(m1 * xInt + b1),
        formatNumber((b1 - b2) / (m1 - m2)),
        formatNumber((b2 - b1) / (m2 - m1)),
        formatNumber(b2 - b1)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'line_intersection_M6',
        difficulty: 'medium',
        question: `Las rectas y = ${m1}x + ${b1} y y = ${m2}x + ${b2} se intersectan en el punto (x₀, y₀). Hallar x₀.`,
        options,
        correct,
        explanation: `Igualar: ${m1}x + ${b1} = ${m2}x + ${b2}. Entonces ${m1 - m2}x = ${b2 - b1}, x = ${correct}`,
        formula: 'x = (b₂-b₁)/(m₁-m₂)',
        concepts: ['sistema de ecuaciones', 'intersección de rectas']
    };
}

// ============================================================
// FUNCIONES LINEALES - NIVEL DIFÍCIL
// ============================================================

function generateImplicitIntersection_D1() {
    const xInt = randInt(2, 5);
    const yInt = randInt(6, 12);
    
    const m1 = randInt(2, 4);
    const b1 = yInt - m1 * xInt;
    
    const correct = formatNumber(b1);
    
    let distractors = [
        formatNumber(yInt),
        formatNumber(m1 * xInt),
        formatNumber(b1 - m1),
        formatNumber(yInt - 2 * m1 * xInt)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'implicit_intersection_D1',
        difficulty: 'hard',
        question: `Dos rectas se intersectan en el punto (${xInt}, ${yInt}). Si la primera tiene pendiente m = ${m1}, ¿cuál es su ordenada al origen?`,
        options,
        correct,
        explanation: `El punto (${xInt}, ${yInt}) pertenece a la recta. Usando b = y - mx: b = ${yInt} - ${m1}·${xInt} = ${correct}`,
        formula: 'b = y - mx',
        concepts: ['punto de intersección', 'deducción', 'ecuación punto-pendiente'],
        hint: 'El punto de intersección pertenece a ambas rectas'
    };
}

function generateParameterPerpendicularLine_D2() {
    const m1 = randInt(2, 5);
    const b1 = randInt(1, 8);
    const b2 = randInt(-6, -1);
    
    const k = -1 / m1;
    const correct = formatNumber(k);
    
    let distractors = [
        formatNumber(-k),
        formatNumber(1/m1),
        formatNumber(m1),
        formatNumber(-m1)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'parameter_perpendicular_D2',
        difficulty: 'hard',
        question: `¿Para qué valor de k las rectas y = ${m1}x + ${b1} e y = kx ${b2 >= 0 ? '+' : ''}${b2} son perpendiculares?`,
        options,
        correct,
        explanation: `Para perpendiculares: m₁ · m₂ = -1. Entonces ${m1} · k = -1, k = -1/${m1} = ${correct}`,
        formula: 'm₁ · m₂ = -1',
        concepts: ['perpendicularidad', 'parámetro', 'condición geométrica']
    };
}

function generateLineThroughIntersection_D4() {
    const m1 = randInt(2, 4);
    const b1 = randInt(1, 5);
    const m2 = randInt(-4, -2);
    const b2 = randInt(6, 10);
    
    const xInt = (b2 - b1) / (m1 - m2);
    const yInt = m1 * xInt + b1;
    
    const m3 = randInt(1, 3);
    const b3 = yInt - m3 * xInt;
    const correct = formatNumber(b3);
    
    let distractors = [
        formatNumber(b1),
        formatNumber(b2),
        formatNumber(yInt),
        formatNumber(m3 * xInt)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'line_through_intersection_D4',
        difficulty: 'hard',
        question: `Las rectas y = ${m1}x + ${b1} e y = ${m2}x + ${b2} se cortan en un punto P. Hallar la ordenada al origen de la recta con pendiente m = ${m3} que pasa por P.`,
        options,
        correct,
        explanation: `Primero encontrar P: x = ${formatNumber(xInt)}, y = ${formatNumber(yInt)}. Luego b = ${formatNumber(yInt)} - ${m3}·${formatNumber(xInt)} = ${correct}`,
        formula: 'Sistema + punto-pendiente',
        concepts: ['sistema de ecuaciones', 'intersección', 'múltiples pasos']
    };
}

function generateTriangleAreaFromLine_D5() {
    const m = randInt(-4, -2);
    const b = randInt(6, 12);
    
    const yIntercept = b;
    const xIntercept = -b / m;
    
    const area = (xIntercept * yIntercept) / 2;
    const correct = formatNumber(area);
    
    let distractors = [
        formatNumber(xIntercept * yIntercept),
        formatNumber(xIntercept + yIntercept),
        formatNumber(b),
        formatNumber(-b/m)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'triangle_area_line_D5',
        difficulty: 'hard',
        question: `La recta y = ${m}x + ${b} forma un triángulo con los ejes coordenados. ¿Cuál es el área de ese triángulo?`,
        options,
        correct,
        explanation: `Intersección con eje Y: (0, ${b}). Con eje X: (${formatNumber(xIntercept)}, 0). Área = (${formatNumber(xIntercept)} × ${b}) / 2 = ${correct}`,
        formula: 'Área = (base × altura) / 2',
        concepts: ['geometría analítica', 'intersecciones', 'área']
    };
}

// ============================================================
// FUNCIONES CUADRÁTICAS - NIVEL MEDIO
// ============================================================

function generateVertexFromStandard_M7() {
    const a = randInt(1, 3);
    const b = randInt(-8, -2);
    const c = randInt(1, 10);
    
    const xv = -b / (2 * a);
    const yv = a * xv * xv + b * xv + c;
    
    const correct = formatNumber(yv);
    
    let distractors = [
        formatNumber(xv),
        formatNumber(c),
        formatNumber(-b / (4 * a)),
        formatNumber(xv * xv)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'vertex_y_M7',
        difficulty: 'medium',
        question: `Para la parábola y = ${a}x² ${b >= 0 ? '+' : ''}${b}x + ${c}, ¿cuál es la coordenada y del vértice?`,
        options,
        correct,
        explanation: `x_v = -b/(2a) = ${formatNumber(xv)}. Luego y_v = ${a}(${formatNumber(xv)})² + ${b}(${formatNumber(xv)}) + ${c} = ${correct}`,
        formula: 'x_v = -b/(2a), y_v = f(x_v)',
        concepts: ['vértice', 'parábola', 'evaluación']
    };
}

function generateQuadraticFromRoots_M9() {
    const r1 = randInt(-4, -1);
    const r2 = randInt(1, 5);
    
    const a = 1;
    const b = -(r1 + r2);
    const c = r1 * r2;
    
    const correct = formatNumber(c);
    
    let distractors = [
        formatNumber(b),
        formatNumber(r1 * r2 * a),
        formatNumber(-(r1 + r2)),
        formatNumber(Math.abs(c))
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'quadratic_from_roots_M9',
        difficulty: 'medium',
        question: `Si una parábola tiene raíces en x = ${r1} y x = ${r2}, y su ecuación es y = x² + bx + c, ¿cuál es el valor de c?`,
        options,
        correct,
        explanation: `Forma factorizada: y = (x - ${r1})(x - ${r2}). Producto de raíces: c = ${r1} × ${r2} = ${correct}`,
        formula: 'c = r₁ · r₂',
        concepts: ['raíces', 'forma factorizada', 'producto de raíces']
    };
}

function generateAxisOfSymmetry_M10() {
    const a = randInt(1, 3);
    let b = randInt(-10, 10);
    if (b === 0) b = 4;
    const c = randInt(-5, 8);
    
    const axis = -b / (2 * a);
    const correct = `x = ${formatNumber(axis)}`;
    
    let distractors = [
        `x = ${formatNumber(b / (2 * a))}`,
        `x = ${formatNumber(-b / a)}`,
        `x = ${formatNumber(c)}`,
        `x = ${formatNumber(-b)}`
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'axis_symmetry_M10',
        difficulty: 'medium',
        question: `¿Cuál es el eje de simetría de la parábola y = ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}?`,
        options,
        correct,
        explanation: `Eje de simetría: x = -b/(2a) = -${b}/(2·${a}) = ${formatNumber(axis)}`,
        formula: 'x = -b/(2a)',
        concepts: ['eje de simetría', 'vértice', 'parábola']
    };
}

// ============================================================
// FUNCIONES CUADRÁTICAS - NIVEL DIFÍCIL
// ============================================================

function generateQuadraticFromVertexAndPoint_D6() {
    const h = randInt(-3, 4);
    const k = randInt(-6, -1);
    
    const x1 = h + randInt(2, 4);
    const y1 = randInt(1, 8);
    
    const a = (y1 - k) / Math.pow(x1 - h, 2);
    const correct = formatNumber(a);
    
    let distractors = [
        formatNumber(-2 * a * h),
        formatNumber(a * h * h + k),
        formatNumber((y1 - k) / (x1 - h)),
        formatNumber(2 * a)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'quadratic_vertex_point_D6',
        difficulty: 'hard',
        question: `Una parábola tiene vértice V(${h}, ${k}) y pasa por (${x1}, ${y1}). Si su ecuación es y = ax² + bx + c, ¿cuál es el valor de a?`,
        options,
        correct,
        explanation: `Forma vértice: y = a(x - ${h})² + ${k}. Sustituir (${x1}, ${y1}): ${y1} = a(${x1 - h})² + ${k}. Entonces a = ${correct}`,
        formula: 'y = a(x - h)² + k',
        concepts: ['forma vértice', 'conversión', 'vértice y punto']
    };
}

function generateQuadraticFromRootsAndPoint_D7() {
    const r1 = randInt(-5, -2);
    const r2 = randInt(2, 6);
    
    const xP = Math.floor((r1 + r2) / 2);
    const yP = randInt(-10, -5);
    
    const a = yP / ((xP - r1) * (xP - r2));
    const b = -a * (r1 + r2);
    const c = a * r1 * r2;
    
    const discriminant = b * b - 4 * a * c;
    const correct = formatNumber(discriminant);
    
    let distractors = [
        formatNumber(-discriminant),
        formatNumber(b * b),
        formatNumber(4 * a * c),
        formatNumber(Math.abs(b))
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'quadratic_roots_point_D7',
        difficulty: 'hard',
        question: `Una parábola tiene raíces x₁ = ${r1} y x₂ = ${r2}. Cuando x = ${xP}, y = ${yP}. ¿Cuál es su discriminante?`,
        options,
        correct,
        explanation: `Forma factorizada: y = a(x - ${r1})(x - ${r2}). Usar punto para hallar a, luego convertir a forma estándar y calcular Δ = b² - 4ac = ${correct}`,
        formula: 'Δ = b² - 4ac',
        concepts: ['raíces', 'forma factorizada', 'discriminante', 'múltiples pasos']
    };
}

function generateProjectileMotion_D10() {
    const h0 = randInt(10, 20);
    const v0 = randInt(15, 25);
    const g = 10;
    
    const a = -g / 2;
    const b = v0;
    const c = h0;
    
    const tMax = -b / (2 * a);
    const hMax = a * tMax * tMax + b * tMax + c;
    
    const correct = formatNumber(hMax);
    
    let distractors = [
        formatNumber(c),
        formatNumber(v0 * v0 / (2 * g)),
        formatNumber(tMax),
        formatNumber(hMax - h0)
    ];
    
    distractors = distractors
        .map(d => ensureUnique([correct], d))
        .filter(d => d !== correct)
        .slice(0, 3);
    
    const options = generateOptions(correct, distractors);
    
    return {
        id: 'projectile_motion_D10',
        difficulty: 'hard',
        question: `Se lanza un objeto desde ${h0}m con velocidad inicial ${v0} m/s. La altura sigue h(t) = -5t² + ${v0}t + ${h0}. ¿Cuál es la altura máxima alcanzada?`,
        options,
        correct,
        explanation: `Altura máxima = vértice. t_max = ${formatNumber(tMax)}s, h_max = -5(${formatNumber(tMax * tMax)}) + ${v0}(${formatNumber(tMax)}) + ${h0} = ${correct}m`,
        formula: 'Vértice de parábola',
        concepts: ['aplicación física', 'vértice como máximo', 'tiro parabólico'],
        context: 'physics'
    };
}

// ============================================================
// SISTEMA DE GENERACIÓN
// ============================================================

const exerciseGenerators = {
    medium: {
        linear: [
            generateImplicitLineWithPoint_M1,
            generateParallelLineThroughPoint_M2,
            generatePerpendicularLineThroughPoint_M3,
            generateLineFromTwoPoints_M4,
            generateLineRoot_M5,
            generateLineIntersection_M6
        ],
        quadratic: [
            generateVertexFromStandard_M7,
            generateQuadraticFromRoots_M9,
            generateAxisOfSymmetry_M10
        ]
    },
    hard: {
        linear: [
            generateImplicitIntersection_D1,
            generateParameterPerpendicularLine_D2,
            generateLineThroughIntersection_D4,
            generateTriangleAreaFromLine_D5
        ],
        quadratic: [
            generateQuadraticFromVertexAndPoint_D6,
            generateQuadraticFromRootsAndPoint_D7,
            generateProjectileMotion_D10
        ]
    }
};

function generateExercise(difficulty = 'medium', type = 'linear') {
    const generators = exerciseGenerators[difficulty][type];
    const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
    return randomGenerator();
}

function generateExerciseSet(difficulty, count = 10) {
    const exercises = [];
    const halfCount = Math.floor(count / 2);
    
    for (let i = 0; i < halfCount; i++) {
        exercises.push(generateExercise(difficulty, 'linear'));
    }
    
    for (let i = 0; i < count - halfCount; i++) {
        exercises.push(generateExercise(difficulty, 'quadratic'));
    }
    
    return shuffleArray(exercises);
}

// ============================================================
// VALIDACIÓN
// ============================================================

function validateExercise(exercise) {
    const { options, correct } = exercise;
    
    // Verificar que correct esté en options
    if (!options.includes(correct)) {
        console.error('❌ Respuesta correcta no está en opciones', exercise.id);
        return false;
    }
    
    // Verificar que no haya duplicados
    if (new Set(options).size !== options.length) {
        console.error('❌ Opciones duplicadas', exercise.id);
        return false;
    }
    
    // Verificar que haya exactamente 4 opciones
    if (options.length !== 4) {
        console.error('❌ No hay 4 opciones', exercise.id);
        return false;
    }
    
    return true;
}

// ============================================================
// EXPORTACIÓN
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateExercise,
        generateExerciseSet,
        validateExercise,
        exerciseGenerators
    };
}

// Exportar para navegador
if (typeof window !== 'undefined') {
    window.exerciseGenerators = exerciseGenerators;
    window.generateExercise = generateExercise;
    window.generateExerciseSet = generateExerciseSet;
    window.validateExercise = validateExercise;
}

// ============================================================
// EJEMPLO DE USO
// ============================================================

/*
// Generar un ejercicio medio de funciones lineales
const exercise = generateExercise('medium', 'linear');
console.log(exercise);

// Generar conjunto de 10 ejercicios difíciles
const exerciseSet = generateExerciseSet('hard', 10);
console.log(exerciseSet);

// Validar ejercicio
const isValid = validateExercise(exercise);
console.log('Ejercicio válido:', isValid);
*/
