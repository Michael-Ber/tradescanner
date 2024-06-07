export const copyToBuffer = () => {
    try {
        const data = document.querySelectorAll('.tabcontent-hero-table__body-td');
        const dataMobile = document.querySelectorAll('.table-mobile-content__col');
        const infoBlock = document.querySelector('.hero-table__info');
        data.forEach(str => {
            str.addEventListener('click', () => {
                navigator.clipboard.writeText(str.textContent)
                .then(() => {
                    infoBlock.classList.remove('hidden');
                    setTimeout(() => {
                        infoBlock.classList.add('hidden');
                    }, 2000)
                })
            })
        })
        dataMobile.forEach(str => {
            str.addEventListener('click', () => {
                navigator.clipboard.writeText(str.textContent)
                .then(() => {
                    infoBlock.classList.remove('hidden');
                    setTimeout(() => {
                        infoBlock.classList.add('hidden');
                    }, 2000)
                })
            })
        })
    } catch (error) {
        console.log(error)
    }
}