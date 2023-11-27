import { stringParaEntradaDeData } from "../utils/converters";

export default class Evento {
    id: number | null;
    nome: string;
    data: string;
    tipo: string;
    custo: string;

    constructor(id: number | null, nome: string, data: string,
        tipo: string, custo: string) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.tipo = tipo;
        this.custo = custo;
    }

    static geraEventosMock() {
        return [
            new Evento(1, "Ilha",
            "03/11/2022",
            "Terreno",
            "0",
          ),
          new Evento(2, "Horda Sem Respiro",
            "10/11/2022",
            "Criatura - Zumbi",
            "2-N 1-P",
          )
        ]
      }


    static vazio(): Evento {
      return new Evento(null, "", stringParaEntradaDeData(""), "", "");
    }
}