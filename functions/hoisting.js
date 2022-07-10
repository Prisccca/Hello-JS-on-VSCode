//HOISTING

console.log('a=',a) //nao da erro , undefinied
var a =2
console.log('a=',a)

function teste(){
    console.log('a=',a) // variável içada 
    var a =2
    console.log('a=',a)

}

teste()
console.log ('a=',a)