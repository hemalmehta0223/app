import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { ViewAgendaOutlined } from "@material-ui/icons";
import { Pencil } from "heroicons-react";
import { useState } from "react";
import NumberFormat from "react-number-format";
import billTypeData from "../../__mocks__/billTypeData";
import epoData from "../../__mocks__/epoData";

const Row = ({ row, index }) => {
  return (
    <TableRow key={row.id}>
      <TableCell align="center">{index + 1}</TableCell>
      <TableCell align="center">
        {billTypeData.find((x) => x.id === row.billTypeId).name}
      </TableCell>
      <TableCell align="center">
        {epoData.find((x) => x.id === row.sourceBillTypeId).loanNumber}
      </TableCell>
      <TableCell align="center">{row.receivedDate}</TableCell>
      <TableCell align="center">
        <NumberFormat
          value={row.amount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          decimalSeparator="."
          thousandsGroupStyle="thousand"
          decimalScale={2}
          fixedDecimalScale={true}
        />
      </TableCell>
      <TableCell align="center">{row.checkNumber}</TableCell>
      <TableCell align="center">{row.wireRefNumber}</TableCell>
      <TableCell align="center">{row.comments}</TableCell>
      <TableCell align="center">
        <IconButton
          size="small"
          href={`/app/paymentadjustments/payments/${row.id}/edit`}
        >
          <Pencil size="20" />
        </IconButton>
        <IconButton
          size="small"
          href={`/app/billtypes/${
            billTypeData.find((x) => x.id === row.billTypeId).shortName
          }/${row.sourceBillTypeId}/edit`}
        >
          <ViewAgendaOutlined size="20" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const PaymentList = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">Bill Type</TableCell>
            <TableCell align="center">Loan Number</TableCell>
            <TableCell align="center">Received Date</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Check #</TableCell>
            <TableCell align="center">Wire Ref</TableCell>
            <TableCell align="center">Comments</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <Row key={item.id} row={item} index={index} />
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={5}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default PaymentList;
