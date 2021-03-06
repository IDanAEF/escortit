/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/es6/blocks/animate.js":
/*!**************************************!*\
  !*** ./assets/es6/blocks/animate.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function animate() {
  //mainpage promo animate
  try {
    const animField = document.querySelector('.main__promo-animate');
    animField.classList.add('anim');

    if (animField) {
      setInterval(() => {
        animField.classList.remove('anim');
        setTimeout(() => {
          animField.classList.add('anim');
        }, 1500);
      }, 23000);
    }
  } catch (e) {
    console.log(e.stack);
  } //buttons


  try {
    const defBtn = document.querySelectorAll('.button'),
          blackBtn = document.querySelectorAll('.button_black');
    defBtn.forEach(btn => {
      btn.addEventListener('mousedown', () => {
        btn.classList.add('click');
      });
      btn.addEventListener('mouseup', () => {
        btn.classList.remove('click');
      });
    });
    blackBtn.forEach(btn => {
      btn.addEventListener('mousedown', () => {
        btn.classList.add('click');
      });
      btn.addEventListener('mouseup', () => {
        btn.classList.remove('click');
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (animate);

/***/ }),

/***/ "./assets/es6/blocks/casesTabs.js":
/*!****************************************!*\
  !*** ./assets/es6/blocks/casesTabs.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function casesTabs() {
  try {
    const casesLists = document.querySelectorAll('.projects__cases-list-items'),
          casesTabs = document.querySelectorAll('.projects__cases-list-tabs span');

    function setPage() {
      let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      casesLists.forEach(item => {
        item.classList.remove('active');
      });
      casesTabs.forEach(item => item.classList.remove('active'));
      let type = casesTabs[i].getAttribute('id');
      casesTabs[i].classList.add('active');
      casesLists.forEach(item => {
        if (type == item.getAttribute('data-type')) {
          item.classList.add('active');
        }
      });
    }

    setPage();
    casesTabs.forEach((item, i) => {
      item.addEventListener('click', () => {
        setPage(i);
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (casesTabs);

/***/ }),

/***/ "./assets/es6/blocks/form.js":
/*!***********************************!*\
  !*** ./assets/es6/blocks/form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function form() {
  try {
    const forms = document.querySelectorAll('form');

    async function postData(url, data) {
      let res = await fetch(url, {
        method: "POST",
        body: data
      });
      return await res.text();
    }

    forms.forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(item);
        postData('mail.php', formData).then(res => {
          console.log(res);
        });
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./assets/es6/blocks/forms.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/forms.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function forms() {
  try {
    const formInputs = document.querySelectorAll('.form_task-field input');
    formInputs.forEach(item => {
      item.addEventListener('focusin', () => {
        item.classList.add('active');
      });
      item.addEventListener('focusout', () => {
        !item.value ? item.classList.remove('active') : '';
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/es6/blocks/mask.js":
/*!***********************************!*\
  !*** ./assets/es6/blocks/mask.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./assets/es6/blocks/modals.js":
/*!*************************************!*\
  !*** ./assets/es6/blocks/modals.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modals() {
  //mobile menu
  try {
    const headerHamburger = document.querySelector('.header__hamburger'),
          headerMenu = document.querySelector('.header__nav ul');
    window.addEventListener('click', e => {
      if (e.path.some(item => item == headerHamburger)) {
        headerMenu.classList.toggle('active');
        headerHamburger.classList.toggle('active');
      } else if (e.path.some(item => item != headerMenu || item.nodeName == 'A')) {
        headerMenu.classList.remove('active');
        headerHamburger.classList.remove('active');
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./assets/es6/blocks/point.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/point.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function point() {
  try {
    const field = document.querySelector('.promotion__tools-left'),
          cont = document.querySelector('.promotion__tools');
    let contPos = cont.getBoundingClientRect().y + window.pageYOffset;
    window.addEventListener('scroll', () => {
      if (window.screen.width >= 768 && window.pageYOffset >= contPos && window.pageYOffset <= contPos + (cont.clientHeight - cont.clientHeight * 0.25)) {
        field.style.cssText = `transform: translateY(${window.pageYOffset - contPos}px)`;
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (point);

/***/ }),

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
      return sliderItems[0].clientWidth + +window.getComputedStyle(sliderItems[0]).marginRight.replace(/[a-z??-????]/gi, '');
    }

    let curr = 0;
    sliderLine.style.width = `${itemWidth() * sliderItems.length}px`;
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
      if (startPos - e.changedTouches[0].screenX > 50) {
        curr == sliderItems.length - 1 ? curr = 0 : curr++;
        sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
      } else if (startPos - e.changedTouches[0].screenX < -50) {
        curr == 0 ? curr = sliderItems.length - 1 : curr--;
        sliderLine.style.transform = `translateX(-${curr * itemWidth()}px)`;
      }
    });
  } catch (e) {
    console.log(e.stack);
  } //active-hide slider


  try {
    const aSliderField = document.querySelectorAll('.ah-field-slider');
    aSliderField.forEach(aField => {
      const aSliderItems = aField.querySelectorAll('.ah-item-slider'),
            aSliderRight = aField.querySelector('.ah-right-slider'),
            aSliderLeft = aField.querySelector('.ah-left-slider');
      let aCurr = 0;

      function setSliderItem() {
        aSliderItems.forEach(item => item.classList.remove('active'));

        if (aCurr == 0) {
          aSliderLeft.classList.remove('active');
          !aSliderRight.classList.contains('active') ? aSliderRight.classList.add('active') : '';
        } else if (aCurr == aSliderItems.length - 1) {
          aSliderRight.classList.remove('active');
          !aSliderLeft.classList.contains('active') ? aSliderLeft.classList.add('active') : '';
        } else {
          !aSliderRight.classList.contains('active') ? aSliderRight.classList.add('active') : '';
          !aSliderLeft.classList.contains('active') ? aSliderLeft.classList.add('active') : '';
        }

        aSliderItems[aCurr].classList.add('active');
      }

      setSliderItem();
      aSliderLeft.addEventListener('click', () => {
        aCurr--;
        setSliderItem();
      });
      aSliderRight.addEventListener('click', () => {
        aCurr++;
        setSliderItem();
      });
    });
  } catch (e) {
    console.log(e.stack);
  } //create steps


  try {
    const sLevels = document.querySelectorAll('.create__slider-level'),
          sItems = document.querySelectorAll('.create__slider-item'),
          sLine = document.querySelector('.create__slider-line');
    let curr = 0;

    const setStep = function () {
      let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      sLevels.forEach(item => {
        item.classList.remove('active');
        item.classList.remove('line');
      });
      sItems.forEach(item => item.classList.remove('active'));
      curr = i;
      sLevels[curr].classList.add('active');
      sItems[curr].classList.add('active');

      for (let ind = 1; ind <= curr + 1; ind++) {
        if (sLevels[ind]) {
          sLevels[ind].classList.add('line');
        }
      }
    };

    setStep();
    sLevels.forEach((level, i) => {
      level.addEventListener('click', () => {
        setStep(i);
      });
    });
    let startPos = 0;
    sLine.addEventListener('touchstart', e => {
      startPos = e.changedTouches[0].screenX;
    });
    sLine.addEventListener('touchend', e => {
      if (startPos - e.changedTouches[0].screenX > 50) {
        curr == sItems.length - 1 ? curr = 0 : curr++;
        setStep(curr);
      } else if (startPos - e.changedTouches[0].screenX < -50) {
        curr == 0 ? curr = sItems.length - 1 : curr--;
        setStep(curr);
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
/* harmony import */ var _blocks_casesTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/casesTabs */ "./assets/es6/blocks/casesTabs.js");
/* harmony import */ var _blocks_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/forms */ "./assets/es6/blocks/forms.js");
/* harmony import */ var _blocks_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/mask */ "./assets/es6/blocks/mask.js");
/* harmony import */ var _blocks_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/animate */ "./assets/es6/blocks/animate.js");
/* harmony import */ var _blocks_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/modals */ "./assets/es6/blocks/modals.js");
/* harmony import */ var _blocks_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/form */ "./assets/es6/blocks/form.js");
/* harmony import */ var _blocks_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/point */ "./assets/es6/blocks/point.js");








'use strict';

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_casesTabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('input[type="tel"]');
  (0,_blocks_animate__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_modals__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_blocks_form__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_point__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map