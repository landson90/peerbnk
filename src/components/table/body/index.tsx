import { useContext, useState } from "react";
import { PeerContext, PeerProvider } from "../../../core/context/peer.provider";
import Peerbnk from "../../../core/service/peerbnk.service";

export function TableBody() {
  const { qrCodes } = useContext(PeerContext);
  console.log(qrCodes);
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {qrCodes.map((q) => {
        return (
          <tr key={q.id}>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              {q.id}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              {q.createdAt}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              {q.requestAmount}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              <a href="#" className="text-green-600 hover:text-green-900">
                Detalhes
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
