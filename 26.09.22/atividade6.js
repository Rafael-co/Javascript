/*6. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
P.A. contendo 10 valores.*/

const A =Number(prompt("escreva o valor Inicial"))
const R =Number(prompt("escreva o razao"))
let PA = 0
for(i=1; i<=10;i++){
    PA= A+((i-1)*R)
    document.write(`${PA}/`)
}
