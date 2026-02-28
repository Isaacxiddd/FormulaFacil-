// ══════════════════════════════════════════════════════════════
// MODO OSCURO - FUNCIONALIDAD DE CAMBIO DE TEMA
// ══════════════════════════════════════════════════════════════

class DarkModeManager {
    constructor() {
        this.isDarkMode = false;
        this.darkModeBtn = null;
        this.darkModeIcon = null;
        this.init();
    }

    init() {
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupDarkMode());
        } else {
            this.setupDarkMode();
        }
    }

    setupDarkMode() {
        // Obtener elementos del DOM
        this.darkModeBtn = document.getElementById('darkModeBtn');
        this.darkModeIcon = document.querySelector('.dark-mode-icon');

        if (!this.darkModeBtn) {
            console.log('❌ Botón de modo oscuro no encontrado');
            return;
        }

        // Cargar preferencia guardada
        this.loadDarkModePreference();

        // Agregar event listener
        this.darkModeBtn.addEventListener('click', () => this.toggleDarkMode());

        console.log('✅ Modo oscuro inicializado');
        console.log('🌙 Estado actual:', this.isDarkMode ? 'Modo oscuro' : 'Modo claro');
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        this.updateDarkMode();
        this.saveDarkModePreference();

        // Efecto de animación en el botón
        this.animateButton();

        console.log('🌙 Modo cambiado a:', this.isDarkMode ? 'Modo oscuro' : 'Modo claro');
    }

    updateDarkMode() {
        const body = document.body;
        
        console.log('🔄 Actualizando modo oscuro:', this.isDarkMode);
        console.log('🎨 Clases del body antes:', body.className);
        
        // Forzar limpieza de cualquier clase existente
        body.classList.remove('dark-mode');
        
        if (this.isDarkMode) {
            body.classList.add('dark-mode');
            this.darkModeIcon.textContent = '☀️'; // Cambiar a sol
            this.darkModeBtn.title = 'Cambiar a modo claro';
            console.log('✅ Clase dark-mode agregada');
        } else {
            // Asegurarse de que no haya clase dark-mode
            this.darkModeIcon.textContent = '🌙'; // Cambiar a luna
            this.darkModeBtn.title = 'Cambiar a modo oscuro';
            console.log('❌ Modo claro - clase dark-mode removida');
        }
        
        console.log('🎨 Clases del body después:', body.className);

        // Verificar el estilo computado del fondo
        setTimeout(() => {
            const computedStyle = window.getComputedStyle(body);
            console.log('🎨 Fondo actual:', computedStyle.background);
        }, 100);
    }

    animateButton() {
        // Efecto de rotación y escala
        this.darkModeBtn.style.transform = 'scale(0.8) rotate(180deg)';
        
        setTimeout(() => {
            this.darkModeBtn.style.transform = 'scale(1.1) rotate(360deg)';
        }, 150);

        setTimeout(() => {
            this.darkModeBtn.style.transform = 'scale(1)';
        }, 300);

        // Efecto de pulso en el fondo
        this.createPulseEffect();
    }

    createPulseEffect() {
        // Crear un efecto de onda expansiva desde el botón
        const pulse = document.createElement('div');
        pulse.style.cssText = `
            position: fixed;
            top: ${this.darkModeBtn.getBoundingClientRect().top + 22.5}px;
            left: ${this.darkModeBtn.getBoundingClientRect().left + 22.5}px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: ${this.isDarkMode ? 'rgba(142, 36, 170, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
            transform: translate(-50%, -50%) scale(0);
            animation: pulseEffect 1s ease-out;
            pointer-events: none;
            z-index: 9999;
        `;

        // Agregar animación de pulso si no existe
        if (!document.querySelector('#pulseAnimation')) {
            const style = document.createElement('style');
            style.id = 'pulseAnimation';
            style.textContent = `
                @keyframes pulseEffect {
                    0% {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(20);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(pulse);

        // Eliminar el elemento después de la animación
        setTimeout(() => {
            if (pulse.parentNode) {
                pulse.parentNode.removeChild(pulse);
            }
        }, 1000);
    }

    saveDarkModePreference() {
        try {
            localStorage.setItem('darkMode', this.isDarkMode.toString());
            console.log('💾 Preferencia de modo oscuro guardada');
        } catch (error) {
            console.log('⚠️ No se pudo guardar la preferencia de modo oscuro:', error);
        }
    }

    loadDarkModePreference() {
        try {
            // Limpiar cualquier preferencia existente para forzar modo claro
            localStorage.removeItem('darkMode');
            
            // Siempre empezar en modo claro por defecto
            this.isDarkMode = false;
            
            console.log('🌞 Modo claro por defecto (localStorage limpiado)');
            this.updateDarkMode();
            console.log('🎯 Modo inicial:', this.isDarkMode ? 'Modo oscuro' : 'Modo claro');
            
        } catch (error) {
            console.log('⚠️ No se pudo cargar la preferencia de modo oscuro:', error);
            this.isDarkMode = false; // Por defecto modo claro
            this.updateDarkMode();
        }
    }
}

// Inicializar el gestor de modo oscuro
const darkModeManager = new DarkModeManager();

// Exportar para uso global
window.darkModeManager = darkModeManager;
