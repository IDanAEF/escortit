function forms() {
    try {
        const formInputs = document.querySelectorAll('.form_task-field input');

        formInputs.forEach(item => {
            item.addEventListener('focusin', () => {
                item.classList.add('active');
            });

            item.addEventListener('focusout', () => {
                !item.value ? item.classList.remove('active') : '';
            });
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default forms;