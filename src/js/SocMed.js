// Fade in animation for social cards
document.addEventListener('DOMContentLoaded', () => {
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});