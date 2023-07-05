let vermelho = document.getElementById('vermelho');
let preto = document.getElementById('preto');
let laranja = document.getElementById('laranja');
let produtoImagem = document.getElementsByTagName('img')[0];
let btnCor = document.querySelector('.btn-compra');


vermelho.addEventListener('click' , () => {
  produtoImagem.setAttribute('src', 'https://i.postimg.cc/fb9LsZk2/image2.png');
  btnCor.style.backgroundColor = '#e6404d';
});

laranja.addEventListener('click' , () => {
  produtoImagem.setAttribute('src', 'https://i.postimg.cc/J0P7xzdn/image3.png');
  btnCor.style.backgroundColor = '#fe7427';
})

preto.addEventListener('click' , () => {
  produtoImagem.setAttribute('src', 'https://i.postimg.cc/m2fSW2Dq/pngwing.png');
  btnCor.style.backgroundColor = 'black';
})