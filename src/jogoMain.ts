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
let Jogador1 = new Jogador(nomeJ, idadeJ, classeJ, hab1, hab2, 5, 105, 0)

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

async function historia(texto: string, velocidade: number = 65) {
    let acumuladoo: string = "";
    for (const char of texto) {
        acumuladoo += char;
        console.log(acumuladoo);

        // cria uma promessa que resove após o tempo definido
        await new Promise<void>((resolve) => setTimeout(resolve, velocidade));
    }
}

let respostaJogador = true
async function main() {
    while (respostaJogador === true) {

        await historia(`Olá, caro jogador... vejo que se perdeu aqui nesta ilha, não é mesmo?
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
    [${Jogador1.nome} e Frodo janta em sua mesa...]
    .
    De onde você é? 
    `)
        console.log(`
        
        Você tem 2 escolhas: 
        1: Eu venho de uma terra distante e bem povoada. Vim para cá para poder encontrar os tesouros que encontro nessas florestas, mas acabei me perdendo...

        2: Eu acabei vindo para cá sem querer e me perdi. Vim de uma batalha anterior e não sei como sair daqui...
         
        `)
        let resposta1: number = Number(readline.question("Escolha a sua alternativa: (1 ou 2)"));
        while (resposta1 != 1 && resposta1 != 2) {
             resposta1 = Number(readline.question("Escolha a sua alternativa: (1 ou 2)"))
        }
        if (resposta1 === 1) {
            await historia(" Eu venho de uma terra distante e bem povoada. Vim para cá para poder encontrar os tesouros que encontro nessas florestas, mas acabei me perdendo...", 100)
        } else if (resposta1 === 2) {
            await historia("Eu acabei vindo para cá sem querer e me perdi. Vim de uma batalha anterior e não sei como sair daqui...", 100)
        }

        // alt + shift + f = formatar o código (ajeitar)

        await historia(`Nossa, deve estar bem desesperado... né? Bom, tenho alguns armamentos aqui... vem aqui para ver.
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
        let resposta2: number = Number(readline.question(`Voce ve 5 itens a sua frente. Escolha 1 deles:
        
        1: tocha
        2: pocao de envenenamento
        3: armadura
        4: arco em flecha
        5: shuriken
        `))

        while (![1, 2, 3, 4, 5].includes(resposta2)) {

            resposta2 = Number(readline.question(`\n\nVoce ve 5 itens a sua frente. Escolha 1 deles:
        
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

        await historia(`Ótima escolha. Agora você possui o ${inventario1} para te ajudar em sua aventura!
    .
    .
    .
    Aqui você tem muita área para explorar... deixa-me ver o que você tem para essa aventura...
    .
    .
    .
    [Frodo analisa com caltela o ${Jogador1.nome} e tira suas belas conclusões]
    .
    .
    .
    Percebi que você tem uma bela espada bem moderna, só precisa afiar um pouco mais. A sua roupa é bem quente e revestida para lugares escuros com perigos... e olha só... ainda possui uma lanterna!!!!!!!
    .
    .
    .
    [Frodo se aproxima de seu armário ultra-secreto]
    .
    .
    Pegue, aqui está o mapa da região. Percebi que você veio de muito longe, ent é preciso que você saia daqui através de um barco encontrado na direção sudeste da área. Mas cuidado, há muitas ameaças estranhas e perigosas pelo caminho, mas tenho certeza que você irá conseguir!!!!!!! Tome mais um item para a viagem!
    `)

        let sorteio1: number;
        let min1: number = 1;
        let max1: number = 5;

        // sorteio de número
        do {
            sorteio1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
        } while (sorteio1 === resposta2);

        switch (sorteio1) {
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
            case 5:
                const shuriken = new Itens(["Shuriken"], "Shuriken")
                inventario1.adicionarItem(shuriken)
                break


        }

        console.log(`Meus parabéns! Agora possui ${inventario1} itens!!`)

        await historia(`.
    .
    .
    .
    .
    .
    [Então você, com o mapa, embarca nesta aventura para procurar os tesouros da região e voltar para a sua terra natal]
    .
    .
    .
    ${Jogador1.nome}: Vamos ver... se eu seguir na direção norte... calma que o mapa está virado.... Ah rá! encontrei
    .
    .
    Se eu seguir por essa trilha no meio da floresta, terei que atravessar por dentro duma montanha, floresta dos pesadelos, cidade voadora e, por fim, a ilha... 
    .
    .
    .
    [Você começa a iniciar com sua caminhada para o destino, mas percebe que tem uma cidade, uma espécie de vilareijo, próxima de você]
    .
    .
    .
    .
    .
    [Você se aproxima de um dos moradores e pergunta]
    .
    .
    .
    .
    .
    .
    `)
console.log(`Você se aproxima de um morador e decide fazer a segunte pergunta: 
     1: [Olá, meu senhor. O senhor sabe o caminho para chegar na famosa trilha da floresta?]
     
     2: [Olá, meu senhor. O senhor poderia contar um pouco da região?]

     3: [Olá, meu senhor. O senhor mora aqui há quanto tempo? ]
    `)
        const resposta3:number = Number(readline.question(`\n Esolha uma das opções (1, 2 ou 3)`))
        while (![1, 2, 3, 4, 5].includes(resposta3)) {
            console.log(`Você se aproxima de um morador e decide fazer a segunte pergunta: 
     1: [Olá, meu senhor. O senhor sabe o caminho para chegar na famosa trilha da floresta?]
     
     2: [Olá, meu senhor. O senhor poderia contar um pouco da região?]

     3: [Olá, meu senhor. O senhor mora aqui há quanto tempo? ]
    `)

            const resposta3:number = Number(readline.question(`\n Esolha uma das opções (1, 2 ou 3)`))
        }

        switch (resposta3) {
            case 1:
                await historia(`${Jogador1.nome}Olá, meu senhor. O senhor sabe o caminho para chegar na famosa trilha da floresta?`)
                await historia(`\n\n Ora, meu rapaz. Que bom que perguntou. A direção para essa trilha da floresta fica logo ali em cima, mas cuidado com os insetos. [Insetos? oxi]`)
                break;
            case 2:
                await historia(`${Jogador1.nome}: Olá, meu senhor. O senhor poderia contar um pouco da região?`)
                await historia(`\n\n Morador: Claro, com certeza. Estamos quase no centro da vila, a vila não é muito grande, mas temos bastante cultura. Veja, ao norte nós temos a entrada da trilha da floresta, ao sudeste nós temos as tendas e ao leste nós temos as casas da vila. Tu é novo aqui, né? percebi bem `)
                break
            case 3:
                await historia(`${Jogador1.nome}: Olá, meu senhor. O senhor mora aqui há quanto tempo? `)
                await historia(`\n\n Morador: olha, e isso é pergunta que se faça para uma pessoa idosa? francamente. Saia da minha frente e siga reto! `)
                break

        }
        await historia(`Então, ${Jogador1.nome} decide que é a hora de sair dali. Ele avança a sua frente para encontrar e acessar a entrada da trilha da floresta, e você começa a escutar sons estranhos vindo da sua frente...
    .
    .
    .
    .
    .
    [Você dá os seus primeiros passos dentro dessa floresta]
    .
    .
    .
    .
    Você não consegue enxergar nada além de árvores e mais árvores. Você observa e sente que está sendo observado. Próximo a uma pedra grande, você observa uma pequena luz estranha saindo sobre ela. Cabe a você decidir se aproximar ou não`)

        let a: boolean = true;
        while (a === true) {
            const resposta4:number = Number(readline.question(`Você decide. Escolha '1' para sim ou '2' para não`))
            if (resposta4 === 1) {
                await historia(`Os dados serão rolados. Se tirar mais que 10, a ação é realizada, caso contrário, não verá nada. `)
                await historia(`\n\n Girando....
        .
        .
        .
        .
        .
        .`)
                min1 = 1
                max1 = 20
                let dado = Math.floor(Math.random() * (max1 - min1 + 1)) + min1

                await historia(`${Jogador1.nome} tirou: ${dado} no dado!!!`)
                if (dado >= 10) {
                    await historia(`Você se aproxima dessa pedra, seguindo o brilho que sai dela. O brilho fica cada vez mais forte, como se estivesse te chamando.... você se abaixa para ver... e se depara com uma pequena poção encantada`)
                    const pocaoCura = new Itens(["Poção de cura"], "Poção de cura")
                    inventario1.adicionarItem(pocaoCura)
                    await historia(`Você olha com calma e percebe que tem um rótulo no frasco.... Ali diz que é apenas uma poção de cura... mas sem nenhuma informação extra
            .
            .
            .
            [Poção de cura adicionado ao inventário`)
                    a = false
                } else {
                    await historia(`Você percebe o brilho, mas, se aproximando da pedra, você não observa nada, apenas um caranguejo saindo de lá e te dando um beliscão! 
            .
            .
            .
            .
            [Perdeu 3 hp de vida]   
            .
            `)
                    Jogador1.vida -= 3
                    console.log(`Vida atual: ${Jogador1.vida} hp`)
                    a = false;

                }

            }
            if (resposta4 === 2) {
                a = false
            }

        }
        await historia(`Avançando um pouco na trilha, você ainda sente a sensação de estar sendo observado... algo que você consegue sentir em todo canto da floresta....
    .
    .
    Você começa a ouvir alguns passos vindo dos galhos das árvores... passos que ficam cada vez mais altos... até que, por trás de você, algo pula em sua direção....
    .
    .
    .
    [Um ser nunca antes visto encotrou você]
    .
    .
    .
    Você se esquiva antes que ele pudesse te atacar... Você observa com atenção e vê uma figura que você nunca nem viu, mas sabe que é perigoso.
    .
    Você retira a sua espada, prepara as suas habilidades e inicia a batalha. Vença o melhor!!!!!!! 
    `)
   console.log(`Você está em batalha com um ser nunca antes visto. Ele é voador e imprevisível. Ganhe se puder!!`)
        // batalha n°1
        let vidaAtual = Jogador1.vida
        let vidaIn = Harpia.vida
        while (Harpia.vida > 0 && Jogador1.vida > 0) {


            // rodadas de batalha n°1
         
         
                console.log(`Total de vida de ${Jogador1.nome}: ${Jogador1.vida} hp`)
                console.log(`\n\n Escolha uma das seguintes opções: `)
                let combateJ1 = Number(readline.question(`
                
                '1' : Ataque
                '2' : Inventário
                '3' : defender
                
                Escolha um dos números acima`))

                switch (combateJ1) {
                    case 1:
                        console.log(`\n\nEscolha o seu ataque: `)
                        let ataqueJ = Number(readline.question(`
                    
                    '1': Usar '${Jogador1.habilidade1}'
                    '2': Usar '${Jogador1.habilidade2}'
                    `))
                        Jogador1.atacar(ataqueJ)
                        Harpia.vida -= Jogador1.dano

                        // turno do inimigo
                        Harpia.atacar()
                        console.log(`\n O inimigo atacou com ${Harpia.dano}`)
                        Jogador1.vida -= Harpia.dano

                        console.log(`vida inimigo: ${Harpia.vida}`)
                        break
                        case 2:
                            console.log(`Seus itens:`)
                            inventario1.verInventario()

                           let resposta5 = readline.question(`deseja usar algum item? (sim) ou (nao)`).toLowerCase()
                           if(resposta5 === "sim"){
                            inventario1.perguntarSobreItem()
                           }else if(resposta5 === "não"){

                           }
                           break
                           case 3:
                            console.log(`inicialmente bloqueado. Compre para desbloquear!`)
                            break

                }
            } if (Jogador1.vida <= 0) {
            await historia(`parece que você perdeu... Deseja reiniciar a batalha?`)
            let continuar = readline.question(`Responda 'S' ´para reiniciar a partida ou 'N' para fechar o jogo`).toLowerCase()
            if (continuar === "s") {
                Jogador1.vida += vidaAtual
                Harpia.vida = vidaIn
            } else if (continuar === "n") {
                respostaJogador = false
            }
        }else{
          // --- PÓS BATALHA 1 (HARPIA) ---
        await historia(`... Você conseguiu derrotar a bendita besta.... mas não sabe ainda o que ela era.`);
        await historia(`Você se aproxima do corpo caído para examinar. Sob a luz fraca, percebe as penas escuras... Era uma Harpia.`);
        await historia(`Preso à perna da criatura, há um pequeno pedaço de pergaminho enrolado. Você o abre e lê:\n`);
        
        console.log(`-------------------------------------------------------------------------`);
        console.log(`"Olá, se estiver vendo esta mensagem, então é porque a minha região foi 
invadida por monstros inimagináveis. Siga para a direção oeste para me encontrar 
e expulsar os monstros da minha região. Eu darei uma recompensa caso consiga.."`);
        console.log(`-------------------------------------------------------------------------\n`);

        await historia(`Você guarda o bilhete. Sentindo uma nova determinação, você sobe de nível! (Nível 2)`);
        Jogador1.nivel = 6 // Subindo 1 nível

        await historia(`Seguindo o mapa de Frodo e as coordenadas do bilhete, você ruma para o Oeste.
A floresta se torna mais densa. À sua frente, três trilhas distintas surgem entre as árvores.`);

        console.log(`Para onde você deseja seguir?
        1: Trilha da Esquerda (Um brilho estranho ao fundo)
        2: Trilha do Centro (Pegadas de botas pesadas no chão)
        3: Trilha da Direita (Caminho coberto por mato alto)`);

        let escolhaCaminho = Number(readline.question("Escolha a sua trilha: (1, 2 ou 3) "));
        
        if (escolhaCaminho === 1) {
            await historia(`Você caminha em direção ao brilho no chão... Parece uma relíquia!
Ao se abaixar para pegar, uma corda estala! Você é içado rapidamente por uma rede!`);
            await historia(`Um Esqueleto sai de trás de uma árvore rindo com um som seco de ossos. Ele atira uma flecha em você!`);
            Jogador1.vida -= 7;
            console.log(`[Dano: -7 HP | Vida atual: ${Jogador1.vida}]`);
            await historia(`Você usa sua faca para cortar a rede e cai no chão pronto para a luta!`);
            
            // --- BATALHA 2 (OPÇÃO 1) ---
            while (Esqueleto.vida > 0 && Jogador1.vida > 0) {
                console.log(`\n${Jogador1.nome}: ${Jogador1.vida}hp | ${Esqueleto.nome}: ${Esqueleto.vida}hp`);
                let acao = Number(readline.question("1: Atacar | 2: Inventario | 3: Defender "));
                if (acao === 1) {
                    Jogador1.atacar(Number(readline.question("1: Hab1 | 2: Hab2 ")));
                    Esqueleto.vida -= Jogador1.dano;
                    if (Esqueleto.vida > 0) { Esqueleto.atacar(); Jogador1.vida -= Esqueleto.dano; }
                }
            }
        } else if (escolhaCaminho === 2) {
            await historia(`Você encontra um guerreiro caído. Ele não sobreviveu, mas sua armadura está intacta.`);
            await historia(`Você equipa a armadura de placas. Você se sente muito mais resistente! (+36 HP)`);
            Jogador1.vida += 36;
            console.log(`[Cura/Bônus: +36 HP | Vida atual: ${Jogador1.vida}]`);
        } else {
            await historia(`No meio do mato alto, você tropeça em um baú de madeira velha.`);
            let abrirBau = Number(readline.question("1: Abrir baú | 2: Ignorar e seguir "));
            if (abrirBau === 1) {
                const pocaoForca = new Itens(["Poção de Força"], "Poção de Força");
                inventario1.adicionarItem(pocaoForca);
                await historia(`Você guardou a Poção de Força no inventário!`);
            }
        }

        // --- CHEGADA NA VILA ---
        await historia(`Após caminhar muito, você chega a uma pequena vila... ou o que restou dela. As casas estão em ruínas.`);
        await historia(`"SOCORRO! ALGUÉM ME AJUDE!" - Um grito ecoa perto da entrada.`);
        await historia(`Você corre e encontra um senhor caído com a perna sangrando. "Os monstros... eles estão em todo lugar", diz ele.`);
        await historia(`Você mostra o bilhete. O senhor arregala os olhos: "Fui eu... eu que enviei essa carta pedindo ajuda!"`);
        await historia(`Ele aponta para um baú atrás dele: "Pegue isso, você vai precisar para sobreviver ao que está no centro da vila."`);
        
        await historia(`[Você abriu o baú e equipou um Capacete de Ferro! +40 HP]`);
        Jogador1.vida += 40;

        await historia(`"Vá ao centro da cidade, por favor! Eles estão atacando as famílias!" - implora o morador.`);
        await historia(`Você corre até a praça central e vê um Zombie e um Esqueleto acuando uma família desesperada.`);

        // --- BATALHA 3 (ZOMBIE + ESQUELETO) ---
        let inimigosVila = [Zombie, Esqueleto];
        while (inimigosVila.some(i => i.vida > 0) && Jogador1.vida > 0) {
            console.log(`\n--- BATALHA NO CENTRO ---`);
            inimigosVila.forEach((ini, idx) => { if(ini.vida > 0) console.log(`${idx+1}: ${ini.nome} (${ini.vida}hp)`); });
            let alvo = Number(readline.question("Atacar quem? (1 ou 2) "));
            if (inimigosVila[alvo-1]) {
                Jogador1.atacar(1);
                inimigosVila[alvo-1].vida -= Jogador1.dano;
            }
            inimigosVila.forEach(ini => { if(ini.vida > 0) { ini.atacar(); Jogador1.vida -= ini.dano; } });
        }

        // --- UPGRADE E FUGA ---
        await historia(`Os monstros caem. A família te agradece rapidamente, mas o chão começa a tremer.`);
        await historia(`Uma horda imensa de monstros surge ao fundo! Você ordena que as famílias se escondam e começa a correr.`);
        
        // Upgrade de 10%
        Jogador1.nivel = 7;
        Jogador1.dano *= 1.1;
        Jogador1.vida *= 1.1;
        console.log(`\n[ LEVEL UP! Nível 3 | Atributos aumentados em 10% ]\n`);

        await historia(`Você corre para dentro da floresta novamente. O som de galhos quebrando atrás de você é constante.`);
        await historia(`Você despista a maioria, mas três sombras gigantescas continuam em seu encalço...`);
        await historia(`De repente, o chão acaba. Você chegou à beira de um barranco imenso. Não há para onde fugir.`);
        await historia(`O Gigante, o Creeper e o Zombie cercam você. É o fim da linha.`);

        // --- BATALHA FINAL (GIGANTE, CREEPER, ZOMBIE) ---
        let hordaFinal = [Gigante, Creeper, Zombie];
        // Resetando vida para a batalha final (opcional, dependendo da dificuldade)
        while (hordaFinal.some(i => i.vida > 0) && Jogador1.vida > 0) {
            console.log(`\n--- ÚLTIMO COMBATE DA DEMO ---`);
            hordaFinal.forEach((ini, idx) => { if(ini.vida > 0) console.log(`${idx+1}: ${ini.nome} (${ini.vida}hp)`); });
            let alvo = Number(readline.question("Escolha o alvo (1, 2 ou 3): "));
            if (hordaFinal[alvo-1]) {
                Jogador1.atacar(2);
                hordaFinal[alvo-1].vida -= Jogador1.dano;
            }
            hordaFinal.forEach(ini => { if(ini.vida > 0) { ini.atacar(); Jogador1.vida -= ini.dano; } });
        }

        // --- FINALIZAÇÃO ---
        if (Jogador1.vida > 0) {
            Jogador1.nivel = 9;
            Jogador1.dano *= 1.2;
            await historia(`Com um último esforço, você derrota as três feras! O silêncio finalmente retorna.`);
            await historia(`Você caminha até a beira do barranco e olha para o horizonte...`);
            await historia(`Dali, você consegue ver a vastidão da ilha: pântanos, montanhas de gelo e, flutuando acima das nuvens... a temida Cidade Voadora.`);
            await historia(`Sua jornada apenas começou, ${Jogador1.nome}.`);
            console.log(`\n==========================================`);
            console.log(`   FIM DA DEMONSTRAÇÃO - OBRIGADO!`);
            console.log(`==========================================`);
        } else {
            console.log("\nVocê caiu em combate... A ilha venceu desta vez.");
        }
        
        respostaJogador = false; // Finaliza o loop principal
        }
        }
       


    }





main()