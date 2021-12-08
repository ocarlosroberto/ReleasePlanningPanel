import { Pessoa } from "./Pessoa.model";

export interface Capacity {
    dias_release: number,
    perc_suporte: number,
    horas_internas: number,
    horas_externas: number,
    time: Pessoa[]
}