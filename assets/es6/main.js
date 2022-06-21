import slider from "./blocks/slider";
import casesTabs from "./blocks/casesTabs";
import forms from "./blocks/forms";
import mask from "./blocks/mask";
import animate from "./blocks/animate";

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    slider();
    casesTabs();
    forms();
    mask('input[type="tel"]');
    animate();
});