export const table = () => {
    const tabBtns = document.querySelectorAll('.hero-table__tabitem');
    const tabMobileContents = document.querySelectorAll('.hero-table__mobile-content');
    const table = document.querySelector('.tabcontent-hero-table__body');
    const search = document.querySelector('.tabcontent-hero-table__search');
    
    window.addEventListener('resize', () => {
        if(window.innerWidth >= 992) {
            tabSwitch();
        }
    })
    tabSwitch();
    function tabSwitch() {
        tabBtns.forEach(btn => {
            removeActive();
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
                        document.querySelector(`[data-tabmobilecontent='${btn.getAttribute('data-tabBtn')}']`).classList.add('table-active')
                    }else {
                        document.querySelector(`[data-tabmobilecontent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'none';
                    }
                }else {
                    // Переключение в десктопной таблице
                    removeActive();
                    btn.classList.add('hero-table__tabitem--active');
                    if(btn.getAttribute('data-tabBtn') === 'search') {
                        table.style.display = 'none';
                        document.querySelector(`[data-tabContent=${btn.getAttribute('data-tabBtn')}]`).style.display = 'block';
                    }else {
                        table.style.display = 'block';
                        search.style.display = 'none'
                    }
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