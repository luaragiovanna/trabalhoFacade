import IFazerCafe from "./IFazerCafe";

export default class AdicionarCafe implements IFazerCafe{
    acao(): void {
        console.log("Adicionando pó de café. . .");
    }

}