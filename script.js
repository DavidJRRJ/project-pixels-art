let red = document.querySelector('#red');
let black = document.querySelector('#black');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');

let box = document.querySelectorAll('.pixel');

for (let i = 0; i < box.length; i++){
  box[i].addEventListener('click', function(){
    if (sessionStorage.getItem('cor') === 'red') box[i].style.backgroundColor = 'red';
    else if (sessionStorage.getItem('cor') === 'black') box[i].style.backgroundColor = 'black';
    else if (sessionStorage.getItem('cor') === 'green') box[i].style.backgroundColor = 'green';
    else if (sessionStorage.getItem('cor') === 'blue') box[i].style.backgroundColor = 'blue';
})
}

red.addEventListener('click', function(){
  sessionStorage.setItem('cor', 'red');
})

black.addEventListener('click', function(){
  sessionStorage.setItem('cor', 'black');
})

green.addEventListener('click', function(){
  sessionStorage.setItem('cor', 'green');
})

blue.addEventListener('click', function(){
  sessionStorage.setItem('cor', 'blue');
})