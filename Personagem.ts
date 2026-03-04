import readline from 'readline-sync'



class Jogador{
   public nome:string;
   public idade: Number;
   public classe: string;
   public habilidade1: string;
   public habilidade2:string;
   public nivel: Number;
   public vida: number;



constructor(nome: string, idade:number, classe:string, habilidade1:string, habilidade2:string, nivel:number, vida: number ){
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
    this.habilidade1 = habilidade1;
    this.habilidade2 = habilidade2;
    this.nivel = nivel;
    this.vida = vida;
}

atacar(){
   
}
defender(){

}

}
//const nomeJ = readline.question('qual teu nome?');
//const idadeJ = readline.question('')




//const Jogador1 = new Jogador(nomeJ, idadeJ, classe, habilidade1, habilidade2, 13, 3829 );

