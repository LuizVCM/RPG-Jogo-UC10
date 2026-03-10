"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
class Jogador {
    constructor(nome, idade, classe, habilidade1, habilidade2, nivel, vida, dano) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.habilidade1 = habilidade1;
        this.habilidade2 = habilidade2;
        this.nivel = nivel;
        this.vida = vida;
        this.dano = dano;
    }
    atacar(ataqueJ) {
        let min = 5;
        let max = 25;
        this.dano = Math.floor(Math.random() * (max - min + 1)) + min;
        let habilidade = 0;
        if (ataqueJ === 1) {
            habilidade = 6;
            this.dano += habilidade;
        }
        else if (ataqueJ === 2) {
            habilidade = 4;
            this.dano += habilidade;
        }
        console.log(`${this.nome} atacou com ${this.dano} de dano!
            .
            .
            dado girado: ${this.dano}  (1d${max} + ${habilidade})`);
    }
    defender() {
    }
}
exports.Jogador = Jogador;
//const nomeJ = readline.question('qual teu nome?');
//const idadeJ = readline.question('')
//const Jogador1 = new Jogador(nomeJ, idadeJ, classe, habilidade1, habilidade2, 13, 3829 );
