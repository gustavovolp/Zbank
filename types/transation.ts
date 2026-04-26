export type TransactionTypes = 'deposito' | 'tranferencia';

export interface Transation {
    id: number;
    valor: number;
    tipo: TransactionTypes;
    data: string;
    descricao: string;
}