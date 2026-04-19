export type TransactionTypes = 'deposito' | 'tranferencia';

export interface Transacao {
    id: number;
    valor: number;
    tipo: TransactionTypes;
    data: string;
    descricao: string;
}