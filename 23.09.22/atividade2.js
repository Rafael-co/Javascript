/*3) Faça um algoritmo para adicionar 20 valores em um array e depois imprima-os no HTML. Evite que o array possua valores duplicados.*/
/*
criar um loop para repetir 20x 
logica para evitar repetidos
imprimir no HTML*/

let arr =[]
for (let i = 0; i < 20;i++){
                let num =parseInt(prompt(`Digite o ${i+1}º numero`))
                while(arr.includes(num)){
                    alert("numero repetido")
                     num =parseInt(prompt(`Digite o ${i+1}º numero`))

                    
                }
              
                    arr[arr.length]=num
                    document.write(`o ${i+1}º numero é ${num}<br><br>`)
                
}

