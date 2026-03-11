"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubChefe = void 0;
const Inimigos_1 = require("./Inimigos");
class SubChefe extends Inimigos_1.Inimigos {
    constructor(habilidade1, habilidade2, poderAumentado, esquivar, habilidadeSecreta, nome, vida, dano) {
        super(nome, vida, dano);
        this.habilidade1 = habilidade1;
        this.habilidade2 = habilidade2;
        this.poderAumentado = poderAumentado;
        this.esquivar = esquivar;
        this.habilidadeSecreta = habilidadeSecreta;
    }
}
exports.SubChefe = SubChefe;
