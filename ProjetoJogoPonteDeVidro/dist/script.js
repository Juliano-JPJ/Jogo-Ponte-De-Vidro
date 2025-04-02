function gerarPisoQuebrado() {
  return Math.floor(Math.random() * 3) + 1;
}

function validarEscolha(escolha) {
  return !isNaN(escolha) && escolha >= 1 && escolha <= 3;
}

function jogar() {
  let continuarJogando = true;

  while (continuarJogando) {
    let rodada = 1;
    let venceu = true;

    while (rodada <= 5) {
      let escolhaJogador = prompt(
        "Nível: " + rodada + ", escolha um vidro (1, 2 ou 3)"
      );
      escolhaJogador = Number(escolhaJogador);

      if (!validarEscolha(escolhaJogador)) {
        alert("Por favor, escolha apenas 1, 2 ou 3.");
        continue;
      }

      const pisoQuebrado = gerarPisoQuebrado();

      if (escolhaJogador === pisoQuebrado) {
        alert("O vidro quebrou, você perdeu!");
        venceu = false;
        break;
      } else {
        alert("Você passou para o próximo nível!");
      }

      rodada++;
    }

    if (venceu) {
      alert("Parabéns, você venceu o desafio!");
    }

    continuarJogando = confirm("Deseja jogar novamente?");
  }
}