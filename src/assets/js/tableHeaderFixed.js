import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


gsap.registerPlugin(ScrollTrigger);

export const tableHeaderFixed = () => {
    try {
        function desktop() {
            const tableHeader = document.querySelector('.tabcontent-hero-table__head');
            const table = document.querySelector('.hero__table');
            const tableBody = document.querySelector('.tabcontent-hero-table__body');
            const btns = document.querySelectorAll('.hero-table__tabitem');
        
            function desktopTableHeader() {
                if(tableBody.classList.contains('table--active')) {
                    ScrollTrigger.create({
                        trigger: table,
                        start: 'top top',
                        end: () => "+=" + tableBody.scrollHeight,
                        onToggle: onToggle,
                    });
                }
                btns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        ScrollTrigger.killAll();
                        if(tableBody.classList.contains('table--active')) {
                            ScrollTrigger.create({
                                trigger: table,
                                markers: true,
                                start: 'top top',
                                end: () => "+=" + tableBody.scrollHeight,
                                onToggle: onToggle,
                            });
                        }
                    })
                })
            }
            
            function onToggle(self) {
                if(self.isActive) {
                    tableHeader.classList.add('tabcontent-hero-table__head--fixed');
                    tableBody.style.marginTop = '90px';
                }else {
                    tableHeader.classList.remove('tabcontent-hero-table__head--fixed');
                    tableBody.style.marginTop = '0';
                }
            }
            desktopTableHeader();
            window.addEventListener('resize', desktopTableHeader)
        }
        desktop(); 

        function mobile() {
            const tableHeaderMob = document.querySelector('.hero-table__top');
            const tableMob = document.querySelector('.hero__img');
            const contents = document.querySelectorAll('.hero-table__mobile-content');
            const btns = document.querySelectorAll('.hero-table__tabitem');
            const wrapper = document.querySelector('.hero-table__tabs');

            function mobileTableHeader() {
                if(window.innerWidth < 992) {
                    btns.forEach(btn => {
                        btn.addEventListener('click', () => {
                            ScrollTrigger.killAll(); 
                            if(btn.getAttribute('data-tabbtn') !== 'search') {
                                contents.forEach(content => {
                                    if(content.classList.contains('table--active')) {
                                        ScrollTrigger.create({
                                            trigger: tableMob,
                                            endTrigger: content,
                                            start: 'bottom -20px',
                                            end: "bottom",
                                            onToggle: onToggle,
                                        });
                                    }
                                })
                            }
                            
                        })
                    })
                    function onToggle(self) {
                        if(self.isActive) {
                            tableHeaderMob.classList.add('hero-table__top--fixed');
                            wrapper.style.marginTop = '70px'
                        }else {
                            tableHeaderMob.classList.remove('hero-table__top--fixed');
                            wrapper.style.marginTop = '0'
                        }
                    }
                }
            }
            mobileTableHeader();
            window.addEventListener('resize', mobileTableHeader)
        }
        mobile()
        
    } catch (error) {
        console.log(error)
    }
}