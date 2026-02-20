// ══════════════════════════════════════════════════════════════
// MEMORIZA FÓRMULAS MATEMÁTICAS - PUNTO DE ENTRADA PRINCIPAL
// Versión 4.0 - Arquitectura Modular ES6
// ══════════════════════════════════════════════════════════════

import { initAudio } from './core/audio.js';
import { initializeRouter } from './core/router.js';
import { newGame } from './core/game.js';

// ══════════════════════════════════════════════════════════════
// INICIALIZACIÓN PRINCIPAL
// ══════════════════════════════════════════════════════════════

async function initializeApp() {
    try {
        console.log('🚀 Iniciando aplicación...');
        
        // Inicializar audio
        initAudio();
        console.log('🔊 Audio inicializado');
        
        // Inicializar sistema de navegación
        initializeRouter();
        console.log('🧭 Router inicializado');
        
        // Esperar un momento para que todo se cargue
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Forzar carga del tema por defecto
        const { getThemeConfig } = await import('./core/themes.js');
        const { mutations } = await import('./core/state.js');
        const themeConfig = getThemeConfig('geometry');
        mutations.setDataSource(themeConfig.data);
        console.log('🎯 Tema geometry forzado:', themeConfig.data?.length);
        
        // Iniciar juego en modo classic por defecto
        newGame();
        console.log('🎮 Juego iniciado');
        
        console.log('✅ Fórmula Fácil - Aplicación inicializada correctamente');
    } catch (error) {
        console.error('❌ Error al inicializar la aplicación:', error);
    }
}

// ══════════════════════════════════════════════════════════════
// INICIO DE LA APLICACIÓN
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    
    const selector1 = document.getElementById('themeSelector1');
    const selector2 = document.getElementById('themeSelector2');

    document.querySelectorAll('.parcial-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const parcial = btn.dataset.parcial;

            // Actualizar botones activos
            document.querySelectorAll('.parcial-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Obtener estado actual de forma síncrona
            const { gameState } = await import('./core/state.js');
            const currentTheme = gameState.currentTheme;
            const currentMode = gameState.currentMode;
            
            const temasParcial1 = ['geometry', 'functions', 'inequalities', 'absolute-value', 'intervals'];
            const temasParcial2 = ['logaritmos', 'trigonometria', 'vectores', 'homograficas', 'inyectivas'];
            
            console.log('🔄 Cambiando a Parcial', parcial);
            console.log('📋 Tema actual:', currentTheme);
            console.log('📋 Modo actual:', currentMode);

            if (parcial === '1') {
                selector1.style.display = '';
                selector2.style.display = 'none';
                
                // Siempre ir a Geometría cuando volvemos al Parcial 1
                console.log('🔄 Volviendo al Parcial 1 - Forzando Geometría');
                // Quitar active de todos los botones de tema
                document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                const geometryBtn = document.getElementById('geometryBtn');
                if (geometryBtn) geometryBtn.classList.add('active');
                // Usar onThemeChange para cargar todo correctamente
                const { onThemeChange } = await import('./core/router.js');
                onThemeChange('geometry');
            } else {
                selector1.style.display = 'none';
                selector2.style.display = '';
                
                if (temasParcial1.includes(currentTheme)) {
                    // Mapear el tema del Parcial 1 al Parcial 2
                    console.log('🔄 Mapeando tema del Parcial 1 al Parcial 2');
                    const mapeoTema = {
                        'geometry': 'trigonometria',
                        'functions': 'logaritmos',
                        'inequalities': 'vectores',
                        'absolute-value': 'homograficas',
                        'intervals': 'inyectivas'
                    };
                    const temaMapeado = mapeoTema[currentTheme] || 'logaritmos';
                    console.log('🎯 Tema mapeado:', temaMapeado);
                    // Quitar active de todos los botones de tema
                    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                    const themeBtn = document.querySelector(`[data-theme="${temaMapeado}"]`);
                    if (themeBtn) themeBtn.classList.add('active');
                    // Usar onThemeChange para cargar todo correctamente
                    const { onThemeChange } = await import('./core/router.js');
                    onThemeChange(temaMapeado);
                } else if (temasParcial2.includes(currentTheme)) {
                    // Mantener el tema actual (ya está en Parcial 2)
                    console.log('✅ Manteniendo tema actual:', currentTheme);
                    // Quitar active de todos los botones de tema
                    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                    const themeBtn = document.querySelector(`[data-theme="${currentTheme}"]`);
                    if (themeBtn) themeBtn.classList.add('active');
                    // Usar onThemeChange para cargar todo correctamente
                    const { onThemeChange } = await import('./core/router.js');
                    onThemeChange(currentTheme);
                } else {
                    // Ir al primer tema del Parcial 2
                    console.log('🎯 Ir al primer tema del Parcial 2');
                    // Quitar active de todos los botones de tema
                    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                    const firstBtn = selector2.querySelector('.theme-btn');
                    if (firstBtn) firstBtn.classList.add('active');
                    // Usar onThemeChange para cargar todo correctamente
                    const { onThemeChange } = await import('./core/router.js');
                    onThemeChange('logaritmos');
                }
            }
        });
    });
});
