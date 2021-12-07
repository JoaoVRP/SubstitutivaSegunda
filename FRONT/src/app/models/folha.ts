import { Funcionario } from "./funcionario";

export interface Folha {
    id?: number;
    funcionarioid?: number;
    horas: number;
    valor: number;
    mes: number;
    ano: number;
    criadoem?: string;
    funcionario?: Funcionario;
    salarioBruto?: number;
    imposto?: number;
    inss?: number;
    fgts?: number;
    salarioLiquido?: number;
}
