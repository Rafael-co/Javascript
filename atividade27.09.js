/**
 *Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).
 */

 let produto ={
    nome:[],
    marca:[],
    foto:[],
    precoUnitario:[],
    estoque:[],

 }


 for (i=0;i < 15;i++){
    produto.nome.push(prompt(`Digite o nome do ${i+1}º produto`));
    produto.marca.push(prompt(`Digite a marca do(a) ${produto.nome[i]} `))
    produto.foto.push(prompt(`Insira o link da imagem do(a) ${produto.nome[i]}`))
    produto.precoUnitario.push(parseFloat(prompt(`Digite o preço do(a) ${produto.nome[i]}`)))
    produto.estoque.push(parseFloat(prompt(`Digite a quantidade no estoque do(a) ${produto.nome[i]}`)))

    document.write(`nome do produto : ${produto.nome[i]} <br> marca: ${produto.marca[i]} <br> foto: <img src="${produto.foto[i]}"> <br> preço : ${produto.precoUnitario[i]} <br> quantidade no estoque: ${produto.estoque[i]}<br> ` )


 }
