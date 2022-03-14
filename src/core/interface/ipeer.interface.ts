export interface IQrCodes {
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
