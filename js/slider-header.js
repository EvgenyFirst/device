"use strict";

/* Здесь код слайдера на главной странице в шапке */

var changeOneButton = document.querySelector(".header__slider-one");
var changeTwoButton = document.querySelector(".header__slider-two");
var changeThreeButton = document.querySelector(".header__slider-three");

const changeSlideOne = document.querySelector(".header__set-button-one");
const changeSlideTwo = document.querySelector(".header__set-button-two");
const changeSlideThree = document.querySelector(".header__set-button-three");

// Открывает слайд 1 start main__catalog-filter-color-ul-li-input-checked-default
changeSlideOne.addEventListener("click", function () {
  changeOneButton.classList.remove("header__slider-hidden");
  changeTwoButton.classList.add("header__slider-hidden");
  changeThreeButton.classList.add("header__slider-hidden");

  changeSlideOne.classList.add("header__set-button-default-cursor");
  changeSlideTwo.classList.remove("header__set-button-default-cursor");
  changeSlideThree.classList.remove("header__set-button-default-cursor");
});
// Открывает слайд 1 end

// Открывает слайд 2 start
changeSlideTwo.addEventListener("click", function () {
  changeOneButton.classList.add("header__slider-hidden");
  changeTwoButton.classList.remove("header__slider-hidden");
  changeThreeButton.classList.add("header__slider-hidden");

  changeSlideOne.classList.remove("header__set-button-default-cursor");
  changeSlideTwo.classList.add("header__set-button-default-cursor");
  changeSlideThree.classList.remove("header__set-button-default-cursor");
});
// Открывает слайд 2 end

// Открывает слайд 3 start
changeSlideThree.addEventListener("click", function () {
  changeOneButton.classList.add("header__slider-hidden");
  changeTwoButton.classList.add("header__slider-hidden");
  changeThreeButton.classList.remove("header__slider-hidden");

  changeSlideOne.classList.remove("header__set-button-default-cursor");
  changeSlideTwo.classList.remove("header__set-button-default-cursor");
  changeSlideThree.classList.add("header__set-button-default-cursor");
});
// Открывает слайд 3 end

// --- //
