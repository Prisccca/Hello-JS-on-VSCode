//Operador Destructuring - novo recurso do ES2015

//01
const pessoa={
    nome :'Ana',
    idade :15,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const{nome,idade} = pessoa
console.log(nome, idade)

const {nome: n, idade:i} =pessoa
console.log(n,i)

const {sobrenome,bemhumorada = true} = pessoa
console.log(sobrenome,bemhumorada)

const { endereco: {logradouro,numero,cep}} =pessoa
console.log(logradouro,numero,cep)
