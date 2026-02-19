// ══════════════════════════════════════════════════════════════
// FIGURAS GEOMÉTRICAS 3D - SVG ESTÁTICO
// ══════════════════════════════════════════════════════════════
// Este archivo SOLO devuelve SVGs estáticos para visualización.
// ✔ Sin DOM manipulation
// ✔ Sin estado
// ✔ Sin animaciones
// ✔ Renderizado único al crear las tarjetas
// ══════════════════════════════════════════════════════════════

/**
 * Obtiene el SVG estático de una figura geométrica 3D
 * @param {string} type - Tipo de figura (cubo, cilindro, ortoedro, etc.)
 * @returns {string} SVG como string
 */
function getGeometryFigure(type) {
    const figures = {
        // CUBO - Vista isométrica con tres caras visibles
        cubo: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Cara superior -->
                <polygon points="60,50 120,30 180,50 120,70" 
                         fill="#ffd54f" stroke="#f57f17" stroke-width="2.5"/>
                <!-- Cara izquierda -->
                <polygon points="60,50 60,110 120,130 120,70" 
                         fill="#ffb300" stroke="#f57f17" stroke-width="2.5"/>
                <!-- Cara derecha -->
                <polygon points="120,70 120,130 180,110 180,50" 
                         fill="#ff8f00" stroke="#f57f17" stroke-width="2.5"/>
                <!-- Líneas de profundidad -->
                <line x1="120" y1="30" x2="120" y2="70" 
                      stroke="#f57f17" stroke-width="1.5" opacity="0.5"/>
            </svg>
        `,

        // CILINDRO - Con bases elípticas y cara lateral
        cilindro: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Base superior -->
                <ellipse cx="100" cy="50" rx="50" ry="15" 
                         fill="#64b5f6" stroke="#1976d2" stroke-width="2.5"/>
                <!-- Cara lateral -->
                <rect x="50" y="50" width="100" height="100" 
                      fill="#42a5f5" stroke="#1976d2" stroke-width="2.5"/>
                <!-- Base inferior -->
                <ellipse cx="100" cy="150" rx="50" ry="15" 
                         fill="#1e88e5" stroke="#1976d2" stroke-width="2.5"/>
                <!-- Líneas de guía -->
                <line x1="50" y1="50" x2="50" y2="150" 
                      stroke="#1976d2" stroke-width="2.5"/>
                <line x1="150" y1="50" x2="150" y2="150" 
                      stroke="#1976d2" stroke-width="2.5"/>
            </svg>
        `,

        // ORTOEDRO (paralelepípedo) - Vista isométrica
        ortoedro: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Cara superior -->
                <polygon points="50,60 130,40 190,65 110,85" 
                         fill="#81c784" stroke="#2e7d32" stroke-width="2.5"/>
                <!-- Cara izquierda -->
                <polygon points="50,60 50,130 110,155 110,85" 
                         fill="#66bb6a" stroke="#2e7d32" stroke-width="2.5"/>
                <!-- Cara derecha -->
                <polygon points="110,85 110,155 190,130 190,65" 
                         fill="#4caf50" stroke="#2e7d32" stroke-width="2.5"/>
                <!-- Aristas ocultas (punteadas) -->
                <line x1="130" y1="40" x2="130" y2="110" 
                      stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
            </svg>
        `,

        // CONO - Vista lateral con base elíptica
        cono: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Cara lateral (triángulo) -->
                <polygon points="100,40 40,150 160,150" 
                         fill="#ff7043" stroke="#d84315" stroke-width="2.5"/>
                <!-- Base (elipse) -->
                <ellipse cx="100" cy="150" rx="60" ry="18" 
                         fill="#ff5722" stroke="#d84315" stroke-width="2.5"/>
                <!-- Línea de altura (punteada) -->
                <line x1="100" y1="40" x2="100" y2="150" 
                      stroke="#d84315" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.7"/>
                <!-- Punto del vértice -->
                <circle cx="100" cy="40" r="3" 
                        fill="#d84315"/>
            </svg>
        `,

        // PRISMA RECTO - Base hexagonal
        prisma: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Base superior (hexágono) -->
                <polygon points="100,35 135,50 135,80 100,95 65,80 65,50" 
                         fill="#ba68c8" stroke="#6a1b9a" stroke-width="2.5"/>
                <!-- Caras laterales visibles -->
                <polygon points="100,35 100,125 65,140 65,50" 
                         fill="#ab47bc" stroke="#6a1b9a" stroke-width="2.5"/>
                <polygon points="65,140 65,50 65,80 65,140" 
                         fill="#9c27b0" stroke="#6a1b9a" stroke-width="2.5"/>
                <polygon points="100,125 135,140 135,80 135,50 100,35" 
                         fill="#8e24aa" stroke="#6a1b9a" stroke-width="2.5"/>
                <!-- Base inferior -->
                <polygon points="100,125 135,140 135,170 100,155 65,170 65,140" 
                         fill="#7b1fa2" stroke="#6a1b9a" stroke-width="2.5"/>
            </svg>
        `,

        // ESFERA - Con líneas de latitud y longitud
        esfera: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Esfera principal -->
                <circle cx="100" cy="100" r="65" 
                        fill="#26c6da" stroke="#00838f" stroke-width="2.5"/>
                <!-- Líneas de latitud -->
                <ellipse cx="100" cy="100" rx="65" ry="20" 
                         fill="none" stroke="#00acc1" stroke-width="1.5" opacity="0.6"/>
                <ellipse cx="100" cy="100" rx="65" ry="40" 
                         fill="none" stroke="#00acc1" stroke-width="1.5" opacity="0.4"/>
                <!-- Líneas de longitud -->
                <ellipse cx="100" cy="100" rx="20" ry="65" 
                         fill="none" stroke="#00acc1" stroke-width="1.5" opacity="0.6"/>
                <ellipse cx="100" cy="100" rx="40" ry="65" 
                         fill="none" stroke="#00acc1" stroke-width="1.5" opacity="0.4"/>
                <!-- Círculo central -->
                <circle cx="100" cy="100" r="65" 
                        fill="none" stroke="#00838f" stroke-width="2.5"/>
            </svg>
        `,

        // PIRÁMIDE RECTA - Base cuadrada
        piramide: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Cara frontal -->
                <polygon points="100,40 40,160 100,140" 
                         fill="#ec407a" stroke="#ad1457" stroke-width="2.5"/>
                <!-- Cara derecha -->
                <polygon points="100,40 100,140 160,160" 
                         fill="#e91e63" stroke="#ad1457" stroke-width="2.5"/>
                <!-- Base (visible parcialmente) -->
                <polygon points="40,160 100,140 160,160 100,180" 
                         fill="#c2185b" stroke="#ad1457" stroke-width="2.5"/>
                <!-- Línea de altura -->
                <line x1="100" y1="40" x2="100" y2="140" 
                      stroke="#ad1457" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.7"/>
                <!-- Vértice superior -->
                <circle cx="100" cy="40" r="3" 
                        fill="#ad1457"/>
            </svg>
        `,

        // HUSO ESFÉRICO - Segmento de esfera entre dos semicírculos
        huso: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Esfera base -->
                <circle cx="100" cy="100" r="60" 
                        fill="#ffb74d" stroke="#e65100" stroke-width="2"/>
                <!-- Semicírculo izquierdo -->
                <path d="M 70 100 Q 100 50, 130 100 Q 100 150, 70 100" 
                      fill="none" stroke="#ff9800" stroke-width="2.5"/>
                <!-- Semicírculo derecho -->
                <path d="M 70 100 Q 100 50, 130 100" 
                      fill="none" stroke="#f57c00" stroke-width="2.5"/>
                <!-- Línea meridiana -->
                <ellipse cx="100" cy="100" rx="30" ry="60" 
                         fill="none" stroke="#ff9800" stroke-width="2" opacity="0.6"/>
            </svg>
        `,

        // CUÑA ESFÉRICA - Segmento de esfera
        cuna: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Base esférica -->
                <circle cx="100" cy="100" r="60" 
                        fill="#a1887f" stroke="#4e342e" stroke-width="2"/>
                <!-- Segmento de cuña -->
                <path d="M 100 100 L 60 100 Q 100 50, 140 100 Z" 
                      fill="#8d6e63" stroke="#3e2723" stroke-width="2.5"/>
                <!-- Arco superior -->
                <path d="M 100 100 Q 100 60, 140 100" 
                      fill="#795548" stroke="#3e2723" stroke-width="2"/>
                <!-- Línea radial -->
                <line x1="100" y1="100" x2="60" y2="100" 
                      stroke="#3e2723" stroke-width="2"/>
                <line x1="100" y1="100" x2="140" y2="100" 
                      stroke="#3e2723" stroke-width="2"/>
            </svg>
        `
    };

    return figures[type] || '';
}
