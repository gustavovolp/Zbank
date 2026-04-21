import { Transacao } from "../types/transacao";
import { BotaoEditar } from "./BotaoEditar";
import { BotaoExcluir } from "./BotaoExcluir";

interface listaDeTransacaoProps {
    transacoes: Transacao[];
    onDelete: (id: Transacao['id']) => void;
    onChange: (transacao: Transacao) => void;
}

export const ListaDeTransacao = ({ transacoes, onDelete, onChange }: listaDeTransacaoProps) => {
    return (
        <ul className="text-xs text-left">
            {transacoes.map((t, index) => (
                <li key={index}>
                    <div className="bg-(--background-list) mb-2 p-3 rounded-lg shadow-md flex items-center">
                        <div className="mr-4 w-32">
                            <p className="text-[1rem] font-bold font-orbitron  text-primary ">{t.tipo === 'deposito' ? 'Depósito' : 'Transferência'}</p>
                            <p className="text-[1rem]"> {t.tipo !== 'deposito' ? '- ' : ''} {

                                t.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                        <div className="ml-4 mr-4 text-[1rem] ">
                            <h2></h2>
                        <input type="text"
                            value={t.descricao} 
                            disabled  className="text-left justify-start"/>
                            </div>
                        <div className="flex gap-2 justify-end ml-auto">
                            <div className="cursor-pointer" onClick={() => onChange(t)}>
                                <BotaoEditar />
                            </div>
                            <div className="cursor-pointer" onClick={() => onDelete(t.id)}>
                                <BotaoExcluir />
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}