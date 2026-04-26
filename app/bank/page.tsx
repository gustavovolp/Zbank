import { Navegation } from "@/componentes/Navegation";
import { MovimentacaoBancaria } from "@/componentes/MovimentacaoBancaria";
import { MockTransation } from "@/data/mock-data";

const BankPage = () => {
  return (
    <div>
      <div className="flex container mx-auto">
        <Navegation />
        <div className="container mx-auto items-center justify-center self-center">
          <main className="flex-col items-center  text-center min-h-screen">
            <MovimentacaoBancaria transations={ MockTransation } />
          </main>
        </div>
      </div>
    </div>
  );
}

export default BankPage;