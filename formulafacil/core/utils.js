// ══════════════════════════════════════════════════════════════
// FUNCIONES UTILITARIAS
// ══════════════════════════════════════════════════════════════

export function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatNumber(num, decimals = 2) {
    if (Number.isInteger(num)) return num;
    return parseFloat(num.toFixed(decimals));
}
