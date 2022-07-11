// Arrow Function

//exemplo1
let dobro = function(a){
    return 2 *a
}

dobro = (a) =>{ return 2*a} //funcao arrow sempre anonima
dobro = a => 2 * a // sintaxe com apenas 1 paramtro e com retorno implicito

console.log(dobro(Math.PI))

//exemplo2

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Ola' //possui um parametro

console.log(ola())