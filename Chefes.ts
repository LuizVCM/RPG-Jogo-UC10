import { SubChefe } from "./SubChefes";

export class Chefe extends SubChefe{

    habilidadeEspecial1: string;
    habilidadeEspecial2: string;
    maisPoder: number;
    maisVida: number;

    constructor(habilidadeEspecial1: string, habilidadeEspecial2: string, maisPoder: number, maisVida: number) {
        
        super();
        this.habilidadeEspecial1 = habilidadeEspecial1;
        this.habilidadeEspecial2 = habilidadeEspecial2;
        this.maisPoder = maisPoder;
        this.maisVida = maisVida;
        

    }

}

