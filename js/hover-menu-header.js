"use strict";

/* Здесь код, открывающий и закрывающий скрытое (изначально) меню в шапке при наведении */

const linkMenuHover = document.querySelector(".header__container-inner-bottom-link");
var changeMenuHoverHeader = document.querySelector(".header__container-inner-hover");
var changeMenuHoverHeaderGlobal = document.querySelector(".html");
var changeMenuHoverHeaderFocus = document.querySelector(".header__container-inner-hover-li-link-special");
const headerContainerInnerHoverLiLinkFocus =  document.querySelector(".header__container-inner-hover-li-link-focus");
var headerContainerInnerBottomLinkFocus =  document.querySelector(".header__container-inner-bottom-link-focus");
const headerContainerInnerBottomLinkSpecial =  document.querySelector(".header__container-inner-bottom-link-special");

linkMenuHover.onmouseover = function () {
  changeMenuHoverHeader.classList.add("header__container-inner-hover-on");
};
linkMenuHover.onmouseout = function () {
  changeMenuHoverHeader.classList.add("header__container-inner-hover-on");
};
linkMenuHover.addEventListener("focus", function () {
  changeMenuHoverHeaderFocus.focus();
});
headerContainerInnerBottomLinkSpecial.addEventListener("focus", function () {
  linkMenuHover.focus();
  changeMenuHoverHeader.classList.add("header__container-inner-hover-on");
});
changeMenuHoverHeaderGlobal.addEventListener("click", function () {
  changeMenuHoverHeader.classList.remove("header__container-inner-hover-on");
});
headerContainerInnerHoverLiLinkFocus.addEventListener("focus", function () {
  headerContainerInnerBottomLinkFocus.focus();
});
window.addEventListener("keydown", function (closeHoverMenu) {
  27 === closeHoverMenu.keyCode &&
  changeMenuHoverHeader.classList.remove("header__container-inner-hover-on");
  body.focus();
});
