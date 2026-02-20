// ══════════════════════════════════════════════════════════════
// DATOS DE FIGURAS GEOMÉTRICAS
// ══════════════════════════════════════════════════════════════

export const logaritmosData = [
    // Figuras 2D
    {
        name: "Cuadrado",
        formulas: "A = l^2 \\quad P = 4l",
        svg: `<svg viewBox="0 0 100 100"><rect x="25" y="25" width="50" height="50" fill="#ffeb3b" stroke="#f57f17" stroke-width="2.5"/></svg>`
    },
    {
        name: "Triángulo",
        formulas: "A = \\frac{b \\cdot h}{2} \\quad P = a + b + c",
        svg: `<svg viewBox="0 0 100 100"><polygon points="50,25 20,75 80,75" fill="#4caf50" stroke="#1b5e20" stroke-width="2.5"/></svg>`
    },
    {
        name: "Rectángulo",
        formulas: "A = b \\cdot h \\quad P = 2(b + h)",
        svg: `<svg viewBox="0 0 100 100"><rect x="20" y="35" width="60" height="30" fill="#2196f3" stroke="#0d47a1" stroke-width="2.5"/></svg>`
    },
    {
        name: "Paralelogramo",
        formulas: "A = b \\cdot h \\quad P = 2(b + h)",
        svg: `<svg viewBox="0 0 100 100"><polygon points="25,65 45,35 75,35 55,65" fill="#9c27b0" stroke="#4a148c" stroke-width="2.5"/></svg>`
    },
    {
        name: "Rombo",
        formulas: "A = \\frac{D \\cdot d}{2} \\quad P = 4l",
        svg: `<svg viewBox="0 0 100 100"><polygon points="50,20 75,50 50,80 25,50" fill="#ff5722" stroke="#bf360c" stroke-width="2.5"/></svg>`
    },
    {
        name: "Trapecio",
        formulas: "A = \\frac{(B + b) \\cdot h}{2} \\quad P = B + b + l_1 + l_2",
        svg: `<svg viewBox="0 0 100 100"><polygon points="30,70 70,70 60,30 40,30" fill="#ff9800" stroke="#f57c00" stroke-width="2.5"/></svg>`
    },
    {
        name: "Pentágono Regular",
        formulas: "A = \\frac{5l^2}{4 \\tan(\\pi/5)} \\quad P = 5l",
        svg: `<svg viewBox="0 0 100 100"><polygon points="50,25 80,40 70,70 30,70 20,40" fill="#e91e63" stroke="#795548" stroke-width="2.5"/></svg>`
    },
    {
        name: "Polígono Regular",
        formulas: "A = \\frac{P \\cdot a}{2} \\quad P = n \\cdot l",
        svg: `<svg viewBox="0 0 100 100"><polygon points="50,20 73,35 73,65 50,80 27,65 27,35" fill="#795548" stroke="#3e2723" stroke-width="2.5"/></svg>`
    },
    {
        name: "Círculo",
        formulas: "A = \\pi r^2 \\quad P = 2\\pi r",
        svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="#ff9800" stroke="#e65100" stroke-width="2.5"/></svg>`
    },
    {
        name: "Corona Circular",
        formulas: "A = \\pi(R^2 - r^2) \\quad P = 2\\pi(R + r)",
        svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" fill="#00bcd4" stroke="#006064" stroke-width="2.5"/><circle cx="50" cy="50" r="20" fill="white" stroke="#006064" stroke-width="2.5"/></svg>`
    },
    {
        name: "Sector Circular",
        formulas: "A = \\frac{\\pi r^2 \\alpha}{360} \\quad L = \\frac{2\\pi r \\alpha}{360}",
        svg: `<svg viewBox="0 0 100 100"><path d="M 50 50 L 80 50 A 30 30 0 0 1 65 73.66 Z" fill="#cddc39" stroke="#827717" stroke-width="2.5"/></svg>`
    },
    // Figuras 3D
    {
        name: "Cubo",
        formulas: "A_T = 6a^2 \\quad V = a^3",
        svg: `<svg viewBox="0 0 100 100"><polygon points="30,45 55,30 80,45 80,70 55,85 30,70" fill="#ffeb3b" stroke="#f57f17" stroke-width="2"/><polygon points="30,45 30,70 55,85 55,60" fill="#fdd835" stroke="#f57f17" stroke-width="2"/><polygon points="55,30 80,45 80,70 55,60" fill="#fbc02d" stroke="#f57f17" stroke-width="2"/></svg>`,
        figure3D: "ortoedro"
    },
    {
        name: "Cilindro",
        formulas: "A_L = 2\\pi rh \\quad A_T = 2\\pi r(r+h) \\quad V = \\pi r^2 h",
        svg: `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="30" rx="25" ry="8" fill="#2196f3" stroke="#0d47a1" stroke-width="2"/><rect x="25" y="30" width="50" height="40" fill="#42a5f5" stroke="#0d47a1" stroke-width="2"/><ellipse cx="50" cy="70" rx="25" ry="8" fill="#1976d2" stroke="#0d47a1" stroke-width="2"/></svg>`,
        figure3D: "cilindro"
    },
    {
        name: "Ortoedro",
        formulas: "A_T = 2(ab + ac + bc) \\quad V = a \\cdot b \\cdot c",
        svg: `<svg viewBox="0 0 100 100"><polygon points="25,50 50,35 75,50 75,75 50,90 25,75" fill="#4caf50" stroke="#1b5e20" stroke-width="2"/><polygon points="25,50 25,75 50,90 50,65" fill="#66bb6a" stroke="#1b5e20" stroke-width="2"/><polygon points="50,35 75,50 75,75 50,65" fill="#388e3c" stroke="#1b5e20" stroke-width="2"/></svg>`,
        figure3D: "ortoedro"
    },
    {
        name: "Cono",
        formulas: "A_L = \\pi rg \\quad A_T = \\pi r(r+h) \\quad V = \\frac{\\pi r^2 h}{3}",
        svg: `<svg viewBox="0 0 100 100"><polygon points="50,20 25,70 75,70" fill="#ff5722" stroke="#bf360c" stroke-width="2"/><ellipse cx="50" cy="70" rx="25" ry="8" fill="#d84315" stroke="#bf360c" stroke-width="2"/></svg>`,
        figure3D: "cono"
    },
    {
        name: "Tetraedro",
        formulas: "A_T = \\sqrt{3}a^2 \\quad V = \\frac{a^3}{6\\sqrt{2}}",
        svg: `<svg viewBox="0 0 100 100"><polygon points="50,20 25,70 75,70" fill="#9c27b0" stroke="#4a148c" stroke-width="2"/><polygon points="50,20 25,70 50,60" fill="#7b1fa2" stroke="#4a148c" stroke-width="2"/><polygon points="50,20 75,70 50,60" fill="#6a1b9a" stroke="#4a148c" stroke-width="2"/><polygon points="25,70 75,70 50,60" fill="#4a148c" stroke="#4a148c" stroke-width="2"/></svg>`,
        figure3D: "tetraedro"
    },
    {
        name: "Prisma Recto",
        formulas: "A_L = P_b \\cdot h \\quad A_T = A_L + 2A_b \\quad V = A_b \\cdot h",
        svg: `<svg viewBox="0 0 100 100"><polygon points="50,20 25,75 75,75" fill="#e91e63" stroke="#880e4f" stroke-width="2"/><polygon points="25,75 50,65 75,75" fill="#c2185b" stroke="#880e4f" stroke-width="2"/><line x1="50" y1="20" x2="50" y2="65" stroke="#880e4f" stroke-width="1.5" stroke-dasharray="3,3"/></svg>`,
        figure3D: "piramide"
    },
    {
        name: "Esfera",
        formulas: "A = 4\\pi r^2 \\quad V = \\frac{4\\pi r^3}{3}",
        svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="#00bcd4" stroke="#006064" stroke-width="2"/><ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="#80deea" stroke-width="1.5"/><ellipse cx="50" cy="50" rx="10" ry="30" fill="none" stroke="#80deea" stroke-width="1.5"/></svg>`,
        figure3D: "esfera"
    },
    {
        name: "Pirámide Recta",
        formulas: "A_L = \\frac{P_b \\cdot ap}{2} \\quad A_T = A_L + A_b \\quad V = \\frac{A_b \\cdot h}{3}",
        svg: `<svg viewBox="0 0 100 100"><polygon points="50,20 25,75 75,75" fill="#e91e63" stroke="#880e4f" stroke-width="2"/><polygon points="25,75 50,65 75,75" fill="#c2185b" stroke="#880e4f" stroke-width="2"/><line x1="50" y1="20" x2="50" y2="65" stroke="#880e4f" stroke-width="1.5" stroke-dasharray="3,3"/></svg>`,
        figure3D: "piramide"
    },
    {
        name: "Huso Esférico",
        formulas: "A = \\frac{4\\pi r^2 \\alpha}{360} \\quad V = \\frac{4\\pi r^3 \\alpha}{1080}",
        svg: `<svg viewBox="0 0 100 100"><path d="M 30 50 Q 50 20, 70 50 Q 50 80, 30 50" fill="#ff9800" stroke="#e65100" stroke-width="2"/><ellipse cx="50" cy="50" rx="20" ry="30" fill="none" stroke="#fb8c00" stroke-width="1.5"/></svg>`,
        figure3D: "huso"
    },
    {
        name: "Cuña Esférica",
        formulas: "A = \\frac{2\\pi r^2 \\alpha}{360} \\quad V = \\frac{2\\pi r^3 \\alpha}{1080}",
        svg: `<svg viewBox="0 0 100 100"><path d="M 50 50 L 30 50 Q 50 20, 70 50 Z" fill="#795548" stroke="#3e2723" stroke-width="2"/><path d="M 50 50 Q 50 30, 70 50" fill="#6d4c41" stroke="#3e2723" stroke-width="2"/></svg>`,
        figure3D: "cuna"
    }
];

// ══════════════════════════════════════════════════════════════
// TIPS POR FIGURA (2-4 pistas por cada una)
// ══════════════════════════════════════════════════════════════

const figureTips = {
    "Cuadrado": [
        "Todos sus lados son iguales; el área es simplemente lado × lado.",
        "El perímetro es 4 veces un solo lado porque tiene 4 lados iguales.",
        "Piensá en un cuadrado como un rectángulo especial donde base = altura = l."
    ],
    "Triángulo": [
        "La altura es la línea perpendicular desde la base hasta el vértice opuesto.",
        "El área siempre se divide entre 2 porque un triángulo es \"la mitad\" de un rectángulo.",
        "El perímetro es la suma de los tres lados: a + b + c.",
        "Si es equilátero, los tres lados son iguales y el perímetro es 3l."
    ],
    "Rectángulo": [
        "Base y altura pueden ser diferentes, a diferencia del cuadrado.",
        "El perímetro cuenta cada par de lados dos veces: 2(b + h).",
        "El área es simplemente base × altura, sin dividir."
    ],
    "Paralelogramo": [
        "La altura es perpendicular a la base, no es el lado oblicuo.",
        "Sus lados opuestos son iguales y paralelos.",
        "El perímetro suma los dos pares de lados: 2(a + b).",
        "Un rectángulo es un paralelogramo con ángulos rectos."
    ],
    "Rombo": [
        "Sus diagonales se cruzan en el centro formando ángulos rectos.",
        "El área usa las diagonales (D y d), no los lados.",
        "Todos sus lados son iguales, así que el perímetro es 4l.",
        "Pensá en el área como dos triángulos unidos por una diagonal."
    ],
    "Trapecio": [
        "Solo tiene un par de lados paralelos: la base mayor y la menor.",
        "El área promedia las dos bases y la multiplica por la altura.",
        "La altura es la distancia perpendicular entre las dos bases.",
        "Si los lados laterales son iguales, es un trapecio isósceles."
    ],
    "Polígono Regular": [
        "La apotema es la distancia del centro al punto medio de un lado.",
        "El perímetro es fácil: cantidad de lados × longitud de cada lado.",
        "El área siempre usa perímetro × apotema dividido entre 2.",
        "Un hexágono regular tiene 6 lados y 6 ángulos iguales."
    ],
    "Círculo": [
        "El radio es la distancia desde el centro hasta cualquier punto del borde.",
        "La circunferencia (perímetro) siempre es 2πr.",
        "El área crecece al cuadrado del radio: duplicar r → ×4 el área.",
        "π ≈ 3.1416 es la relación entre circunferencia y diámetro."
    ],
    "Corona Circular": [
        "Es la zona entre dos círculos concéntricos (mismo centro).",
        "El área es la diferencia entre el círculo grande y el pequeño.",
        "R es el radio exterior (mayor) y r el interior (menor).",
        "Si r = 0, la corona se convierte en un círculo completo."
    ],
    "Sector Circular": [
        "Es una \"pizza\" de círculo: un fragmento definido por un ángulo central.",
        "El área es proporcional al ángulo: más ángulo → más área.",
        "Si el ángulo es 360°, el sector es un círculo completo.",
        "La longitud del arco también depende del ángulo y el radio."
    ],
    "Cubo": [
        "Tiene 6 caras cuadradas iguales, por eso el área total es 6a².",
        "El volumen es arista × arista × arista = a³.",
        "Todas sus aristas tienen la misma longitud.",
        "Es un caso especial del ortoedro donde a = b = c."
    ],
    "Cilindro": [
        "El área lateral es como \"desenrollar\" el tubo en un rectángulo.",
        "El volumen es el área de la base circular multiplicada por la altura.",
        "Las dos bases son círculos iguales.",
        "El perímetro de la base es 2πr, que define el ancho al desenrollar."
    ],
    "Ortoedro": [
        "Es un \"caja\" con tres dimensiones que pueden ser diferentes.",
        "El volumen es largo × ancho × alto: a·b·c.",
        "Tiene 3 pares de caras rectangulares iguales.",
        "Un cubo es un ortoedro especial donde a = b = c."
    ],
    "Cono": [
        "La generatriz es la línea desde el borde de la base hasta el vértice.",
        "Su volumen es un tercio del de un cilindro con misma base y altura.",
        "El área lateral se \"desenrolla\" en un sector circular.",
        "La relación g² = r² + h² (teorema de Pitágoras) conecta generatriz, radio y altura."
    ],
    "Prisma Recto": [
        "La base puede ser cualquier polígono (triángulo, cuadrado, hexágono…).",
        "El volumen siempre es área de la base × altura.",
        "El área lateral es perímetro de la base × altura.",
        "Un cubo es un caso especial de prisma con base cuadrada."
    ],
    "Esfera": [
        "Es la única figura 3D donde todos los puntos de la superficie están a la misma distancia del centro.",
        "El área es 4πr² y el volumen es (4/3)πr³.",
        "Si duplicás el radio, el área se multiplica por 4 y el volumen por 8.",
        "No tiene aristas ni ángulos, solo una superficie curva continua."
    ],
    "Pirámide Recta": [
        "Su volumen es un tercio del de un prisma con la misma base y altura.",
        "La apotema de la pirámide es la altura de una cara lateral.",
        "El área lateral se calcula con perímetro de la base × apotema / 2.",
        "La base puede ser cualquier polígono regular."
    ],
    "Huso Esférico": [
        "Es como una naranja dividida en gajos; cada gajo es un huso.",
        "Su área y volumen son proporcionales al ángulo diedro α.",
        "Si α = 360°, el huso es una esfera completa.",
        "El ángulo diedro es el ángulo entre los dos semicírculos que lo forman."
    ],
    "Cuña Esférica": [
        "Es la zona 3D correspondiente a un huso esférico.",
        "Su volumen depende del radio y del ángulo diedro α.",
        "Si α = 360°, la cuña es una esfera entera.",
        "Imaginá cortar una esfera con dos planos que pasan por el mismo diámetro."
    ]
};

// ══════════════════════════════════════════════════════════════
// DATOS COMPLETOS DE FÓRMULAS CON EXPLICACIONES Y EJERCICIOS
// ══════════════════════════════════════════════════════════════

export const logaritmosFormulasData = [
    {
        name: "Cuadrado",
        formulas: ["A = l^2", "P = 4l"],
        explanation: "El área se calcula elevando el lado al cuadrado. El perímetro es la suma de los cuatro lados iguales.",
        variables: [
            "A: Área del cuadrado",
            "P: Perímetro del cuadrado",
            "l: Longitud del lado"
        ],
        example: {
            problem: "Calcular el área y perímetro de un cuadrado con lado de 5 cm.",
            steps: [
                "Datos: l = 5 cm",
                "Área: A = l² = 5² = 25 cm²",
                "Perímetro: P = 4l = 4(5) = 20 cm",
                "Respuesta: Área = 25 cm², Perímetro = 20 cm"
            ]
        }
    },
    {
        name: "Triángulo",
        formulas: ["A = \\frac{b \\cdot h}{2}", "P = a + b + c"],
        explanation: "El área es el producto de la base por la altura dividido entre 2. El perímetro es la suma de los tres lados.",
        variables: [
            "A: Área del triángulo",
            "P: Perímetro del triángulo",
            "b: Base del triángulo",
            "h: Altura del triángulo",
            "a, b, c: Lados del triángulo"
        ],
        example: {
            problem: "Calcular el área de un triángulo con base 8 cm y altura 6 cm.",
            steps: [
                "Datos: b = 8 cm, h = 6 cm",
                "Fórmula: A = (b × h) / 2",
                "A = (8 × 6) / 2 = 48 / 2 = 24 cm²",
                "Respuesta: Área = 24 cm²"
            ]
        }
    },
    {
        name: "Rectángulo",
        formulas: ["A = b \\cdot h", "P = 2(b + h)"],
        explanation: "El área es el producto de la base por la altura. El perímetro es el doble de la suma de base y altura.",
        variables: [
            "A: Área del rectángulo",
            "P: Perímetro del rectángulo",
            "b: Base del rectángulo",
            "h: Altura del rectángulo"
        ],
        example: {
            problem: "Calcular el área y perímetro de un rectángulo de 7 cm de base y 4 cm de altura.",
            steps: [
                "Datos: b = 7 cm, h = 4 cm",
                "Área: A = b × h = 7 × 4 = 28 cm²",
                "Perímetro: P = 2(b + h) = 2(7 + 4) = 2(11) = 22 cm",
                "Respuesta: Área = 28 cm², Perímetro = 22 cm"
            ]
        }
    },
    {
        name: "Paralelogramo",
        formulas: ["A = b \\cdot h", "P = 2(a + b)"],
        explanation: "El área es el producto de la base por la altura perpendicular. El perímetro es el doble de la suma de los lados consecutivos.",
        variables: [
            "A: Área del paralelogramo",
            "P: Perímetro del paralelogramo",
            "b: Base del paralelogramo",
            "h: Altura perpendicular a la base",
            "a: Lado oblicuo"
        ],
        example: {
            problem: "Calcular el área de un paralelogramo con base 10 cm y altura 6 cm.",
            steps: [
                "Datos: b = 10 cm, h = 6 cm",
                "Fórmula: A = b × h",
                "A = 10 × 6 = 60 cm²",
                "Respuesta: Área = 60 cm²"
            ]
        }
    },
    {
        name: "Rombo",
        formulas: ["A = \\frac{D \\cdot d}{2}", "P = 4l"],
        explanation: "El área es el producto de las diagonales dividido entre 2. El perímetro es cuatro veces el lado.",
        variables: [
            "A: Área del rombo",
            "P: Perímetro del rombo",
            "D: Diagonal mayor",
            "d: Diagonal menor",
            "l: Longitud del lado"
        ],
        example: {
            problem: "Calcular el área de un rombo con diagonal mayor 12 cm y diagonal menor 8 cm.",
            steps: [
                "Datos: D = 12 cm, d = 8 cm",
                "Fórmula: A = (D × d) / 2",
                "A = (12 × 8) / 2 = 96 / 2 = 48 cm²",
                "Respuesta: Área = 48 cm²"
            ]
        }
    },
    {
        name: "Trapecio",
        formulas: ["A = \\frac{(B + b) \\cdot h}{2}", "P = B + b + l_1 + l_2"],
        explanation: "El área es la suma de las bases multiplicada por la altura y dividida entre 2. El perímetro es la suma de todos los lados.",
        variables: [
            "A: Área del trapecio",
            "P: Perímetro del trapecio",
            "B: Base mayor",
            "b: Base menor",
            "h: Altura",
            "l₁, l₂: Lados laterales"
        ],
        example: {
            problem: "Calcular el área de un trapecio con base mayor 10 cm, base menor 6 cm y altura 5 cm.",
            steps: [
                "Datos: B = 10 cm, b = 6 cm, h = 5 cm",
                "Fórmula: A = [(B + b) × h] / 2",
                "A = [(10 + 6) × 5] / 2 = (16 × 5) / 2 = 80 / 2 = 40 cm²",
                "Respuesta: Área = 40 cm²"
            ]
        }
    },
    {
        name: "Polígono Regular",
        formulas: ["A = \\frac{P \\cdot a}{2}", "P = n \\cdot l"],
        explanation: "El área es el producto del perímetro por la apotema dividido entre 2. El perímetro es el número de lados por la longitud del lado.",
        variables: [
            "A: Área del polígono",
            "P: Perímetro del polígono",
            "a: Apotema (distancia del centro al punto medio de un lado)",
            "n: Número de lados",
            "l: Longitud de cada lado"
        ],
        example: {
            problem: "Calcular el área de un hexágono regular con lado 4 cm y apotema 3.46 cm.",
            steps: [
                "Datos: n = 6, l = 4 cm, a = 3.46 cm",
                "Perímetro: P = n × l = 6 × 4 = 24 cm",
                "Área: A = (P × a) / 2 = (24 × 3.46) / 2 = 83.04 / 2 = 41.52 cm²",
                "Respuesta: Área ≈ 41.52 cm²"
            ]
        }
    },
    {
        name: "Círculo",
        formulas: ["A = \\pi r^2", "P = 2\\pi r"],
        explanation: "El área es pi multiplicado por el radio al cuadrado. El perímetro (circunferencia) es 2 pi por el radio.",
        variables: [
            "A: Área del círculo",
            "P: Perímetro (circunferencia)",
            "r: Radio del círculo",
            "π ≈ 3.1416"
        ],
        example: {
            problem: "Calcular el área y perímetro de un círculo con radio 5 cm.",
            steps: [
                "Datos: r = 5 cm, π ≈ 3.1416",
                "Área: A = π × r² = 3.1416 × 5² = 3.1416 × 25 = 78.54 cm²",
                "Perímetro: P = 2 × π × r = 2 × 3.1416 × 5 = 31.416 cm",
                "Respuesta: Área ≈ 78.54 cm², Perímetro ≈ 31.42 cm"
            ]
        }
    },
    {
        name: "Corona Circular",
        formulas: ["A = \\pi(R^2 - r^2)"],
        explanation: "El área es la diferencia entre el área del círculo mayor y el círculo menor.",
        variables: [
            "A: Área de la corona",
            "R: Radio del círculo mayor",
            "r: Radio del círculo menor",
            "π ≈ 3.1416"
        ],
        example: {
            problem: "Calcular el área de una corona con radio mayor 8 cm y radio menor 5 cm.",
            steps: [
                "Datos: R = 8 cm, r = 5 cm, π ≈ 3.1416",
                "Fórmula: A = π(R² - r²)",
                "A = 3.1416 × (8² - 5²) = 3.1416 × (64 - 25) = 3.1416 × 39",
                "A = 122.52 cm²",
                "Respuesta: Área ≈ 122.52 cm²"
            ]
        }
    },
    {
        name: "Sector Circular",
        formulas: ["A = \\frac{\\pi r^2 \\alpha}{360}", "L = \\frac{2\\pi r \\alpha}{360}"],
        explanation: "El área es proporcional al ángulo central. La longitud del arco también es proporcional al ángulo.",
        variables: [
            "A: Área del sector",
            "L: Longitud del arco",
            "r: Radio",
            "α: Ángulo central en grados",
            "π ≈ 3.1416"
        ],
        example: {
            problem: "Calcular el área de un sector con radio 6 cm y ángulo de 60°.",
            steps: [
                "Datos: r = 6 cm, α = 60°, π ≈ 3.1416",
                "Fórmula: A = (π × r² × α) / 360",
                "A = (3.1416 × 6² × 60) / 360 = (3.1416 × 36 × 60) / 360",
                "A = 6786.336 / 360 = 18.85 cm²",
                "Respuesta: Área ≈ 18.85 cm²"
            ]
        }
    },
    {
        name: "Cubo",
        formulas: ["A_T = 6a^2", "V = a^3"],
        explanation: "El área total es 6 veces el área de una cara. El volumen es el lado elevado al cubo.",
        variables: [
            "Aₜ: Área total del cubo",
            "V: Volumen del cubo",
            "a: Arista (lado) del cubo"
        ],
        example: {
            problem: "Calcular el área total y volumen de un cubo con arista de 4 cm.",
            steps: [
                "Datos: a = 4 cm",
                "Área total: Aₜ = 6a² = 6 × 4² = 6 × 16 = 96 cm²",
                "Volumen: V = a³ = 4³ = 64 cm³",
                "Respuesta: Área total = 96 cm², Volumen = 64 cm³"
            ]
        }
    },
    {
        name: "Cilindro",
        formulas: ["A_L = 2\\pi rh", "A_T = 2\\pi r(r+h)", "V = \\pi r^2 h"],
        explanation: "El área lateral es el perímetro de la base por la altura. El área total incluye las dos bases. El volumen es el área de la base por la altura.",
        variables: [
            "Aₗ: Área lateral",
            "Aₜ: Área total",
            "V: Volumen",
            "r: Radio de la base",
            "h: Altura",
            "π ≈ 3.1416"
        ],
        example: {
            problem: "Calcular el volumen de un cilindro con radio 3 cm y altura 10 cm.",
            steps: [
                "Datos: r = 3 cm, h = 10 cm, π ≈ 3.1416",
                "Fórmula: V = π × r² × h",
                "V = 3.1416 × 3² × 10 = 3.1416 × 9 × 10 = 282.74 cm³",
                "Respuesta: Volumen ≈ 282.74 cm³"
            ]
        }
    },
    {
        name: "Ortoedro",
        formulas: ["A_T = 2(ab + ac + bc)", "V = a \\cdot b \\cdot c"],
        explanation: "El área total es dos veces la suma de las áreas de las tres caras diferentes. El volumen es el producto de las tres dimensiones.",
        variables: [
            "Aₜ: Área total",
            "V: Volumen",
            "a, b, c: Dimensiones (largo, ancho, alto)"
        ],
        example: {
            problem: "Calcular el volumen de un ortoedro de 5 cm × 3 cm × 4 cm.",
            steps: [
                "Datos: a = 5 cm, b = 3 cm, c = 4 cm",
                "Fórmula: V = a × b × c",
                "V = 5 × 3 × 4 = 60 cm³",
                "Respuesta: Volumen = 60 cm³"
            ]
        }
    },
    {
        name: "Cono",
        formulas: ["A_L = \\pi rg", "A_T = \\pi r(r+g)", "V = \\frac{\\pi r^2 h}{3}"],
        explanation: "El área lateral usa la generatriz. El área total incluye la base. El volumen es un tercio del volumen del cilindro equivalente.",
        variables: [
            "Aₗ: Área lateral",
            "Aₜ: Área total",
            "V: Volumen",
            "r: Radio de la base",
            "g: Generatriz (distancia de un punto del borde hasta el vértice)",
            "h: Altura",
            "π ≈ 3.1416"
        ],
        example: {
            problem: "Calcular el volumen de un cono con radio 4 cm y altura 9 cm.",
            steps: [
                "Datos: r = 4 cm, h = 9 cm, π ≈ 3.1416",
                "Fórmula: V = (π × r² × h) / 3",
                "V = (3.1416 × 4² × 9) / 3 = (3.1416 × 16 × 9) / 3",
                "V = 452.39 / 3 = 150.80 cm³",
                "Respuesta: Volumen ≈ 150.80 cm³"
            ]
        }
    },
    {
        name: "Prisma Recto",
        formulas: ["A_L = P_b \\cdot h", "A_T = A_L + 2A_b", "V = A_b \\cdot h"],
        explanation: "El área lateral es el perímetro de la base por la altura. El área total suma las dos bases. El volumen es el área de la base por la altura.",
        variables: [
            "Aₗ: Área lateral",
            "Aₜ: Área total",
            "V: Volumen",
            "Pᵦ: Perímetro de la base",
            "Aᵦ: Área de la base",
            "h: Altura del prisma"
        ],
        example: {
            problem: "Calcular el volumen de un prisma triangular con área de base 20 cm² y altura 12 cm.",
            steps: [
                "Datos: Aᵦ = 20 cm², h = 12 cm",
                "Fórmula: V = Aᵦ × h",
                "V = 20 × 12 = 240 cm³",
                "Respuesta: Volumen = 240 cm³"
            ]
        }
    },
    {
        name: "Esfera",
        formulas: ["A = 4\\pi r^2", "V = \\frac{4\\pi r^3}{3}"],
        explanation: "El área es 4 pi por el radio al cuadrado. El volumen es 4/3 pi por el radio al cubo.",
        variables: [
            "A: Área de la esfera",
            "V: Volumen de la esfera",
            "r: Radio de la esfera",
            "π ≈ 3.1416"
        ],
        example: {
            problem: "Calcular el volumen de una esfera con radio 6 cm.",
            steps: [
                "Datos: r = 6 cm, π ≈ 3.1416",
                "Fórmula: V = (4 × π × r³) / 3",
                "V = (4 × 3.1416 × 6³) / 3 = (4 × 3.1416 × 216) / 3",
                "V = 2712.96 / 3 = 904.32 cm³",
                "Respuesta: Volumen ≈ 904.32 cm³"
            ]
        }
    },
    {
        name: "Pirámide Recta",
        formulas: ["A_L = \\frac{P_b \\cdot ap}{2}", "A_T = A_L + A_b", "V = \\frac{A_b \\cdot h}{3}"],
        explanation: "El área lateral usa la apotema de la pirámide. El área total suma la base. El volumen es un tercio del volumen del prisma equivalente.",
        variables: [
            "Aₗ: Área lateral",
            "Aₜ: Área total",
            "V: Volumen",
            "Pᵦ: Perímetro de la base",
            "Aᵦ: Área de la base",
            "ap: Apotema de la pirámide",
            "h: Altura de la pirámide"
        ],
        example: {
            problem: "Calcular el volumen de una pirámide con área de base 36 cm² y altura 8 cm.",
            steps: [
                "Datos: Aᵦ = 36 cm², h = 8 cm",
                "Fórmula: V = (Aᵦ × h) / 3",
                "V = (36 × 8) / 3 = 288 / 3 = 96 cm³",
                "Respuesta: Volumen = 96 cm³"
            ]
        }
    },
    {
        name: "Huso Esférico",
        formulas: ["A = \\frac{4\\pi r^2 \\alpha}{360}", "V = \\frac{4\\pi r^3 \\alpha}{1080}"],
        explanation: "El área y volumen del huso son proporcionales al ángulo diedro.",
        variables: [
            "A: Área del huso",
            "V: Volumen del huso",
            "r: Radio de la esfera",
            "α: Ángulo diedro en grados",
            "π ≈ 3.1416"
        ],
        example: {
            problem: "Calcular el área de un huso esférico con radio 5 cm y ángulo de 90°.",
            steps: [
                "Datos: r = 5 cm, α = 90°, π ≈ 3.1416",
                "Fórmula: A = (4 × π × r² × α) / 360",
                "A = (4 × 3.1416 × 5² × 90) / 360 = (4 × 3.1416 × 25 × 90) / 360",
                "A = 28274.4 / 360 = 78.54 cm²",
                "Respuesta: Área ≈ 78.54 cm²"
            ]
        }
    },
    {
        name: "Cuña Esférica",
        formulas: ["V = \\frac{2\\pi r^3 \\alpha}{1080}"],
        explanation: "El volumen de la cuña esférica es proporcional al ángulo diedro.",
        variables: [
            "V: Volumen de la cuña",
            "r: Radio de la esfera",
            "α: Ángulo diedro en grados",
            "π ≈ 3.1416"
        ],
        example: {
            problem: "Calcular el volumen de una cuña esférica con radio 6 cm y ángulo de 60°.",
            steps: [
                "Datos: r = 6 cm, α = 60°, π ≈ 3.1416",
                "Fórmula: V = (2 × π × r³ × α) / 1080",
                "V = (2 × 3.1416 × 6³ × 60) / 1080 = (2 × 3.1416 × 216 × 60) / 1080",
                "V = 81430.27 / 1080 = 75.40 cm³",
                "Respuesta: Volumen ≈ 75.40 cm³"
            ]
        }
    }
];
