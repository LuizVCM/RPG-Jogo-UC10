

export class Inimigos {
    nome: string;
    vida: number;
    dano: number;


    constructor(nome: string, vida: number,dano: number) {
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
        

    }

    atacar() {
    console.log(`${this.nome} atacou causando ${this.dano} de dano!`);
  }

}



