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

        sliderLine.style.width = `${itemWidth() * sliderItems.length}px`;

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
            if (startPos - e.changedTouches[0].screenX > 50) {
                curr == sliderItems.length - 1 ? curr = 0 : curr++;
                sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
            } else if (startPos - e.changedTouches[0].screenX < -50) {
                curr == 0 ? curr = sliderItems.length - 1 : curr--;
                sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
            }
        });
    } catch(e) {
        console.log(e.stack);
    }

    //about slider
    try {
        const aSliderItems = document.querySelectorAll('.about__slider-item'),
              aSliderRight = document.querySelector('.about__slider-arrows-item.right'),
              aSliderLeft = document.querySelector('.about__slider-arrows-item.left');

        let aCurr = 0;

        function setSliderItem() {
            aSliderItems.forEach(item => item.classList.remove('active'));
            if (aCurr == 0) {
                aSliderLeft.classList.remove('active');
                !aSliderRight.classList.contains('active') ? aSliderRight.classList.add('active') : '';
            } else if (aCurr == aSliderItems.length - 1) {
                aSliderRight.classList.remove('active');
                !aSliderLeft.classList.contains('active') ? aSliderLeft.classList.add('active') : '';
            } else {
                !aSliderRight.classList.contains('active') ? aSliderRight.classList.add('active') : '';
                !aSliderLeft.classList.contains('active') ? aSliderLeft.classList.add('active') : '';
            }
            aSliderItems[aCurr].classList.add('active');
        }

        setSliderItem();

        aSliderLeft.addEventListener('click', () => {
            aCurr--;
            setSliderItem();
        });

        aSliderRight.addEventListener('click', () => {
            aCurr++;
            setSliderItem();
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default slider;