let red = document.querySelector('#red');
let black = document.querySelector('#black');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
let clear = document.querySelector('#clear-board');
let vqv = document.querySelector('#generate-board');
let size = document.querySelector('#board-size');

let box = document.querySelectorAll('.pixel');

for (let i = 0; i < box.length; i++){
  box[i].addEventListener('click', function(){
    if (sessionStorage.getItem('cor') === 'red'){
      box[i].style.backgroundColor = 'red';
    } 
    else if (sessionStorage.getItem('cor') === 'black'){
      box[i].style.backgroundColor = 'black';
    } 
    else if (sessionStorage.getItem('cor') === 'green'){
      box[i].style.backgroundColor = 'green';
    } 
    else if (sessionStorage.getItem('cor') === 'blue'){
      box[i].style.backgroundColor = 'blue';
    } 
})
}

window.onload = function() {
  sessionStorage.setItem('cor', 'black');
  black.classList.add('selected');
}

red.addEventListener('click', function(){
  sessionStorage.setItem('cor', 'red');
  red.classList.add('selected');
  black.classList.remove('selected');
  green.classList.remove('selected');
  blue.classList.remove('selected');
})

black.addEventListener('click', function(){
  sessionStorage.setItem('cor', 'black');
  black.classList.add('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  blue.classList.remove('selected');
})

green.addEventListener('click', function(){
  sessionStorage.setItem('cor', 'green');
  green.classList.add('selected');
  black.classList.remove('selected');
  red.classList.remove('selected');
  blue.classList.remove('selected');
})

blue.addEventListener('click', function(){
  sessionStorage.setItem('cor', 'blue');
  blue.classList.add('selected');
  black.classList.remove('selected');
  green.classList.remove('selected');
  red.classList.remove('selected');
})

clear.addEventListener('click', function(){
  for (let j = 0; j < box.length; j++){
    box[j].style.backgroundColor = 'white';
  }
  // sessionStorage.setItem('cor', 'white');
})



