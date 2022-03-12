import { HeaderComponent } from "../../components/header";
import { DetailsView } from "../Details";
import { LayoutView } from "../layout.view";
import { TableView } from "../Table";

export function HomeView() {
  return (
    <LayoutView>
      <DetailsView />
      <div className="bg-white  shadow rounded-md p-2">
        <HeaderComponent />
      </div>
      <TableView />
    </LayoutView>
  );
}
