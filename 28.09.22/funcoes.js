/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/**
 * parametros
 * sao valores que passamos para as funções, para q elas utilizem esses valores dentro delas
 *  
 */
//passar um valor como parametro para mostra-lo dentro do alert

function cumprimentar(mensagem){
    alert(mensagem);
}
/*cumprimentar('ola,mundo');
cumprimentar('eu gosto de javascript')
cumprimentar('viego sola a GWEN');*/

function soma (num,num2){
    
    return num+num2
}
function maiorValor(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
    }

let resultado = soma(4 , 7)
console.log(resultado);
console.log(maiorValor(5, 10))
