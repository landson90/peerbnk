import { CollectionCard } from "../../components/collectionCard";
import { DebtorCard } from "../../components/debtorCard";
import { TableComponent } from "../../components/table";
import { LayoutView } from "../layout.view";

export function DetailsView() {
  return (
    <div className="flex justify-around">
      <DebtorCard />
      <CollectionCard />
    </div>
  );
}
