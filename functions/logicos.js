//operadores lógicos

function compras (trabalho1,trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comparTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise 
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudável = !comprarSorvete //operador unário
    return { comprarSorvete , comparTv50, comprarTv32, manterSaudável}

}

console.log (compras(true,true))
console.log (compras(true,false))
console.log (compras(false,true))
console.log (compras(false,false))