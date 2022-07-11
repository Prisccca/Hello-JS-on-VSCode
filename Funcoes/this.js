//This pode variar
//xecução abaixo no browser
// this: objeto referenciado 
//function f1() { console.log(this === window)}
// retorno : undefined
//função chamada: f1() retorno: true , undefined
// document.getElementByTagName ('body')[0].onclick = f1
//retorno: f f1() {console.log(this === window)} , false
// function f2(){ console.log (this === document)} , undefined
//chamando f2() , retorno: false, undefined
// document.getElementByTagName ('body')[0].onclick = f2
//retorno: f f2() {console.log(this === window)} , false