// ══════════════════════════════════════════════════════════════
// ESTADO GLOBAL DE LA APLICACIÓN
// ══════════════════════════════════════════════════════════════

export const gameState = {
    // MODO CLASSIC
    selectedFigure: null,
    selectedFormula: null,
    totalAttempts: 0,
    correctAttempts: 0,
    streak: 0,
    currentFigures: [],
    currentFormulas: [],
    
    // SISTEMA DE MODOS Y TEMAS
    currentMode: 'classic',
    currentTheme: 'geometry',
    currentDataSource: null,
    currentDifficulty: 'medium',
    
    // UI
    tipTimeout: null,
    tipBarInterval: null,
    isProcessingAnswer: false,
    
    // CONSTANTES
    CARDS_PER_SIDE: 5
};

export const mutations = {
    setSelectedFigure(figure) {
        gameState.selectedFigure = figure;
    },
    
    setSelectedFormula(formula) {
        gameState.selectedFormula = formula;
    },
    
    incrementAttempts(correct = false) {
        gameState.totalAttempts++;
        if (correct) {
            gameState.correctAttempts++;
            gameState.streak++;
        } else {
            gameState.streak = 0;
        }
    },
    
    resetGame() {
        gameState.selectedFigure = null;
        gameState.selectedFormula = null;
        gameState.totalAttempts = 0;
        gameState.correctAttempts = 0;
        gameState.streak = 0;
        gameState.currentFigures = [];
        gameState.currentFormulas = [];
    },
    
    setMode(mode) {
        gameState.currentMode = mode;
    },
    
    setTheme(theme) {
        gameState.currentTheme = theme;
    },
    
    setDataSource(source) {
        gameState.currentDataSource = source;
    },
    
    setCurrentFigures(figures) {
        gameState.currentFigures = figures;
    },
    
    setCurrentFormulas(formulas) {
        gameState.currentFormulas = formulas;
    }
};

export const getters = {
    getAccuracy() {
        return gameState.totalAttempts === 0 ? 0 : Math.round((gameState.correctAttempts / gameState.totalAttempts) * 100);
    },
    
    isClassicMode() {
        return gameState.currentMode === 'classic';
    },
    
    isPracticeMode() {
        return gameState.currentMode === 'practice';
    }
};
