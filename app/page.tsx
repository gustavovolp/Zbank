import { Footer } from "./Componentes/Footer";
import { Header } from "./Componentes/Header";
import { MovimentacaoBancaria } from "./Componentes/MovimentacaoBancaria";
import { Navegation } from "./Componentes/Navegation";
import { Transacos } from "./dados/transacao";

export default function Home() {
  return (
    <div >
      <div className="flex container mx-auto">
        <Navegation />
      <div className="container mx-auto items-center justify-center self-center">
      <main className="flex-col items-center  text-center min-h-screen">
        <MovimentacaoBancaria transationes={ Transacos } />
      </main>
    </div>
    </div>
    </div>
  );
}
