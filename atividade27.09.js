/**
 *Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).
 */
let produtos = []

 let produto ={
    nome:'',
    marca:'',
    foto:'',
    precoUnitario:0,
    estoque:0,

 }


 for (i = 0;i < 15;i++){
    produto.nome=(prompt(`Digite o nome do ${i+1}º produto`));
    produto.marca=(prompt(`Digite a marca do(a) ${produto.nome} `))
    produto.foto=(prompt(`Insira o link da imagem do(a) ${produto.nome}`))
    produto.precoUnitario=(parseFloat(prompt(`Digite o preço do(a) ${produto.nome}`)))
    produto.estoque=(parseInt(prompt(`Digite a quantidade no estoque do(a) ${produto.nome}`)))
    produtos.push(produto)

    document.write(`nome do produto : ${produtos[i].nome} <br> marca: ${produtos[i].marca} <br> foto: <img src="${produtos[i].foto}"> <br> preço :R$ ${produtos[i].precoUnitario} <br> quantidade no estoque: ${produtos[i].estoque}<br> ` )


 }
