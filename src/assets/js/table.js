export const table = () => {
    const tabBtns = document.querySelectorAll('.hero-table__tabitem');
    const tabContents = document.querySelectorAll('.hero-table__tabcontent');

    tabBtns.forEach(btn => {
        if(btn.classList.contains('hero-table__tabitem--active')) {
            document.querySelector(`[data-tabcontent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'table';
        }
        btn.addEventListener('click', () => {
            removeActive();
            btn.classList.add('hero-table__tabitem--active');
            document.querySelector(`[data-tabcontent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'table';
        })
    })

    function removeActive() {
        tabBtns.forEach(btn => {
            btn.classList.remove('hero-table__tabitem--active')
        })
        tabContents.forEach(content => {
            content.style.display = 'none';
        })
    }


}