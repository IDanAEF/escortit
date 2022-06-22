function modals() {
    //mobile menu
    try {
        const headerHamburger = document.querySelector('.header__hamburger'),
              headerMenu = document.querySelector('.header__nav ul');

        window.addEventListener('click', (e) => {
            if (e.path.some(item => item == headerHamburger)) {
                headerMenu.classList.toggle('active');
                headerHamburger.classList.toggle('active');
            } else if (e.path.some(item => item != headerMenu || item.nodeName == 'A')) {
                headerMenu.classList.remove('active');
                headerHamburger.classList.remove('active');
            }
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default modals;