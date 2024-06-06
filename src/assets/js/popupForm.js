export const popupForm = () => {
    try {
        const form = document.querySelector('.hero-table__form');
        const inputs = form.querySelectorAll('.hero-table__input');
        const resetBtn = form.querySelector('.hero-table__btn--reset');
        const infoBlock = document.querySelector('.hero-table__info');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            infoBlock.classList.remove('hidden');
            setTimeout(() => {
                infoBlock.classList.add('hidden');
            }, 2000)
        })

        resetBtn.addEventListener('click', () => {
            inputs.forEach(input => {
                input.value = '';
                input.checked = false;
            })
        })

    } catch (error) {
        console.log(error)
    }
}