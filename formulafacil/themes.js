// ══════════════════════════════════════════════════════════════
// CONFIGURACIÓN DE TEMAS
// ══════════════════════════════════════════════════════════════

const THEMES = {
    GEOMETRY: {
        id: 'geometry',
        name: 'Geometría',
        icon: '📐',
        figuresTitle: '📐 Figuras',
        formulasTitle: '📝 Fórmulas',
        instruction: 'Conecta cada fórmula con su figura correspondiente',
        practiceInstruction: 'Resuelve problemas geométricos calculando áreas y perímetros',
        index3DStart: 10
    },
    FUNCTIONS: {
        id: 'functions',
        name: 'Funciones',
        icon: '📊',
        figuresTitle: '📊 Conceptos',
        formulasTitle: '📝 Fórmulas',
        instruction: 'Conecta cada fórmula con su concepto correspondiente',
        practiceInstruction: 'Practica funciones evaluando puntos y aplicando fórmulas',
        index3DStart: Infinity
    },
    INEQUALITIES: {
        id: 'inequalities',
        name: 'Inecuaciones',
        icon: '≠',
        figuresTitle: '≠ Conceptos',
        formulasTitle: '📝 Reglas',
        instruction: 'Conecta cada regla con su concepto correspondiente',
        practiceInstruction: 'Resuelve inecuaciones aplicando las reglas algebraicas',
        index3DStart: Infinity
    },
    ABSOLUTE_VALUE: {
        id: 'absolute-value',
        name: 'Valor Absoluto',
        icon: '📏',
        figuresTitle: '📏 Conceptos',
        formulasTitle: '📝 Fórmulas',
        instruction: 'Conecta cada fórmula con su concepto correspondiente',
        practiceInstruction: 'Practica valor absoluto resolviendo ecuaciones e inecuaciones',
        index3DStart: Infinity
    },
    INTERVALS: {
        id: 'intervals',
        name: 'Intervalos',
        icon: '🔷',
        figuresTitle: '🔷 Tipos',
        formulasTitle: '📝 Notación',
        instruction: 'Conecta cada notación con su tipo de intervalo',
        practiceInstruction: 'Practica intervalos convirtiendo desigualdades y representando gráficamente',
        index3DStart: Infinity
    }
};

// ══════════════════════════════════════════════════════════════
// SISTEMA DE CAMBIO DE TEMA
// ══════════════════════════════════════════════════════════════

function setTheme(themeId) {
    console.log('🔄 Tema cambiado a', themeId);
    
    currentTheme = themeId;
    
    // Actualizar data source según el tema
    switch (currentTheme) {
        case 'geometry':
            currentDataSource = geometryData;
            break;
        case 'functions':
            currentDataSource = functionsData;
            break;
        case 'inequalities':
            currentDataSource = inequalitiesData;
            break;
        case 'absolute-value':
            currentDataSource = absoluteValueData;
            break;
        case 'intervals':
            currentDataSource = intervalsData;
            break;
    }
    
    updateThemeUI(currentTheme);
    
    // Actualizar instrucción según el modo actual
    const themeConfig = getThemeConfig(currentTheme);
    const instruction = document.getElementById('instructionText');
    instruction.textContent =
        currentMode === 'practice'
            ? themeConfig.practiceInstruction
            : themeConfig.instruction;
    
    // Reiniciar según el modo actual
    if (currentMode === 'practice') {
        startPractice();
    } else {
        newGame();
    }
}

function toggleTheme() {
    const themes = [
        THEMES.FUNCTIONS.id,
        THEMES.INEQUALITIES.id,
        THEMES.GEOMETRY.id,
        THEMES.ABSOLUTE_VALUE.id,
        THEMES.INTERVALS.id
    ];
    
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    setTheme(nextTheme);
}

function updateThemeUI(themeId) {
    const themeConfig = getThemeConfig(themeId);
    
    // Actualizar estados de los botones
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar el botón correspondiente
    const activeBtn = document.querySelector(`[data-theme="${themeId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    document.getElementById('instructionText').textContent = themeConfig.instruction;
    document.getElementById('figuresTitle').textContent = themeConfig.figuresTitle;
    document.getElementById('formulasTitle').textContent = themeConfig.formulasTitle;
}

function getThemeConfig(themeId) {
    switch (themeId) {
        case 'geometry': return THEMES.GEOMETRY;
        case 'functions': return THEMES.FUNCTIONS;
        case 'inequalities': return THEMES.INEQUALITIES;
        case 'absolute-value': return THEMES.ABSOLUTE_VALUE;
        case 'intervals': return THEMES.INTERVALS;
        default: return THEMES.GEOMETRY;
    }
}
