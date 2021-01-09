"use strict";

var popup = document.querySelector('.popup');
var overflow = document.querySelector('body');

function openPopup() {
  overflow.classList.add('overflow');
  popup.classList.add('open-popup');
  console.log(overflow);
}