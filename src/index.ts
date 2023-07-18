import Cafeteria from "./facade/Cafeteira";

import TipoCafe from "./subsistemas/TipoCafe";
console.log("CAFÉ 1")
const facade2 = new Cafeteria();
facade2.fazerCafe(TipoCafe.PRETO);
console.log("--------------------")
console.log("CAFÉ 2")
const facade3 = new Cafeteria();
facade3.fazerCafe(TipoCafe.LEITE);
