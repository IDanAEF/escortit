function slider() {
    //mainpage slider
    try {
        const sliderLine = document.querySelector('.slider-line'),
              sliderRight = document.querySelector('.slider-right'),
              sliderLeft = document.querySelector('.slider-left'),
              sliderItems = document.querySelectorAll('.slider-item');

        function itemWidth() {
            return sliderItems[0].clientWidth + +window.getComputedStyle(sliderItems[0]).marginRight.replace(/[a-zа-яё]/gi, '');
        }

        let curr = 0;

        sliderLine.style.width = `${itemWidth()}px`;

        sliderRight.addEventListener('click', () => {
            curr == sliderItems.length - 1 ? curr = 0 : curr++;
            sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
        });

        sliderLeft.addEventListener('click', () => {
            curr == 0 ? curr = sliderItems.length - 1 : curr--;
            sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
        });

        let startPos = 0;
        
        sliderLine.addEventListener('touchstart', (e) => {
            startPos = e.changedTouches[0].screenX;
        });
    
        sliderLine.addEventListener('touchend', (e) => {
            if (startPos - e.changedTouches[0].screenX > 150) {
                curr == sliderItems.length - 1 ? curr = 0 : curr++;
                sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
            } else if (startPos - e.changedTouches[0].screenX < 150) {
                curr == 0 ? curr = sliderItems.length - 1 : curr--;
                sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
            }
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default slider;