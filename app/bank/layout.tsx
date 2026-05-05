import { Sidebar } from "@/componentes/shared/Sidebar";

export default function BankLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}