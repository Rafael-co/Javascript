/*5. Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno.*/
const ladoA =Number(prompt("escreva o lado A do triangulo"))
const ladoB =Number(prompt("escreva o lado B do triangulo"))
const ladoC =Number(prompt("escreva o lado C do triangulo"))

if(ladoA==ladoB && ladoB == ladoC){
alert("este é um triangulo equilátero")
}
else if(ladoA == ladoB){
    alert("este triangulo é isosceles")
}
else{
    alert('este triangulo é escaleno')
}

