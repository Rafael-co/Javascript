/*Faça um programa em Javascript que leia um vetor com dez números reais, calcule e mostre a quantidade
de números negativos e a soma dos números positivos desse vetor.*/

/* 
uma variavel para captar 10 valores
mostrar a quantidade de  positivos
mostrar a quantidade de numeros negativos 
somar os numeros negativos
 somar os numeros positivos 

*/
let numReais = []
let numNeg = []
let somaNeg = 0
let somaPos = 0
let numePo = []

for (let i = 0; i<20;i++ ){
    let num = Number(prompt(`Digite o ${i+1}º numero`))
    numReais[numReais.length] = num

}
for(let valor of numReais){
                if(valor >= 0){
                    numePo[numePo.length]= valor
                    somaPos += valor

                }
                else{
                    numNeg[numNeg.length] = valor
                    somaNeg+= valor
                }
}
document.write(`<p>A quantidade de numeros negativos é ${numNeg.length} e sua soma é ${somaNeg} <br>A quantidade de numeros positivos é ${numePo.length} e sua soma é ${somaPos}</p>`)