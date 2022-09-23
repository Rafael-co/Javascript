const qntdDeNumeros = parseInt(prompt(`quantos numeros sera digitados?`))
let soma = 0

for (let i= 1;i<= qntdDeNumeros;i++){
            let num = parseInt(prompt(`digite o ${i} numero`));
             soma = soma + num;

        
}

document.write(`a soma é ${soma} e a media é ${soma/qntdDeNumeros}`)