// ════════════════════════════════════════════════════════════
// SISTEMA DE AUDIO
// ════════════════════════════════════════════════════════════════

let audioCorrecto = null;
let audioIncorrecto = null;

export { audioCorrecto, audioIncorrecto };

export function initAudio() {
    audioCorrecto = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');
    audioIncorrecto = new Audio('https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3');
    
    audioCorrecto.volume = 0.5;
    audioIncorrecto.volume = 0.5;
    
    audioCorrecto.load();
    audioIncorrecto.load();
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
        const pitchLevels = [1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.5, 3.0];
        const volumeLevels = [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0];
        
        const index = Math.min(streakLevel, pitchLevels.length - 1);
        audioElement.playbackRate = pitchLevels[index];
        audioElement.volume = volumeLevels[index];
        
        audioElement.play().catch(e => console.log('Audio pitch modification failed:', e));
    } catch (e) {
        console.log('Audio pitch modification failed:', e);
        playAudio(audioElement);
    }
}
