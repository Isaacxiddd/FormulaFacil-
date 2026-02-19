// ══════════════════════════════════════════════════════════════
// SISTEMA DE AUDIO
// ══════════════════════════════════════════════════════════════

let audioCorrecto = null;
let audioIncorrecto = null;

export { audioCorrecto, audioIncorrecto };

export function initAudio() {
    audioCorrecto = new Audio('audio/correcto.mp3');
    audioIncorrecto = new Audio('audio/incorrecto.mp3');
}

export function playAudio(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play().catch(e => console.log('Audio play failed:', e));
    }
}

export function playAudioWithPitch(audioElement, streakLevel) {
    if (!audioElement) return;
    
    try {
        audioElement.currentTime = 0;
        
        // Aumentar velocidad/pitch según racha
        const playbackRate = Math.min(1 + (streakLevel * 0.05), 2.0);
        audioElement.playbackRate = playbackRate;
        
        audioElement.play().catch(e => console.log('Audio play failed:', e));
    } catch (e) {
        console.log('Audio pitch modification failed:', e);
        playAudio(audioElement);
    }
}
