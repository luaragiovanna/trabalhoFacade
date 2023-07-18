import AddLeite from "../subsistemas/AddLeite";
import AdicionarCafe from "../subsistemas/AdicionarCafe";
import CoarCafe from "../subsistemas/CoarCafe";
import EsquentarAgua from "../subsistemas/EsquentarAgua";
import TipoCafe from "../subsistemas/TipoCafe";

export default class Cafeteria {
    private tipo: TipoCafe;
    private agua: EsquentarAgua;
    private cafe: AdicionarCafe;
    private coar: CoarCafe;
    private leite: AddLeite;

    constructor() {
        
        this.agua = new EsquentarAgua();
        this.cafe = new AdicionarCafe();
        this.coar = new CoarCafe();
        this.leite = new AddLeite();


    }
    fazerCafe(tipo: TipoCafe): void {
        console.log("INICIANDO CAFETEIRA. . .");
        this.agua.acao();
        this.cafe.acao();
        this.coar.acao();
        this.adicionarLeite(tipo);
        console.log("CAFÉ PRONTO!!!! :)")
    
    }
    private adicionarLeite(tipo: TipoCafe): void {
        if (tipo === TipoCafe.LEITE) {
            this.leite.acao();
        } else {
            console.log("Leite não adicionado.");
        }
    }

   
}