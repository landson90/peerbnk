import { CollectionCard } from "../../components/collectionCard";
import { DebtorCard } from "../../components/debtorCard";
import { LayoutView } from "../layout.view";

export function DetailsView() {
  return (
    <LayoutView>
      <div className="flex justify-around">
        <DebtorCard />
        <CollectionCard />
      </div>

      <div>
        <h1>tabela</h1>
      </div>
    </LayoutView>
  );
}
