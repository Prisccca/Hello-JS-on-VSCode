//Nome-Valor

const saudacao = "oi" //contexto léxico

function exec(){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}

const cliente ={
    nome : 'Pedro',
    idade : 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua A',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)