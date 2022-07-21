function animate() {
    //mainpage promo animate
    try {
        const animField = document.querySelector('.main__promo-animate');

        animField.classList.add('anim');

        if (animField) {
            setInterval(() => {
                animField.classList.remove('anim');
                setTimeout(() => {
                    animField.classList.add('anim');
                }, 1500)
            }, 23000);
        }
    } catch(e) {
        console.log(e.stack);
    }

    //buttons
    try {
        const defBtn = document.querySelectorAll('.button'),
              blackBtn = document.querySelectorAll('.button_black');

        defBtn.forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.classList.add('click');
            });
            btn.addEventListener('mouseup', () => {
                btn.classList.remove('click');
            });
        });
        blackBtn.forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.classList.add('click');
            });
            btn.addEventListener('mouseup', () => {
                btn.classList.remove('click');
            });
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default animate;