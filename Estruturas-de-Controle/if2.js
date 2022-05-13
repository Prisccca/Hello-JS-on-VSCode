function teste1 (num){
    if(num > 7) {
    console.log (num)
    console.log('Final') //sem as chaves do if a sentença não é executada
    }
}

//teste1(6)
//teste1(8)

function teste2 (num){
    if(num > 7); //não usar ponto e virgula nas estruturas de controle
    {
    console.log (num)
    }
}

teste2(6)
teste2(8)
