const paleta = document.querySelector('div#color-palette');
function adicionaCor(cor) {
  const botaoCor = document.createElement('div');
  botaoCor.className = 'color';
  // botaoCor.className += cor
  botaoCor.style.backgroundColor = cor;
  botaoCor.style.border = 'solid black 1px';
  botaoCor.style.display = 'inline-block';
  paleta.appendChild(botaoCor);
}

adicionaCor('black');
adicionaCor('red');
adicionaCor('blue');

const n = 5;

const quadro = document.querySelector('div#pixel-board');

let tamanho = 200 / n;
tamanho = tamanho.toString();
tamanho += 'px';

function criaQuadro(numero) {
  quadro.innerHTML = null;
  for (let index = 0; index < numero; index += 1) {
    const linha = document.createElement('div');
    for (let index2 = 0; index2 < numero; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.display = 'inline-block';

      pixel.style.height = tamanho;
      pixel.style.width = tamanho;
      console.log(tamanho);
      linha.appendChild(pixel);
    }
    linha.style.height = tamanho;
    quadro.appendChild(linha);
  }
}
criaQuadro(n);
