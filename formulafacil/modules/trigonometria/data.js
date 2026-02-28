// ══════════════════════════════════════════════════════════════
// DATOS DE TRIGONOMETRÍA - SEGUNDO PARCIAL (INGRESO UTN FRBA)
// ══════════════════════════════════════════════════════════════

export const trigonometriaData = [
    {
        name: "Cosecante como Recíproca",
        formulas: "\\csc x = \\frac{1}{\\sin x}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="12" fill="#e91e63">csc x =</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#e91e63">1/sen x</text></svg>`
    },
    {
        name: "Secante como Recíproca",
        formulas: "\\sec x = \\frac{1}{\\cos x}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="12" fill="#2196f3">sec x =</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#2196f3">1/cos x</text></svg>`
    },
    {
        name: "Cotangente como Recíproca",
        formulas: "\\cot x = \\frac{1}{\\tan x} = \\frac{\\cos x}{\\sin x}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="11" fill="#4caf50">cot x = 1/tan x</text><text x="50" y="55" text-anchor="middle" font-size="11" fill="#4caf50">= cos x/sen x</text></svg>`
    },
    {
        name: "Identidad Pitagórica",
        formulas: "\\sin^2 x + \\cos^2 x = 1",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#e53935">sen²x + cos²x</text><text x="50" y="60" text-anchor="middle" font-size="14" fill="#e53935">= 1</text></svg>`
    },
    {
        name: "Variación Pitagórica 1",
        formulas: "1 - \\cos^2 x = \\sin^2 x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#1e88e5">1 - cos²x</text><text x="50" y="60" text-anchor="middle" font-size="14" fill="#1e88e5">= sen²x</text></svg>`
    },
    {
        name: "Variación Pitagórica 2",
        formulas: "1 - \\sin^2 x = \\cos^2 x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#43a047">1 - sen²x</text><text x="50" y="60" text-anchor="middle" font-size="14" fill="#43a047">= cos²x</text></svg>`
    },
    {
        name: "Tangente como Cociente",
        formulas: "\\tan x = \\frac{\\sin x}{\\cos x}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#fb8c00">tan x =</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#fb8c00">sen x / cos x</text></svg>`
    },
    {
        name: "Tangente de Suma",
        formulas: "\\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a \\tan b}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#ff5722">tan(a+b) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#ff5722">(tan a + tan b)</text><text x="50" y="75" text-anchor="middle" font-size="10" fill="#ff5722">/(1 - tan a·tan b)</text></svg>`
    },
    {
        name: "Tangente de Diferencia",
        formulas: "\\tan(a-b) = \\frac{\\tan a - \\tan b}{1 + \\tan a \\tan b}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#ff9800">tan(a-b) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#ff9800">(tan a - tan b)</text><text x="50" y="75" text-anchor="middle" font-size="10" fill="#ff9800">/(1 + tan a·tan b)</text></svg>`
    },
    {
        name: "Identidad Tangente",
        formulas: "1 + \\tan^2 x = \\frac{1}{\\cos^2 x}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="12" fill="#8e24aa">1 + tan²x</text><text x="50" y="55" text-anchor="middle" font-size="12" fill="#8e24aa">= 1/cos²x</text></svg>`
    },
    {
        name: "Seno de Suma",
        formulas: "\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="11" fill="#d81b60">sen(a+b)</text><text x="50" y="55" text-anchor="middle" font-size="11" fill="#d81b60">= sen a·cos b</text><text x="50" y="75" text-anchor="middle" font-size="11" fill="#d81b60">+ cos a·sen b</text></svg>`
    },
    {
        name: "Seno de Diferencia",
        formulas: "\\sin(a-b) = \\sin a \\cos b - \\cos a \\sin b",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="11" fill="#1976d2">sen(a-b)</text><text x="50" y="55" text-anchor="middle" font-size="11" fill="#1976d2">= sen a·cos b</text><text x="50" y="75" text-anchor="middle" font-size="11" fill="#1976d2">- cos a·sen b</text></svg>`
    },
    {
        name: "Coseno de Suma",
        formulas: "\\cos(a+b) = \\cos a \\cos b - \\sin a \\sin b",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="11" fill="#388e3c">cos(a+b)</text><text x="50" y="55" text-anchor="middle" font-size="11" fill="#388e3c">= cos a·cos b</text><text x="50" y="75" text-anchor="middle" font-size="11" fill="#388e3c">- sen a·sen b</text></svg>`
    },
    {
        name: "Coseno de Diferencia",
        formulas: "\\cos(a-b) = \\cos a \\cos b + \\sin a \\sin b",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="11" fill="#f57c00">cos(a-b)</text><text x="50" y="55" text-anchor="middle" font-size="11" fill="#f57c00">= cos a·cos b</text><text x="50" y="75" text-anchor="middle" font-size="11" fill="#f57c00">+ sen a·sen b</text></svg>`
    },
    {
        name: "Seno Ángulo Doble",
        formulas: "\\sin(2x) = 2 \\sin x \\cos x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="13" fill="#7b1fa2">sen(2x)</text><text x="50" y="60" text-anchor="middle" font-size="13" fill="#7b1fa2">= 2 sen x cos x</text></svg>`
    },
    {
        name: "Coseno Ángulo Doble 1",
        formulas: "\\cos(2x) = \\cos^2 x - \\sin^2 x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="12" fill="#c2185b">cos(2x)</text><text x="50" y="55" text-anchor="middle" font-size="12" fill="#c2185b">= cos²x - sen²x</text></svg>`
    },
    {
        name: "Coseno Ángulo Doble 2",
        formulas: "\\cos(2x) = 2\\cos^2 x - 1",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="13" fill="#0277bd">cos(2x)</text><text x="50" y="60" text-anchor="middle" font-size="13" fill="#0277bd">= 2cos²x - 1</text></svg>`
    },
    {
        name: "Coseno Ángulo Doble 3",
        formulas: "\\cos(2x) = 1 - 2\\sin^2 x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="13" fill="#2e7d32">cos(2x)</text><text x="50" y="60" text-anchor="middle" font-size="13" fill="#2e7d32">= 1 - 2sen²x</text></svg>`
    },
    {
        name: "Seno Ángulo Triple",
        formulas: "\\sin(3x) = 3\\sin x - 4\\sin^3 x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="12" fill="#9c27b0">sen(3x)</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#9c27b0">= 3sen x - 4sen³x</text></svg>`
    },
    {
        name: "Coseno Ángulo Triple",
        formulas: "\\cos(3x) = 4\\cos^3 x - 3\\cos x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="12" fill="#673ab7">cos(3x)</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#673ab7">= 4cos³x - 3cos x</text></svg>`
    },
    {
        name: "Tangente Ángulo Triple",
        formulas: "\\tan(3x) = \\frac{3\\tan x - \\tan^3 x}{1 - 3\\tan^2 x}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#3f51b5">tan(3x) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#3f51b5">(3tan x - tan³x)</text><text x="50" y="75" text-anchor="middle" font-size="10" fill="#3f51b5">/(1 - 3tan²x)</text></svg>`
    },
    {
        name: "Paridad Seno",
        formulas: "\\sin(-x) = -\\sin x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#d32f2f">sen(-x)</text><text x="50" y="60" text-anchor="middle" font-size="14" fill="#d32f2f">= -sen x</text></svg>`
    },
    {
        name: "Paridad Coseno",
        formulas: "\\cos(-x) = \\cos x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#1976d2">cos(-x)</text><text x="50" y="60" text-anchor="middle" font-size="14" fill="#1976d2">= cos x</text></svg>`
    },
    {
        name: "Paridad Tangente",
        formulas: "\\tan(-x) = -\\tan x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="14" fill="#f57f17">tan(-x)</text><text x="50" y="60" text-anchor="middle" font-size="14" fill="#f57f17">= -tan x</text></svg>`
    },
    {
        name: "Seno Ángulo Mitad 1",
        formulas: "\\sin\\frac{x}{2} = \\pm\\sqrt{\\frac{1-\\cos x}{2}}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#009688">sen(x/2) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#009688">±√[(1-cos x)/2]</text></svg>`
    },
    {
        name: "Coseno Ángulo Mitad 1",
        formulas: "\\cos\\frac{x}{2} = \\pm\\sqrt{\\frac{1+\\cos x}{2}}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#00acc1">cos(x/2) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#00acc1">±√[(1+cos x)/2]</text></svg>`
    },
    {
        name: "Tangente Ángulo Mitad 1",
        formulas: "\\tan\\frac{x}{2} = \\pm\\sqrt{\\frac{1-\\cos x}{1+\\cos x}}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#607d8b">tan(x/2) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#607d8b">±√[(1-cos x)/(1+cos x)]</text></svg>`
    },
    {
        name: "Tangente Ángulo Mitad 2",
        formulas: "\\tan\\frac{x}{2} = \\frac{\\sin x}{1+\\cos x}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#546e7a">tan(x/2) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#546e7a">sen x/(1+cos x)</text></svg>`
    },
    {
        name: "Tangente Ángulo Mitad 3",
        formulas: "\\tan\\frac{x}{2} = \\frac{1-\\cos x}{\\sin x}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#455a64">tan(x/2) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#455a64">(1-cos x)/sen x</text></svg>`
    },
    {
        name: "Signos por Cuadrante",
        formulas: "\\text{I: }+ \\quad \\text{II: }sen+ \\quad \\text{III: }tan+ \\quad \\text{IV: }cos+",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="25" text-anchor="middle" font-size="10" fill="#4caf50">I: todas +</text><text x="50" y="45" text-anchor="middle" font-size="10" fill="#2196f3">II: seno +</text><text x="50" y="65" text-anchor="middle" font-size="10" fill="#ff9800">III: tan +</text><text x="50" y="85" text-anchor="middle" font-size="10" fill="#9c27b0">IV: cos +</text></svg>`
    },
    {
        name: "Ecuación Seno",
        formulas: "x = \\arcsen(k) + 2k\\pi \\quad \\text{o} \\quad x = \\pi - \\arcsen(k) + 2k\\pi",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="30" text-anchor="middle" font-size="9" fill="#e91e63">sen x = k</text><text x="50" y="50" text-anchor="middle" font-size="9" fill="#e91e63">x = arcsen(k) + 2kπ</text><text x="50" y="70" text-anchor="middle" font-size="9" fill="#e91e63">x = π - arcsen(k) + 2kπ</text></svg>`
    },
    {
        name: "Ecuación Coseno",
        formulas: "x = \\pm \\arccos(k) + 2k\\pi",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#3f51b5">cos x = k</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#3f51b5">x = ± arccos(k)</text><text x="50" y="75" text-anchor="middle" font-size="10" fill="#3f51b5">+ 2kπ</text></svg>`
    },
    {
        name: "Ecuación Tangente",
        formulas: "x = \\arctan(k) + k\\pi",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="12" fill="#ff5722">tan x = k</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#ff5722">x = arctan(k) + kπ</text></svg>`
    },
    {
        name: "Cofunción π/2 - x",
        formulas: "\\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#795548">sen(π/2 - x)</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#795548">= cos x</text></svg>`
    },
    {
        name: "Cofunción π/2 + x",
        formulas: "\\sin\\left(\\frac{\\pi}{2} + x\\right) = \\cos x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#607d8b">sen(π/2 + x)</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#607d8b">= cos x</text></svg>`
    },
    {
        name: "Reducción π - x",
        formulas: "\\sin(\\pi - x) = \\sin x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#546e7a">sen(π - x)</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#546e7a">= sen x</text></svg>`
    },
    {
        name: "Reducción π + x",
        formulas: "\\sin(\\pi + x) = -\\sin x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#455a64">sen(π + x)</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#455a64">= -sen x</text></svg>`
    },
    {
        name: "Reducción 2π - x",
        formulas: "\\sin(2\\pi - x) = -\\sin x",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#37474f">sen(2π - x)</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#37474f">= -sen x</text></svg>`
    },
    {
        name: "Ley del Seno",
        formulas: "\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#795548">a/sen(A) =</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#795548">b/sen(B) =</text><text x="50" y="75" text-anchor="middle" font-size="10" fill="#795548">c/sen(C)</text></svg>`
    },
    {
        name: "Ley del Coseno",
        formulas: "c^2 = a^2 + b^2 - 2ab \\cos(C)",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="12" fill="#607d8b">c² = a² + b²</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#607d8b">- 2ab cos(C)</text></svg>`
    },
    {
        name: "Ley del Coseno 2",
        formulas: "a^2 = b^2 + c^2 - 2bc \\cos(A)",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="12" fill="#546e7a">a² = b² + c²</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#546e7a">- 2bc cos(A)</text></svg>`
    },
    {
        name: "Ley del Coseno 3",
        formulas: "b^2 = a^2 + c^2 - 2ac \\cos(B)",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="40" text-anchor="middle" font-size="12" fill="#455a64">b² = a² + c²</text><text x="50" y="60" text-anchor="middle" font-size="12" fill="#455a64">- 2ac cos(B)</text></svg>`
    },
    {
        name: "Amplitud Función Seno",
        formulas: "f(x) = a \\sin(bx) \\quad \\Rightarrow \\quad \\text{Amplitud} = |a|",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#009688">f(x) = a sen(bx)</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#009688">Amplitud</text><text x="50" y="75" text-anchor="middle" font-size="10" fill="#009688">= |a|</text></svg>`
    },
    {
        name: "Período Función Seno",
        formulas: "f(x) = a \\sin(bx) \\quad \\Rightarrow \\quad \\text{Período} = \\frac{2\\pi}{|b|}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#673ab7">f(x) = a sen(bx)</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#673ab7">Período</text><text x="50" y="75" text-anchor="middle" font-size="10" fill="#673ab7">= 2π/|b|</text></svg>`
    },
    {
        name: "Suma a Producto Seno",
        formulas: "\\sin a + \\sin b = 2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="9" fill="#e91e63">sen a + sen b</text><text x="50" y="55" text-anchor="middle" font-size="9" fill="#e91e63">= 2sen[(a+b)/2]</text><text x="50" y="75" text-anchor="middle" font-size="9" fill="#e91e63">·cos[(a-b)/2]</text></svg>`
    },
    {
        name: "Diferencia a Producto Seno",
        formulas: "\\sin a - \\sin b = 2\\cos\\frac{a+b}{2}\\sin\\frac{a-b}{2}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="9" fill="#d81b60">sen a - sen b</text><text x="50" y="55" text-anchor="middle" font-size="9" fill="#d81b60">= 2cos[(a+b)/2]</text><text x="50" y="75" text-anchor="middle" font-size="9" fill="#d81b60">·sen[(a-b)/2]</text></svg>`
    },
    {
        name: "Suma a Producto Coseno",
        formulas: "\\cos a + \\cos b = 2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="9" fill="#388e3c">cos a + cos b</text><text x="50" y="55" text-anchor="middle" font-size="9" fill="#388e3c">= 2cos[(a+b)/2]</text><text x="50" y="75" text-anchor="middle" font-size="9" fill="#388e3c">·cos[(a-b)/2]</text></svg>`
    },
    {
        name: "Diferencia a Producto Coseno",
        formulas: "\\cos a - \\cos b = -2\\sin\\frac{a+b}{2}\\sin\\frac{a-b}{2}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="9" fill="#f57c00">cos a - cos b</text><text x="50" y="55" text-anchor="middle" font-size="9" fill="#f57c00">= -2sen[(a+b)/2]</text><text x="50" y="75" text-anchor="middle" font-size="9" fill="#f57c00">·sen[(a-b)/2]</text></svg>`
    },
    {
        name: "Reducción de Potencia Seno",
        formulas: "\\sin^2 x = \\frac{1 - \\cos(2x)}{2}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#7b1fa2">sen²x</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#7b1fa2">= (1 - cos(2x))/2</text></svg>`
    },
    {
        name: "Reducción de Potencia Coseno",
        formulas: "\\cos^2 x = \\frac{1 + \\cos(2x)}{2}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="10" fill="#c2185b">cos²x</text><text x="50" y="55" text-anchor="middle" font-size="10" fill="#c2185b">= (1 + cos(2x))/2</text></svg>`
    },
    {
        name: "Ley de la Tangente",
        formulas: "\\frac{a-b}{a+b} = \\frac{\\tan\\frac{A-B}{2}}{\\tan\\frac{A+B}{2}}",
        svg: `<svg viewBox="0 0 100 100"><text x="50" y="35" text-anchor="middle" font-size="9" fill="#0277bd">(a-b)/(a+b)</text><text x="50" y="55" text-anchor="middle" font-size="9" fill="#0277bd">= tan[(A-B)/2]</text><text x="50" y="75" text-anchor="middle" font-size="9" fill="#0277bd">/tan[(A+B)/2]</text></svg>`
    }
];

// ══════════════════════════════════════════════════════════════
// TIPS POR CONCEPTO (2-4 pistas por cada uno)
// ══════════════════════════════════════════════════════════════

const conceptTips = {
    "Cosecante como Recíproca": [
        "La cosecante es el inverso del seno",
        "csc x = 1/sen x",
        "Solo definida cuando sen x ≠ 0"
    ],
    "Secante como Recíproca": [
        "La secante es el inverso del coseno",
        "sec x = 1/cos x",
        "Solo definida cuando cos x ≠ 0"
    ],
    "Cotangente como Recíproca": [
        "La cotangente es el inverso de la tangente",
        "cot x = 1/tan x = cos x/sen x",
        "Solo definida cuando sen x ≠ 0 y tan x ≠ 0"
    ],
    "Identidad Pitagórica": [
        "La identidad más fundamental de la trigonometría",
        "Relaciona seno y coseno del mismo ángulo",
        "sen²x + cos²x siempre es igual a 1"
    ],
    "Variación Pitagórica 1": [
        "Se obtiene despejando sen²x de la identidad pitagórica",
        "Útil cuando necesitas expresar sen²x en función de cos²x",
        "1 - cos²x = sen²x"
    ],
    "Variación Pitagórica 2": [
        "Se obtiene despejando cos²x de la identidad pitagórica",
        "Útil cuando necesitas expresar cos²x en función de sen²x",
        "1 - sen²x = cos²x"
    ],
    "Tangente como Cociente": [
        "Definición fundamental de la tangente",
        "tan x = sen x / cos x",
        "Solo definida cuando cos x ≠ 0"
    ],
    "Tangente de Suma": [
        "Fórmula de adición para tangente",
        "tan(a+b) = (tan a + tan b)/(1 - tan a·tan b)",
        "El denominador cambia de signo"
    ],
    "Tangente de Diferencia": [
        "Fórmula de sustracción para tangente",
        "tan(a-b) = (tan a - tan b)/(1 + tan a·tan b)",
        "El denominador mantiene signo positivo"
    ],
    "Seno Ángulo Triple": [
        "Fórmula para el ángulo triple",
        "sen(3x) = 3sen x - 4sen³x",
        "Se obtiene aplicando suma de ángulos dos veces"
    ],
    "Coseno Ángulo Triple": [
        "Fórmula para el ángulo triple",
        "cos(3x) = 4cos³x - 3cos x",
        "Se obtiene aplicando suma de ángulos dos veces"
    ],
    "Tangente Ángulo Triple": [
        "Fórmula para el ángulo triple",
        "tan(3x) = (3tan x - tan³x)/(1 - 3tan²x)",
        "Útil en cálculos de ángulos triples"
    ],
    "Seno Ángulo Mitad 1": [
        "Fórmula del ángulo mitad con raíz",
        "sen(x/2) = ±√[(1-cos x)/2]",
        "El signo depende del cuadrante"
    ],
    "Coseno Ángulo Mitad 1": [
        "Fórmula del ángulo mitad con raíz",
        "cos(x/2) = ±√[(1+cos x)/2]",
        "El signo depende del cuadrante"
    ],
    "Tangente Ángulo Mitad 1": [
        "Fórmula del ángulo mitad con raíz",
        "tan(x/2) = ±√[(1-cos x)/(1+cos x)]",
        "El signo depende del cuadrante"
    ],
    "Tangente Ángulo Mitad 2": [
        "Fórmula del ángulo mitad sin raíz",
        "tan(x/2) = sen x/(1+cos x)",
        "Más conveniente para cálculos"
    ],
    "Tangente Ángulo Mitad 3": [
        "Otra forma del ángulo mitad",
        "tan(x/2) = (1-cos x)/sen x",
        "Alternativa útil en ciertos casos"
    ],
    "Cofunción π/2 - x": [
        "Relación de cofunción",
        "sen(π/2 - x) = cos x",
        "El seno de un ángulo complementario"
    ],
    "Cofunción π/2 + x": [
        "Relación de cofunción con suma",
        "sen(π/2 + x) = cos x",
        "Caso especial de cofunción"
    ],
    "Reducción π - x": [
        "Reducción al primer cuadrante",
        "sen(π - x) = sen x",
        "Simetría respecto a π/2"
    ],
    "Reducción π + x": [
        "Reducción al tercer cuadrante",
        "sen(π + x) = -sen x",
        "Cambio de signo"
    ],
    "Reducción 2π - x": [
        "Reducción al cuarto cuadrante",
        "sen(2π - x) = -sen x",
        "Simetría respecto a 2π"
    ],
    "Suma a Producto Seno": [
        "Transformación de suma a producto",
        "sen a + sen b = 2sen[(a+b)/2]cos[(a-b)/2]",
        "Útil para simplificar expresiones"
    ],
    "Diferencia a Producto Seno": [
        "Transformación de diferencia a producto",
        "sen a - sen b = 2cos[(a+b)/2]sen[(a-b)/2]",
        "Cambia seno por coseno en el primer factor"
    ],
    "Suma a Producto Coseno": [
        "Transformación de suma a producto",
        "cos a + cos b = 2cos[(a+b)/2]cos[(a-b)/2]",
        "Ambos factores son cosenos"
    ],
    "Diferencia a Producto Coseno": [
        "Transformación de diferencia a producto",
        "cos a - cos b = -2sen[(a+b)/2]sen[(a-b)/2]",
        "Ambos factores son senos con signo negativo"
    ],
    "Reducción de Potencia Seno": [
        "Reduce la potencia del seno",
        "sen²x = (1 - cos(2x))/2",
        "Convierte cuadrado en ángulo doble"
    ],
    "Reducción de Potencia Coseno": [
        "Reduce la potencia del coseno",
        "cos²x = (1 + cos(2x))/2",
        "Convierte cuadrado en ángulo doble"
    ],
    "Ley de la Tangente": [
        "Relaciona lados y ángulos",
        "(a-b)/(a+b) = tan[(A-B)/2]/tan[(A+B)/2]",
        "Útil en triángulos no rectángulos"
    ],
    "Identidad Tangente": [
        "Relaciona tangente con coseno",
        "Se deriva de la identidad pitagórica dividiendo por cos²x",
        "1 + tan²x = 1/cos²x"
    ],
    "Seno de Suma": [
        "Fórmula de adición para seno",
        "sen(a+b) = sen a·cos b + cos a·sen b",
        "El signo es positivo en ambos términos"
    ],
    "Seno de Diferencia": [
        "Fórmula de sustracción para seno",
        "sen(a-b) = sen a·cos b - cos a·sen b",
        "El segundo término tiene signo negativo"
    ],
    "Coseno de Suma": [
        "Fórmula de adición para coseno",
        "cos(a+b) = cos a·cos b - sen a·sen b",
        "El segundo término tiene signo negativo"
    ],
    "Coseno de Diferencia": [
        "Fórmula de sustracción para coseno",
        "cos(a-b) = cos a·cos b + sen a·sen b",
        "Ambos términos tienen signo positivo"
    ],
    "Seno Ángulo Doble": [
        "Caso particular de suma con a = b = x",
        "sen(2x) = 2 sen x cos x",
        "Producto de seno y coseno del mismo ángulo"
    ],
    "Coseno Ángulo Doble 1": [
        "Forma básica del ángulo doble",
        "cos(2x) = cos²x - sen²x",
        "Diferencia de cuadrados"
    ],
    "Coseno Ángulo Doble 2": [
        "Usando la identidad pitagórica",
        "cos(2x) = 2cos²x - 1",
        "Expresada solo en función de coseno"
    ],
    "Coseno Ángulo Doble 3": [
        "Usando la identidad pitagórica",
        "cos(2x) = 1 - 2sen²x",
        "Expresada solo en función de seno"
    ],
    "Paridad Seno": [
        "El seno es una función impar",
        "sen(-x) = -sen x",
        "Simetría respecto al origen"
    ],
    "Paridad Coseno": [
        "El coseno es una función par",
        "cos(-x) = cos x",
        "Simetría respecto al eje y"
    ],
    "Paridad Tangente": [
        "La tangente es una función impar",
        "tan(-x) = -tan x",
        "Simetría respecto al origen"
    ],
    "Signos por Cuadrante": [
        "I: Todas las funciones positivas",
        "II: Solo seno positivo",
        "III: Solo tangente positiva",
        "IV: Solo coseno positivo"
    ],
    "Ecuación Seno": [
        "Dos soluciones por período",
        "x = arcsen(k) + 2kπ",
        "x = π - arcsen(k) + 2kπ"
    ],
    "Ecuación Coseno": [
        "Dos soluciones simétricas",
        "x = ± arccos(k) + 2kπ",
        "Una positiva y una negativa"
    ],
    "Ecuación Tangente": [
        "Una solución por período",
        "x = arctan(k) + kπ",
        "Período de π"
    ],
    "Ley del Seno": [
        "Relaciona lados y ángulos opuestos",
        "a/sen(A) = b/sen(B) = c/sen(C)",
        "Útil cuando conoces un lado y su ángulo opuesto"
    ],
    "Ley del Coseno": [
        "Generalización del teorema de Pitágoras",
        "c² = a² + b² - 2ab cos(C)",
        "Útil cuando conoces dos lados y el ángulo incluido"
    ],
    "Ley del Coseno 2": [
        "Forma para calcular el lado a",
        "a² = b² + c² - 2bc cos(A)",
        "Útil cuando conoces los lados b, c y el ángulo A"
    ],
    "Ley del Coseno 3": [
        "Forma para calcular el lado b",
        "b² = a² + c² - 2ac cos(B)",
        "Útil cuando conoces los lados a, c y el ángulo B"
    ],
    "Amplitud Función Seno": [
        "Distancia máxima desde el eje x",
        "Amplitud = |a| en f(x) = a sen(bx)",
        "Siempre es un valor positivo"
    ],
    "Período Función Seno": [
        "Distancia para completar un ciclo",
        "Período = 2π/|b| en f(x) = a sen(bx)",
        "A mayor b, menor el período"
    ]
};

// ══════════════════════════════════════════════════════════════
// DATOS COMPLETOS DE FÓRMULAS CON EXPLICACIONES Y EJERCICIOS
// ══════════════════════════════════════════════════════════════

export const trigonometriaFormulasData = [
    {
        name: "Cosecante como Recíproca",
        formulas: ["\\csc x = \\frac{1}{\\sin x}"],
        explanation: "La cosecante se define como el inverso multiplicativo del seno. No está definida cuando sen x = 0.",
        variables: [
            "csc x: Cosecante del ángulo x",
            "sin x: Seno del ángulo x"
        ],
        example: {
            problem: "Calcular csc(30°)",
            answer: "2",
            steps: [
                "csc(30°) = 1/sen(30°)",
                "sen(30°) = 1/2",
                "csc(30°) = 1/(1/2) = 2"
            ]
        }
    },
    {
        name: "Secante como Recíproca",
        formulas: ["\\sec x = \\frac{1}{\\cos x}"],
        explanation: "La secante se define como el inverso multiplicativo del coseno. No está definida cuando cos x = 0.",
        variables: [
            "sec x: Secante del ángulo x",
            "cos x: Coseno del ángulo x"
        ],
        example: {
            problem: "Calcular sec(60°)",
            answer: "2",
            steps: [
                "sec(60°) = 1/cos(60°)",
                "cos(60°) = 1/2",
                "sec(60°) = 1/(1/2) = 2"
            ]
        }
    },
    {
        name: "Cotangente como Recíproca",
        formulas: ["\\cot x = \\frac{1}{\\tan x} = \\frac{\\cos x}{\\sin x}"],
        explanation: "La cotangente se define como el inverso de la tangente o como el cociente entre coseno y seno del mismo ángulo.",
        variables: [
            "cot x: Cotangente del ángulo x",
            "tan x: Tangente del ángulo x",
            "cos x: Coseno del ángulo x",
            "sin x: Seno del ángulo x"
        ],
        example: {
            problem: "Calcular cot(45°)",
            answer: "1",
            steps: [
                "cot(45°) = 1/tan(45°)",
                "tan(45°) = 1",
                "cot(45°) = 1/1 = 1"
            ]
        }
    },
    {
        name: "Identidad Pitagórica",
        formulas: ["\\sin^2 x + \\cos^2 x = 1"],
        explanation: "La identidad fundamental que relaciona el seno y coseno del mismo ángulo. Siempre es verdadera para cualquier ángulo x.",
        variables: [
            "sin x: Seno del ángulo x",
            "cos x: Coseno del ángulo x",
            "x: Ángulo en radianes o grados"
        ],
        example: {
            problem: "Verificar la identidad para x = 30°",
            answer: "1",
            steps: [
                "sen²(30°) + cos²(30°)",
                "sen(30°) = 1/2, cos(30°) = √3/2",
                "(1/2)² + (√3/2)²",
                "1/4 + 3/4 = 1"
            ]
        }
    },
    {
        name: "Tangente como Cociente",
        formulas: ["\\tan x = \\frac{\\sin x}{\\cos x}"],
        explanation: "La tangente se define como el cociente entre el seno y el coseno del mismo ángulo. No está definida cuando cos x = 0.",
        variables: [
            "tan x: Tangente del ángulo x",
            "sin x: Seno del ángulo x",
            "cos x: Coseno del ángulo x"
        ],
        example: {
            problem: "Calcular tan(45°)",
            answer: "1",
            steps: [
                "tan(45°) = sen(45°)/cos(45°)",
                "sen(45°) = √2/2, cos(45°) = √2/2",
                "tan(45°) = (√2/2)/(√2/2) = 1"
            ]
        }
    },
    {
        name: "Variación Pitagórica 1",
        formulas: ["1 - \\cos^2 x = \\sin^2 x"],
        explanation: "Se obtiene despejando sen²x de la identidad pitagórica. Útil cuando necesitas expresar sen²x en función de cos²x.",
        variables: [
            "sin²x: Cuadrado del seno del ángulo x",
            "cos²x: Cuadrado del coseno del ángulo x",
            "x: Ángulo en radianes o grados"
        ],
        example: {
            problem: "Si cos x = 0.6, calcular sen²x",
            answer: "0.64",
            steps: [
                "Usando 1 - cos²x = sen²x",
                "sen²x = 1 - (0.6)²",
                "sen²x = 1 - 0.36 = 0.64"
            ]
        }
    },
    {
        name: "Variación Pitagórica 2",
        formulas: ["1 - \\sin^2 x = \\cos^2 x"],
        explanation: "Se obtiene despejando cos²x de la identidad pitagórica. Útil cuando necesitas expresar cos²x en función de sen²x.",
        variables: [
            "cos²x: Cuadrado del coseno del ángulo x",
            "sin²x: Cuadrado del seno del ángulo x",
            "x: Ángulo en radianes o grados"
        ],
        example: {
            problem: "Si sen x = 0.8, calcular cos²x",
            answer: "0.36",
            steps: [
                "Usando 1 - sen²x = cos²x",
                "cos²x = 1 - (0.8)²",
                "cos²x = 1 - 0.64 = 0.36"
            ]
        }
    },
    {
        name: "Seno de Suma",
        formulas: ["\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b"],
        explanation: "Fórmula de adición que permite calcular el seno de la suma de dos ángulos en función de los senos y cosenos individuales.",
        variables: [
            "sin(a+b): Seno de la suma de ángulos",
            "sin a, sin b: Senos individuales",
            "cos a, cos b: Cosenos individuales"
        ],
        example: {
            problem: "Calcular sen(45° + 30°)",
            answer: "√6 + √2 / 4",
            steps: [
                "sen(45° + 30°) = sen(45°)cos(30°) + cos(45°)sen(30°)",
                "sen(45°) = √2/2, cos(30°) = √3/2",
                "cos(45°) = √2/2, sen(30°) = 1/2",
                "sen(75°) = (√2/2)(√3/2) + (√2/2)(1/2)",
                "sen(75°) = √6/4 + √2/4 = (√6 + √2)/4"
            ]
        }
    },
    {
        name: "Coseno de Suma",
        formulas: ["\\cos(a+b) = \\cos a \\cos b - \\sin a \\sin b"],
        explanation: "Fórmula de adición para el coseno. Note que el segundo término tiene signo negativo, a diferencia del seno de suma.",
        variables: [
            "cos(a+b): Coseno de la suma de ángulos",
            "sin a, sin b: Senos individuales",
            "cos a, cos b: Cosenos individuales"
        ],
        example: {
            problem: "Calcular cos(60° + 30°)",
            answer: "0",
            steps: [
                "cos(60° + 30°) = cos(60°)cos(30°) - sen(60°)sen(30°)",
                "cos(60°) = 1/2, cos(30°) = √3/2",
                "sen(60°) = √3/2, sen(30°) = 1/2",
                "cos(90°) = (1/2)(√3/2) - (√3/2)(1/2)",
                "cos(90°) = √3/4 - √3/4 = 0"
            ]
        }
    },
    {
        name: "Coseno de Diferencia",
        formulas: ["\\cos(a-b) = \\cos a \\cos b + \\sin a \\sin b"],
        explanation: "Fórmula de sustracción para el coseno. Note que ambos términos tienen signo positivo, a diferencia del coseno de suma.",
        variables: [
            "cos(a-b): Coseno de la diferencia de ángulos",
            "sin a, sin b: Senos individuales",
            "cos a, cos b: Cosenos individuales"
        ],
        example: {
            problem: "Calcular cos(60° - 30°)",
            answer: "√3/2",
            steps: [
                "cos(60° - 30°) = cos(60°)cos(30°) + sen(60°)sen(30°)",
                "cos(60°) = 1/2, cos(30°) = √3/2",
                "sen(60°) = √3/2, sen(30°) = 1/2",
                "cos(30°) = (1/2)(√3/2) + (√3/2)(1/2)",
                "cos(30°) = √3/4 + √3/4 = √3/2"
            ]
        }
    },
    {
        name: "Seno Ángulo Doble",
        formulas: ["\\sin(2x) = 2 \\sin x \\cos x"],
        explanation: "Caso particular de la fórmula de suma cuando a = b = x. El seno del ángulo doble es el doble del producto seno por coseno.",
        variables: [
            "sin(2x): Seno del ángulo doble",
            "sin x: Seno del ángulo original",
            "cos x: Coseno del ángulo original"
        ],
        example: {
            problem: "Calcular sen(60°) usando ángulo doble",
            answer: "√3/2",
            steps: [
                "sen(60°) = sen(2·30°) = 2 sen(30°) cos(30°)",
                "sen(30°) = 1/2, cos(30°) = √3/2",
                "sen(60°) = 2(1/2)(√3/2) = √3/2"
            ]
        }
    },
    {
        name: "Coseno Ángulo Doble",
        formulas: ["\\cos(2x) = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x"],
        explanation: "Tres formas equivalentes del coseno del ángulo doble. La elección depende de los datos disponibles.",
        variables: [
            "cos(2x): Coseno del ángulo doble",
            "cos x, sin x: Funciones del ángulo original"
        ],
        example: {
            problem: "Calcular cos(60°) usando la forma 2cos²x - 1",
            answer: "1/2",
            steps: [
                "cos(60°) = cos(2·30°) = 2cos²(30°) - 1",
                "cos(30°) = √3/2",
                "cos(60°) = 2(√3/2)² - 1",
                "cos(60°) = 2(3/4) - 1 = 3/2 - 1 = 1/2"
            ]
        }
    },
    {
        name: "Ley del Seno",
        formulas: ["\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}"],
        explanation: "Relaciona los lados de un triángulo con los senos de los ángulos opuestos. Útil para resolver triángulos no rectángulos.",
        variables: [
            "a, b, c: Longitudes de los lados",
            "A, B, C: Ángulos opuestos a los lados correspondientes"
        ],
        example: {
            problem: "En un triángulo, a = 10, A = 30°, B = 45°. Calcular b.",
            answer: "10√2",
            steps: [
                "a/sen(A) = b/sen(B)",
                "10/sen(30°) = b/sen(45°)",
                "10/(1/2) = b/(√2/2)",
                "20 = b·2/√2",
                "b = 20·√2/2 = 10√2"
            ]
        }
    },
    {
        name: "Ley del Coseno",
        formulas: ["c^2 = a^2 + b^2 - 2ab \\cos(C)", "a^2 = b^2 + c^2 - 2bc \\cos(A)", "b^2 = a^2 + c^2 - 2ac \\cos(B)"],
        explanation: "Generalización del teorema de Pitágoras para triángulos no rectángulos. Relaciona tres lados y un ángulo. Hay tres formas según el lado que se quiera calcular.",
        variables: [
            "a, b, c: Longitudes de los lados",
            "A, B, C: Ángulos opuestos a los lados correspondientes"
        ],
        example: {
            problem: "En un triángulo, a = 3, b = 4, C = 60°. Calcular c.",
            answer: "√13",
            steps: [
                "c² = a² + b² - 2ab cos(C)",
                "c² = 3² + 4² - 2(3)(4)cos(60°)",
                "c² = 9 + 16 - 24(1/2)",
                "c² = 25 - 12 = 13",
                "c = √13"
            ]
        }
    },
    {
        name: "Amplitud Función Seno",
        formulas: ["f(x) = a \\sin(bx) \\quad \\Rightarrow \\quad \\text{Amplitud} = |a|"],
        explanation: "La amplitud es la distancia máxima desde el eje x hasta el valor máximo o mínimo de la función.",
        variables: [
            "a: Coeficiente de amplitud",
            "b: Coeficiente que afecta el período",
            "Amplitud: Valor absoluto de a"
        ],
        example: {
            problem: "Calcular la amplitud de f(x) = 3 sen(2x)",
            answer: "3",
            steps: [
                "f(x) = a sen(bx) donde a = 3, b = 2",
                "Amplitud = |a| = |3|",
                "Amplitud = 3"
            ]
        }
    },
    {
        name: "Período Función Seno",
        formulas: ["f(x) = a \\sin(bx) \\quad \\Rightarrow \\quad \\text{Período} = \\frac{2\\pi}{|b|}"],
        explanation: "El período es la distancia horizontal necesaria para que la función complete un ciclo completo.",
        variables: [
            "a: Coeficiente de amplitud",
            "b: Coeficiente que afecta el período",
            "Período: 2π dividido por el valor absoluto de b"
        ],
        example: {
            problem: "Calcular el período de f(x) = 3 sen(2x)",
            answer: "π",
            steps: [
                "f(x) = a sen(bx) donde a = 3, b = 2",
                "Período = 2π/|b| = 2π/|2|",
                "Período = 2π/2 = π"
            ]
        }
    }
];

export const trigonometriaTips = conceptTips;
