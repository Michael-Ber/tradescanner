export const popupForm = () => {
    try {
        const form = document.querySelector('.hero-table__form');
        const inputs = form.querySelectorAll('.hero-table__input');
        const resetBtn = form.querySelector('.hero-table__btn--reset');
        

        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })

        resetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            inputs.forEach(input => {
                input.value = '';
                input.checked = false;
            })
        })

    } catch (error) {
        console.log(error)
    }
}