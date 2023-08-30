"use strict";

/* Здесь код слайдера с услугами компании на главной странице */

var changeOneButton = document.querySelector(".main__card-slide-one");
var changeTwoButton = document.querySelector(".main__card-slide-two");
var changeThreeButton = document.querySelector(".main__card-slide-three");

var changeOneButtonAdd = document.querySelector(".main__card-button-special-one");
var changeTwoButtonAdd = document.querySelector(".main__card-button-special-two");
var changeThreeButtonAdd = document.querySelector(".main__card-button-special-three");

var changeOneButtonAddOne = document.querySelector(".main__card-container-button-special-p-one");
var changeTwoButtonAddTwo = document.querySelector(".main__card-button-special-two");
var changeThreeButtonAddThree = document.querySelector(".main__card-container-button-special-p-three");

var changeSlideOne = document.querySelector(".main__card-button-one");
var changeSlideTwo = document.querySelector(".main__card-button-two");
var changeSlideThree = document.querySelector(".main__card-button-three");

// Открывает слайд 1 start
changeSlideOne.addEventListener("click", function () {
  changeOneButton.classList.remove("main__card-hidden");
  changeTwoButton.classList.add("main__card-hidden");
  changeThreeButton.classList.add("main__card-hidden");

  changeSlideOne.classList.add("main__card-container-button-active");
  changeSlideTwo.classList.remove("main__card-container-button-active");
  changeSlideThree.classList.remove("main__card-container-button-active");
});
// Открывает слайд 1 end

// Открывает слайд 2 start
changeSlideTwo.addEventListener("click", function () {
  changeOneButton.classList.add("main__card-hidden");
  changeTwoButton.classList.remove("main__card-hidden");
  changeThreeButton.classList.add("main__card-hidden");

  changeTwoButtonAdd.classList.add("main__card-container-button-special-active");
  changeOneButtonAdd.classList.remove("main__card-container-button-special-active");

  changeSlideOne.classList.remove("main__card-container-button-active");
  changeSlideTwo.classList.add("main__card-container-button-active");
  changeSlideThree.classList.remove("main__card-container-button-active");
});
// Открывает слайд 2 end

// Открывает слайд 3 start
changeSlideThree.addEventListener("click", function () {
  changeOneButton.classList.add("main__card-hidden");
  changeTwoButton.classList.add("main__card-hidden");
  changeThreeButton.classList.remove("main__card-hidden");

  changeOneButtonAdd.classList.remove("main__card-container-button-special-active");
  changeOneButtonAddOne.classList.remove("main__card-container-button-special-p-active");
  changeThreeButtonAdd.classList.remove("main__card-container-button-special");
  changeThreeButtonAddThree.classList.add("main__card-container-button-special-p-active");

  changeSlideOne.classList.remove("main__card-container-button-active");
  changeSlideTwo.classList.remove("main__card-container-button-active");
  changeSlideThree.classList.add("main__card-container-button-active");
});
// Открывает слайд 3 end
