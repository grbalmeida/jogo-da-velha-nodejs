module.exports = {
    NUMERO_MAXIMO_JOGADAS: 9,
    jogador: 'O',
    jogadas: {
        A1: ' ',
        A2: ' ',
        A3: ' ',
      
        B1: ' ',
        B2: ' ',
        B3: ' ',
      
        C1: ' ',
        C2: ' ',
        C3: ' ',
    },
    trocaJogador: function() {
        this.jogador = this.jogador === 'O' ? 'X' : 'O';
    },
    possibilidades: {
        0: ['A1', 'A2', 'A3'],
        1: ['B1', 'B2', 'B3'],
        2: ['C1', 'C2', 'C3'],
        3: ['A1', 'B1', 'C1'],
        4: ['A2', 'B2', 'C2'],
        5: ['A3', 'B3', 'C3'],
        6: ['A1', 'B2', 'C3'],
        7: ['C1', 'B2', 'A3'],
    },
    display: function() {
        return `
${this.jogadas['A1']} | ${this.jogadas['A2']} | ${this.jogadas['A3']}
---------
${this.jogadas['B1']} | ${this.jogadas['B2']} | ${this.jogadas['B3']}
---------
${this.jogadas['C1']} | ${this.jogadas['C2']} | ${this.jogadas['C3']}
`;
    },
    tem3Ocorrencias: function(coluna1, coluna2, coluna3, valor) {
        return this.jogadas[coluna1] === valor && this.jogadas[coluna2] === valor && this.jogadas[coluna3] === valor;
    },
    verificaSeTemVencedor: function() {
        // A1 == A2 == A3
        // B1 == B2 == B3
        // C1 == C2 == C3
        // A1 == B1 == C1
        // A2 == B2 == C2
        // A3 == B3 == C3
        // A1 == B2 == C3
        // C1 == B2 == A3
      
        let ganhador = undefined;
      
        Object.values(this.possibilidades).forEach(possibilidade => {
          if (this.tem3Ocorrencias(possibilidade[0], possibilidade[1], possibilidade[2], 'O')) {
            ganhador = 'O'
          }
      
          if (this.tem3Ocorrencias(possibilidade[0], possibilidade[1], possibilidade[2], 'X')) {
            ganhador = 'X'
          }
        });
      
        this.ganhador = ganhador;
    },
    numeroJogadas: function() {
        return Object.values(this.jogadas).map(v => v.trim()).filter(v => Boolean(v)).length;
    },
    joga: function(posicao) {
        this.jogadas[posicao] = this.jogador;
    }
};
