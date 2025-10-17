// ========================================
// ARTWORK DATA ARRAY
// ========================================
// This array contains all the artwork narrations that will be played in the gallery
// Each artwork audio object contains: title, and audio file name

const artworkAudios = [
    {
        title: "Kaganapan", // Name of the artwork
        audio: "kaganapan.mp3" // Audio file name  
    },
    {
        title: "Transfiguration",
        audio: "transfiguration.mp3"
    },
    {
        title: "Kiss of Judas",
        audio: "kiss_of_judas.mp3"
    },
    {
        title: "Fredesvinda",
        audio: "fredesvinda.mp3"
    },
    {
        title: "Sandugo Monument", // Blood compact monument (placeholder) 
        audio: "sandugo_monument.mp3"
    },
    {
        title: "The Crucifix with Double Corpora", 
        audio: "the_crucifix_with_double_corpora.mp3"
    },
    {
        title: "Altar of Parish of the Holy Sacrifice", 
        audio: "altar_of_parish_of_the_holy_sacrifice.mp3"
    }
]

// ========================================
// idk yet pang play nung audio files FUNCTION
// ========================================

function playArtworkAudio(title) {
    // Find the artwork audio object by title
    const artworkAudio = artworkAudios.find(artwork => artwork.title.toUpperCase() === title.toUpperCase());

    // Play the audio if found
    if (artworkAudio) {
        const audio = new Audio(`../audio/${artworkAudio.audio}`);
        audio.play();
    } 
    
    // Log if audio not found
    else {
        console.log("Audio not found for the artwork:", title);
    }
}