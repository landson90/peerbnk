import format from "date-fns/format";
import { useContext, useEffect, useState } from "react";
import { PeerContext } from "../../core/context/peer.provider";

export function CollectionCard() {
  const { collection } = useContext(PeerContext);
  const [dateFormat, setDateFormat] = useState<any>();
  useEffect(() => {
    if (collection != null) {
      setDateFormat(collection.paidAt);
    }
  }, []);
  return (
    <div>
      <div className="bg-white h-40 w-full rounded flex flex-col justify-around p-3">
        <header>
          <h5>Detalhes da cobrança</h5>
        </header>
        <section className="flex flex-col gap-1 text-lg leading-6">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-xs text-gray-400">ID de cobrança</p>
              <p className="text-sm ">{collection.transactionId}</p>
            </div>
            <div className="">
              <p className="text-xs text-gray-400">Usuário gerador</p>
              <p className="text-sm ml-2">-</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400">Data de criação da cobrança</p>
            <p className="text-sm ">{collection.paidAt}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
