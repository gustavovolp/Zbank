import { Transacao } from "../types/transacao";
import { BotaoEditar } from "./BotaoEditar";
import { BotaoExcluir } from "./BotaoExcluir";

interface listaDeTransacaoProps {
    transacoes: Transacao[];
    onDelete: (id: Transacao['id']) => void;
}
    
export const ListaDeTransacao = ({ transacoes, onDelete }: listaDeTransacaoProps) => {   
    return (
        <ul className="text-xs text-left">
            {transacoes.map((t, index) => (
                <li key={index}>
                    <div className="bg-(--background-list) mb-2 p-3 rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-[0.8rem] font-bold font-orbitron  text-primary ">{t.tipo === 'deposito' ? 'Depósito' : 'Transferência'}</p>
                            <p className="text-[0.9rem]"> {t.tipo !== 'deposito' ? '- ' : ''} {

                                t.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                        <p>{t.descricao}</p>
                        <div className="flex gap-2">
                        <div className="cursor-pointer" onClick={() => onDelete(t.id)}>
                                <BotaoExcluir />
                        </div>
                        <div className="cursor-pointer">
                            <BotaoEditar />
                        </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}