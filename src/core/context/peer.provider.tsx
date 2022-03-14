import { createContext, ReactNode, useEffect, useState } from "react";
import { ICollection } from "../interface/collection.interface";
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
  collection: ICollection;
  isActiveCardDetails: (isActive: boolean) => Promise<void>;
  searchDorDetails: (id: string) => Promise<void>;
  searchCollection: (id: string) => Promise<void>;
}

export const PeerContext = createContext<PeerContextData>(
  {} as PeerContextData
);

export function PeerProvider({ children }: IPeerProvider) {
  const [qrCodes, setQrCodes] = useState<IQrCodes[]>([]);
  const [isActiveDetails, setIsActiveDetails] = useState<boolean>(false);
  const [debtor, setDebtor] = useState<IDebtor>({} as IDebtor);
  const [collection, setCollection] = useState<ICollection>({} as ICollection);

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

  async function searchCollection(id: string) {
    Peerbnk.findByChages(id).then((response) => {
      if (response.data[0].payer) setCollection(response.data[0]);
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
        collection,
        searchCollection,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
}
