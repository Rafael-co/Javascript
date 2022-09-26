/*2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial*/

const num = parseInt(prompt("Escreva uma numero para fatoração"))
let variacao = num
let fato = num

for(let i=1; i < num;i++){
   variacao = variacao-1
   fato=fato*variacao

   
}

document.write(`a fatoração de ${num} é ${fato}`)