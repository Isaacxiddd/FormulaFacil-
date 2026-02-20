// ════════════════════════════════════════════════════════════
// MÓDULO DE NAVEGACIÓN Y ROUTING
// ══════════════════════════════════════════════════════════════

import { gameState, mutations } from './state.js';
import { getThemeConfig } from './themes.js';
import { newGame, startPractice } from './game.js';
import { hideTip } from './ui.js';

// ══════════════════════════════════════════════════════════════
// CAMBIO DE MODO
// ══════════════════════════════════════════════════════════════

export function onModeChange() {
    const sel = document.getElementById('modeSelect');
    const newMode = sel.value;
    
    if (newMode === gameState.currentMode) return;
    
    mutations.setMode(newMode);
    
    const instruction = document.getElementById('instructionText');
    const themeConfig = getThemeConfig(gameState.currentTheme);
    
    instruction.textContent = newMode === 'practice'
        ? themeConfig.practiceInstruction
        : themeConfig.instruction;

    const badge = document.getElementById('modeBadge');
    badge.textContent = newMode === 'practice' ? 'Practice' : 'Classic';
    badge.className = 'mode-badge ' + newMode;

    if (newMode === 'practice') {
        switchToPractice();
    } else {
        switchToClassic();
    }
}

function switchToPractice() {
    document.getElementById('classicView').style.display = 'none';
    document.getElementById('practiceView').style.display = 'block';
    startPractice();
}

export function switchToClassic() {
    mutations.setMode('classic');
    document.getElementById('modeSelect').value = 'classic';
    const badge = document.getElementById('modeBadge');
    badge.textContent = 'Classic';
    badge.className = 'mode-badge classic';
    document.getElementById('classicView').style.display = 'block';
    document.getElementById('practiceView').style.display = 'none';
    hideTip();
    newGame();
}

// ══════════════════════════════════════════════════════════════
// CAMBIO DE TEMA
// ══════════════════════════════════════════════════════════════

export function onThemeChange(newTheme = null) {
    // Si no se pasa tema, obtener del select (para compatibilidad)
    if (!newTheme) {
        const sel = document.getElementById('themeSelect');
        newTheme = sel ? sel.value : gameState.currentTheme;
    }
    
    if (newTheme === gameState.currentTheme) return;
    
    mutations.setTheme(newTheme);
    
    // Actualizar botones activos
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === newTheme) {
            btn.classList.add('active');
        }
    });
    
    // Cargar datos del tema
    const themeConfig = getThemeConfig(newTheme);
    mutations.setDataSource(themeConfig.data);
    
    // Actualizar instrucciones
    const instruction = document.getElementById('instructionText');
    instruction.textContent = gameState.currentMode === 'practice'
        ? themeConfig.practiceInstruction
        : themeConfig.instruction;
    
    // Actualizar títulos de secciones
    const figuresTitle = document.getElementById('figuresTitle');
    const formulasTitle = document.getElementById('formulasTitle');
    
    if (figuresTitle) {
        figuresTitle.textContent = themeConfig.name === 'Geometría' ? '📐 Figuras' : '📊 Conceptos';
    }
    if (formulasTitle) {
        formulasTitle.textContent = '📝 Fórmulas';
    }
    
    // Reiniciar el juego con el nuevo tema
    if (gameState.currentMode === 'classic') {
        newGame();
    } else {
        startPractice();
    }
}

// ══════════════════════════════════════════════════════════════
// INICIALIZACIÓN
// ══════════════════════════════════════════════════════════════

export function initializeRouter() {
    console.log('🔄 Inicializando router...');
    
    // Configurar event listeners para modo
    document.getElementById('modeSelect').addEventListener('change', onModeChange);
    
    // Configurar event listeners para botones de tema
    document.getElementById('functionsBtn').addEventListener('click', () => {
        onThemeChange('functions');
    });
    
    document.getElementById('inequalitiesBtn').addEventListener('click', () => {
        onThemeChange('inequalities');
    });
    
    document.getElementById('geometryBtn').addEventListener('click', () => {
        onThemeChange('geometry');
    });
    
    document.getElementById('absoluteValueBtn').addEventListener('click', () => {
        onThemeChange('absolute-value');
    });
    
    document.getElementById('intervalsBtn').addEventListener('click', () => {
        onThemeChange('intervals');
    });
    
    // Event listeners para botones del Parcial 2
    document.getElementById('logaritmosBtn').addEventListener('click', () => {
        onThemeChange('logaritmos');
    });
    
    document.getElementById('trigonometriaBtn').addEventListener('click', () => {
        onThemeChange('trigonometria');
    });
    
    document.getElementById('vectoresBtn').addEventListener('click', () => {
        onThemeChange('vectores');
    });
    
    document.getElementById('homograficasBtn').addEventListener('click', () => {
        onThemeChange('homograficas');
    });
    
    document.getElementById('inyectivasBtn').addEventListener('click', () => {
        onThemeChange('inyectivas');
    });
    
    // Configurar event listeners para modales y botones de tema y modo
    document.getElementById('figuresTitle').addEventListener('click', () => import('./ui.js').then(ui => ui.openFiguresModal()));
    document.getElementById('formulasTitle').addEventListener('click', () => import('./ui.js').then(ui => ui.openFormulasModal()));
    
    // Event listener para cambio de dificultad
    const difficultySelect = document.getElementById('difficultySelect');
    if (difficultySelect) {
        difficultySelect.addEventListener('change', onDifficultyChange);
        // Establecer valor inicial
        difficultySelect.value = gameState.currentDifficulty;
    }
    
    // Configurar botones de cierre de modales
    document.getElementById('closeFiguresModal').addEventListener('click', () => {
        import('./ui.js').then(ui => ui.closeFiguresModal());
    });
    
    document.getElementById('closeFormulasModal').addEventListener('click', () => {
        import('./ui.js').then(ui => ui.closeFormulasModal());
    });
    
    // Cerrar modales al hacer clic fuera
    document.getElementById('figuresModal').addEventListener('click', (e) => {
        if (e.target.id === 'figuresModal') {
            import('./ui.js').then(ui => ui.closeFiguresModal());
        }
    });
    
    document.getElementById('formulasModal').addEventListener('click', (e) => {
        if (e.target.id === 'formulasModal') {
            import('./ui.js').then(ui => ui.closeFormulasModal());
        }
    });
    
    // Botón de nuevo juego
    document.getElementById('newGameBtn').addEventListener('click', () => {
        if (gameState.currentMode === 'classic') {
            newGame();
        } else {
            startPractice();
        }
    });
    
    // Botón volver a classic
    document.getElementById('backClassicBtn').addEventListener('click', () => {
        switchToClassic();
    });
    
    // Inicializar tema por defecto DESPUÉS de configurar todo
    setTimeout(() => {
        const themeConfig = getThemeConfig(gameState.currentTheme);
        mutations.setDataSource(themeConfig.data);
        console.log('🎯 Router inicializado, dataSource cargado:', themeConfig.data.length, 'items');
    }, 100);
}

// ══════════════════════════════════════════════════════════════
// UTILIDADES DE NAVEGACIÓN
// ══════════════════════════════════════════════════════════════

export function onDifficultyChange() {
    const sel = document.getElementById('difficultySelect');
    gameState.currentDifficulty = sel.value;
    
    console.log('🎚️ Dificultad cambiada a:', gameState.currentDifficulty);
    
    // Actualizar badge
    const badge = document.getElementById('diffBadge');
    if (badge) {
        badge.textContent = gameState.currentDifficulty.charAt(0).toUpperCase() + gameState.currentDifficulty.slice(1);
        badge.className = 'diff-badge ' + gameState.currentDifficulty;
    }
    
    // Generar nuevo ejercicio si estamos en modo practice
    if (gameState.currentMode === 'practice') {
        import('./game.js').then(game => game.startPractice());
    }
}

export function navigateToTheme(theme) {
    onThemeChange(theme);
}
