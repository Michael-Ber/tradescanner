export const popup = () => {
    try {
        function heroPopup() {
            const btns = document.querySelectorAll('[data-popup]');
            const popups = document.querySelectorAll('.hero-table__popup');
            const closeBtns = document.querySelectorAll('.hero-table__popup-close');
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

            closeBtns.forEach(btn => {
                btn.addEventListener('click', closeAll);
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
            const userSvg = trigger.querySelector('.header-user__svg').children;
            const popup = document.querySelector('.header__popup');
            trigger.addEventListener('click', () => {
                popup.classList.toggle('hidden');
                if(popup.classList.contains('hidden')) {
                    user.style.color = '#ffffff';
                    Array.from(userSvg).forEach(path => {
                        path.style.fill = '#ffffff'
                    })
                }else {
                    user.style.color = '#40acff';
                    Array.from(userSvg).forEach(path => {
                        path.style.fill = '#40acff';
                    })
                }
            })
        }
        headerPopup()

        function cookiesPopup() {
            const cookies = document.querySelector('.cookies');
            const closeCookies = document.querySelector('.cookies__close');

            closeCookies.addEventListener('click', () => {
                cookies.style.display = 'none';
            })
        }

        cookiesPopup()
        
    } catch (error) {
        console.log(error)
    }
    
}