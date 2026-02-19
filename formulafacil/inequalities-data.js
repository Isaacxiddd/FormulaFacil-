// ══════════════════════════════════════════════════════════════
// DATOS DE INECUACIONES
// Conceptos y reglas para el juego de memoria
// ══════════════════════════════════════════════════════════════

const inequalitiesData = [
    // ─────────────────────────────────────────────────────────
    // CONCEPTOS BÁSICOS
    // ─────────────────────────────────────────────────────────
    {
        name: "Definición de Inecuación",
        icon: "≠",
        formulas: "ax + b > c \\text{ o } ax + b < c \\text{ o } ax + b \\geq c \\text{ o } ax + b \\leq c",
        svg: "",
    },
    {
        name: "Propiedad Aditiva",
        icon: "➕",
        formulas: "a > b \\Rightarrow a + c > b + c",
        svg: "",
    },
    {
        name: "Propiedad Multiplicativa Positiva",
        icon: "✖️",
        formulas: "a > b \\text{ y } c > 0 \\Rightarrow ac > bc",
        svg: "",
    },
    {
        name: "Cambio de Sentido",
        icon: "🔄",
        formulas: "a > b \\text{ y } c < 0 \\Rightarrow ac < bc",
        svg: "",
    },
    {
        name: "Inecuación Lineal Simple",
        icon: "📏",
        formulas: "x + a > b \\Rightarrow x > b - a",
        svg: "",
    },
    
    // ─────────────────────────────────────────────────────────
    // CONCEPTOS INTERMEDIOS
    // ─────────────────────────────────────────────────────────
    {
        name: "Inecuación con Coeficiente",
        icon: "🔢",
        formulas: "ax \\leq b \\text{ con } a > 0 \\Rightarrow x \\leq \\frac{b}{a}",
        svg: "",
    },
    {
        name: "Inecuación con Distributiva",
        icon: "📦",
        formulas: "a(x + b) > c \\Rightarrow ax + ab > c",
        svg: "",
    },
    {
        name: "Inecuación con Fracciones",
        icon: "➗",
        formulas: "\\frac{x - a}{b} \\geq c \\text{ con } b > 0 \\Rightarrow x - a \\geq bc",
        svg: "",
    },
    
    // ─────────────────────────────────────────────────────────
    // CONCEPTOS AVANZADOS
    // ─────────────────────────────────────────────────────────
    {
        name: "Producto de Factores",
        icon: "✖️✖️",
        formulas: "(x - a)(x - b) \\geq 0",
        svg: "",
    },
    {
        name: "Inecuación Cuadrática",
        icon: "🎯",
        formulas: "ax^2 + bx + c < 0",
        svg: "",
    },
    {
        name: "Inecuación Racional",
        icon: "⚖️",
        formulas: "\\frac{x - a}{x - b} > 0 \\text{ con } x \\neq b",
        svg: "",
    },
    {
        name: "Análisis de Signos",
        icon: "📊",
        formulas: "\\text{Estudiar el signo de } f(x) \\text{ en intervalos}",
        svg: "",
    },
    {
        name: "Puntos Críticos",
        icon: "📍",
        formulas: "\\text{Valores donde } f(x) = 0 \\text{ o no está definida}",
        svg: "",
    },
    {
        name: "Intervalos de Solución",
        icon: "📏📏",
        formulas: "(-\\infty, a] \\cup [b, +\\infty)",
        svg: "",
    },
    {
        name: "Restricciones del Dominio",
        icon: "⚠️",
        formulas: "x \\neq a \\text{ donde el denominador se anula}",
        svg: "",
    },
];

// ══════════════════════════════════════════════════════════════
// FÓRMULAS DETALLADAS DE INECUACIONES
// ══════════════════════════════════════════════════════════════

const inequalitiesFormulasData = [
    // ─────────────────────────────────────────────────────────
    // DEFINICIÓN Y PROPIEDADES BÁSICAS
    // ─────────────────────────────────────────────────────────
    {
        name: "Definición de Inecuación",
        formulas: [
            "ax + b > c",
            "ax + b < c",
            "ax + b \\geq c",
            "ax + b \\leq c"
        ],
        explanation: "Una inecuación es una desigualdad que contiene una o más incógnitas. El objetivo es hallar los valores que hacen verdadera la desigualdad.",
        variables: [
            "a, b, c: constantes reales",
            "x: incógnita (variable)",
            ">: mayor que",
            "<: menor que",
            "≥: mayor o igual que",
            "≤: menor o igual que"
        ],
        example: {
            problem: "Resolver: x + 5 > 9",
            steps: [
                "Restar 5 a ambos lados: x + 5 - 5 > 9 - 5",
                "Simplificar: x > 4",
                "Solución: x ∈ (4, +∞)"
            ]
        }
    },
    
    {
        name: "Propiedad Aditiva",
        formulas: [
            "a > b \\Rightarrow a + c > b + c",
            "a < b \\Rightarrow a + c < b + c"
        ],
        explanation: "Al sumar o restar el mismo número en ambos miembros de una desigualdad, el sentido de la desigualdad NO cambia.",
        variables: [
            "a, b: números reales",
            "c: número que se suma o resta"
        ],
        example: {
            problem: "Si x - 3 > 7, hallar x",
            steps: [
                "Sumar 3 a ambos lados: x - 3 + 3 > 7 + 3",
                "Simplificar: x > 10",
                "El sentido de '>' no cambió"
            ]
        }
    },
    
    {
        name: "Propiedad Multiplicativa Positiva",
        formulas: [
            "a > b \\text{ y } c > 0 \\Rightarrow ac > bc",
            "a < b \\text{ y } c > 0 \\Rightarrow ac < bc"
        ],
        explanation: "Al multiplicar o dividir ambos miembros por un número POSITIVO, el sentido de la desigualdad NO cambia.",
        variables: [
            "a, b: números reales",
            "c: número positivo (c > 0)"
        ],
        example: {
            problem: "Resolver: 3x ≤ 12",
            steps: [
                "Dividir ambos lados por 3 (positivo): 3x/3 ≤ 12/3",
                "Simplificar: x ≤ 4",
                "El sentido de '≤' no cambió porque dividimos por un positivo"
            ]
        }
    },
    
    {
        name: "Cambio de Sentido",
        formulas: [
            "a > b \\text{ y } c < 0 \\Rightarrow ac < bc",
            "a < b \\text{ y } c < 0 \\Rightarrow ac > bc"
        ],
        explanation: "REGLA CLAVE: Al multiplicar o dividir ambos miembros por un número NEGATIVO, la desigualdad SE INVIERTE.",
        variables: [
            "a, b: números reales",
            "c: número negativo (c < 0)"
        ],
        example: {
            problem: "Resolver: -3x > 6",
            steps: [
                "Dividir ambos lados por -3 (negativo): -3x/(-3) ? 6/(-3)",
                "¡INVERTIR el signo!: x < -2",
                "Verificar: si x = -3, entonces -3(-3) = 9 > 6 ✓"
            ]
        }
    },
    
    {
        name: "Inecuación Lineal Simple",
        formulas: [
            "x + a > b \\Rightarrow x > b - a"
        ],
        explanation: "Para resolver una inecuación lineal simple, se despeja la variable aplicando las propiedades aditivas.",
        variables: [
            "x: incógnita",
            "a, b: constantes"
        ],
        example: {
            problem: "Resolver: x + 7 < 15",
            steps: [
                "Restar 7 a ambos lados: x < 15 - 7",
                "Simplificar: x < 8",
                "Solución: x ∈ (-∞, 8)"
            ]
        }
    },
    
    // ─────────────────────────────────────────────────────────
    // NIVEL INTERMEDIO
    // ─────────────────────────────────────────────────────────
    {
        name: "Inecuación con Coeficiente",
        formulas: [
            "ax \\leq b \\text{ con } a > 0 \\Rightarrow x \\leq \\frac{b}{a}"
        ],
        explanation: "Cuando el coeficiente es positivo, se divide ambos lados sin cambiar el sentido.",
        variables: [
            "a: coeficiente positivo",
            "b: término independiente",
            "x: incógnita"
        ],
        example: {
            problem: "Resolver: 5x ≤ 20",
            steps: [
                "Dividir por 5: x ≤ 20/5",
                "Simplificar: x ≤ 4",
                "Solución: x ∈ (-∞, 4]"
            ]
        }
    },
    
    {
        name: "Inecuación con Distributiva",
        formulas: [
            "a(x + b) > c",
            "ax + ab > c"
        ],
        explanation: "Aplicar la propiedad distributiva antes de despejar la variable.",
        variables: [
            "a, b, c: constantes",
            "x: incógnita"
        ],
        example: {
            problem: "Resolver: 5 - 2(x - 1) < 3",
            steps: [
                "Aplicar distributiva: 5 - 2x + 2 < 3",
                "Simplificar: -2x + 7 < 3",
                "Restar 7: -2x < -4",
                "Dividir por -2 (¡invertir signo!): x > 2"
            ]
        }
    },
    
    {
        name: "Inecuación con Fracciones",
        formulas: [
            "\\frac{x - a}{b} \\geq c \\text{ con } b > 0"
        ],
        explanation: "Multiplicar ambos lados por el denominador positivo para eliminar la fracción.",
        variables: [
            "a, c: constantes",
            "b: denominador positivo",
            "x: incógnita"
        ],
        example: {
            problem: "Resolver: (x - 2)/4 ≥ 1",
            steps: [
                "Multiplicar por 4: x - 2 ≥ 4",
                "Sumar 2: x ≥ 6",
                "Solución: x ∈ [6, +∞)"
            ]
        }
    },
    
    // ─────────────────────────────────────────────────────────
    // NIVEL AVANZADO
    // ─────────────────────────────────────────────────────────
    {
        name: "Producto de Factores",
        formulas: [
            "(x - a)(x - b) \\geq 0"
        ],
        explanation: "Un producto es ≥ 0 cuando ambos factores tienen el mismo signo. Se analizan los puntos críticos y se estudian los intervalos.",
        variables: [
            "a, b: puntos críticos (raíces)",
            "x: incógnita"
        ],
        example: {
            problem: "Resolver: (x - 1)(x + 3) ≥ 0",
            steps: [
                "Puntos críticos: x = 1 y x = -3",
                "Tabla de signos: (-∞,-3): +, (-3,1): -, (1,+∞): +",
                "Solución donde el producto es ≥ 0: (-∞,-3] ∪ [1,+∞)"
            ]
        }
    },
    
    {
        name: "Inecuación Cuadrática",
        formulas: [
            "ax^2 + bx + c < 0"
        ],
        explanation: "Se factoriza la expresión cuadrática y se analiza el signo en los intervalos determinados por las raíces.",
        variables: [
            "a, b, c: coeficientes",
            "x: incógnita"
        ],
        example: {
            problem: "Resolver: x² - 4x - 5 < 0",
            steps: [
                "Factorizar: (x - 5)(x + 1) < 0",
                "Puntos críticos: x = 5, x = -1",
                "Analizar signos: el producto es negativo en (-1, 5)",
                "Solución: x ∈ (-1, 5)"
            ]
        }
    },
    
    {
        name: "Inecuación Racional",
        formulas: [
            "\\frac{x - a}{x - b} > 0 \\text{ con } x \\neq b"
        ],
        explanation: "Un cociente es positivo cuando numerador y denominador tienen el mismo signo. Se analizan los puntos críticos y las restricciones.",
        variables: [
            "a: raíz del numerador",
            "b: raíz del denominador (RESTRICCIÓN)",
            "x: incógnita"
        ],
        example: {
            problem: "Resolver: (x - 2)/(x + 1) > 0",
            steps: [
                "Restricción: x ≠ -1",
                "Puntos críticos: x = 2, x = -1",
                "Tabla de signos: (-∞,-1): +, (-1,2): -, (2,+∞): +",
                "Solución: (-∞,-1) ∪ (2,+∞)"
            ]
        }
    },
    
    {
        name: "Análisis de Signos",
        formulas: [
            "f(x) = \\frac{(x-a)(x-b)}{(x-c)}"
        ],
        explanation: "Método sistemático para determinar dónde una función es positiva o negativa mediante una tabla de signos.",
        variables: [
            "a, b: raíces del numerador",
            "c: raíz del denominador",
            "x: variable"
        ],
        example: {
            problem: "Determinar dónde f(x) = (x-1)(x+2)/(x-3) > 0",
            steps: [
                "Puntos críticos: -2, 1, 3 (restricción)",
                "Evaluar signo en cada intervalo",
                "Solución: (-2, 1) ∪ (3, +∞)"
            ]
        }
    },
    
    {
        name: "Puntos Críticos",
        formulas: [
            "f(x) = 0 \\text{ o } f(x) \\text{ no definida}"
        ],
        explanation: "Los puntos críticos dividen la recta real en intervalos donde el signo de la función no cambia.",
        variables: [
            "Puntos donde f(x) = 0 (raíces)",
            "Puntos donde f(x) no está definida (asíntotas)"
        ],
        example: {
            problem: "Hallar puntos críticos de f(x) = x²-9 / (x-2)",
            steps: [
                "Numerador = 0: x² - 9 = 0 → x = ±3",
                "Denominador = 0: x - 2 = 0 → x = 2 (restricción)",
                "Puntos críticos: -3, 2, 3"
            ]
        }
    },
    
    {
        name: "Intervalos de Solución",
        formulas: [
            "(-\\infty, a] \\cup [b, +\\infty)",
            "(a, b)",
            "[a, b]"
        ],
        explanation: "La solución de una inecuación puede ser uno o más intervalos de la recta real.",
        variables: [
            "( ): intervalo abierto (no incluye extremos)",
            "[ ]: intervalo cerrado (incluye extremos)",
            "∪: unión de intervalos"
        ],
        example: {
            problem: "Expresar la solución de (x-1)(x-4) ≤ 0",
            steps: [
                "Puntos críticos: 1 y 4",
                "El producto es negativo entre las raíces",
                "Solución: [1, 4] (incluye extremos por el ≤)"
            ]
        }
    },
    
    {
        name: "Restricciones del Dominio",
        formulas: [
            "x \\neq a \\text{ donde } f(x) = \\frac{g(x)}{h(x)} \\text{ y } h(a) = 0"
        ],
        explanation: "En inecuaciones racionales, se deben excluir los valores que anulan el denominador.",
        variables: [
            "a: valor que anula el denominador",
            "Debe excluirse de la solución"
        ],
        example: {
            problem: "Resolver: 1/(x-2) > 0 con restricciones",
            steps: [
                "Restricción: x ≠ 2",
                "El cociente es positivo cuando numerador y denominador tienen igual signo",
                "Como 1 > 0 siempre, necesitamos x - 2 > 0",
                "Solución: x > 2, o sea (2, +∞)"
            ]
        }
    }
];

// ══════════════════════════════════════════════════════════════
// TIPS PARA INECUACIONES
// ══════════════════════════════════════════════════════════════

const inequalitiesTips = {
    "Definición de Inecuación": [
        "Una inecuación busca valores que hacen verdadera una desigualdad",
        "Los símbolos >, <, ≥, ≤ indican la relación entre expresiones",
        "La solución suele ser un intervalo o conjunto de intervalos"
    ],
    "Propiedad Aditiva": [
        "Sumar o restar NO cambia el sentido de la desigualdad",
        "Es la propiedad más segura: siempre mantiene el símbolo",
        "Úsala para aislar términos sin riesgo"
    ],
    "Propiedad Multiplicativa Positiva": [
        "Multiplicar/dividir por positivo NO invierte el símbolo",
        "Siempre verifica que el número sea positivo antes de aplicarla",
        "Es análoga a las ecuaciones cuando el factor es positivo"
    ],
    "Cambio de Sentido": [
        "¡CUIDADO! Multiplicar/dividir por negativo INVIERTE el símbolo",
        "Es el error más común en inecuaciones",
        "Si -2x > 4, entonces x < -2 (¡se invierte!)"
    ],
    "Inecuación Lineal Simple": [
        "Despeja como una ecuación, pero respeta las reglas del signo",
        "El resultado es un intervalo infinito",
        "Verifica con un valor para confirmar"
    ],
    "Inecuación con Coeficiente": [
        "Si el coeficiente es positivo, divides sin cambiar el símbolo",
        "Si es negativo, ¡invierte el símbolo!",
        "Siempre simplifica antes de dividir"
    ],
    "Inecuación con Distributiva": [
        "Distribuye cuidadosamente, respetando los signos",
        "Simplifica antes de despejar",
        "Ojo con los dobles negativos"
    ],
    "Inecuación con Fracciones": [
        "Multiplica por el denominador para eliminar la fracción",
        "Si el denominador es positivo, el símbolo no cambia",
        "Si es negativo, ¡invierte!"
    ],
    "Producto de Factores": [
        "Un producto es ≥ 0 cuando ambos factores tienen igual signo",
        "Halla los puntos críticos igualando a cero",
        "Usa tabla de signos para analizar intervalos"
    ],
    "Inecuación Cuadrática": [
        "Factoriza primero para hallar las raíces",
        "Analiza el signo de la parábola en cada intervalo",
        "Recuerda: entre raíces el signo es opuesto al de fuera"
    ],
    "Inecuación Racional": [
        "¡Nunca multipliques por el denominador sin saber su signo!",
        "Identifica PRIMERO las restricciones (donde no está definida)",
        "Usa tabla de signos para numerador y denominador"
    ],
    "Análisis de Signos": [
        "Divide la recta en intervalos usando los puntos críticos",
        "Prueba con un valor de cada intervalo",
        "El signo no cambia dentro de un mismo intervalo"
    ],
    "Puntos Críticos": [
        "Son donde la función vale cero o no está definida",
        "Dividen la recta en regiones con signo constante",
        "Márcalos en una recta numérica para visualizar"
    ],
    "Intervalos de Solución": [
        "( ) significa abierto: no incluye el extremo",
        "[ ] significa cerrado: incluye el extremo",
        "∪ une varios intervalos disjuntos"
    ],
    "Restricciones del Dominio": [
        "SIEMPRE verifica dónde el denominador es cero",
        "Esos valores NO pueden ser solución",
        "Márcalos con paréntesis abiertos en la solución"
    ]
};
