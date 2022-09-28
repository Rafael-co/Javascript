/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */

function bhaskara(a ,b ,c){
    let delta = b**2 - 4*a*c
    let raizDelta = Math.sqrt(delta)
    let a1 = (-b +raizDelta) / (2*a)
    let a2 = (-b - raizDelta)/(2*a)
   
    return [a1 , a2]
    

}
console.log(bhaskara(1,-1,-12))