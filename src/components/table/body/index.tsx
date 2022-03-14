import { useEffect, useState } from "react";
import Peerbnk from "../../../core/service/peerbnk.service";

interface IQrCodes {
  id: string;
  qrCodeId: string;
  requestAmount: number;
  paidAmount: string;
  type: string;
  createdAt: Date;
  createdBy: string;
  payer: {
    name: string;
    taxIdNumber: number;
    documentType: string;
    city: string;
    codIspb: number;
  };
}

export function TableBody() {
  const [qrCodes, setQrCodes] = useState<IQrCodes[]>([]);
  useEffect(() => {
    Peerbnk.findAllCharges().then((response) => {
      setQrCodes(response.data);
      console.log(qrCodes);
    });
  }, []);

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          <a href="#" className="text-green-600 hover:text-green-900">
            Detalhes
          </a>
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          <a href="#" className="text-green-600 hover:text-green-900">
            Detalhes
          </a>
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          <a href="#" className="text-green-600 hover:text-green-900">
            Detalhes
          </a>
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          <a href="#" className="text-green-600 hover:text-green-900">
            Detalhes
          </a>
        </td>
      </tr>
    </tbody>
  );
}
