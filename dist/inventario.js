"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = exports.Itens = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
class Itens {
    constructor(Itens, nome) {
        this.Itens = Itens;
        this.nome = nome;
    }
    usar() {
    }
}
exports.Itens = Itens;
class Inventario {
    constructor() {
        this.itens = [];
    }
    adicionarItem(itens) {
        this.itens.push(itens);
        console.log(`${itens.nome} adicionado ao inventario`);
    }
    usarItem(nome) {
        const itemIndex = this.itens.findIndex(itens => itens.nome === nome);
        if (itemIndex > -1) {
            this.itens[itemIndex].usar();
            this.itens.splice(itemIndex, 1);
            return true;
        }
        return false;
    }
    verInventario() {
        if (this.itens.length === 0) {
            console.log("Seu inventário está vazio.");
        }
        else {
            console.log("\nSeu inventário:");
            this.itens.forEach((item, index) => {
                console.log(`${index + 1}: ${item.nome}`);
            });
        }
    }
    perguntarSobreItem() {
        if (this.itens.length === 0) {
            console.log("Seu inventário está vazio. Não há itens para usar.");
            return;
        }
        // Seleciona um item aleatório para fazer a pergunta
        const itemIndex = Math.floor(Math.random() * this.itens.length);
        const item = this.itens[itemIndex];
        console.log(`\nQual item você deseja usar? Escolha o nome exato do item!`);
        console.log(`Itens disponíveis no inventário:`);
        this.verInventario();
        // Pergunta sobre o item escolhido aleatoriamente
        const resposta = readline_sync_1.default.question(`Digite o nome do item para usá-lo: `);
        // Verifica se a resposta está correta
        if (resposta.toLowerCase() === item.nome.toLowerCase()) {
            console.log(`Item ${item.nome} reconhecido.`);
            if (this.usarItem(item.nome)) {
                console.log(`Você usou o item ${item.nome} com sucesso!`);
            }
        }
        else {
            console.log("Resposta incorreta. Tente novamente!");
        }
    }
}
exports.Inventario = Inventario;
