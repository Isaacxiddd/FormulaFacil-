// ══════════════════════════════════════════════════════════════
// DATOS DE INTERVALOS Y RECTA REAL - PRIMER PARCIAL
// ══════════════════════════════════════════════════════════════

const intervalsData = [
    // TIPOS DE INTERVALOS
    {
        name: "Intervalo abierto",
        category: "tipos",
        formulas: "(a, b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}",
        icon: "🔷",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="80" y2="50" stroke="#2196f3" stroke-width="2"/><circle cx="20" cy="50" r="2" fill="white" stroke="#2196f3"/><circle cx="80" cy="50" r="2" fill="white" stroke="#2196f3"/><line x1="20" y1="45" x2="80" y2="45" stroke="#2196f3" stroke-width="3"/><text x="15" y="40" font-size="10" fill="#2196f3">a</text><text x="75" y="40" font-size="10" fill="#2196f3">b</text></svg>`
    },
    {
        name: "Intervalo cerrado",
        category: "tipos",
        formulas: "[a, b] = \\{x \\in \\mathbb{R} \\mid a \\leq x \\leq b\\}",
        icon: "🔶",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="80" y2="50" stroke="#4caf50" stroke-width="2"/><circle cx="20" cy="50" r="3" fill="#4caf50"/><circle cx="80" cy="50" r="3" fill="#4caf50"/><line x1="20" y1="45" x2="80" y2="45" stroke="#4caf50" stroke-width="4"/><text x="15" y="40" font-size="10" fill="#4caf50">a</text><text x="75" y="40" font-size="10" fill="#4caf50">b</text></svg>`
    },
    {
        name: "Intervalo semicerrado izquierdo",
        category: "tipos",
        formulas: "(a, b] = \\{x \\in \\mathbb{R} \\mid a < x \\leq b\\}",
        icon: "🔸",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="80" y2="50" stroke="#ff9800" stroke-width="2"/><circle cx="20" cy="50" r="2" fill="white" stroke="#ff9800"/><circle cx="80" cy="50" r="3" fill="#ff9800"/><line x1="20" y1="45" x2="80" y2="45" stroke="#ff9800" stroke-width="3"/><text x="15" y="40" font-size="10" fill="#ff9800">a</text><text x="75" y="40" font-size="10" fill="#ff9800">b</text></svg>`
    },
    {
        name: "Intervalo semicerrado derecho",
        category: "tipos",
        formulas: "[a, b) = \\{x \\in \\mathbb{R} \\mid a \\leq x < b\\}",
        icon: "🔹",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="80" y2="50" stroke="#9c27b0" stroke-width="2"/><circle cx="20" cy="50" r="3" fill="#9c27b0"/><circle cx="80" cy="50" r="2" fill="white" stroke="#9c27b0"/><line x1="20" y1="45" x2="80" y2="45" stroke="#9c27b0" stroke-width="3"/><text x="15" y="40" font-size="10" fill="#9c27b0">a</text><text x="75" y="40" font-size="10" fill="#9c27b0">b</text></svg>`
    },

    // INTERVALOS INFINITOS
    {
        name: "Intervalo infinito positivo",
        category: "infinitos",
        formulas: "(a, \\infty) = \\{x \\in \\mathbb{R} \\mid x > a\\}",
        icon: "➕",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="90" y2="50" stroke="#00bcd4" stroke-width="2"/><circle cx="20" cy="50" r="2" fill="white" stroke="#00bcd4"/><line x1="20" y1="45" x2="85" y2="45" stroke="#00bcd4" stroke-width="3"/><path d="M 85 45 L 90 45 M 87 42 L 90 45 L 87 48" stroke="#00bcd4" stroke-width="2" fill="none"/><text x="15" y="40" font-size="10" fill="#00bcd4">a</text></svg>`
    },
    {
        name: "Intervalo infinito negativo",
        category: "infinitos",
        formulas: "(-\\infty, b) = \\{x \\in \\mathbb{R} \\mid x < b\\}",
        icon: "➖",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="80" y2="50" stroke="#f44336" stroke-width="2"/><circle cx="80" cy="50" r="2" fill="white" stroke="#f44336"/><line x1="15" y1="45" x2="80" y2="45" stroke="#f44336" stroke-width="3"/><path d="M 15 45 L 10 45 M 13 42 L 10 45 L 13 48" stroke="#f44336" stroke-width="2" fill="none"/><text x="75" y="40" font-size="10" fill="#f44336">b</text></svg>`
    },
    {
        name: "Recta real completa",
        category: "infinitos",
        formulas: "(-\\infty, \\infty) = \\mathbb{R}",
        icon: "♾️",
        svg: `<svg viewBox="0 0 100 100"><line x1="5" y1="50" x2="95" y2="50" stroke="#607d8b" stroke-width="3"/><path d="M 5 50 L 0 50 M 2 47 L 0 50 L 2 53" stroke="#607d8b" stroke-width="2" fill="none"/><path d="M 95 50 L 100 50 M 98 47 L 100 50 L 98 53" stroke="#607d8b" stroke-width="2" fill="none"/><text x="45" y="40" font-size="12" fill="#607d8b">ℝ</text></svg>`
    },

    // NOTACIÓN Y REPRESENTACIÓN
    {
        name: "Notación de intervalos",
        category: "notacion",
        formulas: "(a,b) \\; [a,b] \\; (a,b] \\; [a,b)",
        icon: "📝",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="25" font-size="12" fill="#673ab7" text-anchor="middle">(a,b) abierto</text><text x="50" y="45" font-size="12" fill="#673ab7" text-anchor="middle">[a,b] cerrado</text><text x="50" y="65" font-size="12" fill="#673ab7" text-anchor="middle">(a,b] semicerrado</text><text x="50" y="85" font-size="12" fill="#673ab7" text-anchor="middle">[a,b) semicerrado</text></svg>`
    },
    {
        name: "Representación gráfica",
        category: "notacion",
        formulas: "●: punto incluido \\quad ○: punto excluido",
        icon: "🎨",
        svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="30" x2="90" y2="30" stroke="#666" stroke-width="1"/><circle cx="30" cy="30" r="3" fill="#4caf50"/><text x="25" y="20" font-size="10" fill="#4caf50">● incluido</text><line x1="10" y1="60" x2="90" y2="60" stroke="#666" stroke-width="1"/><circle cx="30" cy="60" r="2" fill="white" stroke="#f44336"/><text x="20" y="50" font-size="10" fill="#f44336">○ excluido</text></svg>`
    },

    // DESIGUALDADES A INTERVALOS
    {
        name: "De desigualdad a intervalo",
        category: "conversion",
        formulas: "a < x < b \\Rightarrow (a, b)",
        icon: "🔄",
        svg: `<svg viewBox="0 0 100 100"><text x="20" y="30" font-size="11" fill="#e91e63">a < x < b</text><text x="50" y="40" font-size="14" fill="#e91e63">⇓</text><text x="35" y="60" font-size="11" fill="#e91e63">(a, b)</text><line x1="25" y1="70" x2="65" y2="70" stroke="#e91e63" stroke-width="2"/><circle cx="25" cy="70" r="2" fill="white" stroke="#e91e63"/><circle cx="65" cy="70" r="2" fill="white" stroke="#e91e63"/></svg>`
    },
    {
        name: "De intervalo a desigualdad",
        category: "conversion",
        formulas: "[a, b] \\Rightarrow a \\leq x \\leq b",
        icon: "🔄",
        svg: `<svg viewBox="0 0 100 100"><text x="25" y="30" font-size="11" fill="#3f51b5">[a, b]</text><text x="50" y="40" font-size="14" fill="#3f51b5">⇓</text><text x="15" y="60" font-size="11" fill="#3f51b5">a ≤ x ≤ b</text><line x1="25" y1="70" x2="65" y2="70" stroke="#3f51b5" stroke-width="2"/><circle cx="25" cy="70" r="3" fill="#3f51b5"/><circle cx="65" cy="70" r="3" fill="#3f51b5"/></svg>`
    },

    // OPERACIONES CON INTERVALOS
    {
        name: "Unión de intervalos",
        category: "operaciones",
        formulas: "[a, b] \\cup [c, d] \\quad \\text{si } b < c",
        icon: "∪",
        svg: `<svg viewBox="0 0 100 100"><line x1="15" y1="40" x2="35" y2="40" stroke="#ff9800" stroke-width="3"/><circle cx="15" cy="40" r="2" fill="#ff9800"/><circle cx="35" cy="40" r="2" fill="#ff9800"/><line x1="55" y1="40" x2="75" y2="40" stroke="#ff9800" stroke-width="3"/><circle cx="55" cy="40" r="2" fill="#ff9800"/><circle cx="75" cy="40" r="2" fill="#ff9800"/><text x="45" y="45" font-size="12" fill="#ff9800">∪</text><text x="10" y="30" font-size="8" fill="#ff9800">a</text><text x="30" y="30" font-size="8" fill="#ff9800">b</text><text x="50" y="30" font-size="8" fill="#ff9800">c</text><text x="70" y="30" font-size="8" fill="#ff9800">d</text></svg>`
    },
    {
        name: "Intersección de intervalos",
        category: "operaciones",
        formulas: "[a, b] \\cap [c, d] \\quad \\text{si } a < c < b < d",
        icon: "∩",
        svg: `<svg viewBox="0 0 100 100"><line x1="15" y1="40" x2="55" y2="40" stroke="#9c27b0" stroke-width="2"/><circle cx="15" cy="40" r="2" fill="#9c27b0"/><circle cx="55" cy="40" r="2" fill="#9c27b0"/><line x1="35" y1="40" x2="75" y2="40" stroke="#9c27b0" stroke-width="2"/><circle cx="35" cy="40" r="2" fill="#9c27b0"/><circle cx="75" cy="40" r="2" fill="#9c27b0"/><line x1="35" y1="35" x2="55" y2="35" stroke="#9c27b0" stroke-width="4"/><text x="45" y="30" font-size="10" fill="#9c27b0">∩</text></svg>`
    },

    // CASOS ESPECIALES
    {
        name: "Intervalo unitario",
        category: "especiales",
        formulas: "[0, 1] = \\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 1\\}",
        icon: "🔟",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="80" y2="50" stroke="#795548" stroke-width="3"/><circle cx="20" cy="50" r="3" fill="#795548"/><circle cx="80" cy="50" r="3" fill="#795548"/><text x="15" y="40" font-size="10" fill="#795548">0</text><text x="75" y="40" font-size="10" fill="#795548">1</text><text x="45" y="70" font-size="12" fill="#795548">[0,1]</text></svg>`
    },
    {
        name: "Intervalo vacío",
        category: "especiales",
        formulas: "\\emptyset = \\{\\} \\quad \\text{(no contiene elementos)}",
        icon: "∅",
        svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" stroke="#f44336" stroke-width="2" fill="none"/><line x1="35" y1="35" x2="65" y2="65" stroke="#f44336" stroke-width="3"/><text x="50" y="85" font-size="12" fill="#f44336" text-anchor="middle">∅</text></svg>`
    },
    {
        name: "Intervalo degenerado",
        category: "especiales",
        formulas: "[a, a] = \\{a\\}",
        icon: "📍",
        svg: `<svg viewBox="0 0 100 100"><line x1="20" y1="50" x2="80" y2="50" stroke="#009688" stroke-width="2"/><circle cx="50" cy="50" r="4" fill="#009688"/><text x="45" y="40" font-size="10" fill="#009688">a</text><text x="45" y="70" font-size="12" fill="#009688">[a,a] = {a}</text></svg>`
    }
];

// ══════════════════════════════════════════════════════════════
// DATOS COMPLETOS DE FÓRMULAS DE INTERVALOS CON EXPLICACIONES
// ══════════════════════════════════════════════════════════════

const intervalsFormulasData = [
    // INTERVALO ABIERTO
    {
        name: "Intervalo abierto",
        formulas: ["(a, b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}"],
        explanation: "Un intervalo abierto contiene todos los números reales entre a y b, pero no incluye los extremos a y b.",
        variables: [
            "(a, b): Notación de intervalo abierto",
            "a: Extremo inferior (excluido)",
            "b: Extremo superior (excluido)",
            "x: Cualquier número tal que a < x < b"
        ],
        example: {
            problem: "Representar gráficamente el intervalo (2, 5)",
            steps: [
                "Los extremos son 2 y 5",
                "Ambos están excluidos: ○",
                "Contiene todos los números entre 2 y 5",
                "Gráficamente: ○──────○ con línea en medio"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXINT" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXINT)"/><circle cx="80" cy="100" r="3" fill="white" stroke="#2196f3"/><circle cx="140" cy="100" r="3" fill="white" stroke="#2196f3"/><line x1="80" y1="85" x2="140" y2="85" stroke="#2196f3" stroke-width="3"/><text x="70" y="90" font-size="10" fill="#2196f3">2</text><text x="130" y="90" font-size="10" fill="#2196f3">5</text><text x="105" y="130" font-size="12" fill="#2196f3" text-anchor="middle">(2, 5)</text></svg>`
        }
    },

    // INTERVALO CERRADO
    {
        name: "Intervalo cerrado",
        formulas: ["[a, b] = \\{x \\in \\mathbb{R} \\mid a \\leq x \\leq b\\}"],
        explanation: "Un intervalo cerrado contiene todos los números reales entre a y b, incluyendo los extremos a y b.",
        variables: [
            "[a, b]: Notación de intervalo cerrado",
            "a: Extremo inferior (incluido)",
            "b: Extremo superior (incluido)",
            "x: Cualquier número tal que a ≤ x ≤ b"
        ],
        example: {
            problem: "Representar gráficamente el intervalo [1, 4]",
            steps: [
                "Los extremos son 1 y 4",
                "Ambos están incluidos: ●",
                "Contiene todos los números entre 1 y 4, más los extremos",
                "Gráficamente: ●──────● con línea gruesa"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXINT2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXINT2)"/><circle cx="60" cy="100" r="4" fill="#4caf50"/><circle cx="160" cy="100" r="4" fill="#4caf50"/><line x1="60" y1="85" x2="160" y2="85" stroke="#4caf50" stroke-width="4"/><text x="50" y="90" font-size="10" fill="#4caf50">1</text><text x="150" y="90" font-size="10" fill="#4caf50">4</text><text x="105" y="130" font-size="12" fill="#4caf50" text-anchor="middle">[1, 4]</text></svg>`
        }
    },

    // INTERVALOS SEMICERRADOS
    {
        name: "Intervalo semicerrado izquierdo",
        formulas: ["(a, b] = \\{x \\in \\mathbb{R} \\mid a < x \\leq b\\}"],
        explanation: "Un intervalo semicerrado por la izquierda excluye el extremo inferior pero incluye el extremo superior.",
        variables: [
            "(a, b]: Notación de intervalo semicerrado izquierdo",
            "a: Extremo inferior (excluido)",
            "b: Extremo superior (incluido)"
        ],
        example: {
            problem: "Representar gráficamente el intervalo (0, 3]",
            steps: [
                "Extremos: 0 (excluido) y 3 (incluido)",
                "0: ○ (excluido), 3: ● (incluido)",
                "Gráficamente: ○──────●"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXINT3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXINT3)"/><circle cx="100" cy="100" r="3" fill="white" stroke="#ff9800"/><circle cx="150" cy="100" r="4" fill="#ff9800"/><line x1="100" y1="85" x2="150" y2="85" stroke="#ff9800" stroke-width="3"/><text x="90" y="90" font-size="10" fill="#ff9800">0</text><text x="140" y="90" font-size="10" fill="#ff9800">3</text><text x="120" y="130" font-size="12" fill="#ff9800" text-anchor="middle">(0, 3]</text></svg>`
        }
    },

    {
        name: "Intervalo semicerrado derecho",
        formulas: ["[a, b) = \\{x \\in \\mathbb{R} \\mid a \\leq x < b\\}"],
        explanation: "Un intervalo semicerrado por la derecha incluye el extremo inferior pero excluye el extremo superior.",
        variables: [
            "[a, b): Notación de intervalo semicerrado derecho",
            "a: Extremo inferior (incluido)",
            "b: Extremo superior (excluido)"
        ],
        example: {
            problem: "Representar gráficamente el intervalo [2, 6)",
            steps: [
                "Extremos: 2 (incluido) y 6 (excluido)",
                "2: ● (incluido), 6: ○ (excluido)",
                "Gráficamente: ●──────○"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXINT4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="180" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXINT4)"/><circle cx="80" cy="100" r="4" fill="#9c27b0"/><circle cx="170" cy="100" r="3" fill="white" stroke="#9c27b0"/><line x1="80" y1="85" x2="170" y2="85" stroke="#9c27b0" stroke-width="3"/><text x="70" y="90" font-size="10" fill="#9c27b0">2</text><text x="160" y="90" font-size="10" fill="#9c27b0">6</text><text x="120" y="130" font-size="12" fill="#9c27b0" text-anchor="middle">[2, 6)</text></svg>`
        }
    },

    // INTERVALOS INFINITOS
    {
        name: "Intervalos infinitos",
        formulas: ["(a, \\infty), (-\\infty, b), (-\\infty, \\infty)"],
        explanation: "Los intervalos infinitos no tienen límite en uno o ambos extremos. Se usan para representar desigualdades sin cota superior o inferior.",
        variables: [
            "∞: Símbolo de infinito (siempre con paréntesis)",
            "(a, ∞): Todos los números mayores que a",
            "(-∞, b): Todos los números menores que b",
            "(-∞, ∞): Todos los números reales"
        ],
        example: {
            problem: "Representar x > 1 como intervalo",
            steps: [
                "La desigualdad x > 1",
                "Se escribe como (1, ∞)",
                "1 está excluido, ∞ siempre está excluido",
                "Contiene todos los números mayores que 1"
            ],
            svg: `<svg viewBox="0 0 200 200"><defs><marker id="arrowXINT5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#666"/></marker></defs><line x1="20" y1="100" x2="190" y2="100" stroke="#666" stroke-width="1" marker-end="url(#arrowXINT5)"/><circle cx="80" cy="100" r="3" fill="white" stroke="#00bcd4"/><line x1="80" y1="85" x2="185" y2="85" stroke="#00bcd4" stroke-width="3"/><path d="M 185 85 L 190 85 M 187 82 L 190 85 L 187 88" stroke="#00bcd4" stroke-width="2" fill="none"/><text x="70" y="90" font-size="10" fill="#00bcd4">1</text><text x="130" y="130" font-size="12" fill="#00bcd4" text-anchor="middle">(1, ∞)</text></svg>`
        }
    },

    // CONVERSIONES
    {
        name: "De desigualdad a intervalo",
        formulas: ["a < x < b \\Rightarrow (a, b)", "a \\leq x \\leq b \\Rightarrow [a, b]"],
        explanation: "Para convertir una desigualdad compuesta a notación de intervalo, se identifica el tipo de desigualdad y se usa la notación correspondiente.",
        variables: [
            "<: paréntesis () (abierto)",
            "≤: corchete [] (cerrado)",
            ">: paréntesis () (abierto)",
            "≥: corchete [] (cerrado)"
        ],
        example: {
            problem: "Convertir -2 ≤ x < 5 a notación de intervalo",
            steps: [
                "-2 ≤ x: el -2 está incluido → [",
                "x < 5: el 5 está excluido → )",
                "Resultado: [-2, 5)"
            ],
            svg: `<svg viewBox="0 0 200 200"><text x="50" y="40" font-size="14" fill="#e91e63">-2 ≤ x < 5</text><text x="100" y="60" font-size="18" fill="#e91e63">⇓</text><text x="80" y="90" font-size="16" fill="#e91e63">[-2, 5)</text><line x1="60" y1="110" x2="140" y2="110" stroke="#e91e63" stroke-width="2"/><circle cx="60" cy="110" r="3" fill="#e91e63"/><circle cx="140" cy="110" r="3" fill="white" stroke="#e91e63"/><text x="50" y="130" font-size="10" fill="#e91e63">-2</text><text x="130" y="130" font-size="10" fill="#e91e63">5</text></svg>`
        }
    },

    // OPERACIONES
    {
        name: "Unión de intervalos",
        formulas: ["[a, b] \\cup [c, d]"],
        explanation: "La unión de intervalos contiene todos los elementos que pertenecen a al menos uno de los intervalos.",
        variables: [
            "∪: Símbolo de unión",
            "Si los intervalos se solapan: se unen en uno solo",
            "Si los intervalos son disjuntos: se mantienen separados"
        ],
        example: {
            problem: "Calcular [1, 3] ∪ [5, 7]",
            steps: [
                "Primer intervalo: [1, 3] (del 1 al 3)",
                "Segundo intervalo: [5, 7] (del 5 al 7)",
                "No se solapan, son disjuntos",
                "Resultado: [1, 3] ∪ [5, 7] (dos intervalos separados)"
            ],
            svg: `<svg viewBox="0 0 200 200"><line x1="40" y1="80" x2="80" y2="80" stroke="#ff9800" stroke-width="3"/><circle cx="40" cy="80" r="3" fill="#ff9800"/><circle cx="80" cy="80" r="3" fill="#ff9800"/><line x1="120" y1="80" x2="160" y2="80" stroke="#ff9800" stroke-width="3"/><circle cx="120" cy="80" r="3" fill="#ff9800"/><circle cx="160" cy="80" r="3" fill="#ff9800"/><text x="90" y="85" font-size="14" fill="#ff9800">∪</text><text x="35" y="70" font-size="8" fill="#ff9800">1</text><text x="75" y="70" font-size="8" fill="#ff9800">3</text><text x="115" y="70" font-size="8" fill="#ff9800">5</text><text x="155" y="70" font-size="8" fill="#ff9800">7</text><text x="100" y="110" font-size="12" fill="#ff9800" text-anchor="middle">[1,3] ∪ [5,7]</text></svg>`
        }
    }
];

// Tips para intervalos (para modo practice futuro)
const intervalsTips = {
    "Intervalo abierto": [
        "Los extremos NO están incluidos",
        "Se usa paréntesis ( ) en la notación",
        "Gráficamente: círculos vacíos ○"
    ],
    "Intervalo cerrado": [
        "Los extremos SÍ están incluidos",
        "Se usa corchetes [ ] en la notación",
        "Gráficamente: círculos llenos ●"
    ],
    "De desigualdad a intervalo": [
        "≤ o ≥ → corchete [ ]",
        "< o > → paréntesis ( )",
        "∞ siempre lleva paréntesis"
    ],
    "Unión de intervalos": [
        "∪ significa 'o'",
        "Se unen si hay solapamiento",
        "Permanecen separados si son disjuntos"
    ]
};
