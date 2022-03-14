import { useContext } from "react";
import { HeaderComponent } from "../../components/header";
import { PeerContext } from "../../core/context/peer.provider";
import { DetailsView } from "../Details";
import { HeaderView } from "../Header";
import { LayoutView } from "../layout.view";
import { TableView } from "../Table";

export function HomeView() {
  const { isActiveDetails } = useContext(PeerContext);

  return (
    <LayoutView>
      {isActiveDetails === true ? <DetailsView /> : <HeaderView />}
      <TableView />
    </LayoutView>
  );
}
