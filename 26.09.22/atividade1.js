/*1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;*/
let altura =[];
let maior = 0;
let menor = Infinity;
    for(i=0; i<15;i++){
            let dado = parseFloat(prompt(`Qual a altura da ${i+1}º pessoa?`))
            altura.push(dado);
    }
for(let varr of altura){
        if(varr > maior){
            maior = varr
        }
         if(varr < menor){
            menor=varr;
         }
}