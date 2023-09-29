"use strict";

/* Здесь код модального окна обратной связи на главной странице при клике на кнопку "Напишите нам"*/

const buttonOpenContacts = document.querySelector(
  ".main__about-container-link-go"
);
var modalContacts = document.querySelector(".modal__contacts");
var closeModalContacts = document.querySelector(
  ".modal__contacts-button-close"
);

buttonOpenContacts.addEventListener("click", function (goDefault) {
  goDefault.preventDefault(),
    modalContacts.classList.add("modal__contacts-opened");
}),
  closeModalContacts.addEventListener("click", function (goDefault) {
    goDefault.preventDefault(),
      modalContacts.classList.remove("modal__contacts-opened");
  }),
  window.addEventListener("keydown", function (goDefault) {
    27 === goDefault.keyCode &&
      modalContacts.classList.contains("modal__contacts-opened") &&
      (goDefault.preventDefault(),
      modalContacts.classList.remove("modal__contacts-opened"));
  });


