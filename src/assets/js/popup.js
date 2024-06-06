export const popup = () => {
    try {
        const btns = document.querySelectorAll('[data-popup]');
        const popups = document.querySelectorAll('.hero-table__popup');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                closeAll();
                document.querySelector(`[data-popup-content = ${btn.getAttribute('data-popup')}]`).classList.toggle('hidden');
            })
        })

        window.addEventListener('click', (e) => {
            if(e.target.classList.contains('hero-table__popup')) {
                closeAll()
            }
        })

        function closeAll() {
            popups.forEach(popup => {
                popup.classList.add('hidden');
            })
        }
    } catch (error) {
        console.log(error)
    }
    
}