import slider from "./blocks/slider";
import casesTabs from "./blocks/casesTabs";
import forms from "./blocks/forms";
import mask from "./blocks/mask";
import animate from "./blocks/animate";
import modals from "./blocks/modals";
import form from "./blocks/form";
import point from "./blocks/point";

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    slider();
    casesTabs();
    forms();
    mask('input[type="tel"]');
    animate();
    modals();
    form();
    point();
});