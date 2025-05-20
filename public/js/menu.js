document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('nav');

    function bumpNav(){
        menu.style.animation = 'none';
        void menu.offsetWidth;
        menu.style.animation = 'bump 0.4s ease-out';
    }

    function showNav() {
        container.classList.add('show-nav');
    }

    function hideNav() {
        container.classList.remove('show-nav');
    }

    function handleMouseLeave(e) {
        if (!menu.matches(':hover') && !nav.matches(':hover')) {
            hideNav();
        }
    }

    menu.addEventListener('mouseenter', showNav);
    nav.addEventListener('mouseenter', showNav);

    menu.addEventListener('mouseleave', handleMouseLeave);
    nav.addEventListener('mouseleave', handleMouseLeave);

    menu.addEventListener('click', bumpNav);
});
