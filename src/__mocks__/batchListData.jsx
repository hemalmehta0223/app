import branchListData from "../__mocks__/branchListData";

const batchListData = [
  {
    batchId: 1001,
    period: 202108,
    branch: branchListData[0].name,
    clientCount: 5,
    invoiceCount: 5,
    outstandingAmount: 100000,
    newAmount: 40000,
    totalAmount: 104000,
    batchStatus: "Pending",
  },
  {
    period: 202108,
    batchId: 1002,
    branch: branchListData[1].name,
    clientCount: 10,
    invoiceCount: 11,
    outstandingAmount: 5000,
    newAmount: 5000,
    totalAmount: 10000,
    batchStatus: "Billed",
  },
  {
    period: 202108,
    batchId: 1003,
    branch: branchListData[2].name,
    clientCount: 4,
    invoiceCount: 5,
    outstandingAmount: 100000,
    newAmount: 40000,
    totalAmount: 104000,
    batchStatus: "Pending",
  },
  {
    period: 202108,
    batchId: 1005,
    branch:
      branchListData[0].name +
      " / " +
      branchListData[1].name +
      " / " +
      branchListData[2].name,
    clientCount: 12,
    invoiceCount: 11,
    outstandingAmount: 545983,
    newAmount: 122343,
    totalAmount: 232390,
    batchStatus: "Pending",
  },

  {
    batchId: 1006,
    period: 202109,
    branch: branchListData[0].name,
    clientCount: 5,
    invoiceCount: 5,
    outstandingAmount: 100000,
    newAmount: 40000,
    totalAmount: 104000,
    batchStatus: "Pending",
  },
  {
    period: 202109,
    batchId: 1007,
    branch: branchListData[1].name,
    clientCount: 10,
    invoiceCount: 11,
    outstandingAmount: 5000,
    newAmount: 5000,
    totalAmount: 10000,
    batchStatus: "Billed",
  },
];

export default batchListData;
