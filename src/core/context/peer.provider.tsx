import { createContext, ReactNode, useEffect, useState } from "react";
import { IQrCodes } from "../interface/ipeer.interface";
import Peerbnk from "../service/peerbnk.service";

interface IPeerProvider {
  children: ReactNode;
}

interface PeerContextData {
  qrCodes: IQrCodes[];
}

export const PeerContext = createContext<PeerContextData>(
  {} as PeerContextData
);

export function PeerProvider({ children }: IPeerProvider) {
  const [qrCodes, setQrCodes] = useState<IQrCodes[]>([]);

  useEffect(() => {
    Peerbnk.findAllCharges().then((response) => {
      if (response.data) {
        setQrCodes(response.data);
      }
    });
  }, []);

  return (
    <PeerContext.Provider value={{ qrCodes }}>{children}</PeerContext.Provider>
  );
}
