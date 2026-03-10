import { SubChefe } from "./SubChefes";

export class Chefe extends SubChefe{

    habilidadeEspecial1: string;
    habilidadeEspecial2: string;
    maisPoder: number;
    maisVida: number;

    constructor(habilidade1: string, habilidade2: string, 
        poderAumentado: number, esquivar: number, 
        habilidadeSecreta: string, nome: string, 
        vida: number, dano: number, 
        habilidadeEspecial1: string, habilidadeEspecial2: string, 
        maisPoder: number, maisVida: number ) {
        
        
        super(habilidade1, habilidade2, poderAumentado, esquivar, habilidadeSecreta, nome, vida, dano);
        this.habilidadeEspecial1 = habilidadeEspecial1;
        this.habilidadeEspecial2 = habilidadeEspecial2;
        this.maisPoder = maisPoder;
        this.maisVida = maisVida;
        

    }

}