"use strict";

/* Здесь код слайдера с услугами компании на главной странице */

var changePriceOneButton = document.querySelector(".main__card-slide-one");
var changePriceTwoButton = document.querySelector(".main__card-slide-two");
var changePriceThreeButton = document.querySelector(".main__card-slide-three");

var changePriceOneButtonAdd = document.querySelector(".main__card-button-special-one");
var changePriceTwoButtonAdd = document.querySelector(".main__card-button-special-two");
var changePriceThreeButtonAdd = document.querySelector(".main__card-button-special-three");

var changePriceOneButtonAddOne = document.querySelector(".main__card-container-button-special-p-one");
var changePriceTwoButtonAddTwo = document.querySelector(".main__card-container-button-special-p-two");
var changePriceThreeButtonAddThree = document.querySelector(".main__card-container-button-special-p-three");

var changePriceSlideOne = document.querySelector(".main__card-button-one");
var changePriceSlideTwo = document.querySelector(".main__card-button-two");
var changePriceSlideThree = document.querySelector(".main__card-button-three");

// Открывает слайд 1 start
changePriceSlideOne.addEventListener("click", function () {
  changePriceOneButton.classList.remove("main__card-hidden");
  changePriceTwoButton.classList.add("main__card-hidden");
  changePriceThreeButton.classList.add("main__card-hidden");

  changePriceOneButtonAdd.classList.add("main__card-container-button-special-active");
  changePriceOneButtonAddOne.classList.add("main__card-container-button-special-p-active");
  changePriceTwoButtonAdd.classList.add("main__card-container-button-special");
  changePriceTwoButtonAddTwo.classList.remove("main__card-container-button-special-p-active");
  changePriceThreeButtonAdd.classList.add("main__card-container-button-special");
  changePriceThreeButtonAddThree.classList.remove("main__card-container-button-special-p-active");

  changePriceSlideOne.classList.add("main__card-container-button-active");
  changePriceSlideTwo.classList.remove("main__card-container-button-active");
  changePriceSlideThree.classList.remove("main__card-container-button-active");
});
// Открывает слайд 1 end

// Открывает слайд 2 start
changePriceSlideTwo.addEventListener("click", function () {
  changePriceOneButton.classList.add("main__card-hidden");
  changePriceTwoButton.classList.remove("main__card-hidden");
  changePriceThreeButton.classList.add("main__card-hidden");

  changePriceOneButtonAdd.classList.remove("main__card-container-button-special-active");
  changePriceOneButtonAddOne.classList.remove("main__card-container-button-special-p-active");
  changePriceTwoButtonAdd.classList.remove("main__card-container-button-special");
  changePriceTwoButtonAddTwo.classList.add("main__card-container-button-special-p-active");
  changePriceThreeButtonAdd.classList.add("main__card-container-button-special");
  changePriceThreeButtonAddThree.classList.remove("main__card-container-button-special-p-active");

  changePriceSlideOne.classList.remove("main__card-container-button-active");
  changePriceSlideTwo.classList.add("main__card-container-button-active");
  changePriceSlideThree.classList.remove("main__card-container-button-active");
});
// Открывает слайд 2 end

// Открывает слайд 3 start
changePriceSlideThree.addEventListener("click", function () {
  changePriceOneButton.classList.add("main__card-hidden");
  changePriceTwoButton.classList.add("main__card-hidden");
  changePriceThreeButton.classList.remove("main__card-hidden");

  changePriceOneButtonAdd.classList.remove("main__card-container-button-special-active");
  changePriceOneButtonAddOne.classList.remove("main__card-container-button-special-p-active");
  changePriceTwoButtonAdd.classList.add("main__card-container-button-special");
  changePriceTwoButtonAddTwo.classList.remove("main__card-container-button-special-p-active");
  changePriceThreeButtonAdd.classList.remove("main__card-container-button-special");
  changePriceThreeButtonAddThree.classList.add("main__card-container-button-special-p-active");

  changePriceSlideOne.classList.remove("main__card-container-button-active");
  changePriceSlideTwo.classList.remove("main__card-container-button-active");
  changePriceSlideThree.classList.add("main__card-container-button-active");
});
// Открывает слайд 3 end
