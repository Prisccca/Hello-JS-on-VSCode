//Estrutura de Repetição - while

function getInteiroAleatorioEntre(min, max){
    const valor= Math.random() * (max-min) + min
    return Math.floor (valor)
}

let opcao = 0 // nao pode usar -1 se nao nao entra na repetição

while ( opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log (`Opção escolhida foi ${opcao}.`)
}

console.log ('Até a próxima! ')