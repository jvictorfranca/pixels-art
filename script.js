const paleta = document.querySelector('div#color-palette');
function adicionaCor(cor) {
  const botaoCor = document.createElement('div');
  botaoCor.className = 'color';
  botaoCor.style.backgroundColor = cor;
  botaoCor.style.display = 'inline-block';
  paleta.appendChild(botaoCor);
}
adicionaCor('black');
adicionaCor('red');
adicionaCor('blue');
adicionaCor('yellow');


function generateRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = `#${randomColor}`;
  return color;
}
// fonte: https://css-tricks.com/snippets/javascript/random-hex-color/


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
      linha.appendChild(pixel);
    }
    linha.style.height = tamanho;
    quadro.appendChild(linha);
  }
}
criaQuadro(n);

const corPreta = document.querySelector('div#color-palette div');
corPreta.className += ' selected';

let botaoCor = document.querySelectorAll('div#color-palette div');

function selecionaCor(event) {
  let botaoCor = document.querySelectorAll('div#color-palette div');
  for (let index = 0; index < botaoCor.length; index += 1) {
    botaoCor[index].className = 'color';
  }
  event.target.className = 'color selected';
}

function funcionaCor() {
  let botaoCor = document.querySelectorAll('div#color-palette div')
  for (let index = 0; index < botaoCor.length; index += 1) {
    botaoCor[index].addEventListener('click', selecionaCor);
  }
}

funcionaCor()

function colorePixel(event) {
  const corSelecionada = document.querySelector('div.selected');
  event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
}

function pixeisColoriveis() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', colorePixel);
  }
}

pixeisColoriveis();

const botaoClear = document.querySelector('button#clear-board');

function limpaBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

botaoClear.addEventListener('click', limpaBoard);

function corrigeMaxMin(valor) {
  let answer;
  if (valor < 5) {
    answer = 5;
  } else if (valor > 50) {
    answer = 50;
  } else { answer = valor; }
  return answer;
}

const input = document.querySelector('#board-size');
const butInput = document.querySelector('#generate-board');

function refazQuadro() {
  const numeral = input.value;

  if (input.value === '') { alert('Board inválido!'); } else {
    const corrigido = corrigeMaxMin(numeral);
    criaQuadro(corrigido);
    pixeisColoriveis();
  }
}

butInput.addEventListener('click', refazQuadro);


//Adiciona saves Por aqui

//Primeiro A função salva a matriz que está na borda em formato de uma array
function salvaMatriz() {
  let matriz = document.querySelectorAll('.pixel')
  let array = [];
  for (let index = 0; index < matriz.length ; index += 1){
    array.push(matriz[index].style.backgroundColor)
  }
  return array
}

//Essa função reconstroi a função dada uma array no board
function reconstoiMatriz(array){
  let n = (array.length) ** (0.5) 
  criaQuadro(n);
  let pixels = document.querySelectorAll('.pixel')
  for (let index = 0; index < array.length; index +=1){
    pixels[index].style.backgroundColor = array[index]
  }
}

//Essa função faz funcionar os botões, ou seja, da event list para todos
//Está aqui porque precisa para funções futuras

function funcionaBotão () {
  let botoesStorage = document.querySelectorAll('.save')
  for (let index = 0; index < botoesStorage.length; index+=1){
    botoesStorage[index].addEventListener('click', refazMatriz)}
  }

  //Essa função cria uma divisão com o innertext do salve pelo imput quando se clica num botão
  // Nota-se que usa o localStorage para salvar o array da matriz que está no quadro
  // Por ultimo faz a função funcionaBotão, ou seja, faz aquele botão criado funcional
function criaSalve(){
  let input = document.querySelector('#saveinput')
  let saves = document.querySelector('#salvar')
  if (input.value.length === 0) {alert('Ponha um nome')}
  else {
    let array = salvaMatriz() 
    localStorage[input.value] = JSON.stringify(array)

    let div = document.createElement('div')
    div.className = 'save'
    div.innerText = input.value
    input.value = ''
    saves.appendChild(div)
  }
  funcionaBotão()
}

// Aqui só faz o event listener do criaSalve para criar quando clica no botão Salvar
let botaoSalvar = document.querySelector('#salve')

botaoSalvar.addEventListener('click', criaSalve)



// Essa função cria os botões no site quando carrega, já do localStorage (não clicando igual a ultima)
// Nota-se que o innerText dos botões agora é a key da localStorage localStorage.key(index)
function criaBotoesStorage(){
  let saves = document.querySelector('#salvar')
  for (let index = 0; index < localStorage.length ; index+=1){
    let div = document.createElement('div')
    div.innerText = localStorage.key(index)
    div.className = 'save'
    saves.appendChild(div)
  }
  funcionaBotão()
}

criaBotoesStorage()


//Essa ultima função basicamente cria uma array do localStorage com o split(',') ; que faz a string quebrar em array em cada vírgula (,).
//Nota-se que o event só serve para pegar o innerText da div salve e pesquisa-la no localStorage . É o valor para essa key (innerText da div) que será splitado.
//Por fim usa a primeira função a partir da array feita
function refazMatriz(event){
  let codigo = event.target.innerText
  let array = JSON.parse(localStorage[codigo])
reconstoiMatriz(array)
pixeisColoriveis()
}



function adicionaCorInput(event) {
  const botaoCor = document.createElement('div');
  const inputGerar = document.querySelector('#generate-input')
  botaoCor.className = 'color';
  botaoCor.style.backgroundColor = inputGerar.value;
  console.log(event.target.value)
  botaoCor.style.display = 'inline-block';
  paleta.appendChild(botaoCor);
  funcionaCor()
}

let botaoInput = document.querySelector('#generate-button')

botaoInput.addEventListener('click', adicionaCorInput)
