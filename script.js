function alterarCor() {
  var semaforo = document.getElementById('semaforo');
  if (semaforo.classList.contains('vermelho')) {
    semaforo.classList.add('verde');
    semaforo.classList.remove('vermelho');
  } else if (semaforo.classList.contains('verde')) {
    semaforo.classList.add('amarelo');
    semaforo.classList.remove('verde');
  } else if (semaforo.classList.contains('amarelo')) {
    semaforo.classList.add('vermelho');
    semaforo.classList.remove('amarelo');
  }
}

var botaoAltera = document.getElementById('alterar');
botaoAltera.onclick = alterarCor;
