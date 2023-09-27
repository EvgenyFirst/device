"use strict";

/* Здесь код, открывающий скрытое меню в шапке при наведении */

const linkMenuHover = document.querySelector(".header__container-inner-bottom-link");
var changeMenuHoverHeader = document.querySelector(".header__container-inner-hover");
var changeMenuHoverHeaderGlobal = document.querySelector(".html");

linkMenuHover.onmouseover = function () {
  changeMenuHoverHeader.classList.add("header__container-inner-hover-on");
};
linkMenuHover.onmouseout = function () {
  changeMenuHoverHeader.classList.add("header__container-inner-hover-on");
};
changeMenuHoverHeaderGlobal.addEventListener("click", function () {
  changeMenuHoverHeader.classList.remove("header__container-inner-hover-on");
});
