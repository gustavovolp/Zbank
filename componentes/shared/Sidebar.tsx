'use client';
import { useRouter, usePathname } from 'next/navigation';
import { AppRoutes } from '@/types/routes';

interface SidebarItem {
    label: string;
    rota: AppRoutes;
    icone: React.ReactNode;
}

const itens: SidebarItem[] = [
    {
        label: 'Início',
        rota: '/',
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6-.146.147V14.5a.5.5 0 0 0 .5.5h4v-4h4v4h4a.5.5 0 0 0 .5-.5V7.293l-.146-.147z"/>
            </svg>
        )
    },
    {
        label: 'Bank',
        rota: '/bank',
        icone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>
        )
    },
];

export const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <aside className="flex flex-col w-48 min-h-screen border-r border-zinc-200 dark:border-zinc-700 px-3 py-6 gap-1">
            <span className="font-orbitron text-primary text-2xl px-2 mb-4">Zbank</span>
            {itens.map((item) => (
                <button
                    key={item.rota}
                    onClick={() => router.push(item.rota)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                        ${pathname === item.rota
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                >
                    {item.icone}
                    {item.label}
                </button>
            ))}
        </aside>
    );
};