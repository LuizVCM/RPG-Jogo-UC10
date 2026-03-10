"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inimigos = void 0;
class Inimigos {
    constructor(nome, vida, dano) {
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
    }
    atacar() {
        const danoD = this.dano;
        // Sorteio de ataque
        let min = 1;
        let max = danoD;
        let dano = Math.floor(Math.random() * (max - min + 1)) + min;
        return dano;
    }
}
exports.Inimigos = Inimigos;
