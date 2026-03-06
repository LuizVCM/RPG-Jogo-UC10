export class Itens{
   Itens:string[]
   nome:string
constructor(Itens:string[], nome:string){
  this.Itens = Itens
  this.nome = nome
}

public usar(){

}
    }


    export class Inventario{
      private itens: Itens[] = []


      public adicionarItem(itens:Itens){
        this.itens.push(itens)
        console.log(`${itens.nome} adicionado ao inventario`)
      
      }

      public usarItem(nome:string):boolean{
        const itemIndex = this.itens.findIndex(itens => itens.nome===nome)
        if(itemIndex > -1){
          this.itens[itemIndex].usar()
          this.itens.splice(itemIndex, 1)
          return true
        }
        return false
      }
    
    }