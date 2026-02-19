// ══════════════════════════════════════════════════════════════
// MEMORIZA FÓRMULAS MATEMÁTICAS - APLICACIÓN PRINCIPAL
// Versión 3.0 - Geometría + Funciones + Inecuaciones
// ══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
// VARIABLES GLOBALES - MODO CLASSIC
// ══════════════════════════════════════════════════════════════

let selectedFigure = null;
let selectedFormula = null;
let totalAttempts = 0;
let correctAttempts = 0;
let streak = 0;
let currentFigures = [];
let currentFormulas = [];
const CARDS_PER_SIDE = 5;

// ══════════════════════════════════════════════════════════════
// VARIABLES GLOBALES - SISTEMA DE MODOS Y TEMAS
// ══════════════════════════════════════════════════════════════

let currentMode = 'classic';
let currentTheme = 'geometry';
let currentDataSource = null;
let tipTimeout = null;
let tipBarInterval = null;
let isProcessingAnswer = false; // Nueva variable para prevenir múltiples clics

// ══════════════════════════════════════════════════════════════
// FUNCIONES UTILITARIAS
// ══════════════════════════════════════════════════════════════

function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// ══════════════════════════════════════════════════════════════
// SISTEMA DE TIPS
// ══════════════════════════════════════════════════════════════

function showTip(figureName) {
    if (currentMode !== 'classic') return;

    const tips = figureTips[figureName];
    if (!tips || tips.length === 0) return;

    const tip = tips[Math.floor(Math.random() * tips.length)];

    hideTip();

    document.getElementById('tipFigureName').textContent = figureName;
    document.getElementById('tipText').textContent = tip;

    const toast = document.getElementById('tipToast');
    toast.classList.add('visible');

    const bar = document.getElementById('tipBar');
    bar.style.width = '100%';
    void bar.offsetWidth;

    const DURATION = 4000;
    const TICK = 50;
    let elapsed = 0;

    tipBarInterval = setInterval(() => {
        elapsed += TICK;
        const pct = Math.max(0, 100 - (elapsed / DURATION) * 100);
        bar.style.width = pct + '%';
        if (pct <= 0) {
            clearInterval(tipBarInterval);
            tipBarInterval = null;
        }
    }, TICK);

    tipTimeout = setTimeout(() => {
        hideTip();
    }, DURATION);
}

function hideTip() {
    if (tipTimeout) { 
        clearTimeout(tipTimeout); 
        tipTimeout = null; 
    }
    if (tipBarInterval) { 
        clearInterval(tipBarInterval); 
        tipBarInterval = null; 
    }
    document.getElementById('tipToast').classList.remove('visible');
}


// ══════════════════════════════════════════════════════════════
// MODO CLASSIC - GESTIÓN DE CARTAS
// ══════════════════════════════════════════════════════════════

function createFigureCard(item, index, position) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    card.dataset.position = position;
    card.dataset.type = 'figure';
    card.id = `figure-${position}`;
    
    const content = document.createElement('div');
    content.className = 'figure-content';
    
    if (currentTheme === 'functions' || currentTheme === 'inequalities') {
        // Para funciones e inecuaciones: mostrar icono + nombre
        content.innerHTML = `
            <div class="function-card-wrapper">
                <div class="function-icon">${item.icon || '📐'}</div>
                <div class="function-name">${item.name}</div>
            </div>
        `;
    } else {
        // Para geometría: mostrar SVG y nombre
        content.innerHTML = `
            <div class="figure-name">${item.name}</div>
            ${item.svg}
        `;
    }
    
    card.appendChild(content);
    card.addEventListener('click', () => handleCardClick(card, 'figure'));
    
    return card;
}

function createFormulaCard(item, index, position) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    card.dataset.position = position;
    card.dataset.type = 'formula';
    card.id = `formula-${position}`;
    
    const content = document.createElement('div');
    content.className = 'formula-content';
    content.innerHTML = `\\[${item.formulas}\\]`;
    
    card.appendChild(content);
    
    card.addEventListener('click', () => handleCardClick(card, 'formula'));
    
    return card;
}

function handleCardClick(card, type) {
    const allCards = document.querySelectorAll('.card');
    
    if (type === 'figure') {
        // Deseleccionar figura anterior
        if (selectedFigure !== null) {
            allCards.forEach(c => {
                if (c.dataset.type === 'figure') c.classList.remove('selected');
            });
        }
        
        selectedFigure = {
            index: parseInt(card.dataset.index),
            position: parseInt(card.dataset.position)
        };
        card.classList.add('selected');
    } else {
        // Deseleccionar fórmula anterior
        if (selectedFormula !== null) {
            allCards.forEach(c => {
                if (c.dataset.type === 'formula') c.classList.remove('selected');
            });
        }
        
        selectedFormula = {
            index: parseInt(card.dataset.index),
            position: parseInt(card.dataset.position)
        };
        card.classList.add('selected');
    }
    
    // Si ambas están seleccionadas, verificar coincidencia
    if (selectedFigure !== null && selectedFormula !== null) {
        checkMatch();
    }
}

async function checkMatch() {
    const figureCard = document.getElementById(`figure-${selectedFigure.position}`);
    const formulaCard = document.getElementById(`formula-${selectedFormula.position}`);
    
    // Lógica normal de match
    let isMatch = selectedFigure.index === selectedFormula.index;
    
    // Lógica especial para rectángulo y paralelogramo (índices 2 y 3 en geometryData)
    if (!isMatch && currentTheme === 'geometry') {
        const figureItem = currentDataSource[selectedFigure.index];
        const formulaItem = currentDataSource[selectedFormula.index];
        
        // Si uno es rectángulo y el otro es paralelogramo (o viceversa), es match
        if ((figureItem.name === "Rectángulo" && formulaItem.name === "Paralelogramo") ||
            (figureItem.name === "Paralelogramo" && formulaItem.name === "Rectángulo")) {
            isMatch = true;
        }
    }
    
    if (isMatch) {
        // CORRECTO
        totalAttempts++;
        correctAttempts++;
        streak++;
        
        playAudioWithPitch(audioCorrecto, streak);
        
        // Animar fuego
        animateFire(streak);
        
        // Marcar cartas
        figureCard.classList.add('matched');
        formulaCard.classList.add('matched');
        
        // Actualizar scoreboard
        updateScoreboard();
        
        // Esperar antes de reemplazar
        await delay(500);
        
        // Verificar si hay más cartas disponibles para reemplazar
        const usedIndices = new Set([...currentFigures, ...currentFormulas]);
        const availableIndices = [];
        
        for (let i = 0; i < currentDataSource.length; i++) {
            if (!usedIndices.has(i)) {
                availableIndices.push(i);
            }
        }
        
        if (availableIndices.length >= 1) {
            // Obtener un nuevo índice aleatorio (el mismo para figura y fórmula)
            const shuffledAvailable = shuffle(availableIndices);
            const newIndex = shuffledAvailable[0];
            
            // Reemplazar las cartas usadas con el mismo índice
            currentFigures[selectedFigure.position] = newIndex;
            currentFormulas[selectedFormula.position] = newIndex;
            
            // Mezclar las fórmulas nuevamente para mantener el desafío
            currentFormulas = shuffle(currentFormulas);
        }
        
        // Resetear selección
        selectedFigure = null;
        selectedFormula = null;
        
        // Actualizar cartas
        updateCards();
    } else {
        // INCORRECTO
        totalAttempts++;
        streak = 0;
        
        playAudio(audioIncorrecto);
        
        // Resetear animación del fuego
        resetFireAnimation();
        
        // Actualizar scoreboard
        updateScoreboard();
        
        // Mostrar tip
        const figureName = currentDataSource[selectedFigure.index].name;
        showTip(figureName);
        
        // Marcar cartas como incorrectas
        figureCard.classList.add('wrong');
        formulaCard.classList.add('wrong');
        
        // Esperar y limpiar
        await delay(500);
        
        figureCard.classList.remove('wrong', 'selected');
        formulaCard.classList.remove('wrong', 'selected');
        
        // Resetear selección
        selectedFigure = null;
        selectedFormula = null;
    }
}

function animateFire(streakLevel) {
    const fireEmoji = document.querySelector('img.fire-emoji');
    if (!fireEmoji) return;
    
    // Cambiar la imagen del fueguito cuando la racha llega a 10
    if (streakLevel >= 10) {
        fireEmoji.src = 'fueguito3.png';
    } else {
        fireEmoji.src = 'fueguito.png';
    }
    
    // Remover animaciones temporales
    fireEmoji.classList.remove('excited', 'jump');
    void fireEmoji.offsetWidth;
    
    // Animación temporal
    if (streakLevel >= 5) {
        fireEmoji.classList.add('excited');
        setTimeout(() => fireEmoji.classList.remove('excited'), 600);
    } else {
        fireEmoji.classList.add('jump');
        setTimeout(() => fireEmoji.classList.remove('jump'), 400);
    }
    
    // Aplicar animación permanente según el nivel de racha
    fireEmoji.classList.remove('streak-low', 'streak-medium', 'streak-high', 'streak-extreme');
    
    if (streakLevel >= 8) {
        fireEmoji.classList.add('streak-extreme');
    } else if (streakLevel >= 5) {
        fireEmoji.classList.add('streak-high');
    } else if (streakLevel >= 3) {
        fireEmoji.classList.add('streak-medium');
    } else if (streakLevel >= 1) {
        fireEmoji.classList.add('streak-low');
    }
}

function resetFireAnimation() {
    const fireEmoji = document.querySelector('img.fire-emoji');
    if (!fireEmoji) return;
    
    fireEmoji.classList.remove(
        'excited', 'jump', 
        'streak-low', 'streak-medium', 'streak-high', 'streak-extreme'
    );
}

function updateScoreboard() {
    const accuracy = totalAttempts === 0 ? 0 : Math.round((correctAttempts / totalAttempts) * 100);
    document.getElementById('accuracy').textContent = accuracy + '%';
    
    const streakElement = document.getElementById('streakCount');
    const currentStreak = parseInt(streakElement.textContent);
    
    if (streak > currentStreak) {
        // Velocidad base que se acelera con la racha
        const baseSpeed = 200; // ms base
        const accelerationFactor = Math.max(0.3, 1 - (streak * 0.05)); // se acelera 5% por cada racha
        const animSpeed = baseSpeed * accelerationFactor;
        
        // Salida rápida hacia arriba
        streakElement.style.transition = `transform ${animSpeed}ms ease-out, opacity ${animSpeed}ms ease-out`;
        streakElement.style.transform = 'translateY(-25px)';
        streakElement.style.opacity = '0';
        
        setTimeout(() => {
            // Entrada rápida desde abajo
            streakElement.textContent = streak;
            streakElement.style.transition = `transform ${animSpeed * 1.2}ms ease-out, opacity ${animSpeed * 1.2}ms ease-out`;
            streakElement.style.transform = 'translateY(25px)';
            streakElement.style.opacity = '0';
            
            setTimeout(() => {
                // Asentamiento ultra rápido
                streakElement.style.transition = `transform ${animSpeed * 0.8}ms ease-out, opacity ${animSpeed * 0.8}ms ease-out`;
                streakElement.style.transform = 'translateY(0)';
                streakElement.style.opacity = '1';
            }, 50); // más rápido entre fases
        }, animSpeed);
    } else {
        // Reinicio - animación normal
        streakElement.textContent = streak;
    }
}

function updateCards() {
    const figuresContainer = document.getElementById('figures');
    const formulasContainer = document.getElementById('formulas');
    
    figuresContainer.innerHTML = '';
    formulasContainer.innerHTML = '';
    
    for (let i = 0; i < CARDS_PER_SIDE; i++) {
        const figureIndex = currentFigures[i];
        const formulaIndex = currentFormulas[i];
        
        figuresContainer.appendChild(createFigureCard(currentDataSource[figureIndex], figureIndex, i));
        formulasContainer.appendChild(createFormulaCard(currentDataSource[formulaIndex], formulaIndex, i));
    }
    
    MathJax.typesetPromise();
}

function newGame() {
    totalAttempts = 0;
    correctAttempts = 0;
    streak = 0;
    selectedFigure = null;
    selectedFormula = null;
    
    document.getElementById('accuracy').textContent = '0%';
    document.getElementById('streakCount').textContent = '0';
    document.getElementById('successMessage').style.display = 'none';

    hideTip();
    resetFireAnimation();
    
    // Crear pares asegurados en lugar de usar availableCards
    currentFigures = [];
    currentFormulas = [];
    
    // Obtener índices disponibles (asegurarnos de que haya suficientes)
    const maxIndex = Math.min(currentDataSource.length, CARDS_PER_SIDE);
    const availableIndices = shuffle([...Array(maxIndex).keys()]);
    
    // Crear pares correspondientes
    for (let i = 0; i < CARDS_PER_SIDE && i < availableIndices.length; i++) {
        const cardIndex = availableIndices[i];
        currentFigures.push(cardIndex);
        currentFormulas.push(cardIndex); // Mismo índice para asegurar correspondencia
    }
    
    // Mezclar solo las fórmulas para que no estén en la misma posición
    currentFormulas = shuffle(currentFormulas);
    
    updateCards();
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// ══════════════════════════════════════════════════════════════
// SISTEMA DE MODALES INTERACTIVOS
// ══════════════════════════════════════════════════════════════

function openFiguresModal(scrollToIndex = null) {
    const modal = document.getElementById('figuresModal');
    modal.classList.add('active');
    renderFiguresGallery(scrollToIndex);
}

function closeFiguresModal() {
    const modal = document.getElementById('figuresModal');
    modal.classList.remove('active');
}

function openFormulasModal(scrollToIndex = null) {
    const modal = document.getElementById('formulasModal');
    modal.classList.add('active');
    renderFormulasList(scrollToIndex);
}

function closeFormulasModal() {
    const modal = document.getElementById('formulasModal');
    modal.classList.remove('active');
}

function renderFiguresGallery(scrollToIndex = null) {
    const gallery = document.getElementById('figuresGallery');
    gallery.innerHTML = '';
    
    const themeConfig = getThemeConfig(currentTheme);
    
    currentDataSource.forEach((item, index) => {
        const figureItem = document.createElement('div');
        figureItem.className = 'figure-item';
        figureItem.dataset.index = index;
        figureItem.id = `figure-gallery-${index}`;
        
        const is3D = index >= themeConfig.index3DStart;
        
        if (is3D) {
            // Para figuras 3D: usar el HTML 3D directamente
            if (item.is3D && item.svg3D) {
                figureItem.innerHTML = `
                    <div class="figure-item-name">${item.name}</div>
                    ${item.svg3D}
                `;
            } else {
                figureItem.innerHTML = `
                    <div class="figure-item-name">${item.name}</div>
                    <div class="figure-3d-container">
                        <div class="figure-3d">
                            ${item.svg}
                        </div>
                    </div>
                `;
            }
        } else if (currentTheme === 'functions' || currentTheme === 'inequalities') {
            figureItem.innerHTML = `
                <div class="figure-item-name">${item.name}</div>
                <div class="function-icon-large">${item.icon || '📐'}</div>
                ${item.svg || ''}
            `;
        } else {
            figureItem.innerHTML = `
                <div class="figure-item-name">${item.name}</div>
                ${item.svg}
            `;
        }
        
        // ✨ FEATURE: Al hacer clic en una figura, abrir modal de fórmulas en esa figura
        figureItem.addEventListener('click', () => {
            closeFiguresModal();
            setTimeout(() => {
                openFormulasModal(index);
            }, 300);
        });
        
        gallery.appendChild(figureItem);
        
        // Inicializar segmentos 3D si es necesario
        if (is3D && item.is3D && item.svg3D) {
            setTimeout(() => {
                if (typeof initializeFigureSegments === 'function') {
                    initializeFigureSegments(figureItem);
                }
            }, 100);
        }
    });
    
    // Hacer scroll si se especificó
    if (scrollToIndex !== null) {
        setTimeout(() => {
            const element = document.getElementById(`figure-gallery-${scrollToIndex}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.classList.add('highlight-flash');
                setTimeout(() => {
                    element.classList.remove('highlight-flash');
                }, 2000);
            }
        }, 100);
    }
}

function renderFormulasList(scrollToIndex = null) {
    const list = document.getElementById('formulasList');
    list.innerHTML = '';
    
    // Determinar qué fuente de fórmulas usar
    const formulasSource = getFormulasSource();
    
    formulasSource.forEach((formula, index) => {
        const formulaDetail = document.createElement('div');
        formulaDetail.className = 'formula-detail';
        formulaDetail.dataset.index = index;
        formulaDetail.id = `formula-detail-${index}`;
        
        // ✨ FEATURE: Agregar la figura/concepto al lado de la fórmula
        const relatedItem = currentDataSource[index];
        let figurePreview = '';
        
        if (currentTheme === 'geometry') {
            // Para geometría: mostrar SVG o figura 3D
            if (relatedItem.is3D && relatedItem.svg3D) {
                figurePreview = `
                    <div class="formula-figure-preview">
                        <div class="formula-figure-preview-title">Figura 3D:</div>
                        <div class="formula-figure-preview-3d">
                            ${relatedItem.svg3D}
                        </div>
                    </div>
                `;
            } else {
                figurePreview = `
                    <div class="formula-figure-preview">
                        <div class="formula-figure-preview-title">Figura:</div>
                        <div class="formula-figure-preview-svg">
                            ${relatedItem.svg}
                        </div>
                    </div>
                `;
            }
        } else if (currentTheme === 'functions' || currentTheme === 'inequalities') {
            // Para funciones e inecuaciones: mostrar icono
            figurePreview = `
                <div class="formula-figure-preview">
                    <div class="formula-figure-preview-icon">${relatedItem.icon || '📐'}</div>
                    <div class="formula-figure-preview-name">${relatedItem.name}</div>
                </div>
            `;
        }
        
        const formulasHTML = formula.formulas.map(f => `\\[${f}\\]`).join('');
        const variablesHTML = formula.variables.map(v => `<li>${v}</li>`).join('');
        const stepsHTML = formula.example.steps.map((step, i) => 
            `<div class="example-step"><strong>Paso ${i + 1}:</strong> ${step}</div>`
        ).join('');
        
        formulaDetail.innerHTML = `
            <div class="formula-detail-header">
                <div class="formula-detail-main">
                    <div class="formula-detail-title">${formula.name}</div>
                    
                    <div class="formula-expression">
                        ${formulasHTML}
                    </div>
                    
                    <div class="formula-explanation">
                        <strong>Explicación:</strong> ${formula.explanation}
                    </div>
                </div>
                
                ${figurePreview}
            </div>
            
            <div class="formula-variables">
                <h4>Variables:</h4>
                <ul>
                    ${variablesHTML}
                </ul>
            </div>
            
            <div class="formula-example">
                <h4>📖 Ejercicio Resuelto</h4>
                <p><strong>Problema:</strong> ${formula.example.problem}</p>
                ${stepsHTML}
            </div>
        `;
        
        list.appendChild(formulaDetail);
        
        // Inicializar segmentos 3D si es necesario
        if (currentTheme === 'geometry' && relatedItem.is3D && relatedItem.svg3D) {
            setTimeout(() => {
                if (typeof initializeFigureSegments === 'function') {
                    initializeFigureSegments(formulaDetail);
                }
            }, 100);
        }
    });
    
    // Renderizar MathJax
    MathJax.typesetPromise();
    
    // Hacer scroll si se especificó
    if (scrollToIndex !== null) {
        setTimeout(() => {
            const element = document.getElementById(`formula-detail-${scrollToIndex}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                element.classList.add('highlight-flash');
                setTimeout(() => {
                    element.classList.remove('highlight-flash');
                }, 2000);
            }
        }, 100);
    }
}

function getFormulasSource() {
    switch (currentTheme) {
        case 'functions':
            return functionsFormulasData;
        case 'inequalities':
            return inequalitiesFormulasData;
        case 'absolute-value':
            return absoluteValueFormulasData;
        case 'intervals':
            return intervalsFormulasData;
        case 'geometry':
        default:
            return formulasData;
    }
}


// ══════════════════════════════════════════════════════════════
// SISTEMA DE CAMBIO DE MODOS
// ══════════════════════════════════════════════════════════════

function onModeChange() {
    const sel = document.getElementById('modeSelect');
    currentMode = sel.value;
    const instruction = document.getElementById('instructionText');
    
    console.log('🔄 onModeChange llamado - Modo:', currentMode, '- Tema actual:', currentTheme);

    const themeConfig = getThemeConfig(currentTheme);
    instruction.textContent =
        currentMode === 'practice'
            ? themeConfig.practiceInstruction
            : themeConfig.instruction;

    const badge = document.getElementById('modeBadge');
    badge.textContent = currentMode === 'practice' ? 'Practice' : 'Classic';
    badge.className = 'mode-badge ' + currentMode;

    if (currentMode === 'practice') {
        console.log('🎯 Cambiando a modo practice - Tema actual:', currentTheme);
        document.getElementById('classicView').style.display  = 'none';
        document.getElementById('practiceView').style.display = 'block';
        startPractice();
    } else {
        console.log('🎮 Cambiando a modo classic - Tema actual:', currentTheme);
        switchToClassic();
    }
}

function switchToClassic() {
    currentMode = 'classic';
    document.getElementById('modeSelect').value = 'classic';
    const badge = document.getElementById('modeBadge');
    badge.textContent = 'Classic';
    badge.className = 'mode-badge classic';
    document.getElementById('classicView').style.display  = 'block';
    document.getElementById('practiceView').style.display = 'none';
    hideTip();
}

// ══════════════════════════════════════════════════════════════
// PRACTICE MODE - FUNCIONES PRINCIPALES
// ══════════════════════════════════════════════════════════════

function generatePracticeExercise(difficulty) {
    console.log('🎯 Generando ejercicio - Tema:', currentTheme, '- Dificultad:', difficulty);
    console.log('📋 Tema actual antes de generar:', currentTheme);
    
    // Usar el generador correcto según el tema
    if (currentTheme === 'functions') {
        console.log('🔍 Detectado tema: functions');
        if (window.generatePracticeExerciseFunctions && typeof window.generatePracticeExerciseFunctions === 'function') {
            console.log('✅ Función generatePracticeExerciseFunctions encontrada');
            return window.generatePracticeExerciseFunctions(difficulty);
        } else {
            console.error('❌ Función generatePracticeExerciseFunctions NO encontrada');
        }
    }
    
    if (currentTheme === 'inequalities') {
        console.log('🔍 Detectado tema: inequalities');
        if (window.generatePracticeExerciseInequalities && typeof window.generatePracticeExerciseInequalities === 'function') {
            console.log('✅ Función generatePracticeExerciseInequalities encontrada');
            return window.generatePracticeExerciseInequalities(difficulty);
        } else {
            console.error('❌ Función generatePracticeExerciseInequalities NO encontrada');
        }
    }
    
    if (currentTheme === 'absolute-value') {
        console.log('🔍 Detectado tema: absolute-value');
        if (window.generatePracticeExerciseAbsoluteValue && typeof window.generatePracticeExerciseAbsoluteValue === 'function') {
            console.log('✅ Función generatePracticeExerciseAbsoluteValue encontrada');
            return window.generatePracticeExerciseAbsoluteValue(difficulty);
        } else {
            console.error('❌ Función generatePracticeExerciseAbsoluteValue NO encontrada');
        }
    }
    
    if (currentTheme === 'intervals') {
        console.log('🔍 Detectado tema: intervals');
        if (window.generatePracticeExerciseIntervals && typeof window.generatePracticeExerciseIntervals === 'function') {
            console.log('✅ Función generatePracticeExerciseIntervals encontrada');
            return window.generatePracticeExerciseIntervals(difficulty);
        } else {
            console.error('❌ Función generatePracticeExerciseIntervals NO encontrada');
        }
    }
    
    // Geometría (por defecto)
    console.log('🔍 Usando tema por defecto: geometry');
    if (window.generatePracticeExerciseGeometry && typeof window.generatePracticeExerciseGeometry === 'function') {
        return window.generatePracticeExerciseGeometry(difficulty);
    }
    
    console.error('❌ No se encontró generador para el tema:', currentTheme);
    return null;
}

function renderPracticeExercise(exercise) {
    const slot = document.getElementById('exerciseSlot');
    
    if (!exercise) {
        slot.innerHTML = '<div class="error-message">Error: No se pudo generar el ejercicio</div>';
        return;
    }
    
    const measuresHTML = exercise.measures
        .map(m => '<li>' + m.label + ': <strong>' + m.value + '</strong></li>')
        .join('');
    
    // Usar unidades apropiadas según el tema y tipo de ejercicio
    let unit = '';
    if (currentTheme === 'geometry') {
        // Verificar si es una figura 3D y si el ejercicio es de volumen
        const isVolumeExercise = exercise.question && exercise.question.toLowerCase().includes('volumen');
        const is3DFigure = exercise.figureName && geometryData.find(g => g.name === exercise.figureName && g.figure3D);
        
        if (isVolumeExercise && is3DFigure) {
            unit = ' cm³';
        } else {
            unit = ' cm²';
        }
    }
    
    // Para inecuaciones, intervalos y valor absoluto, las opciones pueden ser strings, no números
    const isStringAnswer = currentTheme === 'inequalities' || currentTheme === 'intervals' || currentTheme === 'absolute-value';
    
    // CORREGIDO: Usar data attributes en lugar de onclick inline para compatibilidad cross-browser y CSP
    const optionsHTML = exercise.options
        .map((val, i) => {
            const displayVal = isStringAnswer ? val : (val + unit);
            // Escapar el valor para evitar problemas con comillas y caracteres especiales
            const escapedVal = String(val).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            return '<button class="option-btn" data-value="' + escapedVal + '" data-index="' + i + '">' + 
                   displayVal + '</button>';
        })
        .join('');

    slot.innerHTML =
        '<div class="exercise-card">' +
            '<div class="exercise-figure-wrap">' +
                '<div class="exercise-svg-box" id="exerciseSvg">' + exercise.svg + '</div>' +
                '<div class="exercise-measures">' +
                    '<div class="exercise-measures-title">Datos</div>' +
                    '<ul>' + measuresHTML + '</ul>' +
                '</div>' +
            '</div>' +
            '<div class="exercise-question">' + exercise.question + '</div>' +
            '<div class="options-grid">' + optionsHTML + '</div>' +
        '</div>';
    
    // CORREGIDO: Agregar event listeners programáticamente después de insertar el HTML
    // Esto soluciona problemas de CSP y compatibilidad con dispositivos móviles
    const optionButtons = slot.querySelectorAll('.option-btn');
    optionButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const index = parseInt(this.getAttribute('data-index'));
            // Convertir el valor de vuelta si es numérico
            const finalValue = isStringAnswer ? value : parseFloat(value);
            handlePracticeAnswer(finalValue, index);
        });
    });
    
    // ✨ FEATURE: Al hacer clic en el SVG del ejercicio, abrir modal de fórmulas
    const svgBox = document.getElementById('exerciseSvg');
    if (svgBox) {
        svgBox.style.cursor = 'pointer';
        svgBox.addEventListener('click', () => {
            console.log('🔍 Clic en SVG del ejercicio - Tema:', currentTheme);
            openFormulasModal();
        });
    }
}

function handlePracticeAnswer(value, btnIndex) {
    if (!currentExercise || isProcessingAnswer) return;
    
    // Prevenir múltiples ejecuciones
    isProcessingAnswer = true;
    
    console.log('🔍 Debug - value:', value, 'type:', typeof value);
    console.log('🔍 Debug - correctAnswer:', currentExercise.correctAnswer, 'type:', typeof currentExercise.correctAnswer);
    console.log('🔍 Debug - currentTheme:', currentTheme);
    
    // Función de comparación robusta para todos los tipos
    function compareAnswers(userAnswer, correctAnswer, theme) {
        console.log('🔍 [DEBUG] compareAnswers - userAnswer:', userAnswer, 'correctAnswer:', correctAnswer, 'theme:', theme);
        
        // Para inecuaciones, intervalos y valor absoluto, comparar strings exactos
        if (theme === 'inequalities' || theme === 'intervals' || theme === 'absolute-value') {
            const result = String(userAnswer).trim() === String(correctAnswer).trim();
            console.log('🔍 [DEBUG] String comparison result:', result);
            return result;
        }
        
        // Para otros temas, comparar números de forma flexible
        const userNum = parseFloat(String(userAnswer).replace(/[^\d.-]/g, ''));
        const correctNum = parseFloat(String(correctAnswer).replace(/[^\d.-]/g, ''));
        
        console.log('🔍 Debug - userNum:', userNum, 'correctNum:', correctNum);
        
        // Verificar que ambos sean números válidos
        if (isNaN(userNum) || isNaN(correctNum)) {
            return String(userAnswer).trim() === String(correctAnswer).trim();
        }
        
        // Comparar con tolerancia para decimales
        return Math.abs(userNum - correctNum) < 0.01;
    }
    
    const isCorrect = compareAnswers(value, currentExercise.correctAnswer, currentTheme);
    console.log('🔍 Debug - isCorrect:', isCorrect);

    // Reproducir sonido
    playAudio(isCorrect ? audioCorrecto : audioIncorrecto);

    // Deshabilitar todos los botones inmediatamente para evitar múltiples clics
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(btn => {
        btn.classList.add('disabled');
        btn.onclick = null; // Remover el onclick para prevenir más clics
        btn.style.pointerEvents = 'none'; // Bloquear clics adicionales
    });
    
    // Marcar botón seleccionado
    if (btnIndex >= 0 && btnIndex < btns.length) {
        console.log('🔍 [DEBUG] Marcando botón seleccionado - btnIndex:', btnIndex, 'isCorrect:', isCorrect);
        if (isCorrect) {
            console.log('🔍 [DEBUG] Agregando clase correct al botón:', btnIndex);
            btns[btnIndex].classList.add('correct');
        } else {
            console.log('🔍 [DEBUG] Agregando clase wrong al botón:', btnIndex);
            btns[btnIndex].classList.add('wrong');
        }
    }
    
    // Si es incorrecto, resaltar también la correcta en verde (pero no el seleccionado)
    if (!isCorrect) {
        console.log('🔍 [DEBUG] Buscando respuesta correcta para resaltar...');
        btns.forEach((btn, i) => {
            // Saltar el botón ya seleccionado que está marcado como wrong
            if (i === btnIndex) return;
            
            let btnValue;
            if (currentTheme === 'inequalities' || currentTheme === 'intervals' || currentTheme === 'absolute-value') {
                btnValue = btn.textContent.trim();
            } else {
                btnValue = parseFloat(btn.textContent.replace(/[^\d.-]/g, ''));
            }
            
            console.log('🔍 [DEBUG] Comparando btnValue:', btnValue, 'con correctAnswer:', currentExercise.correctAnswer);
            
            if (compareAnswers(btnValue, currentExercise.correctAnswer, currentTheme)) {
                console.log('🔍 [DEBUG] Encontrada respuesta correcta, agregando clase correct al botón:', i);
                btn.classList.add('correct');
            }
        });
    }

    // Mostrar feedback
    const fb = document.getElementById('practiceFeedback');
    const fbIcon = document.getElementById('fbIcon');
    const fbTitle = document.getElementById('fbTitle');
    const fbBody = document.getElementById('fbBody');

    fb.classList.remove('correct-fb', 'wrong-fb', 'visible');
    void fb.offsetWidth; // Force reflow

    const unit = (currentTheme === 'functions' || currentTheme === 'inequalities' || currentTheme === 'absolute-value' || currentTheme === 'intervals') ? '' : ' cm²';
    
    // Para geometría, verificar si es ejercicio de volumen en figura 3D
    if (currentTheme === 'geometry' && currentExercise) {
        const isVolumeExercise = currentExercise.question && currentExercise.question.toLowerCase().includes('volumen');
        const is3DFigure = currentExercise.figureName && geometryData.find(g => g.name === currentExercise.figureName && g.figure3D);
        
        if (isVolumeExercise && is3DFigure) {
            unit = ' cm³';
        }
    }

    if (isCorrect) {
        fb.classList.add('correct-fb', 'visible');
        fbIcon.textContent = '✅';
        fbTitle.textContent = 'Correcto';
        fbBody.innerHTML = '<strong>' + currentExercise.formulaText.replace(/\\n/g, '<br>') + '</strong>';
    } else {
        fb.classList.add('wrong-fb', 'visible');
        fbIcon.textContent = '💡';
        fbTitle.textContent = 'Revisá la fórmula';
        fbBody.innerHTML = 
            'La respuesta correcta es <strong>' + currentExercise.correctAnswer + unit + '</strong>. <br>' +
            currentExercise.formulaText.replace(/\\n/g, '<br>');
    }

    // Auto-avanzar después de 1.8s
    setTimeout(() => {
        console.log('🔄 Timeout ejecutado - Generando nuevo ejercicio...');
        
        // Restablecer procesamiento
        isProcessingAnswer = false;
        
        // Generar siguiente ejercicio directamente sin limpiar todo
        startPractice();
    }, 1800);
}

function startPractice() {
    console.log('🎯 startPractice llamado - Tema:', currentTheme, '- Dificultad:', currentDifficulty);
    console.log('📋 Estado actual - currentTheme:', currentTheme, '- currentMode:', currentMode);
    
    // Regenerar ejercicio con el tema actual
    currentExercise = generatePracticeExercise(currentDifficulty);
    
    console.log('📝 Ejercicio generado:', currentExercise);
    
    if (!currentExercise) {
        console.error('❌ No se pudo generar ejercicio - volviendo a Classic mode');
        switchToClassic();
        return;
    }
    
    // Ocultar feedback anterior
    document.getElementById('practiceFeedback').classList.remove('correct-fb', 'wrong-fb', 'visible');
    
    renderPracticeExercise(currentExercise);
}

function onDifficultyChange() {
    const sel = document.getElementById('difficultySelect');
    currentDifficulty = sel.value;
    
    console.log('🎚️ Dificultad cambiada a:', currentDifficulty);
    
    // Actualizar badge
    const badge = document.getElementById('diffBadge');
    badge.textContent = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1);
    badge.className = 'diff-badge ' + currentDifficulty;
    
    // Generar nuevo ejercicio
    startPractice();
}

// ══════════════════════════════════════════════════════════════
// INICIALIZACIÓN
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Iniciando aplicación...');
    console.log('🎯 Tema inicial:', currentTheme);
    
    // Verificar qué scripts se cargaron
    console.log('📋 Verificando carga de scripts...');
    console.log('🔍 generatePracticeExerciseFunctions disponible:', typeof window.generatePracticeExerciseFunctions);
    console.log('🔍 generatePracticeExerciseInequalities disponible:', typeof window.generatePracticeExerciseInequalities);
    console.log('🔍 generatePracticeGeometry disponible:', typeof window.generatePracticeGeometry);
    console.log('🔍 generatePracticeExerciseAbsoluteValue disponible:', typeof window.generatePracticeExerciseAbsoluteValue);
    console.log('🔍 generatePracticeExerciseIntervals disponible:', typeof window.generatePracticeExerciseIntervals);
    
    // Inicializar el data source por defecto
    currentDataSource = geometryData;
    console.log('📊 Data source inicial:', currentDataSource === geometryData ? 'geometryData' : 'otro');
    
    // Event Listeners para los botones de tema
    document.getElementById('functionsBtn').addEventListener('click', () => {
        console.log('🔄 Click en FunctionsBtn - Tema actual antes:', currentTheme);
        setTheme('functions');
    });
    document.getElementById('geometryBtn').addEventListener('click', () => {
        console.log('🔄 Click en GeometryBtn - Tema actual antes:', currentTheme);
        setTheme('geometry');
    });
    document.getElementById('inequalitiesBtn').addEventListener('click', () => {
        console.log('🔄 Click en InequalitiesBtn - Tema actual antes:', currentTheme);
        setTheme('inequalities');
    });
    document.getElementById('absoluteValueBtn').addEventListener('click', () => {
        console.log('🔄 Click en AbsoluteValueBtn - Tema actual antes:', currentTheme);
        setTheme('absolute-value');
    });
    document.getElementById('intervalsBtn').addEventListener('click', () => {
        console.log('🔄 Click en IntervalsBtn - Tema actual antes:', currentTheme);
        setTheme('intervals');
    });
    
    // Event Listeners para modo
    document.getElementById('modeSelect').addEventListener('change', onModeChange);
    document.getElementById('backClassicBtn').addEventListener('click', switchToClassic);
    
    // Event Listeners para botones
    document.getElementById('newGameBtn').addEventListener('click', newGame);
    
    // Event Listeners para modals
    document.getElementById('figuresTitle').addEventListener('click', () => openFiguresModal());
    document.getElementById('formulasTitle').addEventListener('click', () => openFormulasModal());
    document.getElementById('closeFiguresModal').addEventListener('click', closeFiguresModal);
    document.getElementById('closeFormulasModal').addEventListener('click', closeFormulasModal);
    
    // Event Listener para cerrar modals al hacer clic fuera
    window.addEventListener('click', function(event) {
        const figuresModal = document.getElementById('figuresModal');
        const formulasModal = document.getElementById('formulasModal');
        if (event.target === figuresModal) {
            closeFiguresModal();
        }
        if (event.target === formulasModal) {
            closeFormulasModal();
        }
    });
    
    // Event Listener para dificultad en modo practice
    document.getElementById('difficultySelect').addEventListener('change', onDifficultyChange);
    
    // Iniciar el juego
    newGame();
    
    // Inicializar figuras 3D si está disponible
    if (typeof updateGeometryDataWith3D === 'function') {
        updateGeometryDataWith3D();
    }
    
    console.log('✅ Aplicación inicializada correctamente');
    console.log('📐 Temas disponibles:', Object.keys(THEMES).map(k => THEMES[k].name).join(', '));
    console.log('🎮 Modo actual:', currentMode);
    console.log('🎯 Tema actual:', currentTheme);
});

// ══════════════════════════════════════════════════════════════
// FUNCIONES GENERADORAS DE PRACTICE PARA NUEVOS TEMAS
// ══════════════════════════════════════════════════════════════

function generatePracticeExerciseIntervals(difficulty) {
    console.log('🔍 Generando ejercicio de intervalos - Dificultad:', difficulty);
    
    const exercises = [
        {
            question: "Escribir en notación de intervalo: x > 2",
            measures: [{ label: "Desigualdad", value: "x > 2" }],
            options: ["(2, ∞)", "[2, ∞)", "(-∞, 2)", "(-∞, 2]"],
            correctAnswer: "(2, ∞)",
            formulaText: "x > 2 ⇒ (2, ∞)",
            svg: `<svg viewBox="0 0 100 100"><line x1="30" y1="50" x2="90" y2="50" stroke="#2196f3" stroke-width="3"/><circle cx="30" cy="50" r="3" fill="white" stroke="#2196f3" stroke-width="2"/><text x="25" y="40" font-size="10" fill="#2196f3">2</text><text x="85" y="40" font-size="10" fill="#2196f3">∞</text></svg>`
        },
        {
            question: "Escribir como desigualdad: (-∞, 3]",
            measures: [{ label: "Intervalo", value: "(-∞, 3]" }],
            options: ["x ≤ 3", "x < 3", "x ≥ 3", "x > 3"],
            correctAnswer: "x ≤ 3",
            formulaText: "(-∞, 3] ⇒ x ≤ 3",
            svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="50" x2="70" y2="50" stroke="#4caf50" stroke-width="3"/><circle cx="70" cy="50" r="3" fill="#4caf50"/><text x="65" y="40" font-size="10" fill="#4caf50">3</text><text x="5" y="40" font-size="10" fill="#4caf50">-∞</text></svg>`
        },
        {
            question: "Convertir a desigualdad: [-2, 1]",
            measures: [{ label: "Intervalo", value: "[-2, 1]" }],
            options: ["-2 ≤ x ≤ 1", "-2 < x < 1", "x ≥ -2", "x ≤ 1"],
            correctAnswer: "-2 ≤ x ≤ 1",
            formulaText: "[-2, 1] ⇒ -2 ≤ x ≤ 1 (corchetes = cerrado)",
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" font-size="16" fill="#e91e63" text-anchor="middle">[-2, 1]</text><text x="50" y="60" font-size="14" fill="#e91e63" text-anchor="middle">-2 ≤ x ≤ 1</text></svg>`
        }
    ];
    
    const exercise = pickRandom(difficulty === 'easy' ? exercises.slice(0, 2) : exercises);
    
    // CRÍTICO: Aplicar Fisher-Yates shuffle para mezclar las opciones
    // Esto soluciona el bug donde la respuesta correcta siempre está arriba a la izquierda
    let options = [...exercise.options]; // Crear copia para no modificar el original
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    exercise.options = options;
    
    exercise.figuresTitle = '🔷 Conceptos';
    exercise.formulasTitle = '📝 Notación';
    exercise.instruction = 'Practica intervalos convirtiendo desigualdades y representando gráficamente';
    
    return exercise;
}

function generateBasicFunctionExercise(difficulty) {
    console.log('🔧 Generando ejercicio básico de funciones (fallback)');
    
    const exercises = [
        {
            question: "Evaluar f(x) = 2x + 1 en x = 3",
            measures: [
                { label: "Función", value: "f(x) = 2x + 1" },
                { label: "x", value: "3" }
            ],
            correctAnswer: 7,
            distractors: [6, 5, 8],
            formulaText: "f(3) = 2(3) + 1 = 6 + 1 = 7",
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" font-size="14" fill="#ff9800" text-anchor="middle">f(x) = 2x + 1</text><text x="50" y="60" font-size="14" fill="#ff9800" text-anchor="middle">f(3) = 7</text></svg>`
        },
        {
            question: "Calcular la pendiente entre (0,1) y (2,5)",
            measures: [
                { label: "Punto 1", value: "(0,1)" },
                { label: "Punto 2", value: "(2,5)" }
            ],
            correctAnswer: 2,
            distractors: [3, 1, 4],
            formulaText: "m = (y₂ - y₁)/(x₂ - x₁) = (5-1)/(2-0) = 4/2 = 2",
            svg: `<svg viewBox="0 0 100 100"><line x1="10" y1="80" x2="90" y2="20" stroke="#2196f3" stroke-width="3"/><circle cx="10" cy="80" r="3" fill="#ff5722"/><circle cx="90" cy="20" r="3" fill="#ff5722"/><text x="5" y="95" font-size="8" fill="#2196f3">(0,1)</text><text x="85" y="15" font-size="8" fill="#2196f3">(2,5)</text></svg>`
        }
    ];
    
    const exercise = pickRandom(exercises);
    
    // CRÍTICO: Aplicar Fisher-Yates shuffle para mezclar las opciones
    // Esto soluciona el bug donde la respuesta correcta siempre estaba arriba a la izquierda
    let options = [exercise.correctAnswer, ...exercise.distractors];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    exercise.options = options;
    
    exercise.figuresTitle = '📊 Conceptos';
    exercise.formulasTitle = '📝 Fórmulas';
    exercise.instruction = 'Practica funciones evaluando puntos y aplicando fórmulas';
    
    return exercise;
}

// Exportar funciones de practice para que estén disponibles globalmente
if (typeof window !== 'undefined') {
    window.generatePracticeExerciseIntervals = generatePracticeExerciseIntervals;
    window.generateBasicFunctionExercise = generateBasicFunctionExercise;
}
