import invoiceListData from "./invoiceListData";

const batchFormData = [
  {
    batchId: 1001,
    period: "202108",
    branches: [1, 2, 3],
    billTypes: {
      epo: true,
      epd: true,
      pairoff: true,
      fundingadj: true,
      taxpen: true,
    },
    invoices: invoiceListData.filter((i) => i.batchId === 1001),
  },
  {
    batchId: 1002,
    period: "202108",
    branches: [1, 2, 3],
    billTypes: {
      epo: true,
      epd: true,
      pairoff: true,
      fundingadj: false,
      taxpen: false,
    },
    invoices: invoiceListData.filter((i) => i.batchId === 1002),
  },
];

export default batchFormData;
