import { useContext, useState } from "react";
import { PeerContext, PeerProvider } from "../../../core/context/peer.provider";

export function TableBody() {
  const { qrCodes, isActiveCardDetails, searchDorDetails, searchCollection } =
    useContext(PeerContext);

  function handleClickActive(id: string) {
    isActiveCardDetails(true);
    searchDorDetails(id);
    searchCollection(id);
  }

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {qrCodes.map((q) => {
        return (
          <tr key={q.id}>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              {q.id}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              {new Intl.DateTimeFormat("pt-BR").format(new Date(q.createdAt))}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(q.requestAmount)}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              <a
                onClick={() => handleClickActive(q.qrCodeId)}
                className="text-green-600 hover:text-green-900 cursor-pointer"
              >
                Detalhes
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
