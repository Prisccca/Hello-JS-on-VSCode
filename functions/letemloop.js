// LET EM loop

for (let i = 0;i<10;i++){
    console.log(i)
}

//console.log('i=',i) não impresso 

//Exemplo 02
//como tem escopo de bloco ele imprime os valores apontados

let funcs =[]

for (let i=0; i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs [2]()
funcs [8]()