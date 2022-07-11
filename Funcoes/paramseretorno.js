//Parametros e retorno são opcionais

function area (largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log( `Valor acima do permitido" : ${area}m2.` )
    } else {
        return area
    }
}
console.log(area(2,20))
console.log(area(2))
console.log(area())
console.log(area(2,20,17,32))
console.log(area(6,6))
