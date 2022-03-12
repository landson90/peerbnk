export function CollectionCard() {
  return (
    <div>
      <div className="bg-white h-44 w-96 rounded flex flex-col justify-around p-3">
        <header>
          <h5>Detalhes da cobrança</h5>
        </header>
        <section className="flex flex-col gap-1 text-lg leading-6">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-xs text-gray-400">ID de cobrança</p>
              <p className="text-sm ">9810hoihj923109</p>
            </div>
            <div className="">
              <p className="text-xs text-gray-400">Usuário gerador</p>
              <p className="text-sm ">-</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400">Data de criação da cobrança</p>
            <p className="text-sm ">08/12/2021 às 9:45:04</p>
          </div>
        </section>
      </div>
    </div>
  );
}
