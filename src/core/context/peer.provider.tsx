import { createContext, ReactNode, useEffect, useState } from "react";
import { IDebtor } from "../interface/debtor.interface";
import { IQrCodes } from "../interface/ipeer.interface";
import Peerbnk from "../service/peerbnk.service";

interface IPeerProvider {
  children: ReactNode;
}

interface PeerContextData {
  qrCodes: IQrCodes[];
  isActiveDetails: boolean;
  debtor: IDebtor;
  isActiveCardDetails: (isActive: boolean) => Promise<void>;
  searchDorDetails: (id: string) => Promise<void>;
}

export const PeerContext = createContext<PeerContextData>(
  {} as PeerContextData
);

export function PeerProvider({ children }: IPeerProvider) {
  const [qrCodes, setQrCodes] = useState<IQrCodes[]>([]);
  const [isActiveDetails, setIsActiveDetails] = useState<boolean>(false);
  const [debtor, setDebtor] = useState<IDebtor>({} as IDebtor);

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

  async function searchDorDetails(id: string) {
    Peerbnk.findByChages(id).then((response) => {
      if (response.data[0].payer) setDebtor(response.data[0].payer);
    });
  }
  return (
    <PeerContext.Provider
      value={{
        qrCodes,
        isActiveDetails,
        isActiveCardDetails,
        debtor,
        searchDorDetails,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
}
