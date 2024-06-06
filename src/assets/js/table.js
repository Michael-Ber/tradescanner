export const table = () => {
    const tabBtns = document.querySelectorAll('.hero-table__tabitem');
    const tabContents = document.querySelectorAll('.hero-table__tabcontent');
    const tabMobileContents = document.querySelectorAll('.hero-table__mobile-content');

    

    window.addEventListener('resize', tabSwitch);
    tabSwitch();
    function tabSwitch() {
        tabBtns.forEach(btn => {
            if(btn.classList.contains('hero-table__tabitem--active')) {
                if(window.innerWidth < 992) {
                    document.querySelector(`[data-tabMobileContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'block';
                    document.querySelector(`[data-tabContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'none';
                }else {
                    document.querySelector(`[data-tabContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'table';
                    document.querySelector(`[data-tabMobileContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'none';
                }
            }
            btn.addEventListener('click', () => {
                removeActive();
                if(window.innerWidth < 992) {
                    btn.classList.add('hero-table__tabitem--active');
                    document.querySelector(`[data-tabMobileContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'table';
                }else {
                    btn.classList.add('hero-table__tabitem--active');
                    document.querySelector(`[data-tabContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'table';
                }
                
            })
        })
    }

    function removeActive() {
        tabBtns.forEach(btn => {
            btn.classList.remove('hero-table__tabitem--active')
        })
        tabContents.forEach(content => {
            content.style.display = 'none';
        })
        tabMobileContents.forEach(content => {
            content.style.display = 'none';
        })
    }


}