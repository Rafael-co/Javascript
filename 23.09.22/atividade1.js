/* fça um programa que leia um vetor de seis elementos , calcule e mostre:
A) a quantidade de numeros pares
B) quais os numeros pares
C) A quantidade de numeros impares
D) quais os numeros ímpares
*/
let elements =[]
let pares =[]
let impar = []
for (let i = 0; i < 6 ; i++ ){
    const msg = parseInt(prompt(`digite ${i+1}º elementos`));
    elements[i] = msg

}

    for(let num of elements){
        if(num != 0 ){
        if (num%2 == 0) {
            pares[pares.length] = num
        } 
        
        else {
        impar[impar.length] = num
        }
        
    }}
    document.write(`<p> os numeros pares são ${pares} <br> os numeros impares sao${impar}</p>`)



