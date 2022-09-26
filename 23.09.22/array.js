/**
 * Arrays ou vetores é um tipo especial que te permite armazenar diversos valores
 * em apenas um local
 * sempre que vc pedir para mostra um valor do array que seja maior q seu tamanho o r esultado sera undefined
 */
//criando um array
/*let arr = new Array();
let arr2 = new Array(5);

*/

/*let arr = [10 , 15,9.8,'eu ou um texto dentro de uma array',false, true,false ];
let teste = 51465456
console.log(arr[5])
arr[5]='novo item'
console.log(arr[5])
console.log(teste[4])*/
const lista=['joao','maria','paulo','rodolfo','jessica']
const lista2=['teste'] 
console.log(lista)
lista.push('aria') // adiciona um elemento ao final da array
console.log(lista)
lista.unshift('luiz');
console.log(lista);
lista.pop() //remove o ultimo elemento da lista
console.log(lista)
lista.shift() //remove o primeiro elemento da lista
console.log(lista)
console.log(lista.concat(lista2))// cria um array adicionando o valor passado para ele
console.log(lista.join('->'))

