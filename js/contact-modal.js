"use strict";

/* Здесь код модального окна обратной связи на главной странице при клике на кнопку "Напишите нам"*/

/* Открыть и закрыть форму обратной связи start */
const buttonOpenContacts = document.querySelector(".main__about-container-link-go");
var modalContacts = document.querySelector(".modal__contacts");
var closeModalContacts = document.querySelector(".modal__contacts-button-close");

var userName = document.getElementById("user-name");
var userPassword = document.getElementById("user-e-mail");

buttonOpenContacts.addEventListener("click", function (goDefault) {
  goDefault.preventDefault(),
  modalContacts.classList.add("modal__contacts-opened");
  userName.focus();
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
/* Открыть и закрыть форму обратной связи end */

/* Валидация полей start */

function checkValidateForm() {
  if (!userName.value) {
    userName.style.background = "#f6dada";
  } else {
    userName.style.background = "#ffffff";
  }

  if (!userPassword.value) {
    userPassword.style.background = "#f6dada";
  } else {
    userPassword.style.background = "#ffffff";
  }
}

/* Валидация полей  end */
