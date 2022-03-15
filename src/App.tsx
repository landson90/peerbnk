import { PeerProvider } from "./core/context/peer.provider";
import { HomeView } from "./view/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import { NotFound404Page } from "./pages/Notfound404.page";

function App() {
  return (
    <>
      <PeerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound404Page />} />
          </Routes>
        </BrowserRouter>
        <HomeView />;
      </PeerProvider>
    </>
  );
}

export default App;
