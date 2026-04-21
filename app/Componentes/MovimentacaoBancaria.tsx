'use client';
import { ListaDeTransacao } from "./ListaDeTransacao";
import { AdicionarTransacao } from "./AdicionarTransacao";
import { useState } from "react";
import { SaldoConta } from "./SaldoConta";
import { Transacao } from "../types/transacao";
import { ModalEditar } from './ModalEditar';



interface MovimentacaoBancariaProps {
    transationes: Transacao[];
}


export const MovimentacaoBancaria = ({ transationes }: MovimentacaoBancariaProps) => {
    const [trasnacoes, setTransacoes] = useState(transationes);
    const [transacaoEditando, setTransacaoEditando] = useState<Transacao | null>(null);
    

    function handleDelete(id: Transacao['id']) {
        setTransacoes(trasnacoes.filter(t => t.id !== id));
        
    }

    function handleChange(transacao: Transacao) {
        setTransacaoEditando(transacao);
    }

   function handleSalvarEdicao(transacaoAtualizada: Transacao) {
        setTransacoes(trasnacoes.map(t =>
            t.id === transacaoAtualizada.id ? transacaoAtualizada : t
        ));
    }


    return (
        <div>
            <div className="m-4">
                <SaldoConta transaçoes={trasnacoes} />
                <div>
                    <ListaDeTransacao transacoes={trasnacoes} onDelete={(id) => (handleDelete(id))} 
                    onChange={(transacao) => handleChange(transacao)}
                    />
                </div>
                <AdicionarTransacao onAdicionar={(transacao) => setTransacoes([transacao, ...trasnacoes])} />
            </div>
            <ModalEditar
                transacao={transacaoEditando}
                onClose={() => setTransacaoEditando(null)}
                onSalvar={handleSalvarEdicao} />
        </div>
    );
}