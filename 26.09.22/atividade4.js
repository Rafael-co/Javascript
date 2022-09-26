/*Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante*/

let letra = prompt('escreva a letra').toLowerCase()
let consoantes =['q','w','r','t','y','p','s','d','g','h','j','k','l','ç','z','x','v','b','c','b','n','m']
let vogais = ['a','e','i','o','u'];
while(letra.length > 1){
    alert("por favo escreva apenas uma letra");
    letra = prompt('escreva a letra')
}
if(consoantes.includes(letra)){
    alert("esta letra é consoante")
}
else{
    alert("esta letra é uma vogal")
}