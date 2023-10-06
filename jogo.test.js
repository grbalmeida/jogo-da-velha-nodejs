const jogo = require('./jogo');

beforeEach(() => {
    jogo.jogador = 'O';
    jogo.ganhador = undefined;
    jogo.jogadas['A1'] = ' ';
    jogo.jogadas['A2'] = ' ';
    jogo.jogadas['A3'] = ' ';
    jogo.jogadas['B1'] = ' ';
    jogo.jogadas['B2'] = ' ';
    jogo.jogadas['B3'] = ' ';
    jogo.jogadas['C1'] = ' ';
    jogo.jogadas['C2'] = ' ';
    jogo.jogadas['C3'] = ' ';
});

test('TEST - A1A2A3 - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('A1');
    jogo.joga('A2');
    jogo.joga('A3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - A1A2A3 - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('A1');
    jogo.joga('A2');
    jogo.joga('A3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - B1B2B3 - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('B1');
    jogo.joga('B2');
    jogo.joga('B3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - B1B2B3 - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('B1');
    jogo.joga('B2');
    jogo.joga('B3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - C1C2C3 - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('C1');
    jogo.joga('C2');
    jogo.joga('C3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - C1C2C3 - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('C1');
    jogo.joga('C2');
    jogo.joga('C3');
    
    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - A1B1C1 - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('A1');
    jogo.joga('B1');
    jogo.joga('C1');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - A1B1C1 - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('A1');
    jogo.joga('B1');
    jogo.joga('C1');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - A2B2C2 - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('A2');
    jogo.joga('B2');
    jogo.joga('C2');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - A2B2C2 - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('A2');
    jogo.joga('B2');
    jogo.joga('C2');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - A3B3C3 - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('A3');
    jogo.joga('B3');
    jogo.joga('C3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - A3B3C3 - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('A3');
    jogo.joga('B3');
    jogo.joga('C3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - A1B2C3 - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('A1');
    jogo.joga('B2');
    jogo.joga('C3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - A1B2C3 - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('A1');
    jogo.joga('B2');
    jogo.joga('C3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - C1B2A3 - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('C1');
    jogo.joga('B2');
    jogo.joga('A3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - C1B2A3 - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('C1');
    jogo.joga('B2');
    jogo.joga('A3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - Múltiplas jogadas - Jogador O deve ser o ganhador', () => {
    jogo.jogador = 'O';
    jogo.joga('A1');
    jogo.trocaJogador();
    jogo.joga('B1');
    jogo.trocaJogador();
    jogo.joga('A2');
    jogo.trocaJogador();
    jogo.joga('B2');
    jogo.trocaJogador();
    jogo.joga('A3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});

test('TEST - Múltiplas jogadas - Jogador X deve ser o ganhador', () => {
    jogo.jogador = 'X';
    jogo.joga('A1');
    jogo.trocaJogador();
    jogo.joga('B1');
    jogo.trocaJogador();
    jogo.joga('A2');
    jogo.trocaJogador();
    jogo.joga('B2');
    jogo.trocaJogador();
    jogo.joga('A3');

    jogo.verificaSeTemVencedor();

    expect(jogo.ganhador).toBe('X');
    expect(jogo.ganhador).not.toBe('O');
});

test('TEST - Empate', () => {
    // O | X | O
    // X | O | O
    // X | O | X

    jogo.jogador = 'O';
    jogo.joga('A1');
    
    jogo.trocaJogador();
    jogo.joga('A2');

    jogo.trocaJogador();
    jogo.joga('A3');

    jogo.trocaJogador();
    jogo.joga('B1');

    jogo.trocaJogador();
    jogo.joga('B2');

    jogo.trocaJogador();
    jogo.joga('C1');

    jogo.trocaJogador();
    jogo.joga('B3');

    jogo.trocaJogador();
    jogo.joga('C2');

    jogo.trocaJogador();
    jogo.joga('C3');

    expect(jogo.ganhador).toBe(undefined);
    expect(jogo.ganhador).not.toBe('O');
    expect(jogo.ganhador).not.toBe('X');
});
