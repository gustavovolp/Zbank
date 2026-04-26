'use client';
import { useState, useEffect } from "react";
import { Transaction } from "@/types/transation";

interface ModalEditarProps {
    transacao: Transaction | null;
    onClose: () => void;
    onSalvar: (transacaoAtualizada: Transaction) => void;
}

export const ModalEditar = ({ transacao, onClose, onSalvar }: ModalEditarProps) => {
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
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold font-orbitron text-primary">Editar Transação</h2>

                
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-left font-medium text-zinc-600 dark:text-zinc-300">Tipo</label>
                    <select
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value as Transaction['tipo'])}
                        className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="deposito">Depósito</option>
                        <option value="transferencia">Transferência</option>
                    </select>
                </div>

               
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-left font-medium text-zinc-600 dark:text-zinc-300">Descrição</label>
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descrição da transação"
                        className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-left text-zinc-600 dark:text-zinc-300">Valor (R$)</label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        placeholder="0,00"
                        className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

               
                <div className="flex gap-3 justify-end mt-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSalvar}
                        className="px-4 py-2 rounded-lg text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
};