let aberta = false;

function abrirCarta() {
  const aba = document.querySelector('.aba');
  const mensagem = document.querySelector('.mensagem');

  if (!aberta) {
    aba.style.transform = 'rotateX(-120deg)';
    mensagem.style.opacity = '1';
    aberta = true;
  } else {
    aba.style.transform = 'rotateX(0deg)';
    mensagem.style.opacity = '0';
    aberta = false;
  }
}
