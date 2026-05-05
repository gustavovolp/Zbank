'use client';
import { useState, useEffect, Children } from "react";
import { Transaction } from "@/types/transation";
import { LabelSelect } from "@/componentes/label/labelSelect";
import { LabelInput } from "../label/labelInput";
import { BtnSecundary } from "../button/buttonSecundary";
import { BtnPrimary } from "../button/buttonPrimary";
import { ReactNode } from "react";

interface ModalEditarProps {
    children: ReactNode
    transacao: Transaction | null;
    onClose: () => void;
    onSalvar: (transacaoAtualizada: Transaction) => void;
}

export const ModalEditar = ({ transacao, onClose, onSalvar, children }: ModalEditarProps) => {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState<Transaction['tipo']>('deposito');


    useEffect(() => {
        if (transacao) {
            setDescricao(transacao.descricao);
            setValor(String(transacao.valor));
            setTipo(transacao.tipo);
        }
    }, [transacao]);

    if (!transacao) return null;

    function handleSalvar() {
        if (!transacao) return;

        const valorNumerico = parseFloat(valor.replace(',', '.'));
        if (isNaN(valorNumerico) || valorNumerico <= 0) {
            alert('Digite um valor válido.');
            return;
        }

        onSalvar({
            ...transacao,
            descricao,
            valor: valorNumerico,
            tipo,
        });
        onClose();
    }

    return (

        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >

            <div
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-full max-w-md mx-2 flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold font-orbitron text-primary">{ children }</h2>

                <LabelSelect selectprops={{
                    value: tipo,
                    onChange: (e) => setTipo(e.target.value as Transaction['tipo'])
                }
                }
                    options={
                        [{ value: 'deposito', label: 'Depósito' },
                        { value: 'transferencia', label: 'Transferência' }
                        ]}
                >Tipo</LabelSelect>

                <LabelInput Inputprops={{
                    type: "text",
                    value: descricao,
                    onChange: (e) => setDescricao(e.target.value),
                    placeholder: "Descrição da transação"
                }}>
                    Descrição
                </LabelInput>
                <LabelInput Inputprops={{
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: valor,
                    onChange: (e) => setValor(e.target.value),
                    placeholder: "0,00"
                }}>
                    Valor (R$)
                </LabelInput>


                <div className="flex justify-center gap-2 m-2">
                    <BtnSecundary onClick={onClose}>
                        Cancelar
                    </BtnSecundary>
                    <BtnPrimary
                        onClick={handleSalvar}
                    >
                        Salvar
                    </BtnPrimary>
                </div>
            </div>
        </div >
    );
};