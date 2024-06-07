import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


gsap.registerPlugin(ScrollTrigger);

export const tableHeaderFixed = () => {
    try {
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
    } catch (error) {
        console.log(error)
    }
}