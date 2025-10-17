// Fade in animation for award cards
document.addEventListener('DOMContentLoaded', () => {
    const awardCards = document.querySelectorAll('.award-card');
    awardCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});