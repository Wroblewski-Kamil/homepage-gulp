"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);


const topButton = document.querySelector('.upButton__js');
function GoTopButton() {
    scroll(0,0)
};
topButton.addEventListener('click', GoTopButton);


const menuButton = document.querySelector('.menu__button--js')


function expandMenu(){
const navigationList = document.querySelector('.navBar__links--js');
navigationList.classList.toggle('navBar__links--visible');
};

menuButton.addEventListener('click', expandMenu);


const dupa = document.getElementsByClassName('navBar__button--menu')
console.log(dupa)

const emojis = ['😎', '😁', '😥', '😍']