let valor //não iniciada
console.log(valor) //undefined

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro

const produto ={}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

//evite atribuir undefined
produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)

