'use client'
import { Transacao } from "../types/transacao";
import { ChangeEvent, useState } from "react";

interface AdicionarTransacaoProps {
    onAdicionar: (transacao: Transacao) => void;
}

const TransacaoInicial: Transacao = {
    id: 5,
    data: new Date().toString().split('T')[0],
    valor: 0,
    descricao: '',
    tipo: 'deposito'
};



export const AdicionarTransacao = ({ onAdicionar }: AdicionarTransacaoProps) => {
    const [transacao, setTransacao] = useState<Transacao>(TransacaoInicial);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTransacao({ ...TransacaoInicial, id: transacao.id + 1 });
        onAdicionar(transacao);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setTransacao(prev => ({
            ...prev,
            [name]: type === 'number' ? parseFloat(value) : value
        }));
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Descrição:</label>
            <input
                type="text"
                name="descricao"
                onChange={handleChange}
            />
            <label htmlFor="">Valor:</label>
            <input
                type="number"
                name='valor'
                min= '0'
                step='0.01'
                onChange={handleChange}
            />
            <label htmlFor="">Data:</label>
            <input
                type="date"
                name="data"
                onChange={handleChange}
            />
            <label htmlFor="">Tipo:</label>
            <select
                name="tipo"
                onChange={handleChange}
            >
                <option value="deposito">Depósito</option>
                <option value="tranferencia">Transferência</option>
            </select>
            <button type="submit">Adicionar Transação</button>
        </form>
    )
}