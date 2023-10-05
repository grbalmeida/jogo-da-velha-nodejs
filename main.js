const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const jogadas = {
  A1: ' ',
  A2: ' ',
  A3: ' ',

  B1: ' ',
  B2: ' ',
  B3: ' ',

  C1: ' ',
  C2: ' ',
  C3: ' ',
};

const display = () => `
${jogadas['A1']} | ${jogadas['A2']} | ${jogadas['A3']}
---------
${jogadas['B1']} | ${jogadas['B2']} | ${jogadas['B3']}
---------
${jogadas['C1']} | ${jogadas['C2']} | ${jogadas['C3']}
`

const tem3Ocorrencias = (coluna1, coluna2, coluna3, valor) => {
  return jogadas[coluna1] === valor && jogadas[coluna2] === valor && jogadas[coluna3] === valor;
}

const verificaSeTemVencedor = () => {
  // A1 == A2 == A3
  // B1 == B2 == B3
  // C1 == C2 == C3
  // A1 == B1 == C1
  // A2 == B2 == C2
  // A3 == B3 == C3
  // A1 == B2 == C3
  // C1 == B2 == A3

  let ganhador = undefined;

  const possibilidades = {
    0: ['A1', 'A2', 'A3'],
    1: ['B1', 'B2', 'B3'],
    2: ['C1', 'C2', 'C3'],
    3: ['A1', 'B1', 'C1'],
    4: ['A2', 'B2', 'C2'],
    5: ['A3', 'B3', 'C3'],
    6: ['A1', 'B2', 'C3'],
    7: ['C1', 'B2', 'A3'],
  }

  Object.values(possibilidades).forEach(possibilidade => {
    if (tem3Ocorrencias(possibilidade[0], possibilidade[1], possibilidade[2], 'O')) {
      ganhador = 'O'
    }

    if (tem3Ocorrencias(possibilidade[0], possibilidade[1], possibilidade[2], 'X')) {
      ganhador = 'X'
    }
  });

  return ganhador;
}

async function getAnswer (prompt) {
  const answer = await new Promise((resolve, reject) => {
    rl.question(`${prompt}\n`, (answer) => {
      resolve(answer);
    })
  })
  return answer;
}

const run = async() => {
  console.log(display());

  const numeroJogadas = () => Object.values(jogadas).map(v => v.trim()).filter(v => Boolean(v)).length;
  let jogador = 'O';
  let ganhador = undefined;

  while (numeroJogadas() != 9) {
    console.log(`Agora e a vez do jogador ${jogador}`);
    const posicao = (await getAnswer('Posicao')).trim();

    if (jogadas[posicao] === undefined) {
      console.log('Posicao invalida');
      continue;
    }

    if (jogadas[posicao].trim() !== '') {
      console.log('Jogada ja executada');
      continue;
    }

    jogadas[posicao] = jogador;

    jogador = jogador === 'O' ? 'X' : 'O';

    console.log(display());

    ganhador = verificaSeTemVencedor();

    if (ganhador) {
      console.log(`Parabens ${ganhador}. Voce ganhou o jogo!`);
      break;
    }
  }

  rl.close();

  if (!ganhador) {
    console.log('O jogo empatou!');
  }
}

run();