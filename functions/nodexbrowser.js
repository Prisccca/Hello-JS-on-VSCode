let a =1 

global.b=123
this.c=456

this.d =false
this.e ='teste'

console.log(this.a)
console.log(global.a) //equivale ao window no browser
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variável sem var let - NAO FAÇA
abc=3
console.log(global.abc)

//module.exports = { e: 456, f: false, g: 'teste' }