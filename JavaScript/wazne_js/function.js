function test(){
        console.log('my function')
}

// test()


function addNumbers(x,y){
    console.log(x + y)
}

// addNumbers(1,2)



function odd(x1,x2){
    console.log( x1 - x2)
}

// odd(2,12)


function showName(name){
    console.log(`podaj imie to: ${name}`)
}

// showName('klaudia')


// ======= ZADANIE =======


let tab = [1,2,3,4,5,6]

for(i = 0;i < tab.length;i++){
    console.log(tab[i])
}


function abc(arg1,arg2,arg3){
    console.log(arg1+arg2*arg3)
}

abc(1,2,3)


if(tab.length > 5){
    console.log(true)
}else{
    console.log(false)
}


function combine(x){
    console.log(`Tablica z cyframi ma ${x}`)
}

combine(12)