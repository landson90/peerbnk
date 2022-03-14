import { PeerProvider } from "./core/context/peer.provider";
import { HomeView } from "./view/Home";

function App() {
  return (
    <PeerProvider>
      <HomeView />;
    </PeerProvider>
  );
}

export default App;
