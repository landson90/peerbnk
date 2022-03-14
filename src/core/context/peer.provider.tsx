import { createContext, ReactNode, useEffect, useState } from "react";
import { IQrCodes } from "../interface/ipeer.interface";
import Peerbnk from "../service/peerbnk.service";

interface IPeerProvider {
  children: ReactNode;
}

interface PeerContextData {
  qrCodes: IQrCodes[];
  isActiveDetails: boolean;
  isActiveCardDetails: (isActive: boolean) => Promise<void>;
}

export const PeerContext = createContext<PeerContextData>(
  {} as PeerContextData
);

export function PeerProvider({ children }: IPeerProvider) {
  const [qrCodes, setQrCodes] = useState<IQrCodes[]>([]);
  const [isActiveDetails, setIsActiveDetails] = useState<boolean>(false);

  useEffect(() => {
    Peerbnk.findAllCharges().then((response) => {
      if (response.data) {
        setQrCodes(response.data);
      }
    });
  }, []);

  async function isActiveCardDetails(isActive: boolean) {
    setIsActiveDetails(isActive);
  }

  return (
    <PeerContext.Provider
      value={{ qrCodes, isActiveDetails, isActiveCardDetails }}
    >
      {children}
    </PeerContext.Provider>
  );
}
