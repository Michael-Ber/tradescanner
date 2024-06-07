export const copyToBuffer = () => {
    try {
        const data = document.querySelectorAll('.buffer');
        const dataMobile = document.querySelectorAll('.mobile-buffer');
        const infoBlock = document.querySelector('.hero-table__info');
        data.forEach(str => {
            str.addEventListener('click', (e) => {
                console.log(e.target.getBoundingClientRect().left)
                console.log(e.target.getBoundingClientRect().top)
                navigator.clipboard.writeText(str.textContent)
                .then(() => {
                    infoBlock.classList.remove('hidden');
                    infoBlock.style.top = e.target.getBoundingClientRect().top - 30 + 'px';
                    infoBlock.style.left = e.target.getBoundingClientRect().left + 50 + 'px';
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