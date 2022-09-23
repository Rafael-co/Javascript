    /**Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
    normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
    para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento

    1 À vista em dinheiro ou cheque, recebe 10% de desconto
    2 À vista no cartão de crédito, recebe 15% de desconto
    3 Em duas vezes, preço normal de etiqueta sem juros
    4 Em três vezes, preço normal de etiqueta mais juros de 10%
 */

let precoProduto = parseFloat(prompt('qual o preço do produto?'));
while (isNaN(precoProduto) == true || precoProduto <= 0){
          precoProduto= parseFloat(prompt('insira um numero valido'));
}

const mensagem = 
`
informe o metodo de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento com cartao
`;

let metodoDePagamento = parseInt(prompt(mensagem))
while(metodoDePagamento >= 4 || metodoDePagamento == 0 ||isNaN(metodoDePagamento) == true ){
            alert("opção invalida")
            metodoDePagamento = parseInt(prompt(mensagem))

}
if (metodoDePagamento ==1 || metodoDePagamento ==2) {
    const precoFinal= precoProduto*0.9;

    alert(`o preço final do pagamento é ${precoFinal} reais`);
}

else if (metodoDePagamento == 3) {


      let quantas_vezes = parseInt(prompt(`gostaria de dividir em quantas vezes?`));
      if (quantas_vezes ==1){
        alert(`o valor final sera ${precoProduto * 0.85} reais`)

      }
      else if(quantas_vezes >=3){
 const preco_final_credito = parseInt( (precoProduto/quantas_vezes) *1.10)
 alert(`valor final é ${preco_final_credito} divido em ${quantas_vezes} X`)
      }
      else  {
        preco_final_credito2 = precoProduto/quantas_vezes
        alert(`o valor da parcela é ${preco_final_credito2}`)
      }
}