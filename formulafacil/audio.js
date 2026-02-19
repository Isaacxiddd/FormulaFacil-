// ══════════════════════════════════════════════════════════════
// CONFIGURACIÓN DE AUDIO
// ══════════════════════════════════════════════════════════════

const audioCorrecto = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3'); 
const audioIncorrecto = new Audio('https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3');

audioCorrecto.volume = 0.5;
audioIncorrecto.volume = 0.5;
audioCorrecto.load();
audioIncorrecto.load();

function playAudio(audio) {
    audio.currentTime = 0;
    audio.play().catch(error => {
        console.log('Error reproduciendo audio:', error);
    });
}

function playAudioWithPitch(audio, streakLevel) {
    const pitchLevels = [1.0, 1.2, 1.4, 1.6, 1.8, 2.5, 3.0];
    const volumeLevels = [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9];
    
    const index = Math.min(streakLevel, pitchLevels.length - 1);
    audio.playbackRate = pitchLevels[index];
    audio.volume = volumeLevels[index];
    audio.currentTime = 0;
    
    audio.play().catch(error => console.log('Error reproduciendo audio:', error));
    audio.onended = () => {
        audio.playbackRate = 1.0;
        audio.volume = 0.5;
    };
}
