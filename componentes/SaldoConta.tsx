'use client';
import { Transaction } from "@/types/transation"

interface SaldoContaProps {
    transactions: Transaction[];
}

export const SaldoConta = ({ transactions }: SaldoContaProps) => {
    
    const saldo = transactions.reduce((acc, transaction) => {
        if (transaction.tipo === 'deposito') {
            return acc + transaction.valor;
        } else {
            return acc - transaction.valor;
        }
    }, 5000);
    return(
        <div className="px-4 py-4 bg-(--color-primary) text-left rounded-lg mb-4 justify-center items-center self-center[#ffffff] shadow-lg ">
            <h1 className="text-[1rem] font-orbitron">Saldo da Conta</h1>
            <h2 className="text-[1.5rem] font-medium">{saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
        </div>
    )
}


