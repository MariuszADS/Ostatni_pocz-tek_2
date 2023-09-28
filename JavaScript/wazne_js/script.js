
                                        // ========== querySelectorAll =========

// const p = document.querySelector('p');
const Allp = document.querySelectorAll('p');
// console.log(Allp);

const btn = document.querySelector('#btn');
// console.log(btn);

const liItems = document.querySelectorAll('li');
// console.log(liItems);
// console.log(liItems[1]);



                                        // ========== addEventListener ==========

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
// console.log(btn1);
// console.log(btn2);


function handleClick(){
    console.log("Kliknieto przycisk 1")
}

function addNumbers(){
    console.log(2 + 2)
}

// ZMIENNA.addEventListener('event',function)

btn1.addEventListener('click',handleClick)
btn2.addEventListener('click',addNumbers)
