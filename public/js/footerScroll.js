document.addEventListener('DOMContentLoaded', function() {
    const footerContent = document.querySelector('.footer-container');

    function checkFooterInView() {
        const rect = footerContent.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Odległość dolnej krawędzi stopki od dołu okna
        const distanceFromBottom = windowHeight - rect.bottom;
        // Wysokość stopki
        const footerHeight = rect.height;

        // Gdy stopka jest w najwyższej pozycji (tylko dotyka dołu okna), opacity = 0
        // Gdy stopka jest w najniższej pozycji (cała widoczna), opacity = 0.7
        let percent = 1 - Math.min(Math.max(distanceFromBottom / footerHeight, 0), 1);
        let opacity = 0.7 * percent;

        footerContent.style.opacity = opacity;
    }

    window.addEventListener('scroll', checkFooterInView);
    window.addEventListener('resize', checkFooterInView);
    checkFooterInView();
});