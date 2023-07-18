import IFazerCafe from "./IFazerCafe";

export default class EsquentarAgua implements IFazerCafe{
    acao(): void {
       console.log("Esquentando água. . .");
    }
    
}