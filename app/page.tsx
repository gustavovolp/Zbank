import { BtnFormPrimary } from '@/componentes/button/buttonFormPrimary';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-4">
          <div>
            <h1 className="text-5xl font-orbitron text-primary  tracking-widest">
                Zbank
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base max-w">
                Gerencie suas finanças de forma simples e rápida.
            </p>

          </div>
            <Link
                href="/bank">
                  <BtnFormPrimary>
                    Acessar conta
                  </BtnFormPrimary>
            </Link>
        </main>
    );
}