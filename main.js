const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const jogo = require('./jogo');

async function getAnswer (prompt) {
  const answer = await new Promise((resolve, reject) => {
    rl.question(`${prompt}\n`, (answer) => {
      resolve(answer);
    })
  })
  return answer;
}

const run = async() => {
  console.log(jogo.display());

  let ganhador = undefined;

  while (jogo.numeroJogadas() != jogo.NUMERO_MAXIMO_JOGADAS) {
    console.log(`Agora e a vez do jogador ${jogo.jogador}`);
    const posicao = (await getAnswer('Posicao')).trim();

    if (jogo.jogadas[posicao] === undefined) {
      console.log('Posicao invalida');
      continue;
    }

    if (jogo.jogadas[posicao].trim() !== '') {
      console.log('Jogada ja executada');
      continue;
    }

    jogo.joga(posicao);

    jogo.trocaJogador();

    console.log(jogo.display());

    jogo.verificaSeTemVencedor();

    if (jogo.ganhador) {
      console.log(`Parabens ${jogo.ganhador}. Voce ganhou o jogo!`);
      break;
    }
  }

  rl.close();

  if (!jogo.ganhador) {
    console.log('O jogo empatou!');
  }
}

run();
