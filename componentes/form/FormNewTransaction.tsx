'use client'
import { Transaction } from "../../types/transation";
import { ChangeEvent, ReactNode, useState } from "react";
import { LabelInputForm } from "../label/labelInputForm";
import { LabelSelectForm } from "../label/labelSelectForm";
import { BtnFormPrimary } from "../button/buttonFormPrimary";

interface AdicionarTransacaoProps {
    onAdicionar: (transaction: Transaction) => void;
    value?: string;
    children: ReactNode;
}

const TransacaoInicial: Transaction = {
    id: 6,
    data: new Date().toISOString().split('T')[0],
    valor: '' as unknown as number,
    descricao: '',
    tipo: 'deposito'
};



export const FormNewTransaction = ({ onAdicionar, children }: AdicionarTransacaoProps) => {
    const [transacao, setTransacao] = useState<Transaction>(TransacaoInicial);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setTransacao(prev => ({
            ...prev, [name]: type === 'number' ? parseFloat(value) : value
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTransacao({ ...TransacaoInicial, id: transacao.id + 1 });
        onAdicionar(transacao);
    }

    return (
        <div className="my-4 p-4 bg-[#e3e5f2] rounded-lg">
        <h2 className="text-[1.2rem] font-bold font-orbitron justify-start text-primary flex gap-2 my-2" > { children }</h2>
        <form onSubmit={handleSubmit}>
            <LabelInputForm onChange={handleChange} Inputprops={{
                type: 'text',
                name: 'descricao',
                placeholder: 'Novo pix',
                value: transacao.descricao,
                required: true
            }}> Descrição: </LabelInputForm>

            <LabelInputForm onChange={handleChange} Inputprops={{
                type: 'number',
                name: 'valor',
                placeholder: 'Valor',
                step: '0.01',
                min: '0',
                value: transacao.valor,
                required: true
            }}> Valor: </LabelInputForm>

            <LabelInputForm onChange={ handleChange} Inputprops={{
                type: 'date',
                name: 'data',
                value: transacao.data,
                required: true
            }}>
                Data:
            </LabelInputForm>

            <LabelSelectForm onChange={handleChange} selectprops={{
                name: 'tipo',
                value: transacao.tipo
            }}
                options={
                    [{ value: 'deposito', label: 'Depósito' },
                    { value: 'transferencia', label: 'Transferência' }
                    ]
                }>
                Tipo:
            </LabelSelectForm>
            <BtnFormPrimary> Efetuar Transação </BtnFormPrimary>
        </form>
        </div>
    )
}