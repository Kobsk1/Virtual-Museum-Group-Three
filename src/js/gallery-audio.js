// ========================================
// ARTWORK DATA ARRAY
// ========================================
// This array contains all the artwork narrations that will be played in the gallery
// Each artwork audio object contains: audio file path

const artworkAudios = [
        "../audio/kaganapan.mp3" // Audio file path  
    ,
        "../audio/transfiguration.mp3"
    ,
        "../audio/kiss_of_judas.mp3"
    ,
        "../audio/fredesvinda.mp3"
    ,
        "../audio/sandugo_monument.mp3"
    ,
        "../audio/the_crucifix_with_double_corpora.mp3"
    ,
        "../audio/altar_of_parish_of_the_holy_sacrifice.mp3"

]

// ========================================
// PLAY ARTWORK AUDIO FUNCTION
// ========================================

let currentAudio = null; // Variable to store the currently playing audio element

function playArtworkAudio(index) {
    if (currentAudio) {
    currentAudio.pause(); // Pause the previous audio
    currentAudio.currentTime = 0; // Reset its playback position
    }

    currentAudio = new Audio(artworkAudios[index]);
    currentAudio.volume = 0.25; // Set volume to 25%
    currentAudio.play();
}

// ========================================
// STOP ARTWORK AUDIO FUNCTION
// ========================================

function stopArtworkAudio() {
    if (currentAudio) {
        currentAudio.pause(); // Pause the previous audio
        currentAudio.currentTime = 0; // Reset its playback position
        currentAudio = null;
    }
}

// Stop audio when modal is closed
document.getElementById('artworkModal').addEventListener('click', function(e) {
    if (e.target === this) {
        stopArtworkAudio(); // Stop audio when modal is closed
    }
});