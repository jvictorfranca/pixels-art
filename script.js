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
adicionaCor('yellow');

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
      pixel.style.backgroundColor = 'white';
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

const corPreta = document.querySelector('div#color-palette div');
corPreta.className += ' selected';

const botaoCor = document.querySelectorAll('div#color-palette div');

function selecionaCor(event) {
  for (let index = 0; index < botaoCor.length; index += 1) {
    botaoCor[index].className = 'color';
  }
  event.target.className = 'color selected';
}

for (let index = 0; index < botaoCor.length; index += 1) {
  botaoCor[index].addEventListener('click', selecionaCor);
}

function colorePixel(event) {
  const corSelecionada = document.querySelector('div.selected');
  event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
  console.log(event.target.style.backgroundColor);
  console.log(corSelecionada.style.backgroundColor);
}

const pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', colorePixel);
}
