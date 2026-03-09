

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
      const danoD: number = this.dano
      // Sorteio de ataque
      let min:number = 1
      let max:number = danoD
      let dano:number = Math.floor(Math.random() * (max - min + 1)) + min

    return dano;
  }
  

}



