'use client';
import { ListaDeTransacao } from "@/componentes/ui/ListaDeTransacao";
import { FormNewTransaction } from "@/componentes/form/FormNewTransaction";
import { useState } from "react";
import { SaldoConta } from "@/componentes/ui/SaldoConta";
import { Transaction } from "@/types/transation"
import { ModalEditar } from '@/componentes/modal/ModalEditar';




interface MovimentacaoBancariaProps {
    transations: Transaction[];
}


export const MovimentacaoBancaria = ({ transations }: MovimentacaoBancariaProps) => {
    const [transation, setTransation] = useState<Transaction[]>(transations ?? []);
    const [transacaoEditando, setTransacaoEditando] = useState<Transaction | null>(null);
    

    function handleDelete(id: Transaction['id']) {
        setTransation(transation.filter(t => t.id !== id));
        
    }

    function handleChange(transacao: Transaction) {
        setTransacaoEditando(transacao);
    }

   function handleSalvarEdicao(transacaoAtualizada: Transaction) {
        setTransation(transation.map(t =>
            t.id === transacaoAtualizada.id ? transacaoAtualizada : t
        ));
    }


    return (
        <div>
            <div className="m-4">
                <SaldoConta transactions={transation} />
                <div>
                    <ListaDeTransacao transaction={transation} onDelete={(id) => (handleDelete(id))} 
                    onChange={(transacao) => handleChange(transacao)}
                    />
                </div>
                <div>
                <FormNewTransaction onAdicionar={(transacao) => setTransation([transacao, ...transation])}>
                    Nova Transação
                </FormNewTransaction>
                </div>
            </div>
            <ModalEditar
                transacao={transacaoEditando}
                onClose={() => setTransacaoEditando(null)}
                onSalvar={handleSalvarEdicao}> Editar Transação</ModalEditar>
        </div>
        
    );
}