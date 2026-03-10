"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chefe = void 0;
const SubChefes_1 = require("./SubChefes");
class Chefe extends SubChefes_1.SubChefe {
    constructor(habilidade1, habilidade2, poderAumentado, esquivar, habilidadeSecreta, nome, vida, dano, habilidadeEspecial1, habilidadeEspecial2, maisPoder, maisVida) {
        super(habilidade1, habilidade2, poderAumentado, esquivar, habilidadeSecreta, nome, vida, dano);
        this.habilidadeEspecial1 = habilidadeEspecial1;
        this.habilidadeEspecial2 = habilidadeEspecial2;
        this.maisPoder = maisPoder;
        this.maisVida = maisVida;
    }
}
exports.Chefe = Chefe;
