export const popup = () => {
    try {
        function heroPopup() {
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
        }
        heroPopup()

        function headerPopup() {
            const trigger = document.querySelector('.header__user');
            const user = trigger.querySelector('.header-user__login');
            const popup = document.querySelector('.header__popup');

            trigger.addEventListener('click', () => {
                popup.classList.toggle('hidden');
                if(popup.classList.contains('hidden')) {
                    user.style.color = '#ffffff';
                }else {
                    user.style.color = '#40acff';
                }
            })
        }
        headerPopup()
        
    } catch (error) {
        console.log(error)
    }
    
}