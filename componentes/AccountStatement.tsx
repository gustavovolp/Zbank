import { Transaction } from "@/types/transation";
import { BotaoEditar } from '@/componentes/ButtonEdit';
import { BotaoExcluir } from "@/componentes/ButtonDelete";


interface ListAccountStatement {
    t: Transaction;
    onDelete: (id: Transaction['id']) => void;
    onChange: (transacao: Transaction) => void;
}

export const AccountStatement = ({ t, onChange, onDelete }: ListAccountStatement) => {
    return (
        <li>
            <div className="bg-(--background-list) mb-2 p-3 rounded-lg shadow-md flex items-center">
                <div className="mr-4 w-32">
                    <p className="text-[1rem] font-bold font-orbitron  text-primary ">{t.tipo === 'deposito' ? 'Depósito' : 'Transferência'}</p>
                    <p className="text-[1rem]"> {t.tipo !== 'deposito' ? '- ' : ''} {

                        t.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <div className="ml-4 mr-4 text-[1rem] flex-1 min-w-0 ">
                    <input type="text"
                    disabled
                    readOnly
                        value={t.descricao}
                        className="w-full bg-transparent border-none outline-none"
                     />
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
    )
}