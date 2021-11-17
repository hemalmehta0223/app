import adjustmentData from "./adjustmentData/adjustmentData";
import paymentData from "./paymentData/paymentData";

const epoData = [
  {
    id: 1,
    clientId: 1,
    billTypeId: 1,
    billingPeriod: "202108",
    channel: 1,
    brand: 1,
    loanNumber: "1100138990",
    submissionDate: "11/20/2021",
    purchaseDate: "10/19/2021",
    amountDue: 31030,
    payoffDate: "12/10/2021",
    status: "Pending",
    comments: "",
    createdBy: "",
    createdDatetime: "09/10/2021 11:33 AM",
    modifiedBy: "",
    modifiedDatetime: "09/10/2021 11:33 AM",
    payments: paymentData.filter(
      (x) => x.sourceBillTypeId === 1 && x.billTypeId === 1
    ),
    adjustments: adjustmentData.filter(
      (x) => x.sourceBillTypeId === 1 && x.billTypeId === 1
    ),
  },
  {
    id: 2,
    clientId: 1,
    billTypeId: 1,
    billingPeriod: "202108",
    channel: 1,
    brand: 1,
    loanNumber: "1101749032",
    submissionDate: "",
    purchaseDate: "06/08/2021",
    amountDue: 5960.94,
    payoffDate: "09/01/2021",
    status: "Billed",
    comments: "",
    createdBy: "CBS Automation",
    createdDatetime: "09/13/2021 11:33 AM",
    modifiedBy: "CBS Automation",
    modifiedDatetime: "09/13/2021 11:33 AM",
    payments: paymentData.filter(
      (x) => x.sourceBillTypeId === 2 && x.billTypeId === 1
    ),
    adjustments: adjustmentData.filter(
      (x) => x.sourceBillTypeId === 2 && x.billTypeId === 1
    ),
  },
  {
    id: 3,
    clientId: 1,
    billTypeId: 1,
    billingPeriod: "202108",
    channel: 1,
    brand: 1,
    loanNumber: "1101369690",
    submissionDate: "",
    purchaseDate: "03/15/2021",
    amountDue: 4790.13,
    payoffDate: "05/28/2021",
    status: "Closed",
    comments: " (Closed by Payment_ID:14382)",
    createdBy: "Connie Hudson",
    createdDatetime: "09/13/2021 11:33 AM",
    modifiedBy: "Connie Hudson",
    modifiedDatetime: "09/13/2021 11:33 AM",
    payments: paymentData.filter(
      (x) => x.sourceBillTypeId === 3 && x.billTypeId === 1
    ),
    adjustments: adjustmentData.filter(
      (x) => x.sourceBillTypeId === 3 && x.billTypeId === 1
    ),
  },
];

export default epoData;
