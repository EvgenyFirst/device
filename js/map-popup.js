"use strict";

/* Здесь код модального окна на главной странице при клике на карту над кнопкой "Напишите нам"*/

const buttonOpenTheMap = document.querySelector(".main__about-right-map-link");
var modalMap = document.querySelector(".modal__map");
var closeModalMap = document.querySelector(".modal__map-button-close");

buttonOpenTheMap.addEventListener("click", function (linkGoDefault) {
  linkGoDefault.preventDefault(), modalMap.classList.add("modal__map-opened");
}),
closeModalMap.addEventListener("click", function (linkGoDefault) {
  linkGoDefault.preventDefault(), modalMap.classList.remove("modal__map-opened");
  }),
window.addEventListener("keydown", function (linkGoDefault) {
  27 === linkGoDefault.keyCode &&
    modalMap.classList.contains("modal__map-opened") &&
    (linkGoDefault.preventDefault(), modalMap.classList.remove("modal__map-opened"));
});
