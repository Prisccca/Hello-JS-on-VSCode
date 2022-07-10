// VAR em Loop

for (var i = 0;i<10;i++){
    console.log(i)
}
console.log('i=',i)

//Exemplo 02
//por var nao ter escopo de bloco só impri o mesmo valor
var funcs =[]

for (var i=0; i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs [2]()
funcs [8]()