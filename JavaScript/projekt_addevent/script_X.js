const redBtn = document.querySelector('#btn1')
const blueBtn = document.querySelector('.btn2')
const square = document.querySelector('.color')
const removeColor = document.querySelector('.remove-color')

function redColor(){
    // square.classList.add('red')
    // square.classList.remove('blue')

    square.classList.toggle('red')
}

function blueColor(){
    square.classList.add('blue')
    square.classList.remove('red')
}

function deleteColor(){
    square.classList.remove('red')
    square.classList.remove('blue')
}

redBtn.addEventListener('click',redColor)
blueBtn.addEventListener('click',blueColor)
removeColor.addEventListener('click',deleteColor)