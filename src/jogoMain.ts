import readline from 'readline-sync'
import { Jogador } from "./Personagem";
import { Inimigos } from "./Inimigos";
import { SubChefe } from "./SubChefes";
import { Chefe } from "./Chefes";
import { Inventario } from "./inventario";
import { Itens } from "./inventario";

// Perguntas
const nomeJ = readline.question("Me diga o seu nome de Jogador: ")

const idadeJ = Number(readline.question("Qual a sua idade de Jogador? "))
const classeJ = readline.question("Me diga a sua classe: ")
const hab1 = readline.question("Me diga qual é a sua primeira habilidade: ")
const hab2 = readline.question("Me diga qual a sua segunda habilidade: ")
let inventario1 = new Inventario();

// Cria jogador
let Jogador1 = new Jogador(nomeJ, idadeJ, classeJ, hab1, hab2, 5, 105)

// Cria inimigos normais
const Creeper = new Inimigos("Creeper", 40, 26)
const Esqueleto = new Inimigos("Esqueleto", 20, 15)
const Harpia = new Inimigos("Harpia", 15, 9)
const Gigante = new Inimigos("Gigante", 70, 40)
const Zombie = new Inimigos("Zombie", 50, 20)
const Minotauro = new Inimigos("Minotauro", 69, 25)
const Aranha = new Inimigos("Aranha de 7 patas", 35, 10)

// Cria Subchefes
let Ciclope = new SubChefe("Raio laser", "Fogo", 10, 8, "Ataque de árvore", "Ciclope", 90, 45)
let Cidy = new SubChefe("Garras sangrentas", "Rugido sonolento", 20, 60, "Abraço explosivo", "Cid", 100, 30)
let Enderman = new SubChefe("Encarada mortal", "Bloco de grama", 35, 10, "Olho do ender", "Enderman", 90, 40)

// Cria Chefe
let Kraken = new Chefe("Mil tentáculos", "Tsunami", 55, 100, "Cruzeiro nevoso", "Kraken", 300, 60, "Tentáculo Chicote", "Tentáculo Giratório", 10, 50)

// enredo part one

// história aos poucos
async function historia(texto: string, velocidade: number = 80) {
    let acumuladoo: string = "";
    for (const char of texto) {
        acumuladoo += char;
        console.log(acumuladoo);

        // cria uma promessa que resove após o tempo definido
        await new Promise<void>((resolve) => setTimeout(resolve, velocidade));
    }
}
historia(`Olá, caro jogador... vejo que se perdeu aqui nesta ilha, não é mesmo?
    Qual o seu nome? ... ${Jogador1.nome}, certo? Nome legal...
    Enfim, eu me chamo Frodo, vivo nessas terras há muito tempo... você nem sabe o que esperar nessa densa floresta. Eu posso te guiar, a minha casa não fica tão longe daqui. 
    .
    .
    .
    .
    .
    .
    .
    [Entraram na casa de Frodo]
    Vejo que está cansado, pode descansar no sofá em sua frente.
    Está com fome? eu fiz a janta.
    .
    .
    .
    [${Jogador1.nome} e Frodo janta em sua mesa...]
    .
    De onde você é? 
    `)
console.log(`
        
        Você tem 2 escolhas: 
        1: Eu venho de uma terra distante e bem povoada. Vim para cá para poder encontrar os tesouros que encontro nessas florestas, mas acabei me perdendo...

        2: Eu acabei vindo para cá sem querer e me perdi. Vim de uma batalha anterior e não sei como sair daqui...
         
        `)
const resposta1 = Number(readline.question("Escolha a sua alternativa: (1 ou 2)"));
while (resposta1 != 1 || 2) {
    const resposta1 = Number(readline.question("Escolha a sua alternativa: (1 ou 2)"))
}
if (resposta1 === 1) {
    historia(" Eu venho de uma terra distante e bem povoada. Vim para cá para poder encontrar os tesouros que encontro nessas florestas, mas acabei me perdendo...", 100)
} else if (resposta1 == 2) {
    historia("Eu acabei vindo para cá sem querer e me perdi. Vim de uma batalha anterior e não sei como sair daqui...", 100)
}

// alt + shift + f = formatar o código (ajeitar)

historia(`Nossa, deve estar bem desesperado... né? Bom, tenho alguns armamentos aqui... vem aqui para ver.
    .
    .
    .
    .
    .
    .
    .
[Eles chegam até as armas]
    .
    Vamos lá, para o teu porte físico eu encontrei esses 5 itens. Escolha 1 deles.

    
    `)
const resposta2 = Number(readline.question(`Você vê 5 itens à sua frente. Escolha 1 deles:
        
        1: tocha
        2: poção de envenenamento
        3: armadura
        4: arco em flecha
        5: shuriken
        `))

while (![1, 2, 3, 4, 5].includes(resposta2)) {

    const resposta2 = Number(readline.question(`\n\nVocê vê 5 itens à sua frente. Escolha 1 deles:
        
        1: tocha
        2: poção de envenenamento
        3: armadura
        4: arco em flecha
        5: shuriken
        `))

}
switch (resposta2) {
    case 1:
        const tocha = new Itens(["tocha"], "Tocha")
        inventario1.adicionarItem(tocha);
        break;

    case 2:
        const pocaoEnvenena = new Itens(["Poção de envenenamento"], "Poção de veneno")
        inventario1.adicionarItem(pocaoEnvenena);
        break;
    case 3:
        const armadura = new Itens(["armadura"], "armadura")
        inventario1.adicionarItem(armadura);
        break;
    case 4:
        const arcoFlexa = new Itens(["Arco e flecha"], "Arco e flecha")
inventario1.adicionarItem(arcoFlexa);
break;


}



