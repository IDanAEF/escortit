function casesTabs() {
    try {
        const casesLists = document.querySelectorAll('.projects__cases-list-items'),
              casesTabs = document.querySelectorAll('.projects__cases-list-tabs span');

        function setPage(i = 0) {
            casesLists.forEach(item => {
                item.classList.remove('active');
            });
            casesTabs.forEach(item => item.classList.remove('active'));

            let type = casesTabs[i].getAttribute('id');

            casesTabs[i].classList.add('active');
            casesLists.forEach(item => {
                if (type == item.getAttribute('data-type')) {
                    item.classList.add('active');
                }
            });
        }

        setPage();

        casesTabs.forEach((item, i) => {
            item.addEventListener('click', () => {
                setPage(i);
            });
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default casesTabs;