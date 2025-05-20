document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    const slider = document.querySelector('.scrollThing');

    let scrollPosition = 0;
    let opacity = 0;
    let offset = 0;
    const minOffset = 0;
    const maxOffset = 240;

    function playBumpAnimation() {
        slider.style.animation = 'none';
        void slider.offsetWidth;
        slider.style.animation = 'bump 0.7s ease-out';
    }

    function setFooterOffset(value) {
        const prevOffset = offset;
        offset = Math.max(minOffset, Math.min(maxOffset, value));
        footer.style.transform = `translateY(-${offset}px)`;

        opacity = offset / maxOffset - 0.25;
        footer.style.backgroundColor = `rgba(35,31,32,${opacity})`;

        scrollPosition = offset / maxOffset * 25;
        slider.style.transform = `translateY(${scrollPosition}%)`;

        if(opacity > 0.425) {
            footer.style.color = '#e7dfd8';
        }else{
            footer.style.color = '#231f20';
        }

        if ((value < minOffset && prevOffset === minOffset) || (value > maxOffset && prevOffset === maxOffset)) {
            playBumpAnimation();
        }
    }

    // scroll
    window.addEventListener('wheel', (e) => {
        setFooterOffset(offset + e.deltaY * 0.1);
    });
});