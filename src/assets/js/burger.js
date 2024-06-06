export const burger = () => {
    try {
        const burger = document.querySelector('.burger');
        const header = document.querySelector('.header');
        const burgerBtn = document.querySelector('.burger__btn');
        const menu = document.querySelector('.burger__menu');
        const body = document.querySelector('.page__body');
        const links = document.querySelectorAll('.burger__item');
        const account = header.querySelector('.header__account');
        const imgHeroSection = document.querySelector('.hero__img')

        burgerBtn.addEventListener('click', () => {
            menu.classList.toggle('burger__menu--active');
            burgerBtn.classList.toggle('burger__btn--active');
            account.classList.toggle('hidden');
            if(imgHeroSection) {
                imgHeroSection.classList.toggle('hidden');
            }
            burger.classList.toggle('align-right');
            if(burgerBtn.classList.contains('burger__btn--active')) {
                burgerBtn.setAttribute('aria-expanded', true);
            }else {
                burgerBtn.setAttribute('aria-expanded', false);
            }
            if(!menu.classList.contains('burger__menu--active')) {
                body.classList.remove('page__body--scroll-unable');
                menu.setAttribute('aria-hidden', true)
            }else {
                menu.setAttribute('aria-hidden', false)
                body.classList.add('page__body--scroll-unable');
            }
        })
        window.addEventListener('resize', closeBurger)
        window.addEventListener('scroll', () => {
            if(menu.classList.contains('burger__menu--active')) {
                body.classList.add('page__body--scroll-unable');
            }else {
                body.classList.remove('page__body--scroll-unable');
            }
        })
        links.forEach(item => {
            item.addEventListener('click', closeBurger)
        })

        function closeBurger() {
            menu.classList.remove('burger__menu--active');
            burgerBtn.classList.remove('burger__btn--active');
            body.classList.remove('page__body--scroll-unable');
            account.classList.remove('hidden');
            burger.classList.remove('align-right');
            if(imgHeroSection) {
                imgHeroSection.classList.remove('hidden');
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}