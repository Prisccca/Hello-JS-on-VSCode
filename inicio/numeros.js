const peso1 = 1.0;
const peso2 = Number('2.2');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //mostra se a variavel é ou não um interiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const  total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);

console.log(media.toFixed(2)); // fixa o numero de casas decimais
console.log(media.toString(2)); //converte para binario

//Cuidados em Number

console.log(7/0); //numeros por zero nao geram erro
console.log("10"/2); // operação matemarica ignorando a string , apenas com numeros inteiros
console.log("Show"*2);
console.log(0.1+0.7);

