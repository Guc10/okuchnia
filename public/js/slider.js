document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden';

    const footer = document.querySelector('footer');

    let opacity = 0;
    let offset = 0;
    const minOffset = 0;
    const maxOffset = 240;

    function setFooterOffset(value) {
        offset = Math.max(minOffset, Math.min(maxOffset, value));
        footer.style.transform = `translateY(-${offset}px)`;
        opacity = offset / maxOffset - 0.25;
        footer.style.backgroundColor = `rgba(35,31,32,${opacity})`;
        if(opacity > 0.425) {
            footer.style.color = '#e7dfd8';
            console.log("wiecej niz 0.5");
        }else{
            footer.style.color = '#231f20';
            console.log("mniej niz 0.5");
        }
    }

    // scroll
    window.addEventListener('wheel', (e) => {
        setFooterOffset(offset + e.deltaY * 0.1);
    });
});