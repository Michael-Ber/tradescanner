/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burger: () => (/* binding */ burger)
/* harmony export */ });
const burger = () => {
  try {
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const burgerBtn = document.querySelector('.burger__btn');
    const menu = document.querySelector('.burger__menu');
    const body = document.querySelector('.page__body');
    const links = document.querySelectorAll('.burger__item');
    const account = header.querySelector('.header__account');
    const imgHeroSection = document.querySelector('.hero__img');
    burgerBtn.addEventListener('click', () => {
      menu.classList.toggle('burger__menu--active');
      burgerBtn.classList.toggle('burger__btn--active');
      account.classList.toggle('hidden');
      imgHeroSection.classList.toggle('hidden');
      burger.classList.toggle('align-right');
      if (burgerBtn.classList.contains('burger__btn--active')) {
        burgerBtn.setAttribute('aria-expanded', true);
      } else {
        burgerBtn.setAttribute('aria-expanded', false);
      }
      if (!menu.classList.contains('burger__menu--active')) {
        body.classList.remove('page__body--scroll-unable');
        menu.setAttribute('aria-hidden', true);
      } else {
        menu.setAttribute('aria-hidden', false);
        body.classList.add('page__body--scroll-unable');
      }
    });
    window.addEventListener('resize', closeBurger);
    window.addEventListener('scroll', () => {
      if (menu.classList.contains('burger__menu--active')) {
        body.classList.add('page__body--scroll-unable');
      } else {
        body.classList.remove('page__body--scroll-unable');
      }
    });
    links.forEach(item => {
      item.addEventListener('click', closeBurger);
    });
    function closeBurger() {
      menu.classList.remove('burger__menu--active');
      burgerBtn.classList.remove('burger__btn--active');
      body.classList.remove('page__body--scroll-unable');
      account.classList.remove('hidden');
      burger.classList.remove('align-right');
      imgHeroSection.classList.remove('hidden');
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/table.js":
/*!********************************!*\
  !*** ./src/assets/js/table.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   table: () => (/* binding */ table)
/* harmony export */ });
const table = () => {
  const tabBtns = document.querySelectorAll('.hero-table__tabitem');
  const tabContents = document.querySelectorAll('.hero-table__tabcontent');
  const tabMobileContents = document.querySelectorAll('.hero-table__mobile-content');
  window.addEventListener('resize', tabSwitch);
  tabSwitch();
  function tabSwitch() {
    tabBtns.forEach(btn => {
      if (btn.classList.contains('hero-table__tabitem--active')) {
        if (window.innerWidth < 992) {
          document.querySelector(`[data-tabMobileContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'block';
          document.querySelector(`[data-tabContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'none';
        } else {
          document.querySelector(`[data-tabContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'table';
          document.querySelector(`[data-tabMobileContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'none';
        }
      }
      btn.addEventListener('click', () => {
        removeActive();
        if (window.innerWidth < 992) {
          btn.classList.add('hero-table__tabitem--active');
          document.querySelector(`[data-tabMobileContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'table';
        } else {
          btn.classList.add('hero-table__tabitem--active');
          document.querySelector(`[data-tabContent='${btn.getAttribute('data-tabBtn')}']`).style.display = 'table';
        }
      });
    });
  }
  function removeActive() {
    tabBtns.forEach(btn => {
      btn.classList.remove('hero-table__tabitem--active');
    });
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
    tabMobileContents.forEach(content => {
      content.style.display = 'none';
    });
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.js */ "./src/assets/js/burger.js");
/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.js */ "./src/assets/js/table.js");


window.addEventListener('DOMContentLoaded', () => {
  (0,_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger)();
  // table();   
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map