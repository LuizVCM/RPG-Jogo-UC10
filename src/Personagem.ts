import readline from 'readline-sync'
import { Inimigos } from './Inimigos';



export class Jogador {
    public nome: string;
    public idade: Number;
    public classe: string;
    public habilidade1: string;
    public habilidade2: string;
    public nivel: Number;
    public vida: number;
    public dano: number;



    constructor(nome: string, idade: number, classe: string, habilidade1: string, habilidade2: string, nivel: number, vida: number, dano:number) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.habilidade1 = habilidade1;
        this.habilidade2 = habilidade2;
        this.nivel = nivel;
        this.vida = vida;
        this.dano = dano
    }
    
    atacar(ataqueJ: number) {
        let min = 5
        let max = 25
        this.dano = Math.floor(Math.random() * (max - min + 1)) + min
        let habilidade = 0
        if (ataqueJ === 1) {
            habilidade = 6
            this.dano += habilidade
        }else if(ataqueJ === 2){
            habilidade = 4
            this.dano += habilidade
        }
        console.log(`${this.nome} atacou com ${this.dano} de dano!
            .
            .
            dado girado: ${this.dano}  (1d${max} + ${habilidade})`)
            
    }
    defender() {
         
    }

}
//const nomeJ = readline.question('qual teu nome?');
//const idadeJ = readline.question('')




//const Jogador1 = new Jogador(nomeJ, idadeJ, classe, habilidade1, habilidade2, 13, 3829 );