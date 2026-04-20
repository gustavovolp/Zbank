export type TransactionTypes = 'deposito' | 'tranferencia';

export interface Transacao {
    id: string;
    valor: number;
    tipo: TransactionTypes;
    data: string;
    descricao: string;
}