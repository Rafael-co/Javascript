//Demilitação de Strings

const aspasSimples ='ola, mundo'

//caractere de escapa
const aspasDuplas = "olá  \n mundo"   // o \n quebra a linha de uma variavel

console.log(aspasDuplas)

// texto com crase
const textoComCrase = `sou \n uma
 variavel`                                   //variavel com crase permite quebra o texto de qualquer forma
console.log(textoComCrase)

//metodos das strings
 
const texto =" cenoura é LARANJA, laranja e laranja"

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.concat(" deu bom"))

console.log(texto.substring(5, 10)) // ele corta a string a partir d indice colocado

console.log(texto.startsWith(' ')) // ele verifica se a string incia com o txto entre parenteses e retorna true oi false

console.log(texto.trim());