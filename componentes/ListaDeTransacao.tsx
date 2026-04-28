import { Transaction } from "@/types/transation"
import { AccountStatement } from "./AccountStatement";

interface listaDeTransacaoProps {
    transaction: Transaction[];
    onDelete: (id: Transaction['id']) => void;
    onChange: (transacao: Transaction) => void;
    
}

export const ListaDeTransacao = ({ transaction, onDelete, onChange,}: listaDeTransacaoProps) => {
    return (
       <ul className="text-xs text-left">
            {transaction.map((t) => (
                <AccountStatement
                    key={t.id}
                    t={t}
                    onDelete={onDelete}
                    onChange={onChange} /> 
            ))}
        </ul>
    )
}