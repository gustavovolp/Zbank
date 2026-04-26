import { Transaction } from "@/types/transation"

export const MockTransation: Transaction[] = [
{   
    id: 0,
    data: '2026-03-18',
    valor: 100,
    descricao: 'Pix da minha mãe',
    tipo: 'tranferencia'
}, {
    id: 1,
    data: '2026-03-19',
    valor: 50,
    descricao: 'Compra no supermercado',
    tipo: 'deposito'
},{
    id: 2,
    data: '2026-03-20',
    valor: 200,
    descricao: 'Salário',
    tipo: 'deposito'
},{
    id: 3,
    data: '2026-03-21',
    valor: 75,
    descricao: 'Aluguel',
    tipo: 'deposito'
},{
    id: 4,
    data: '2026-03-22',
    valor: 30,
    descricao: 'Jantar fora',
    tipo: 'deposito'
},{
    id: 5,
    data: '2026-03-23',
    valor: 150,
    descricao: 'Freelance de design',
    tipo: 'tranferencia'
}
]