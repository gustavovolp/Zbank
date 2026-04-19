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
    return (
        <div>
            <div className="m-4">
                <SaldoConta transaçoes={trasnacoes} />
                <div>
                <ListaDeTransacao transacoes={trasnacoes} />
                </div>
                <AdicionarTransacao onAdicionar={(transacao) => setTransacoes([...trasnacoes, transacao])} />
            </div>
        </div>    
            );
};