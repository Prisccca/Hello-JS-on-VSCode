//Função 

function rand({min=0,max=1000}){
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}

console.log(rand({max:50,min:40}))

const obj = {max:30,min:15}
console.log(rand(obj))

console.log(rand({min:900}))

console.log(rand({}))