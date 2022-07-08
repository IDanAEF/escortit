function point() {
    try {
        const field = document.querySelector('.promotion__tools-left'),
              cont = document.querySelector('.promotion__tools');

        let contPos = cont.getBoundingClientRect().y + window.pageYOffset;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= contPos && window.pageYOffset <= contPos + (cont.clientHeight - (cont.clientHeight * 0.25))) {
                field.style.cssText = `transform: translateY(${window.pageYOffset - contPos}px)`;
            }
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default point;