// ══════════════════════════════════════════════════════════════
// CONFIGURACIÓN DE TEMAS
// ══════════════════════════════════════════════════════════════

import { geometryData, formulasData } from '../modules/geometry/data.js';
import { functionsData, functionsFormulasData } from '../modules/functions/data.js';
import { inequalitiesData, inequalitiesFormulasData } from '../modules/inequalities/data.js';
import { absoluteValueData, absoluteValueFormulasData } from '../modules/absolute/data.js';
import { intervalsData } from '../modules/intervals/data.js';

// Temas del Segundo Parcial
import { logaritmosData, logaritmosFormulasData } from '../modules/logaritmos/data.js';
import { trigonometriaData, trigonometriaFormulasData } from '../modules/trigonometria/data.js';
import { vectoresData, vectoresFormulasData } from '../modules/vectores/data.js';
import { homograficasData, homograficasFormulasData } from '../modules/homograficas/data.js';
import { inyectivasData, inyectivasFormulasData } from '../modules/inyectivas/data.js';

export const themes = {
    geometry: {
        name: 'Geometría',
        data: geometryData,
        formulas: formulasData,
        instruction: 'Uní cada figura con su fórmula correcta',
        practiceInstruction: 'Resolvé ejercicios de geometría',
        index3DStart: 10
    },
    functions: {
        name: 'Funciones',
        data: functionsData,
        formulas: functionsFormulasData,
        instruction: 'Uní cada concepto de función con su fórmula',
        practiceInstruction: 'Resolvé ejercicios de funciones',
        index3DStart: 999
    },
    inequalities: {
        name: 'Inecuaciones',
        data: inequalitiesData,
        formulas: inequalitiesFormulasData,
        instruction: 'Uní cada concepto de inecuaciones con su fórmula',
        practiceInstruction: 'Resolvé ejercicios de inecuaciones',
        index3DStart: 999
    },
    'absolute-value': {
        name: 'Valor Absoluto',
        data: absoluteValueData,
        formulas: absoluteValueFormulasData,
        instruction: 'Uní cada concepto de valor absoluto con su fórmula',
        practiceInstruction: 'Resolvé ejercicios de valor absoluto',
        index3DStart: 999
    },
    intervals: {
        name: 'Intervalos',
        data: intervalsData,
        formulas: [], // No hay fórmulas detalladas para intervalos todavía
        instruction: 'Uní cada concepto de intervalos con su definición',
        practiceInstruction: 'Resolvé ejercicios de intervalos',
        index3DStart: 999
    },
    // Temas del Segundo Parcial
    logaritmos: {
        name: 'Logaritmos',
        data: logaritmosData,
        formulas: logaritmosFormulasData,
        instruction: 'Uní cada concepto de logaritmos con su fórmula',
        practiceInstruction: 'Resolvé ejercicios de logaritmos',
        index3DStart: 999
    },
    trigonometria: {
        name: 'Trigonometría',
        data: trigonometriaData,
        formulas: trigonometriaFormulasData,
        instruction: 'Uní cada concepto trigonométrico con su fórmula',
        practiceInstruction: 'Resolvé ejercicios de trigonometría',
        index3DStart: 999
    },
    vectores: {
        name: 'Vectores',
        data: vectoresData,
        formulas: vectoresFormulasData,
        instruction: 'Uní cada concepto de vectores con su fórmula',
        practiceInstruction: 'Resolvé ejercicios de vectores',
        index3DStart: 999
    },
    homograficas: {
        name: 'Homográficas',
        data: homograficasData,
        formulas: homograficasFormulasData,
        instruction: 'Uní cada concepto de homográficas con su fórmula',
        practiceInstruction: 'Resolvé ejercicios de homográficas',
        index3DStart: 999
    },
    inyectivas: {
        name: 'Inyectivas/Sobreyectivas',
        data: inyectivasData,
        formulas: inyectivasFormulasData,
        instruction: 'Uní cada concepto de inyectivas/sobreyectivas con su fórmula',
        practiceInstruction: 'Resolvé ejercicios de inyectivas/sobreyectivas',
        index3DStart: 999
    }
};

export function getThemeConfig(theme) {
    return themes[theme] || themes.geometry;
}

export function getFormulasSource(theme) {
    const config = getThemeConfig(theme);
    return config.formulas;
}
