/*Criar um programa que pergunte quantos produtos um cliente pegou e depois peça para que ele informe
o preço de cadaCrie produto. Ao recuperar possuir o valor de cada produto, faça a soma total da compra e
informe o maior e o menor preço que foi informado.*/
const qntdDeProdutos = parseInt(prompt(`informe a quantidade de produtos`))

const precosProdutos =[];
let maior = 0
let menor = precosProdutos[0];

for (let i = 0; i< qntdDeProdutos; i++){
    let preco = parseFloat(prompt(`informe o valor do ${i+1}º produto`))
    precosProdutos[i]= preco;
}

let soma = 0
for (let preco of precosProdutos){
   soma+=preco

    if(preco < menor){
        menor= preco
    }
    if(preco > maior){
        maior=preco
    }
  }
  document.write("esse e o maior" + maior + " e esse e o menor " + menor);


