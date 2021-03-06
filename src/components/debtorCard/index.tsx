import { useContext } from "react";
import { PeerContext } from "../../core/context/peer.provider";

export function DebtorCard() {
  const { debtor } = useContext(PeerContext);

  return (
    <div className="bg-white h-44 w-72 rounded flex flex-col justify-around p-3">
      <header>
        <h5>Detalhes do(a) devedor(a)</h5>
      </header>
      <section className="flex flex-col gap-1 text-lg leading-6">
        <div className="mb-2">
          <p className="text-xs text-gray-400">Nome</p>
          <p className="text-sm ">{debtor.name}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">CPF/CNPJ</p>
          <p className="text-sm ">{debtor.documentType}</p>
        </div>
      </section>
    </div>
  );
}
