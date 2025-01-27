document.addEventListener('DOMContentLoaded', () => {
    // Ajustement des hauteurs de la timeline
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const duration = parseInt(item.getAttribute('data-duration'), 10);
        const baseHeight = 20; // Hauteur minimale en pixels
        const heightPerMonth = 10; // Pixels par mois
        const totalHeight = baseHeight + duration * heightPerMonth;
        item.style.height = `${totalHeight}px`;
    });
});
