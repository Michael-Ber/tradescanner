export const copyToBuffer = () => {
    try {
        const data = document.querySelectorAll('.buffer');
        const dataMobile = document.querySelectorAll('.mobile-buffer');
        data.forEach(str => {
            str.addEventListener('click', (e) => {
                const infoBlock = str.querySelector('.hero-table__info');
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
                const infoBlock = str.querySelector('.hero-table__info');
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