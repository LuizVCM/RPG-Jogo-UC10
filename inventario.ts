
type Item = {
  nome: string
  tipo: string
  nivel: number
  valor: number
}

class Inventario {
  itens: Item[] = []

  adicionarItem(item: Item) {
    this.itens.push(item)
  }

  listarItens() {
    if (this.itens.length === 0) {
      console.log("Inventário vazio!")
      return
    }

    console.log("📦 Seus itens:")
    this.itens.forEach((item, index) => {
      console.log(
        `${index + 1} - ${item.nome} | Tipo: ${item.tipo} | Nível: ${item.nivel} | Valor: ${item.valor}`
      )
    })
  }

  uparItens() {
    this.itens.forEach(item => {
      item.nivel++
      item.valor += 5
    })

    console.log("✨ Seus itens ficaram mais fortes!")
  }
}