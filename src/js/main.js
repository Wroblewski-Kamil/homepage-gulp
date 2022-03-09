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

// nauka

const emojis = ['😎', '😁', '😥', '😍','🤗','🤐','🤐','🤐'];
console.log(emojis);
emojis.push('🤐');
console.log(emojis);

for(let emoji of emojis){
  console.log(`element: ${emoji}`)
}



for(let i = 0; i < emojis.length; i++){
  console.log(`i: ${i}`);
  console.log(`element ${i+1}: ${emojis[i]}`);
}
console.log('done');


let a = 8;
console.log(--a);
console.log(a);

console.log(a++);
console.log(a);


while (a > 0) {
  a--;
  console.log(a);
};

console.log(a);



do{
  a = a + 3;
  console.log(a);
} while (a < 9);



const person = {
  name: 'kamil',
  age:22
}

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}




document.cookie = "testoweCiastko = wartość";
console.log(document.cookie)