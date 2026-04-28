export type TransactionTypes = 'deposito' | 'tranferencia';

export interface Transaction {
    id: number;
    valor: number;
    tipo: TransactionTypes;
    data: string;
    descricao: string;
}