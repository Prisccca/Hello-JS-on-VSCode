//Strings

const escola = "Cod3r";

console.log(escola.charAt(4)); // posição do caractere na palavra
console.log(escola.charAt(5));

console.log(escola.charCodeAt(3)); //valor na tabela ASCII
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0,3));

console.log('Escola ' .concat(escola) .concat("!")); // concatenação
console.log ('Escola '+ escola + "!"); // sinal de + concatena
console.log(escola.replace(3,'e')); //substituição

console.log('Ana, Maria,Pedro'.split(',')); //cria uma array

//Template Strings
const nome ="Priscilla";
const concatenacao = 'Olá ' + nome + '!';

console.log(concatenacao);

const template = `
       Olá
       ${nome}!`

console.log(template);

//expressoes...
console.log(`${1+1}`)

const up = s =>  s.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)



