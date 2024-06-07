import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


gsap.registerPlugin(ScrollTrigger);

export const tableHeaderFixed = () => {
    try {
        function desktop() {
            const tableHeader = document.querySelector('.tabcontent-hero-table__head');
            const table = document.querySelector('.hero-table__tabcontent');
            const tableBody = document.querySelector('.tabcontent-hero-table__body');
    
    
            ScrollTrigger.create({
                trigger: table,
                start: 'top top',
                end: () => "+=" + tableBody.scrollHeight,
                onToggle: onToggle,
            });
            function onToggle(self) {
                if(self.isActive) {
                    tableHeader.classList.add('tabcontent-hero-table__head--fixed');
                }else {
                    tableHeader.classList.remove('tabcontent-hero-table__head--fixed');
                }
            }
        }

        desktop(); 

        function mobile() {
            const tableHeaderMob = document.querySelector('.hero-table__top');
            const tableMob = document.querySelector('.hero-table__mobile-content');
            const contents = document.querySelectorAll('.hero-table__mobile-content');
            const btns = document.querySelectorAll('.hero-table__tabitem');

            btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    contents.forEach(content => {
                        if(window.getComputedStyle(content).display === 'block') {
                            ScrollTrigger.create({
                                trigger: tableMob,
                                start: 'top top',
                                end: () => "+=" + tableMob.scrollHeight,
                                onToggle: onToggle,
                            });
                            function onToggle(self) {
                                if(self.isActive) {
                                    tableHeaderMob.classList.add('hero-table__top--fixed');
                                }else {
                                    tableHeaderMob.classList.remove('hero-table__top--fixed');
                                }
                            }
                        }
                    })
                })
            })

            
        }
        mobile()
        
    } catch (error) {
        console.log(error)
    }
}