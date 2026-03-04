import { Inimigos } from "./Inimigos";

export class SubChefe extends Inimigos{

    habilidade1: string;
    habilidade2: string;
    poderAumentado: number;
    esquivar: number;
    habilidadeSecreta: string;

    constructor(habilidade1: string, habilidade2: string, poderAumentado: number, esquivar: number, habilidadeSecreta: string) {
        
       
        this.habilidade1 = habilidade1;
        this.habilidade2 = habilidade2;
        this.poderAumentado = poderAumentado;
        this.esquivar = esquivar;
        this.habilidadeSecreta;

    }
    
}
