/**
 * cria uma função responsavel para criar o alert na tela 
 */
 let contador = 0

function mostrarAlerta(e){

    
    

/**
 * o objeto document é um objeto que faz a representação do HTML do seu site dentro do Javascript
 */
  const divAlerta = document.getElementById('alerta')
  contador++
 
  /**
   * getElemntById serve para recuperar um elemento HMTL pelo seu id
    */
   /**
    * a propriedade classList retorna um array com todas as classes CSS que um elemento possui
    */
   /**
    * ClassList.add() serve para adicionar novas classes dinamincamente
    */
   console.log(divAlerta.classList)
   divAlerta.classList.add('mostrar') 
   const txt = document.getElementById('texto')
  txt.innerHTML= (` Isso é um aviso! <br>voce ja clicou ${contador} vezes`)
   

   

}


function fecharAlerta() {
    
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
    
}
const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')
/**
 * addEventListerner é um método que te permite ouvir enventos do HTML pelo Javascript
 */

btnMostrar.addEventListener('click',mostrarAlerta )
btnFechar.addEventListener('click',fecharAlerta )