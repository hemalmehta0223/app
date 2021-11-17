import React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import branchListData from "../../__mocks__/branchListData";
import clientData from "../../__mocks__/clientData";
import { ViewComfy } from "@material-ui/icons";
import NumberFormat from "react-number-format";
import StyledLabel from "../common/StyledLabel";

const InvoiceList = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">View Invoice</TableCell>
            <TableCell align="center">Invoice Id</TableCell>
            <TableCell align="center">Branch</TableCell>
            <TableCell align="center">Client</TableCell>
            <TableCell align="center">Contacts</TableCell>
            <TableCell align="right">Outstanding Amount</TableCell>
            <TableCell align="right">New Amount</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={index + 1}>
                <TableCell align="center">
                  <IconButton size="medium">
                    <ViewComfy />
                  </IconButton>
                </TableCell>
                <TableCell align="center">{item.invoiceId}</TableCell>
                <TableCell align="center">
                  {branchListData.find((b) => b.id == item.branchId).name}
                </TableCell>
                <TableCell align="center">
                  {clientData.find((c) => c.id === item.clientId).name}
                </TableCell>
                <TableCell align="right">{item.contacts}</TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={item.outstandingAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalSeparator="."
                    thousandsGroupStyle="thousand"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={item.newAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalSeparator="."
                    thousandsGroupStyle="thousand"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={item.outstandingAmount + item.newAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalSeparator="."
                    thousandsGroupStyle="thousand"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </TableCell>
                <TableCell align="center">
                  <StyledLabel
                    label={item.status}
                    bgColor={
                      item.status === "Pending"
                        ? "rgb(255, 152, 0)"
                        : "rgb(76, 175, 80)"
                    }
                  />
                </TableCell>
              </TableRow>
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

export default InvoiceList;
