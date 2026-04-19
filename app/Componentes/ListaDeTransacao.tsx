import { Transacao } from "../types/transacao";
import { ChangeEvent, useState } from "react";

interface listaDeTransacaoProps {
    transacoes: Transacao[];
}

export const ListaDeTransacao = ({ transacoes }: listaDeTransacaoProps) => {
    return (
        <ul className="text-xs text-left">
            {transacoes.map((t, index) => (
                <li key={index}>
                    <div className="bg-(--background-list) mb-2 p-4 rounded-lg shadow-md flex justify-between items-center">
                        <div>
                        <p className="text-[1rem] font-bold font-orbitron  text-primary ">{t.tipo === 'deposito' ? 'Depósito' : 'Transferência'}</p>
                        <p className="text-[1.1rem]"> {t.tipo !== 'deposito' ? '- ' : ''} {

                            t.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                        <p>{t.descricao}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}