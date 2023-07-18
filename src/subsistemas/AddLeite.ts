import IFazerCafe from "./IFazerCafe";

export default class AddLeite implements IFazerCafe{
  
    acao(): void {
        console.log("Adicionando leite. . .")
    }
    
}