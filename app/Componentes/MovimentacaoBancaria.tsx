'use client';
import { ListaDeTransacao } from "./ListaDeTransacao";
import { AdicionarTransacao } from "./AdicionarTransacao";
import { useState } from "react";
import { SaldoConta } from "./SaldoConta";
import { Transacao } from "../types/transacao";


interface MovimentacaoBancariaProps {
    transationes: Transacao[];
}


export const MovimentacaoBancaria = ({ transationes }: MovimentacaoBancariaProps) => {
    const [trasnacoes, setTransacoes] = useState(transationes);

    function handleDelete(id: Transacao['id']) {
    setTransacoes(trasnacoes.filter(t => t.id !== id));
}


    return (
        <div>
            <div className="m-4">
                <SaldoConta transaçoes={trasnacoes} />
                <div>
                <ListaDeTransacao transacoes={trasnacoes} onDelete={(id) =>(handleDelete(id))} />
                </div>
                <AdicionarTransacao onAdicionar={(transacao) => setTransacoes([transacao,...trasnacoes])} />
            </div>
        </div>    
            );
}