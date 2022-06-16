/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/es6/blocks/slider.js":
/*!*************************************!*\
  !*** ./assets/es6/blocks/slider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  //mainpage slider
  try {
    const sliderLine = document.querySelector('.slider-line'),
          sliderRight = document.querySelector('.slider-right'),
          sliderLeft = document.querySelector('.slider-left'),
          sliderItems = document.querySelectorAll('.slider-item');

    function itemWidth() {
      return sliderItems[0].clientWidth + +window.getComputedStyle(sliderItems[0]).marginRight.replace(/[a-zа-яё]/gi, '');
    }

    let curr = 0;
    sliderLine.style.width = `${itemWidth()}px`;
    sliderRight.addEventListener('click', () => {
      curr == sliderItems.length - 1 ? curr = 0 : curr++;
      sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
    });
    sliderLeft.addEventListener('click', () => {
      curr == 0 ? curr = sliderItems.length - 1 : curr--;
      sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
    });
    let startPos = 0;
    sliderLine.addEventListener('touchstart', e => {
      startPos = e.changedTouches[0].screenX;
    });
    sliderLine.addEventListener('touchend', e => {
      if (startPos - e.changedTouches[0].screenX > 150) {
        curr == sliderItems.length - 1 ? curr = 0 : curr++;
        sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
      } else if (startPos - e.changedTouches[0].screenX < 150) {
        curr == 0 ? curr = sliderItems.length - 1 : curr--;
        sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./assets/es6/main.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/slider */ "./assets/es6/blocks/slider.js");

'use strict';

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map