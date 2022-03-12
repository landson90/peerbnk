import { LayoutView } from "../view/layout.view";

export function DetailsPage() {
  return (
    <LayoutView>
      <div className="flex justify-around">
        <div className="bg-white h-44 w-72 rounded flex flex-col justify-around p-3">
          <header>
            <h5>Detalhes do(a) devedor(a)</h5>
          </header>
          <section className="flex flex-col gap-1 text-lg leading-6">
            <div className="mb-2">
              <p className="text-xs text-gray-400">Nome</p>
              <p className="text-sm ">Landson Randel</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">CPF/CNPJ</p>
              <p className="text-sm ">095.005.834-37</p>
            </div>
          </section>
        </div>
        <div>
          <div className="bg-white h-44 w-72 rounded flex flex-col justify-around p-3">
            <header>
              <h5>Detalhes do(a) devedor(a)</h5>
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
                <p className="text-xs text-gray-400">
                  Data de criação da cobrança
                </p>
                <p className="text-sm ">08/12/2021 às 9:45:04</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div>
        <h1>tabela</h1>
      </div>
    </LayoutView>
  );
}
