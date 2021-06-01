let paleta = document.querySelector('div#color-palette')
function adicionaCor(cor){
  let botaoCor = document.createElement('div')
  botaoCor.className = 'color'
  // botaoCor.className += cor
  botaoCor.style.backgroundColor = cor
  botaoCor.style.border = 'solid black 1px'
  botaoCor.style.display = 'inline-block'
  paleta.appendChild(botaoCor)
}

adicionaCor('black')
adicionaCor('red')
adicionaCor('blue')


let n = 5

let quadro = document.querySelector('div#pixel-board')

let tamanho = 200/n
tamanho = tamanho.toString()
tamanho += 'px'

function criaQuadro(n){
  quadro.innerHTML = null
  for (let index = 0; index < n ; index+=1 ){
    let linha = document.createElement('div')
    for(let index2 = 0 ; index2<n ; index2++){
      let pixel = document.createElement('div')
      pixel.className = 'pixel'
      pixel.style.display = 'inline-block'

      pixel.style.height = tamanho
      pixel.style.width = tamanho
      console.log(tamanho)
      linha.appendChild(pixel)
    }
    linha.style.height = tamanho
    quadro.appendChild(linha)
  }
}
criaQuadro(n)







