export const table = () => {
    const tabBtns = document.querySelectorAll('.hero-table__tabitem');
    const tabMobileContents = document.querySelectorAll('.hero-table__mobile-content');

    

    window.addEventListener('resize', tabSwitch);
    tabSwitch();
    function tabSwitch() {
        tabBtns.forEach(btn => {
            tabBtns[0].classList.add('hero-table__tabitem--active')
            
            if(btn.classList.contains('hero-table__tabitem--active')) {
                if(window.innerWidth < 992) {
                }else {
                    document.querySelector(`[data-tabMobileContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'none';
                }
            }
            btn.addEventListener('click', () => {
                if(window.innerWidth < 992) {
                    // Переключение в мобильной таблице
                    removeActive();
                    btn.classList.toggle('hero-table__tabitem--active');
                    if(btn.classList.contains('hero-table__tabitem--active')) {
                        document.querySelector(`[data-tabmobilecontent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'block';
                    }else {
                        document.querySelector(`[data-tabmobilecontent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'none';
                    }
                }else {
                    // Переключение в десктопной таблице
                    removeActive();
                    btn.classList.add('hero-table__tabitem--active');
                }
                
            })
        })
    }

    function removeActive() {
        tabBtns.forEach(btn => {
            btn.classList.remove('hero-table__tabitem--active')
        })
        tabMobileContents.forEach(content => {
            content.style.display = 'none';
        })
    }


}